import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state,
  mutations,
  actions,
  getters
})

store.subscribe((mutation, state) => {
  // 订阅所有的mutations，只要有任意一个mutation被commit，都会触发这个回调
  // 有时候需要判断mutations的type
  console.log(state)
  window.localStorage.setItem('cart', JSON.stringify(state.cart))
  window.localStorage.setItem('total', JSON.stringify(state.total))
})

store.subscribe((mutation, state) => {
  if (mutation.type === 'toggleIsLogin') {
    // 用户信息被修改
    window.localStorage.setItem('login', JSON.stringify(state.userinfo))
  }
})

export default store
