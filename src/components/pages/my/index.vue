<template>
  <div>
    <!-- panel -->
    <div class="user_panel"
         :style="{'min-height':fullHeight+'px'}">
      <!-- hd -->
      <div class="user_hd mb15">
        <!-- user -->
        <div class="user_info">
          <div>
            <div class="user_name mb25">{{user_info.name}}
              <img v-if="user_info.sex === 1"
                   class="icon_30 ml15"
                   src="./image/ico_nan.png">
              <img v-else
                   class="icon_30 ml15"
                   src="./image/ico_nv.png">
            </div>
            <router-link to="/myInfo">
              <p class="mine_info">我的信息<img class="icon_30 ml10"
                     src="./image/_icobj.png"></p>
            </router-link>
          </div>
          <img class="user_avatar"
               v-lazy="user_info.avatar">
        </div>
      </div>
      <!-- mian -->
      <div class="user_main">
        <!-- operation -->
        <div class="user_operation">
          <router-link to="/myWork">
            <div class="operation_item">
              <img class="icon_60 mr25"
                   src="./image/ico_work.png">
              <div class="w_100 operation_item_r border_e2e2e2">
                我的工作<img class="icon_30"
                     src="./image/arrow_1.png">
              </div>
            </div>
          </router-link>
          <router-link to="/myIntro">
            <div class="operation_item">
              <img class="icon_60 mr25"
                   src="./image/ico_tuijian.png">
              <div class="w_100 operation_item_r border_e2e2e2">
                我的推荐<img class="icon_30"
                     src="./image/arrow_1.png">
              </div>
            </div>
          </router-link>
          <router-link to="/myAccount">
            <div class="operation_item mb15">
              <img class="icon_60 mr25"
                   src="./image/ico_zhanghu.png">
              <div class="w_100 operation_item_r">
                我的账户<img class="icon_30"
                     src="./image/arrow_1.png">
              </div>
            </div>
          </router-link>
          <router-link to="/myBorrow">
            <div class="operation_item">
              <img class="icon_60 mr25"
                   src="./image/ico_jieqian.png">
              <div class="w_100 operation_item_r border_e2e2e2">
                我要借钱<img class="icon_30"
                     src="./image/arrow_1.png">
              </div>
            </div>
          </router-link>
          <a :href="tel"
             class="operation_item">
            <img class="icon_60 mr25"
                 src="./image/ico_kefu.png">
            <div class="w_100 operation_item_r">
              联系客服<img class="icon_30"
                   src="./image/arrow_1.png">
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'my',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      user_info: Lockr.get('user_info'),
      tel: ''
    }
  },
  created () { },
  mounted () {
    this.getBankList()
  },
  methods: {
    getBankList () {
      let _this = this
      let options = {
        method: 'get',
        url: $utill.api.url + 'api/common',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        }
      }
      $http.request(options).then(res => {
        this.tel = 'tel:+' + res.data.data.customerPhone
        Lockr.set('bank_info', res.data.data)
        console.log(res.data.data.bank)
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