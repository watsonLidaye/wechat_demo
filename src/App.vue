<style>
@import './assets/css/cssrest.css';
@import './assets/css/public.css';
@import './assets/css/commons.css';

.app {
  font-family: 'PingFang SC';
  font-family: 'DIN';
}
.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateX(50px);
  opacity: 0;
}
.header_info {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
<template>
  <div id="app"
       class="app">
    <transition name="slide-fade"
                mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      login_success: true
    }
  },
  created(){
  },
  mounted(){
    $http.get($utill.api.url + $utill.api.api.jssdk+'?url='+encodeURIComponent(location.href.split('#')[0])).then((res) => {
       Lockr.set('appId',res.data.data.appId)
      if (res.data.code == 1) {
        this.wxconfig.config({debug: true,
            appId: res.data.data.appId, // 必填，公众号的唯一标识
            timestamp:res.data.data.timestamp , // 必填，生成签名的时间戳
            nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.data.signature,// 必填，签名，见附录1
            jsApiList:res.data.data.jsApiList, // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })//通过config接口注入权限验证配置
      }
       this.login()
    }).catch((res) => {

    })
  },
  methods:{
    login(){
      if ( Lockr.get('token')) {
        return false
      } else {
        let data = {}
        data.code = location.href.split('code=')[1].split('&')[0]
        $http.post($utill.api.url + $utill.api.api.authorizations,data).then((res) => {
          if (res.data.code == 1) {
            Lockr.set('token',res.data.data.access_token)
            Lockr.set('token_type',res.data.data.token_type)
            let time = {}
            time.expires_in = res.data.data.expires_in
            time.tokenrecode = Date.parse(new Date())
            Lockr.set('time',time)
          } else {
            console.log(res)
            }
          }).catch((res) => {
            console.log(res)
          })
      }
    },

  }
}
</script>

