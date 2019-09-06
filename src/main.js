import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import * as ajax from '@/request'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import { BackTop } from '@/components'

Vue.use(Vant)
Vue.use(Mint)
Vue.use(BackTop)

Vue.prototype.$http = ajax
Vue.config.productionTip = false

// 全局混入
Vue.mixin({
  filters: {
    gt99 (value) {
      return value > 99 ? '99+' : value
    },
    tofix2 (value) {
      // 容错思想，判断是否为字符串
      if (typeof value === 'number') {
        return value.toFixed(2)
      } else {
        value = Number(value)
        if (isNaN(value)) {
          return value
        } else {
          return value.toFixed(2)
        }
      }
    }
  }
})

// 全局导航守卫来验证登录权限
router.beforeEach((to, from, next) => {
  if (to.meta.isAuthRequired === true) {
    // 需要登录的权限
    // console.log(store.getters.isLogin)
    if (store.getters.isLogin === true) {
      next()
    } else {
      // 强制跳转登录页面，同时把跳转之前的页面作为参数传过去，方便登录成功返回
      next({
        name: 'login',
        params: {
          from: to.path
        }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
