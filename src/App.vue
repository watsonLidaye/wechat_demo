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

}
</script>

