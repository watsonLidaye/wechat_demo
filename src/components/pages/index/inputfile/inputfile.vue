<style scoped>
 @import 'item.css'
</style>
<template>
	<div id="inputfile"  :style="{'min-height':fullHeight+'px'}">
		<div class="header relative mb50">
			<img src="@/assets/image/index/img_one.png" class="w327h101 ml35">
				<input type="text" class="header_input_name ft30 box_border pl40 header_input" placeholder="姓名" maxlength="10">
		</div>
		<div class="w680 jub_jub_center pb48">
			<div class="sex_age jub_jub_center">
				<input type="text" class="w_100 ft30 box_border pl40" placeholder="年龄" maxlength="3">
			</div>
			<div class="sex_age jub_jub_center" @click="setselect">
				<div class="ft30 ml45">性别 </div>
				<img src="@/assets/image/index/arrow_down.png" class="w36h36 mr40">
			</div>
		</div>
		<div class="pb48 w680">
			<input type="text" class="header_input_name ft30 box_border pl40" placeholder="手机号码" maxlength="11">
		</div>
		<div class="pb48 w680">
			<input type="text" class="header_input_name ft30 box_border pl40" placeholder="身份证" maxlength="20">
		</div>
		<div class="pb100 w680">
			<input type="text" class="header_input_name ft30 box_border pl40" placeholder="推荐人：" maxlength="10">
		</div>
		<div class="bottom_btn">提交</div>
		<div class="w_100 bg_b" :style="{'height':fullHeight+'px'}" v-if="select" @click="setselect">
		</div>
		<mt-picker :slots="slots" @change="onValuesChange" class="bg_ff picksex" :class="{'dwon':!select}"></mt-picker>
	</div>
</template>

<script>

export default {
	name: 'inputfile',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
			select:false,
			slots:[
				{
					flex: 1,
					values:['男','女']
				}
			]
		}
	},
	mounted(){
	},
	methods:{
		jump(path){
			this.$router.push({name:path})
		},
		onValuesChange(picker, values) {
			console.log(picker)
			console.log(values)
		},
		setselect(){
			let sectes = !this.select
			this.select = sectes
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

