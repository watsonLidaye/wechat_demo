import index from '@/components/pages/index/index'
import jobdetail from '@/components/pages/index/jobdetail/jobdetail'
import mine from '@/components/pages/mine/index'
import mineInfo from '@/components/pages/mine/mineInfo/index'
import mineWork from '@/components/pages/mine/mineWork/index'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      pageTitle: '翔通集团'
    }
  },
  {
    path: '/jobdetail',
    name: 'jobdetail',
    component: jobdetail,
    meta: {
      pageTitle: '职位详情'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      pageTitle: '我的'
    }
  },
  {
    path: '/mineInfo',
    name: 'mineInfo',
    component: mineInfo,
    meta: {
      pageTitle: '我的信息'
    }
  },
  {
    path: '/mineWork',
    name: 'mineWork',
    component: mineWork,
    meta: {
      pageTitle: '我的工作'
    }
  }
]

export default routes
