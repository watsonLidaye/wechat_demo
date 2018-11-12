<style scoped>
 @import 'item.css'
</style>
<template>
	<div id="jobdetail ">
		<div class="w_100 pl35 pr35 box_border">
			<div class="w_100 bt_b">
				<div class="w_100 jub_jub_center pt60 pb25 ">
					<div class="ft46 ">操作工</div>
					<div class="price ft28 ">3000-8000元</div>
				</div>
				<div class="w_100 flex_align  mb30 ">
					<img src="./image/zb@2x.png" class="w20h24 mr10">
					<div class="color_99 ft28">广东省-深圳市-南山区</div>
				</div>
			</div>
		</div>
		<div class="w_100 mb40">
			<router-link to="companyDetail" class="w_100 jub_jub_center pt60 pb70">
				<div class="flex_align ml35">
					<div class="logo_img mr15"></div>
					<div class="logo_img_height juc_colum_b">
						<div>
							<div class="ft22 mb15">富士康</div>
							<div class="ft22 ">1000人以上 / 制造业</div>
						</div>
					</div>
				</div>
				<img src="./image/arrow@2x.png" class="w32h32 mr35">
			</router-link>
			<div class="w724h173">
				<div class="w684h184">
					<div>
						<img src="./image/tjyj@2x.png" class="w119h22">
					</div>
					<div class="ft24 color_ff">.入职7天返现 700 元。</div>
					<div class="ft24 color_ff">.推荐他人入职，确认入职工作7天，返现700元（可提现）</div>
					<div class="w_100 text_right ft20 color_ff">该职位已有33人获得返现</div>
				</div>
			</div>
		</div>
		<div class="w_100 pl35 pr35 box_border pb100">
			<div class="w_100 flex_align mb40">
				<div class="w190 ft38 ">薪资待遇</div>
				<div class="w490"></div>
			</div>
			<div class="textline">本次招聘属富士康人资公开免费招聘，厂区自选，小时工资23元/h，月收入6000元以上！</div>
		</div>
		<div class="w_100 pl35 pr35 box_border pb100">
			<div class="w_100 flex_align mb40">
				<div class="w190 ft38 ">福利待遇</div>
				<div class="w490"></div>
			</div>
			<div class="flex_warp w_100 mb25">
					<div class="label_index">五险</div>
					<div class="label_index">包吃</div>
				</div>
			<div class="textline mb40">1、集团提供吃住，入职公司为员工提供400元食堂消费卡，刷卡消费，不用拿现金，菜式多样，自由选择。</div>
			<div class="textline mb40">2、员工享有国家法定假日(每年11天)、工伤假、婚假、产假、带薪年休假等假期。</div>
			<div class="textline mb40">3、每年免费提供春、夏工衣各2套，免费为员工洗衣服。</div>
			<div class="textline">4、公司依法与员工签订劳动合同、购买社保、办理住房公积金，并额外为每位员工办理医疗自保基金，提供双份保障。</div>
		</div>
		<div class="w_100 pl35 pr35 box_border pb100">
			<div class="w_100 flex_align mb40">
				<div class="w190 ft38 ">招聘要求</div>
				<div class="w490"></div>
			</div>
			<div class="textline">（龙华、观澜等厂区可自选）操作工/普工/普通技工：男女不限，学历不限（不要毕业证）。</div>
		</div>
		<div class="w_100 pl35 pr35 box_border pb100">
			<div class="w_100 flex_align mb40">
				<div class="w190 ft38 ">温馨提示</div>
				<div class="w490"></div>
			</div>
			<div class="textline">招聘时间：近期天天招聘</div>
			<div class="textline mb40">24小时短信接收报名：姓名+年龄+富士康发送至鲁小姐会第一时间给您录好系统</div>
			<div class="textline ">拨打下面热线24小时接受报名</div>
			<div class="textline ">85250002</div>
		</div>
		<div class="pb130">
			<div class="mbbb"></div>
		</div>
		<div class="bto_bar flex_align box_border pl35">
			<div class="left_btn box_border juc_colum_b mr15">
				<div class="flex_align ">
					<img src="./image/gift_btn@2x.png" class="w32h32 mr10">
					<div class="ft30">有奖推荐</div>
				</div>
			</div>
			<div class="rightbtn juc_colum_b" @click="jump('inputfile')">
				<div class="flex_align ">
					<img src="./image/sign up_btn@2x.png" class="w32h32 mr10">
					<div class="ft30 color_ff">在线报名</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'jobdetail',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
			detail:{}
		}
	},
	mounted(){
		console.log(this.$route.query.id)
		this.pageGet()
	},
	methods:{
		jump(path){
			this.$router.push({name:path})
		},
		pageGet(){
			let data = {}

			$http.get($utill.api.url + 'api/job/'+this.$route.query.id).then( res => {
				 	this.detail = res.data.data
			 }).catch(res => {
				console.log(res)
			 })
		}
	}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

