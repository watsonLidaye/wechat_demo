<template>
  <div>
    <div class="intro_panel">
      <div class="intro_list">
        <router-link to="/introDetail">
          <div class="intro_item bg_red">
            <div class="color_f8f8f8">
              <div class="mb35">
                <img src="http://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                     alt=""
                     class="intro_avatar">
                <div class="inline_block">
                  <h3 class="ft32 font_weight">王五</h3>
                  <span class="intro_status color_red">已入职</span>
                </div>
              </div>
              <p class="ft24">入职公司：富士康</p>
            </div>
            <div class="flex_v_center"><img class="high_price"
                   src="./image/推荐200@2x.png"
                   alt=""></div>
          </div>
        </router-link>
        <router-link to="/introDetail">
          <div class="intro_item bg_blue">
            <div class="color_f8f8f8">
              <div class="mb35">
                <img src="http://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                     alt=""
                     class="intro_avatar">
                <div class="inline_block">
                  <h3 class="ft32 font_weight">王五</h3>
                  <span class="intro_status color_blue">已入职</span>
                </div>
              </div>
              <p class="ft24">入职公司：富士康</p>
            </div>
            <div class="flex_v_center"><img class="high_price"
                   src="./image/推荐200@2x.png"
                   alt=""></div>
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
    return {}
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
        console.log(res)
        // if (this.page == 1) {
        //   this.list = res.data.data.data
        //   console.log(this.list)
        // } else {
        //   for (let i in res.data.data.data) {
        //     this.list.push(res.data.data.data[i])
        //   }
        // }
        // this.last_page = res.data.data.last_page
        // this.loading = false
      }).catch(res => {
        // console.log(res)
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