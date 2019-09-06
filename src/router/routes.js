// import Home from '@/views/Home'
import BlFooter from '@/components/BlFooter'
const Home = () => import('@/views/Home')
const Mall = () => import('@/views/Mall')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const Search = () => import('@/views/Search')
const Register = () => import('@/views/Register')
const Login = () => import('@/views/Login')
const LoginAuth = () => import('@/views/LoginAuth')
const CateList = () => import('@/views/CateList')
const Detail = () => import('@/views/Detail')

export default [
  {
    path: '/',
    redirect: 'home',
    meta: []
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: BlFooter
    },
    meta: {
      isTabbar: true,
      title: '首页',
      icon: '&#xe61b;'
    }
  },
  {
    path: '/mall',
    name: 'mall',
    components: {
      default: Mall,
      footer: BlFooter
    },
    children: [
      {
        path: ':cateId',
        name: 'cateList',
        component: CateList
      }
    ],
    meta: {
      isTabbar: true,
      title: '分类',
      icon: '&#xe619;'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart
    },
    meta: {
      isTabbar: true,
      title: '购物车',
      icon: '&#xe605;',
      isAuthRequired: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    // components: {
    //   default: Mine
    //   footer: BlFooter
    // },
    meta: {
      isTabbar: true,
      title: '我的',
      headerTitle: 'YoHo!Buy',
      icon: '&#xe61a;'
    }
  },
  {
    path: '/search',
    name: 'search',
    components: {
      default: Search
    },
    meta: {
      isTabbar: false,
      title: '搜索'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      isTabbar: false,
      title: '注册'
    }
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      isTabbar: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isTabbar: false,
      title: '手机号登录'
    }
  },
  {
    path: '/loginauth',
    name: 'loginauth',
    component: LoginAuth,
    meta: {
      isTabbar: false,
      title: '账号登录'
    }
  }
]
