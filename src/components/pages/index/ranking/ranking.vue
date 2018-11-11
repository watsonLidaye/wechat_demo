<style scoped>
 @import 'item.css'
</style>
<template>
	<div id="getGoods" :style="{'height':fullHeight+'px'}">
	 		<div class="w_100 h208 flex_align" >
	 			<img src="./image/ico_bangdan @2x.png" class="w112h112 ml35">
	 			<div class="ft48 ml25">推荐 <span class="color_FA846C">排行</span></div>
	 		</div>
	 		<div class="pt208 h_100 relative box_border">
	 			<div class="w680 h_100 box_border pb248">
	 				<div class="w680s h_100">
	 					<div class="item_line box_border pl20 pr20" v-for="(item,index) in list" :key="index+'list'">
	 						<div class="w_100 h_100 b-b-d jub_jub_center">
	 							<div class="flex_align">
	 								<div class="index_number ft40 mr30" :class="{'color_one':index==0,'color_two':index==1,'color_three':index==2}">{{index+1}}</div>
	 								<div class="w80h80 relative"  :class="{'color_one':index==0,'color_two':index==1,'color_three':index==2}">
	 									<img src="./image/no_1@2x.png" v-if="index==0" class="w30h30">
	 									<img src="./image/no_2@2x.png" v-if="index==1" class="w30h30">
	 									<img src="./image/no_3@2x.png" v-if="index==2" class="w30h30">
	 								</div>
	 								<div class="ml25 ft30">Leslie Cheung</div>
	 							</div>
	 							<div class="ft24 color_E9AD3A">15732.00 元</div>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div class="bottom">
	 				<div class="btom_btn">我要赚钱返现</div>
	 			</div>
	 		</div>
	</div>
</template>

<script>

export default {
	name: 'getGoods',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
			list:[1,1,1,1,1,1,1,1,1,1,1,1]
		}
	},
	mounted(){
	}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

