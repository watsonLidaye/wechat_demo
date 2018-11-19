<template>
  <div>
    <div class="intro_panel">
      <div class="intro_list"
           v-for="(intro_item, intro_index) in introList"
           :key="intro_index">
        <router-link :to="'/introDetail?id='+intro_item.id">
          <!-- 0未入职 1已入职 2已离职 -->
          <div class="intro_item"
               :class="intro_item.status===0?'bg_blue':'bg_red'">
            <div class="color_f8f8f8">
              <div class="mb35">
                <img src="http://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                     alt=""
                     class="intro_avatar">
                <div class="inline_block">
                  <h3 class="ft32 font_weight">{{intro_item.name}}</h3>
                  <span v-if="intro_item.status === 0"
                        class="intro_status color_blue">{{intro_item.status_str}}</span>
                  <span v-if="intro_item.status === 1"
                        class="intro_status color_red">{{intro_item.status_str}}</span>
                </div>
              </div>
              <p class="ft24">入职公司：{{intro_item.company_name}}</p>
            </div>
            <div class="intro_reward color_f8f8f8">
              <div class="reward_num">{{intro_item.reward}}</div>
              <div class="ft24">最高可得</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myIntro',
  data () {
    return {
      introList: [
        {
          id: 28,
          user_id: 62,
          name: '赖磊',
          avatar: 'https://lorempixel.com/200/200/?27781',
          status: 0,
          status_str: '未入职',
          company_name: '太极科技有限公司',
          reward: 286,
          created_at: '2018 - 10 - 10 03: 44: 51',
          worked_at: '2018 - 10 - 20 11: 26: 17',
          quited_at: null
        },
        {
          id: 86,
          user_id: 36,
          name: '梅娜',
          avatar: 'https://lorempixel.com/200/200/?37800',
          status: 1,
          status_str: '已入职',
          company_name: '浦华众城信息有限公司',
          reward: 416,
          created_at: '2018 - 09 - 19 14: 41: 53',
          worked_at: '2018 - 11 - 03 18: 05: 49',
          quited_at: null
        }
      ],
      page: '',
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
          page: ''
        }
      }
      $http.request(options).then(res => {
        // if (this.page == res.data.data.current_page) {
        //   this.introList = res.data.data.data
        // } else {
        //   for (let i in res.data.data.data) {
        //     this.introList.push(res.data.data.data[i])
        //   }
        // }
        // this.last_page = res.data.data.last_page
        // this.loading = false
      }).catch(res => {
        console.log(res)
      })
    },
  },
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>