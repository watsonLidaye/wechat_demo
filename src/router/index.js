import index from '@/components/pages/index/index'
import jobdetail from '@/components/pages/index/jobdetail/jobdetail'
import my from '@/components/pages/my/index'
import myInfo from '@/components/pages/my/myInfo/index'
import myWork from '@/components/pages/my/myWork/index'
import myIntro from '@/components/pages/my/myIntro/index'
import introDetail from '@/components/pages/my/myIntro/introDetail/index'
import myAccount from '@/components/pages/my/myAccount/index'
import accountDetail from '@/components/pages/my/myAccount/accountDetail/index'
import accountSetting from '@/components/pages/my/myAccount/accountSetting/index'
import myBorrow from '@/components/pages/my/myBorrow/index'
import borrowSubmit from '@/components/pages/my/borrowSubmit/index'

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
  },
  {
    path: '/accountDetail',
    name: 'accountDetail',
    component: accountDetail,
    meta: {
      pageTitle: '我的账户'
    }
  },
  {
    path: '/accountSetting',
    name: 'accountSetting',
    component: accountSetting,
    meta: {
      pageTitle: '账户资料设置'
    }
  },
  {
    path: '/myBorrow',
    name: 'myBorrow',
    component: myBorrow,
    meta: {
      pageTitle: '我要借钱'
    }
  },
  {
    path: '/borrowSubmit',
    name: 'borrowSubmit',
    component: borrowSubmit,
    meta: {
      pageTitle: '我要借钱'
    }
  }
]

export default routes
