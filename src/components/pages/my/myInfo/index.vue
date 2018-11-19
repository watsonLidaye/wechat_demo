<template>
  <div>
    <div class="info_panel">
      <div class="info_hd">
        <div class="hd_avatar">
          <img :src="userInfo.avatar"
               class="avatar">
          <img src="./image/ico_bj_blue@2x.png"
               class="icon_edit">
        </div>
        <div class="name">{{userInfo.name}}</div>
      </div>
      <div class="info_main">
        <div class="input_wrap">
          <label class="block input_label">姓名</label>
          <input class="input_val w_100"
                 v-model="userInfo.name"
                 type="text"
                 placeholder="请输入你的姓名">
        </div>
        <div class="input_wrap">
          <label class="block input_label">年龄</label>
          <input class="input_val w_100"
                 type="text"
                 v-model="userInfo.age"
                 placeholder="请输入你的年龄">
        </div>
        <div class="input_wrap border_e2e2e2">
          <label class="block input_label">性别</label>
          <el-radio-group class="input_val"
                          v-model="userInfo.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </div>
        <div class="input_wrap">
          <label class="block input_label">身份证号码</label>
          <input class="input_val w_100"
                 type="text"
                 v-model="userInfo.idcard"
                 placeholder="请输入身份证号码">
        </div>
        <div class="input_wrap">
          <label class="block input_label">手机号码</label>
          <input class="input_val w_100"
                 type="text"
                 v-model="userInfo.phone"
                 placeholder="请输入你的手机号码">
        </div>
        <div class="input_wrap">
          <label class="block input_label">请输入验证码</label>
          <div class="flex_between">
            <input class="input_val border_e2e2e2"
                   type="text"
                   v-model="userInfo.verification_code"
                   placeholder="请输入验证码">
            <div class="auth_code_btn"
                 @click="authCodeGet">验证码</div>
          </div>
        </div>
        <div class="block_100"></div>
        <div class="save_btn"
             @click="storeUserInfo">保存</div>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
export default {
  name: 'myInfo',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      sexOptions: [
        {
          label: '男',
          value: '1'
        },
        {
          label: '女',
          value: '2'
        }
      ],
      userInfo: {
        id: 2,
        name: '薄博涛',
        age: 57,
        sex: 1,
        avatar: 'https://lorempixel.com/200/200/?69252',
        idcard: null,
        phone: 13230250636,
        bank_code: null,
        bank_card: null
      }
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
        this.userInfo = res.data.data
      }).catch(res => {
        console.log(res)
      })
    },
    // 获取登录验证码和短信凭证
    authCodeGet () {
      let _self = this
      let options = {
        method: 'post',
        url: $utill.api.url + 'api/verificationCodes',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          phone: _self.userInfo.phone
        }
      }
      $http.request(options).then(res => {
        this.userInfo.verification_key = res.data.data.key
      }).catch(res => {
        console.log(res)
      })
    },
    // 修改用户信息
    storeUserInfo () {
      let options = {
        method: 'post',
        url: $utill.api.url + 'api/users',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          age: this.userInfo.age,
          sex: this.userInfo.sex,
          idcard: this.userInfo.idcard,
          verification_key: this.userInfo.verification_key,
          verification_code: this.userInfo.verification_code
        }
      }
      $http.request(options).then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res.message)
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