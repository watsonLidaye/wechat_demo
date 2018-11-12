<style scoped>
 @import 'index.css'
</style>
<template>
	<div id="index"  :style="{'min-height':fullHeight+'px'}">
		<div class="banner">
			<div class="search">
				<input type="text" name="" class="w_100 h_100 l60 text_center" placeholder="请输入职位或者公司名" maxlength="16">
				<span class="el-icon-search seach_btn"></span>
			</div>
			<mt-swipe :show-indicators="false" class="w_100 h_100">
				  <mt-swipe-item v-for="(item,index) in banner" :key="index+'banner'" >
				  	<img :src="item.url+'/'+item.image_url" class="w_100 h_100">
				  </mt-swipe-item>
				</mt-swipe>
		</div>
		<div class="headnav flex_align">
			<div class='w_33 h24 juc_colum' @click="jump('getGoods')">
				<div class="flex_align">
					<img src="./image/奖品@2x.png" class="w32h32 mr15">
					<div class="">有奖专区</div>
				</div>
			</div>
			<div class='w_33 h24 juc_colum' @click="jump('recruit')">
				<div class="flex_align">
					<img src="./image/名企@2x.png" class="w32h32 mr15">
					<div class="">名企招聘</div>
				</div>
			</div>
			<div class='w_33 h24 juc_colum'  @click="jump('ranking')">
				<div class="flex_align">
					<img src="./image/榜单@2x.png" class="w32h32 mr15">
					<div class="">推荐榜单</div>
				</div>
			</div>
		</div>
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
			<div class="navbto"></div>
			<div class="pb_tabbas">
				<template v-for="(item,index) in list" v-if="item">
					<router-link :to="'/jobdetail?id='+item.company_id" class="block relative w_100 pd30 box_border pb15"  :key="index+'list'" >
						<div class="w_100 jub_jub_center mb25">
							<div class="ft30 flex_align ">
								<div>{{item.name}}</div>
								<div class="ml20 label_price" v-if="item.is_reward!=0">有奖</div>
							</div>
							<div class="ft24 index_money">{{item.salary_begin}}-{{item.salary_end}}元</div>
						</div>
						<div class="flex_warp w_100 mb25">
							<div class="label_index">五险</div>
							<div class="label_index">包吃</div>
						</div>
						<div class="flex_align">
							<img class="logo_img mr15" v-lazy="item.company.logo">
							<div class="logo_img_height juc_colum_b">
								<div>
									<div class="ft22 mb15">{{item.company.name}}</div>
									<div class="ft22 color_99">已报名 {{item.user_enrolls_count}} 人</div>
								</div>
							</div>
						</div>
						<img src="./image/置顶@2x.png" class="top">
					</router-link>
					<div class="navbto" :key="index+'bot'"></div>
				</template>
			</div>
		</div>
		<tabbas></tabbas>
	</div>
</template>

<script>
import tabbas from '../../common/tabbas/tabbas.vue'
export default {
	name: 'index',
	components:{
		tabbas
	},
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
			banner:[],
			list:[],
			loading:false,
			page:1,
		}
	},
	mounted(){
		this.pageGet()
	},
	methods:{
		jump(path){
			this.$router.push({name:path})
		},
		refreh(){
			$utill.common.chcktoken()
		},
		bannerGet(){
			 $http.get($utill.api.url + $utill.api.api.index_baner).then( res => {
				 	this.banner = res.data.data
			 }).catch(res => {
				console.log(res)
			 })
		},
		pageGet(){
			let data = {}
			data.page = this.page
			 $http.get($utill.api.url + $utill.api.api.index_job).then( res => {
			 	if (this.page == 1) {
			 		this.list = res.data.data.data
			 	} else {
					for (let i in res.data.data.data) {
						this.list.push(res.data.data.data[i])
					}
			 	}
				this.last_page = res.data.data.last_page
				this.loading = false
			 }).catch(res => {
				console.log(res)
			 })
		},
		loadMore() {
			if (this.list.length==0) {
				return false
			}
			this.page+=1
			if (this.page > this.last_page) {
				return false
			}
  			this.loading = true
			this.pageGet()
		}
	}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

