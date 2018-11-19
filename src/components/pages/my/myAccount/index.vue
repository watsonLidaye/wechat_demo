<template>
  <div>
    <div class="account_panel"
         :style="{'min-height':fullHeight+'px'}">
      <div class="account_wrap">
        <div class="account_hd"><img src="https://avatars2.githubusercontent.com/u/39576364?s=460&v=4"
               alt=""
               class="avatar">
          <div class="user_name">user_name</div>
        </div>
        <div class="account_main">
          <!--  -->
          <div class="account_item bg_grey mb30">
            <div class="flex flex_h_between flex_v_center">
              <span class="account_title color_grey">账户余额</span>
              <div class="color_fff ft24">明细<img src="./image/arrow_white@2x.png"
                     class="icon_arrow"></div>
            </div>
            <div class="account_balance_wrap">
              <div class="account_balance color_fff">500.00</div><span class="ft32 color_fff">元</span>
            </div>
            <div class="ft24 color_fff flex flex_v_center pt15 box_border">
              <span>累计奖金:5,000.00元</span><span class="ml60">待返现:5,000.00元</span>
            </div>
          </div>
          <!--  -->
          <div class="account_item bg_golden">
            <div class="flex flex_h_between flex_v_center">
              <span class="account_title color_golden">可用金额</span>
              <div class="color_brown ft24">明细<img src="./image/arrow_gold@2x.png"
                     class="icon_arrow"></div>
            </div>
            <div class="account_balance_wrap">
              <div class="account_balance color_brown">500.00</div><span class="ft32 color_brown">元</span>
            </div>
            <div class="ft24 color_brown flex flex_v_center pt15 box_border">
              <span>账户额度:5,000.00元</span><span class="ml60">已借金额:5,000.00元</span>
            </div>
          </div>
          <!--  -->
          <div class="account_op">
            <div class="account_op_item"
                 @click="withdraw_visible =true">
              <div class="ft32 color_333">提现</div>
              <img src="./image/arrow_2@2x.png"
                   alt=""
                   class="icon_arrow">
            </div>
            <router-link to="/accountSetting">
              <div class="account_op_item">
                <div class="ft32 color_333">账户资料设置</div>
                <img src="./image/arrow_2@2x.png"
                     alt=""
                     class="icon_arrow">
              </div>
            </router-link>
          </div>
        </div>
        <!-- cash_advance -->
        <div class="dark_screen"
             v-if="withdraw_visible">
          <div class="withdraw_box"
               v-if="withdraw_step === 1">
            <h3 class="withdraw_title">提现</h3>
            <div class="withdraw_form">
              <input type="number"
                     placeholder="请输入提现金额"
                     class="withdraw_price"
                     v-model="money">
              <div class="next_step_btn"
                   @click="withdraw_step = 2">下一步</div>
            </div>
          </div>
          <!--  -->
          <div class="confirm_panel"
               v-if="withdraw_step === 2">
            <h3 class="confirm_title">提现</h3>
            <div class="input_wrapper">
              <p class="ft24 color_999 mb15">本次提现金额：</p>
              <p class="ft32 color_333">{{money}}</p>
            </div>
            <div class="input_wrapper">
              <p class="ft24 color_999 mb15">开户姓名：</p>
              <p class="ft32 color_333">{{userInfo.name}}</p>
            </div>
            <div class="input_wrapper">
              <p class="ft24 color_999 mb15">开户银行：</p>
              <p class="ft32 color_333">{{userInfo.bank_code}}</p>
            </div>
            <div class="input_wrapper">
              <p class="ft24 color_999 mb15">银行账号：</p>
              <p class="ft32 color_333">{{userInfo.bank_card}}</p>
            </div>
            <div class="input_wrapper">
              <p class="ft24 color_999 mb15">手机号码：</p>
              <p class="ft32 color_333">{{userInfo.phone}}</p>
            </div>
            <div class="input_wrapper ">
              <label for="valicode"
                     class="color_999 ft24 block">请输入验证码</label>
              <div class="auth_wrapper">
                <input id="valicode"
                       type="text"
                       v-model="verification_code"
                       class="auth_code_input border_e2e2e2">
                <div class="auth_code_btn"
                     :class="timer_second==='获取验证码'?'':'interval'"
                     @click="getAuthCode">{{timer_second}}</div>
              </div>
            </div>
            <div class="confirm_control flex flex_v_center flex_h_between">
              <div class="back_btn"
                   @click="withdraw_step =1">上一步</div>
              <div class="confirm_btn"
                   @click="drawMoney">确认</div>
            </div>
          </div>
          <!--  -->
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
      fullHeight: document.documentElement.clientHeight,
      money: 0,
      timer_second: '获取验证码',
      withdraw_visible: false,
      withdraw_step: 1,
      userInfo: {},
      verification_key: '',
      verification_code: ''
    }
  },
  created () { },
  mounted () {
    $utill.common.checktoken().then(this.pageGet())
  },
  methods: {
    // 获取用户信息
    pageGet () {
      let _this = this
      let options = {
        method: 'get',
        url: $utill.api.url + 'api/users',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        }
      }
      $http.request(options).then(res => {
        _this.userInfo = res.data.data
        console.log(_this.userInfo)
      }).catch(res => {
      })
    },
    // 用户账户信息，金额等
    getUserInfo () {
      let _this = this
      let options = {
        method: 'get',
        url: $utill.api.url + 'api/users/account',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        }
      }
      $http.request(options).then(res => {
        console.log(res)
      }).catch(res => {
      })
    },
    getAuthCode () {
      let _this = this
      let options = {
        method: 'post',
        url: $utill.api.url + 'api/verificationCodes',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          phone: _this.accountInfo.phone
        }
      }
      let timer = null
      if (this.timer_second === '获取验证码') {
        this.timer_second = 60
        $http.request(options).then(res => {
          _this.accountInfo.verification_key = res.data.data.key
        }).catch(res => {
          console.log(res)
        })
        timer = setInterval(() => {
          this.timer_second--
          if (this.timer_second === 0) {
            clearInterval(timer)
            console.log('run 次数')
            this.timer_second = '获取验证码'
          }
        }, 1000)
      }
    },
    drawMoney () {
      let _this = this
      let options = {
        method: 'post',
        url: $utill.api.url + 'api/user/withdraw',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          amount: _this.money,
          name: _this.userInfo.name,
          bank_code: _this.userInfo.bank_code,
          bank_card: _this.userInfo.bank_card,
          verification_key: _this.verification_key,
          verification_code: _this.verification_code
        }
      }
      $http.request(options).then(res => {
        console.log(res)
        this.withdraw_visible = false
      }).catch(res => {
        console.log(res)
      })
    }
  },
  computed: {

  },
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>