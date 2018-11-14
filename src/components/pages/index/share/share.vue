<style scoped>
 @import 'item.css'
</style>
<template>
	<div id="share"  :style="{'height':fullHeight+'px'}">
		<div class="h_50 relative  w596 b-b-d">
			<img src="@/assets/image/index/t1.png" class="w359h167">
			<div class="bottom">
				<div class=" w_100 jub_jub_center pb30">
					<div class="flex_align">
						<div class="w60h60 mr15"></div>
						<div>
							<div class="color_ff ft26">Leslie Cheung推荐新职位给你</div>
						</div>
					</div>
				</div>
				<div class="h195 w_100 jub_jub_center">
					<div class="flex_align">
						<div class="w130h130 mr20"></div>
						<div>
							<div class="ft32 color_ff mb25">操作工</div>
							<div class="ft22 color_ff">富士康</div>
						</div>
					</div>
					<div class="ft32 color_FFF600">3000-8000元</div>
				</div>
			</div>
		</div>
		<div class="h_50 w596 juv_colum">
			<div>
				<div class="ft24 color_ff pt30">推荐规则：</div>
				<div class="ft20 color_ff pt25">推荐他人入职，返现700元</div>
			</div>
			<div class="flex_align">
				<img src="@/assets/image/index/jinbi.png" class="w75h72 mr25">
				<div>
					<div class="ft20 color_ff mb10">该职位已有</div>
					<div class="ft20 color_ff"> 33 人获得返现！</div>
				</div>
			</div>
			<div class="pb60">
				<img src="@/assets/image/index/qrcode.png" class="w185h185 mb40">
				<div class="flex_align">
					<img src="@/assets/image/index/zhiwen.png" class="w34h34">
					<div class="ft20 ml20">长按识别图中二维码</div>
				</div>
			</div>
		</div>
		<img src="@/assets/image/index/chahua.png" class="w334h568">
	</div>
</template>

<script>

export default {
	name: 'share',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
		}
	},
	mounted(){
	},


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

