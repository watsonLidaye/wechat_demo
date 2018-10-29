//  接口服务
// var store = require('@/vuex/store').default.state
// var config = require('../config').default
import config from '../config'
import store from '@/vuex/store'
import common from '../common'

//  域名
var https = 'debug'
var url = (function() {
  let urls = ''
  if (https == 'master') {
    urls = ''
  } else {
    urls = ''
  }
  return urls
})()

var api = {

}

export default {
  url,
  api
}