<template>
  <div>
    <div class="borrow_panel margin_center"
         :style="{'min-height':fullHeight+'px'}">
      <div class="borrow_hd mb25 pl35 pr35 box_border bg_fff">
        <div><span class="ft40 color_333">{{user_info.name}}</span><img src="./image/ico_nan@2x.png"
               class="icon_sex ml15"></div>
        <div><img class="icon_card inline_block"
               src="./image/idcard@2x.png"
               alt=""><span class="ml20 ft32 color_999">{{user_info.idcard}}</span></div>
      </div>
      <div class="borrow_main">
        <div class="borrow_inputer relative mb25 bg_fff">
          <div class="border_e2e2e2 flex flex_v_center flex_nowrap">
            <span class="icon_cny">¥</span>
            <input class="borrow_input w_100"
                   type="number"
                   min="10"
                   max="1000"
                   v-model="amount"
                   placeholder="借款金额(100-1000)">
          </div>
        </div>
        <div class="borrow_info pl35 pr35 box_border bg_fff">
          <div class="flex flex_h_between flex_1 pt40 pb40 ft32 border_e2e2e2 box_border">
            <span class="color_333">借款用途</span>
            <span class="color_333">{{borrow_remark}}</span>
          </div>
          <div class="flex flex_h_between flex_1 pt40 pb40 ft32 border_e2e2e2 box_border">
            <span class="color_333">开户银行</span>
            <span class="color_999">{{user_info.bank_code}}</span>
          </div>
          <div class="flex flex_h_between flex_1 pt40 pb40 ft32 box_border">
            <span class="color_333">银行卡号</span>
            <span class="color_999">{{user_info.bank_card}}</span>
          </div>
        </div>
      </div>
      <router-link to="/borrowSubmit">
        <div class="next_btn">下一步</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myBorrow',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      amount: 10,
      borrow_remark: '日常消费',
      user_info: Lockr.get('user_info')
    }
  },
  created () { },
  mounted () { },
  methods: {
    borrowMoney () {
      let _this = this
      let options = {
        method: 'get',
        url: $utill.api.url + 'api/user/borrow',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          amount: _this.amount,
          borrow_remark: _this.borrow_remark
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
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>