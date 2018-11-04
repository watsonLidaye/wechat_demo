<style scoped>
 @import 'item.css'
</style>
<template>
	<div id="getGoods" :style="{'min-height':fullHeight+'px'}">
	 		<div class="w_100 h208 flex_align" >
	 			<img src="./image/ico_youjiang@2x.png" class="w112h112 ml35">
	 			<div class="ft48 ml25">有奖 <span class="color_FA846C">专区</span></div>
	 		</div>
 			<div class="input_box bg_ff relative mb30">
 				<input type="text" name="" class="w_100 h_100 text_center" placeholder="请输入职位或者公司名">
 				<div class="el-icon-search seatching"></div>
 			</div>
 			<router-link to="/jobdetail" class="block relative w680 pd30 box_border pb15 bg_ff mb25">
				<div class="w_100 jub_jub_center mb25">
					<div class="ft30 flex_align ">
						<div>操作工</div>
						<div class="ml20 label_price">有奖</div>
					</div>
					<div class="ft24 index_money">3000-8000元</div>
				</div>
				<div class="flex_warp w_100 mb25">
					<div class="label_index">五险</div>
					<div class="label_index">包吃</div>
				</div>
				<div class="flex_align">
					<div class="logo_img mr15"></div>
					<div class="logo_img_height juc_colum_b">
						<div>
							<div class="ft22 mb15">富士康</div>
							<div class="ft22 color_99">已报名 22 人</div>
						</div>
					</div>
				</div>
				<img src="./image/置顶@2x.png" class="top">
			</router-link>

	</div>
</template>

<script>

export default {
	name: 'getGoods',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
		}
	},
	mounted(){
	}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

