<template>
  <div>
    <div class="borrow_panel margin_center"
         :style="{'min-height':fullHeight+'px'}">
      <div class="borrow_hd mb25 pl35 pr35 box_border bg_fff">
        <div><span class="ft40 color_333">{{user_info.name}}</span>
          <img v-if="user_info.sex === 1"
               class="icon_sex ml15"
               src="./image/ico_nan@2x.png">
          <img v-else
               class="icon_sex ml15"
               src="./image/ico_nv@2x.png">
        </div>
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
            <input v-model="borrow_remark"
                   placeholder="请输入借款用途">
          </div>
          <div class="flex flex_h_between flex_1 pt40 pb40 ft32 border_e2e2e2 box_border">
            <span class="color_333">开户银行</span>
            <span class="color_999">{{bank_name}}</span>
          </div>
          <div class="flex flex_h_between flex_1 pt40 pb40 ft32 box_border">
            <span class="color_333">银行卡号</span>
            <span class="color_999">{{user_info.bank_card}}</span>
          </div>
        </div>
      </div>
      <div class="next_btn"
           @click="borrowMoney">下一步</div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import bankList from '@/assets/js/mock/bank.json'
export default {
  name: 'myBorrow',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      amount: 0,
      borrow_remark: '',
      bank_name: '',
      user_info: Lockr.get('user_info')
    }
  },
  created () { },
  mounted () {
    this.showingBankName()
  },
  methods: {
    showingBankName () {
      for (let i in bankList) {
        if (bankList[i].value === this.user_info.bank_code) {
          this.bank_name = bankList[i].label
        }
      }
    },
    borrowMoney () {
      let _this = this
      let options = {
        method: 'POST',
        url: $utill.api.url + 'api/users/borrow',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          amount: _this.amount,
          borrow_remark: _this.borrow_remark
        }
      }
      $http.request(options).then(res => {
        this.$router.push({ name: 'borrowSubmit' })
      }).catch(res => {
        Toast({
          message: res.response.data.msg,
          position: 'bottom',
          duration: 5000
        })
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