import Vue from 'vue'
export default (function() {
  // 数字装字符串
  Vue.filter('numToString', function(value) {
    const string = value.toString()
    return string
  })
  Vue.filter('NumFormat', function(value) {
    var intPart = value + '.00' //获取整数部分
    return intPart
  })
})()
