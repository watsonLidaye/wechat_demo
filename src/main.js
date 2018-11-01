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


const router = new VueRouter({
  // mode: 'history',
  // scrollBehavior(to, from, savedPosition) {},
  routes
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.pageTitle
  next()
})

router.afterEach((to, from) => {

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