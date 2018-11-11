<style scoped>
 @import 'item.css'
</style>
<template>
	<div  >
		<div class="tabbas flex_align">
			<div class="w_50 juc_colum_b ft20" @click="jump('index')">
				<img src="./image/ico_home_select@2x.png" class="w46h46 mb10">
				<div class="tabact">首页</div>
			</div>
			<div class="w_50 juc_colum_b ft20" @click="jump('my') ">
				<img src="./image/ico_my_normal@2x.png" class="w46h46 mb10">
				<div class="color_99">我的</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'tabbas',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
		}
	},
	mounted(){
	},
	methods:{
			jump(path){
				this.$router.push({name:path})
			}
		}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

