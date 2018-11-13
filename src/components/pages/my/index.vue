<template>
  <div>
    <!-- panel -->
    <div class="user_panel" :style="{'min-height':fullHeight+'px'}">
      <!-- hd -->
      <div class="user_hd mb15">
        <!-- user -->
        <div class="user_info">
          <div>
            <h3 class="user_name mb25">{{detail.name}}<img v-if="sex === 1"
                   class="icon_30 ml15"
                   src="./image/ico_nan.png"><img v-else
                   class="icon_30 ml15"
                   src="./image/ico_nv.png"></h3>
            <router-link to="/myInfo">
              <p class="mine_info">我的信息<img class="icon_30 ml10"
                     src="./image/_icobj.png"></p>
            </router-link>
          </div>
          <img class="user_avatar"
               v-lazy="detail.avatar">
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
          <div class="operation_item">
            <img class="icon_60 mr25"
                 src="./image/ico_jieqian.png">
            <div class="w_100 operation_item_r border_e2e2e2">
              我要借钱<img class="icon_30"
                   src="./image/arrow_1.png">
            </div>
          </div>
          <div class="operation_item">
            <img class="icon_60 mr25"
                 src="./image/ico_kefu.png">
            <div class="w_100 operation_item_r">
              联系客服<img class="icon_30"
                   src="./image/arrow_1.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      id: '',
      name: 'Leslie Cheung',
      sex: 2,
      headimgurl: 'https://avatars2.githubusercontent.com/u/39576364?s=460&v=4',
      detail:{},
    }
  },
  created () { },
  mounted () {
    $utill.common.checktoken().then(this.pageGet())
  },
  methods: {
    pageGet(){
      let data = {}
      data.page = this.page
       $http.get($utill.api.url + 'api/users',{
        headers:{
          'Authorization':Lockr.get('token_type') + ' ' + Lockr.get('token')
        }
       }).then( res => {
          this.detail = res.data.data
       }).catch(res => {
        console.log(res)
       })
    },
  },
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>