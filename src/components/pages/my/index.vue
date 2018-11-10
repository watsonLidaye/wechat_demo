<template>
  <div>
    <!-- panel -->
    <div class="user_panel">
      <!-- hd -->
      <div class="user_hd mb15">
        <!-- user -->
        <div class="user_info">
          <div>
            <h3 class="user_name mb25">{{name}}<img v-if="sex === 1"
                   class="icon_30 ml15"
                   src="./image/ico_nan@2x.png"><img v-else
                   class="icon_30 ml15"
                   src="./image/ico_nv@2x.png"></h3>
            <router-link to="/myInfo">
              <p class="mine_info">我的信息<img class="icon_30 ml10"
                     src="./image/_icobj@2x.png"></p>
            </router-link>
          </div>
          <img class="user_avatar"
               :src="headimgurl">
        </div>
      </div>
      <!-- mian -->
      <div class="user_main">
        <!-- operation -->
        <div class="user_operation">
          <router-link to="/myWork">
            <div class="operation_item">
              <img class="icon_60 mr25"
                   src="./image/ico_work@2x.png">
              <div class="w_100 operation_item_r border_e2e2e2">
                我的工作<img class="icon_30"
                     src="./image/arrow_1@2x.png">
              </div>
            </div>
          </router-link>
          <router-link to="/myIntro">
            <div class="operation_item">
              <img class="icon_60 mr25"
                   src="./image/ico_tuijian@2x.png">
              <div class="w_100 operation_item_r border_e2e2e2">
                我的推荐<img class="icon_30"
                     src="./image/arrow_1@2x.png">
              </div>
            </div>
          </router-link>
          <router-link to="/myAccount">
            <div class="operation_item mb15">
              <img class="icon_60 mr25"
                   src="./image/ico_zhanghu@2x.png">
              <div class="w_100 operation_item_r">
                我的账户<img class="icon_30"
                     src="./image/arrow_1@2x.png">
              </div>
            </div>
          </router-link>
          <router-link to="/myBorrow">
            <div class="operation_item">
              <img class="icon_60 mr25"
                   src="./image/ico_jieqian@2x.png">
              <div class="w_100 operation_item_r border_e2e2e2">
                我要借钱<img class="icon_30"
                     src="./image/arrow_1@2x.png">
              </div>
            </div>
          </router-link>
          <div class="operation_item">
            <img class="icon_60 mr25"
                 src="./image/ico_kefu@2x.png">
            <div class="w_100 operation_item_r">
              联系客服<img class="icon_30"
                   src="./image/arrow_1@2x.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
export default {
  name: 'my',
  data () {
    return {
      id: '',
      name: 'Leslie Cheung',
      sex: 2,
      headimgurl: 'https://avatars2.githubusercontent.com/u/39576364?s=460&v=4'
    }
  },
  created () { },
  mounted () {
    // console.log(this.$route)
    // this.$router.push({
    //   path: '/mine/mineInfo'
    // })
  },
  methods: {},
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>