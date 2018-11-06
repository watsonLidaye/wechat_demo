<template>
  <div>
    <div class="account_panel">
      <div class="account_wrap">
        <div class="account_hd"><img src="https://avatars2.githubusercontent.com/u/39576364?s=460&v=4"
               alt=""
               class="avatar">
          <div class="user_name">user_name</div>
        </div>
        <div class="account_main">
          <div class="account_item bg_grey">
            <div class="flex_h_between flex_v_center">
              <span class="account_title color_grey">账户余额</span>
              <div class="color_fff ft24">明细<img src="./image/arrow_white@2x.png"
                     alt=""
                     class="icon_arrow"></div>
            </div>
            <div class="account_balance_wrap">
              <span class="account_balance">500.00</span><span class="ft32 color_fff">元</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myAccount',
  data () {
    return {}
  },
  created () { },
  mounted () { },
  methods: {},
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>