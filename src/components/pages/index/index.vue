<style scoped>
 @import 'index.css'
</style>
<template>
	<div id="index"  >
		<div class="banner">
			<div class="search">
				<input type="text" name="" class="w_100 h_100 l60 text_center" placeholder="请输入职位或者公司名">
				<span class="el-icon-search seach_btn"></span>
			</div>
		</div>
		<div class="headnav flex_align">
			<div class='w_33 h24 juc_colum'>
				<div class="flex_align">
					<div class="w28h28 mr15"></div>
					<div class="">有奖专区</div>
				</div>
			</div>
			<div class='w_33 h24 juc_colum'>
				<div class="flex_align">
					<div class="w28h28 mr15"></div>
					<div class="">名企招聘</div>
				</div>
			</div>
			<div class='w_33 h24 juc_colum'>
				<div class="flex_align">
					<div class="w28h28 mr15"></div>
					<div class="">推荐榜单</div>
				</div>
			</div>
		</div>
		<div class="navbto"></div>
		<div class="pb_tabbas">
			<div class="relative w_100 pd30 box_border pb15">
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
			</div>
			<div class="navbto"></div>
		</div>
		<div class="tabbas flex_align">
			<div class="w_50 juc_colum_b ft20">
				<div class="w46h46 mb10"></div>
				<div class="tabact">首页</div>
			</div>
			<div class="w_50 juc_colum_b ft20">
				<div class="w46h46 mb10"></div>
				<div class="color_99">我的</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'index',
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

