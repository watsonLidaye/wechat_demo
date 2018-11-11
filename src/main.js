// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
import Lockr from 'Lockr'
import axios from 'axios'
import moment from 'moment'
import utill from './assets/js/util.js'
import store from './vuex/store'
import filter from './assets/js/utils/fitter.js'
import echarts from 'echarts'
import '@/assets/css/cssrest.css'
import '@/assets/css/public.css'
import '@/assets/css/commons.css'
import '@/assets/js/public.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import wx from 'weixin-js-sdk'


const router = new VueRouter({
  mode: 'history',
  // scrollBehavior(to, from, savedPosition) {},
  routes
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.pageTitle
  next()
})

router.afterEach((to, from) => {
  wx.ready(function() {
    // wx.hideMenuItems({
    //   menuList: ['menuItem:copyUrl'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    // })
    // wx.showMenuItems({
    //   menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline', 'menuItem:addContact'] // 要显示的菜单项，所有menu项见附录3
    // })
    console.log(to)
    let link = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx87e20aec5c6a0954&redirect_uri=http:://recruit.ztsdjy.com${to.path}&res&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
    wx.onMenuShareAppMessage({
      title: document.title, // 分享标题
      desc: document.title, // 分享描述
      link: link,
      // imgUrl: imgUrl, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      success: function() {

        // 用户确认分享后执行的回调函数
      },
      cancel: function() {

        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareTimeline({
      title: document.title, // 分享标题
      link: link,
      // imgUrl: imgUrl, // 分享图标
      success: function() {

      },
      cancel: function() {}
    })
  })
  wx.error(function(res) {
    console.log(res)
  })
})

axios.defaults.timeout = 1000 * 15
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

Vue.use(Element)
Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(Lockr)
Vue.use(Mint)
Vue.prototype.axios = axios


window.$http = axios
window.$utill = utill
Vue.prototype.$utill = utill
window.$store = store
window.router = router
window.moment = moment
window.Lockr = Lockr
Vue.prototype.$echarts = echarts
Vue.prototype.wxconfig = wx

const bus = new Vue()
window.bus = bus

Vue.config.productionTip = true
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: router,
  components: {
    App
  },
  template: '<App/>',
  filters: filter
}).$mount('#app')
//进入页面的通用方法