import index from '@/components/pages/index/index'
import jobdetail from '@/components/pages/index/jobdetail/jobdetail'

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
}]

export default routes