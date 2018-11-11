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
          <!--  -->
          <div class="account_item bg_grey mb30">
            <div class="flex_h_between flex_v_center">
              <span class="account_title color_grey">账户余额</span>
              <div class="color_fff ft24">明细<img src="./image/arrow_white@2x.png"
                     alt=""
                     class="icon_arrow"></div>
            </div>
            <div class="account_balance_wrap mb15">
              <div class="account_balance color_fff">500.00</div><span class="ft32 color_fff">元</span>
            </div>
            <div class="ft24 color_fff ">
              <span>累计奖金: 5,000.00元</span><span class="ml60">待返现: 5,000.00元</span>
            </div>
          </div>
          <!--  -->
          <div class="account_item bg_golden">
            <div class="flex_h_between flex_v_center">
              <span class="account_title color_golden">可用金额</span>
              <div class="color_brown ft24">明细<img src="./image/arrow_gold@2x.png"
                     alt=""
                     class="icon_arrow"></div>
            </div>
            <div class="account_balance_wrap mb15">
              <div class="account_balance color_brown">500.00</div><span class="ft32 color_brown">元</span>
            </div>
            <div class="ft24 color_brown ">
              <span>账户额度: 5,000.00元</span><span class="ml60">已借金额: 5,000.00元</span>
            </div>
          </div>
          <!--  -->
          <div class="account_op">
            <div class="account_op_item">
              <div class="ft32 color_333">提现</div>
              <img src="./image/arrow_2@2x.png"
                   alt=""
                   class="icon_arrow">
            </div>
            <div class="account_op_item">
              <div class="ft32 color_333">账户资料设置</div>
              <img src="./image/arrow_2@2x.png"
                   alt=""
                   class="icon_arrow">
            </div>
          </div>
        </div>
        <!-- cash_advance -->
        <div class="dark_screen">
          <div class="screen_box hidden">
            <h3 class="screen_title">提现</h3>
            <div class="screen_form">
              <input type="number"
                     placeholder="请输入提现金额"
                     class="cash_input"
                     :value="cash_val">
              <div class="next_step_btn">下一步</div>
            </div>
          </div>
          <div class="screen_box hidden">
            <h3 class="screen_title">借钱</h3>
            <div class="screen_form">
              <input type="number"
                     placeholder="请输入提现金额"
                     class="cash_input"
                     :value="cash_val">
              <div class="next_step_btn">下一步</div>
            </div>
          </div>
          <div class="screen_box">
            <h3 class="screen_title">请确认以下信息</h3>
            <div class="screen_form">
              <input type="number"
                     placeholder="请输入提现金额"
                     class="cash_input"
                     :value="cash_val">
              <div class="next_step_btn">下一步</div>
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
    return {
      cash_val: 0
    }
  },
  created () { },
  mounted () {
  },
  methods: {},
  computed: {

  },
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>