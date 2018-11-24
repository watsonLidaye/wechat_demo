<template>
  <div>
    <mt-popup v-model="popupVisible">
      <div class="popup_wrap">
        <template v-if="popupType === 'person'">
          您的个人资料未填写
          请填写个人资料后提交借款申请
        </template>
        <template v-if="popupType === 'company'">
          你还未入职任何公司
          如有疑问请联系驻场管理员
        </template>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'popup',
  props: {
    popupType: {
      type: String,
      value: ''
    },
    popupVisible: {
      type: Boolean,
      value: ''
    }
  },
  data () {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  created () { },
  mounted () {
    // console.log(this.popupType)
    // console.log(this.popupVisible)
  },
  methods: {

  },
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>