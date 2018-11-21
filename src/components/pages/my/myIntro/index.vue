<template>
  <div>
    <div class="intro_panel"
         :style="{'min-height':fullHeight+'px'}">
      <div class="intro_list"
           v-for="(intro_item, intro_index) in list"
           :key="intro_index">
        <!-- 0 none -->
        <div class="intro_item bg_grey"
             v-if="intro_item.status===0"
             @click="checkStatus(intro_item,intro_index)">
          <div class="color_f8f8f8">
            <div class="mb35">
              <img src="http://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                   alt=""
                   class="intro_avatar">
              <div class="inline_block">
                <h3 class="ft32 font_weight">{{intro_item.name}}</h3>
                <span class="intro_status color_grey">{{intro_item.status_str}}</span>
              </div>
            </div>
            <p class="ft24">入职公司：{{intro_item.company_name}}</p>
          </div>
          <div class="intro_reward color_f8f8f8">
            <div class="reward_num">{{intro_item.reward}}</div>
            <div class="ft24">最高可得</div>
          </div>
        </div>
        <!-- 1 check-in -->
        <div class="intro_item bg_red"
             v-if="intro_item.status===1"
             @click="checkStatus(intro_item,intro_index)">
          <div class="color_f8f8f8">
            <div class="mb35">
              <img src="http://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                   alt=""
                   class="intro_avatar">
              <div class="inline_block">
                <h3 class="ft32 font_weight">{{intro_item.name}}</h3>
                <span class="intro_status color_red">{{intro_item.status_str}}</span>
              </div>
            </div>
            <p class="ft24">入职公司：{{intro_item.company_name}}</p>
          </div>
          <div class="intro_reward color_f8f8f8">
            <div class="reward_num">{{intro_item.reward}}</div>
            <div class="ft24">最高可得</div>
          </div>
        </div>
        <!-- 2 leave -->
        <div class="intro_item bg_blue"
             v-if="intro_item.status===2"
             @click="checkStatus(intro_item,intro_index)">
          <div class="color_f8f8f8">
            <div class="mb35">
              <img src="http://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                   alt=""
                   class="intro_avatar">
              <div class="inline_block">
                <h3 class="ft32 font_weight">{{intro_item.name}}</h3>
                <span class="intro_status color_blue">{{intro_item.status_str}}</span>
              </div>
            </div>
            <p class="ft24">入职公司：{{intro_item.company_name}}</p>
          </div>
          <div class="intro_reward color_f8f8f8">
            <div class="reward_num">{{intro_item.reward}}</div>
            <div class="ft24">最高可得</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myIntro',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      list: [],
      page: 1,
      last_page: '',
      loading: ''
    }
  },
  created () { },
  mounted () {
    this.pageGet()
  },
  methods: {
    pageGet () {
      let _this = this
      let options = {
        method: 'get',
        url: $utill.api.url + 'api/users/recommendation',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          page: _this.page
        }
      }
      $http.request(options).then(res => {
        if (this.page == res.data.data.current_page) {
          this.list = res.data.data.data
        } else {
          for (let i in res.data.data.data) {
            this.list.push(res.data.data.data[i])
          }
        }
        this.last_page = res.data.data.last_page
        this.loading = false
      }).catch(res => {
        console.log(res)
      })
    },
    checkStatus (intro_item, intro_index) {
      // console.log(intro_item, intro_index)
      this.$router.push({
        name: 'introDetail',
        params: intro_item
      })
    }
  },
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>