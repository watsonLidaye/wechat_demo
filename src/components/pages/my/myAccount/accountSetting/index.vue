<template>
  <div>
    <div class="setting_panel relative"
         :style="{'min-height':fullHeight+'px'}">
      <div class="setting_mian pl35 pr35 box_border">
        <div class="input_wrapper">
          <label for="name"
                 class="color_999 ft24 block">姓名</label>
          <input id="name"
                 v-model="accountInfo.name"
                 placeholder="请输入姓名"
                 class="input_place">
        </div>
        <div class="input_wrapper">
          <label for="openbank"
                 class="color_999 ft24 block">开户银行</label>
          <input id="openbank"
                 v-model="accountInfo.bank_code"
                 placeholder="请输入详细银行名称"
                 class="input_place">
        </div>
        <div class="input_wrapper">
          <label for="banknumber"
                 class="color_999 ft24 block">银行卡号</label>
          <input id="banknumber"
                 v-model="accountInfo.bank_card"
                 placeholder="请输入银行卡号"
                 class="input_place">
        </div>
        <div class="split_line"></div>
        <div class="input_wrapper">
          <label for="phone"
                 class="color_999 ft24 block">手机号码</label>
          <input id="phone"
                 type="number"
                 v-model="accountInfo.phone"
                 placeholder="请输入已绑定银行卡的手机号码"
                 class="input_place">
        </div>
        <div class="input_wrapper">
          <label for="valicode"
                 class="color_999 ft24 block">请输入验证码</label>
          <div class="auth_wrapper">
            <input id="valicode"
                   v-model="accountInfo.verification_code"
                   class="auth_code_input border_e2e2e2">
            <div class="auth_code_btn"
                 :class="timer_second==='获取验证码'?'':'interval'"
                 @click="getAuthCode">{{timer_second}}</div>
          </div>
        </div>
      </div>
      <div class="setting_btn"
           @click="accountSet">保存</div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
export default {
  name: 'accountSetting',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      timer_second: '获取验证码',
      accountInfo: {
        name: '',
        bank_code: '',
        bank_card: '',
        verification_key: '',
        verification_code: ''
      }
    }
  },
  created () { },
  mounted () { },
  methods: {
    getAuthCode () {
      let _this = this
      let timer = null
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
    // 账户设置
    accountSet () {
      let _this = this
      console.log(Lockr.get('token_type') + ' ' + Lockr.get('token'))
      let options = {
        method: 'post',
        url: $utill.api.url + 'api/users/account/bank',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          name: _this.accountInfo.name,
          bank_code: _this.accountInfo.bank_code,
          bank_card: _this.accountInfo.bank_card,
          verification_key: _this.accountInfo.verification_key,
          verification_code: _this.accountInfo.verification_code
        }
      }
      $http.request(options).then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res)
      })
    }
  },
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>