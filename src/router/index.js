import index from '@/components/pages/index/index'
import jobdetail from '@/components/pages/index/jobdetail/jobdetail'
import my from '@/components/pages/my/index'
import myInfo from '@/components/pages/my/myInfo/index'
import myWork from '@/components/pages/my/myWork/index'
import myIntro from '@/components/pages/my/myIntro/index'
import introDetail from '@/components/pages/my/myIntro/introDetail/index'
import myAccount from '@/components/pages/my/myAccount/index'

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
    path: '/my',
    name: 'my',
    component: my,
    meta: {
      pageTitle: '我的'
    }
  },
  {
    path: '/myInfo',
    name: 'myInfo',
    component: myInfo,
    meta: {
      pageTitle: '我的信息'
    }
  },
  {
    path: '/myWork',
    name: 'myWork',
    component: myWork,
    meta: {
      pageTitle: '我的工作'
    }
  },
  {
    path: '/myIntro',
    name: 'myIntro',
    component: myIntro,
    meta: {
      pageTitle: '我的推荐'
    }
  },
  {
    path: '/introDetail',
    name: 'introDetail',
    component: introDetail,
    meta: {
      pageTitle: '我的推荐'
    }
  },
  {
    path: '/myAccount',
    name: 'myAccount',
    component: myAccount,
    meta: {
      pageTitle: '我的账户'
    }
  }
]

export default routes
