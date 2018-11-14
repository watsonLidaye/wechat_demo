<style scoped>
 @import 'item.css'
</style>
<template>
	<div id="companyDetail">
		<div class="header relative mb100">
			<div class="header_img"></div>
		</div>
		<div class="w_100 jub_jub_center  pb30">
				<div class="flex_align ml35">
					<div class="logo_img mr15"></div>
					<div class="logo_img_height juc_colum_b">
						<div>
							<div class="ft22 mb15">富士康</div>
							<div class="ft22 ">1000人以上 / 制造业</div>
						</div>
					</div>
				</div>
		</div>
		<div class="w_100 h90 box_border pl35 pr35">
			<div class="h_100 w_100 b-b-d flex_align">
				<div class='nav_list mr40 flex_align' :class="{'act':index_type==0}" @click="checks(0)">公司信息</div>
				<div class='nav_list flex_align' :class="{'act':index_type==1}" @click="checks(1)">在招职位(10)</div>
			</div>
		</div>
		<template v-if="index_type==0">
			<div class="w_100 pl35 pr35 box_border pb100 pt40">
				<div class="textline">富士康科技集团是专业从事计算机、通讯、消费性电子等3C产品研发制造，广泛涉足数位内容、汽车零组件、通路、云运算服务及新能源、新材料开发应用的高新科技企业。
	凭借前瞻决策、扎根科技和专业制造，自1974年在台湾肇基，1988年投资中国大陆以来，富士康迅速发展壮大，拥有百余万员工及全球顶尖客户群，是全球最大的电子产业科技制造服务商。2002年起位居中国内地企业出口200强榜首（2017年进出口总额占大陆进出口总额的3.7%）,2005年起跻身《财富》全球企业500强（2018年跃居第24位）。</div>
			</div>
			<div class="w_100 pl35 pr35 box_border pb100">
				<div class="w_100 flex_align mb40">
					<div class="w190 ft38 ">办公环境</div>
					<div class="w490"></div>
				</div>
				<div class="w_100  srcoll">
					<div class="bto_box">
					<img src="@/assets/image/index/top.png"  class="bottom_img mr25">
					<img src="@/assets/image/index/top.png"  class="bottom_img mr25">
					<img src="@/assets/image/index/top.png"  class="bottom_img mr25">
					<img src="@/assets/image/index/top.png"  class="bottom_img mr25">
					</div>
				</div>
			</div>
			<div class="w_100 pl35 pr35 box_border pb100">
				<div class="w_100 flex_align mb40">
					<div class="w190 ft38 ">工作地点</div>
					<div class="w490"></div>
				</div>
				<div class="w_100 ">
					<div class="flex_align mb25">
						<img src="@/assets/image/index/gs_zb.png" class="w22h26 mr20">
						<div class="ft28">广东 - 深圳 - 南山区</div>
					</div>
					<div class="color_99 ft24">
						南山区科发路8号金融服务技术创新基地1栋9楼A,B
					</div>
				</div>
			</div>
		</template>
		<template v-if="index_type==1">
			<div class="w_100 pl35 pr35 box_border h182">
				<div class="w_100 h_100 flex">
					<div class="w115 h_100 flex_align">
						<div class="iitem_header"></div>
					</div>
					<div class="w565 h_100 juv_column">
						<div class="w_100 jub_jub_center">
							<div class="flex_align pt30">
								<div class="ft30 mr20">操作工</div>
								<div class="label_price">有奖</div>
							</div>
							<div class="color_E77956  ft25">3000-8000元</div>
						</div>
						<div class="color_99 ft22 pt25">富士康科技集团</div>
						<div class="pt15 jub_jub_center ft20">
							<div class="color_99">深圳市-南山区 | 不限</div>
							<div class="color_99">2018.10.31</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w_100 pl35 pr35 box_border h182">
				<div class="w_100 h_100 flex">
					<div class="w115 h_100 flex_align">
						<div class="iitem_header"></div>
					</div>
					<div class="w565 h_100 juv_column">
						<div class="w_100 jub_jub_center">
							<div class="flex_align pt30">
								<div class="ft30 mr20">操作工</div>
								<div class="label_price">有奖</div>
							</div>
							<div class="color_E77956  ft25">3000-8000元</div>
						</div>
						<div class="color_99 ft22 pt25">富士康科技集团</div>
						<div class="pt15 jub_jub_center ft20">
							<div class="color_99">深圳市-南山区 | 不限</div>
							<div class="color_99">2018.10.31</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>

export default {
	name: 'companyDetail',
	data () {
		return {
			fullHeight: document.documentElement.clientHeight,
			index_type:0
		}
	},
	mounted(){
	},
	methods:{
		checks(e) {
			if (e!=this.index_type) {
				this.index_type = e
			}
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

