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
      user_info: {},
      tel: ''
    }
  },
  created () { },
  mounted () {
    this.getUser()
    this.getBankList()
  },
  methods: {
    getUser () {
      setTimeout(() => {
        if (Lockr.get('user_info')) {
          this.user_info = Lockr.get('user_info')
        } else {
          this.getUser()
        }
      }, 100)
    },
    getBankList () {
      let that = this
      let options = {
        method: 'get',
        url: $utill.api.url + 'api/common'
      }
      $http.request(options).then(res => {
        if (res.data.code === 1) {
          // 客服电话
          this.tel = 'tel:+' + res.data.data.customerPhone
          // 获取银行信息传入
          this.getBank(res.data.data.bank)
        } else {
          Toast({
            message: res.data.msg,
            position: 'bottom',
            duration: 3000
          })
        }
      }).catch(res => {
        console.log(res)
      })
    },
    getBank (tmpData) {
      // 银行列表
      let bank_list = []
      for (let i in tmpData) {
        let bank_item = {}
        bank_item.key = i
        bank_item.val = tmpData[i]
        bank_list.push(bank_item)
      }
      // 添加到本地
      Lockr.set('bank_list', bank_list)
    }
  },
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>