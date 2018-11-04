<style scoped>
 @import 'item.css'
</style>
<template>
	<div id="recruit" :style="{'min-height':fullHeight+'px'}">
	 		<div class="w_100 h208 flex_align" >
	 			<img src="./image/ico_zhaopin@2x.png" class="w112h112 ml35">
	 			<div class="ft48 ml25">名企 <span class="color_5E98D9">招聘</span></div>
	 		</div>
	 		<div class="w680 bg_ff mb30" @click="jump('companyDetail')">
	 			<img src="./image/1541307748(1).jpg" class="w_100 h218" >
	 			<div class="w_100 box_border h140 flex_align pl20 pr20">
	 				<div class="ft32">富士康大量招工，丰厚返现等你拿</div>
	 			</div>
	 		</div>
	</div>
</template>

<script>

export default {
	name: 'recruit',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
		}
	},
	mounted(){
	},
	methods:{
		jump(path) {
			this.$router.push({name:path})
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

