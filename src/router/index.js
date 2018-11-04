import index from '@/components/pages/index/index'
import jobdetail from '@/components/pages/index/jobdetail/jobdetail'
import getGoods from '@/components/pages/index/getGoods/getGoods'
import recruit from '@/components/pages/index/recruit/recruit'
import ranking from '@/components/pages/index/ranking/ranking'
import companyDetail from '@/components/pages/index/companyDetail/companyDetail'

const routes = [{
	path: '/',
	name: 'index',
	component: index,
	meta: {
		pageTitle: '翔通集团'
	}
}, {
	path: '/jobdetail',
	name: 'jobdetail',
	component: jobdetail,
	meta: {
		pageTitle: '职位详情'
	}
}, {
	path: '/getGoods',
	name: 'getGoods',
	component: getGoods,
	meta: {
		pageTitle: '有奖专区'
	}
}, {
	path: '/recruit',
	name: 'recruit',
	component: recruit,
	meta: {
		pageTitle: '名企招聘'
	}
}, {
	path: '/ranking',
	name: 'ranking',
	component: ranking,
	meta: {
		pageTitle: '推荐排行'
	}
}, {
	path: '/companyDetail',
	name: 'companyDetail',
	component: companyDetail,
	meta: {
		pageTitle: '公司详情'
	}
}]

export default routes