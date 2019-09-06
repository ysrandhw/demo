import {
  ADD_CART,
  TOGGLE_CHECKED,
  ADD_NUM,
  CUT_NUM,
  TOGGLE_CHECKED_TOTAL,
  TOGGLE_IS_LOGIN
} from './mutationTypes'

export default {
  [ADD_CART] (state, {
    id,
    img,
    title,
    price
  }) {
    // 把当前商品加入购物车
    // 先判断cart里是否存在
    // 注：cart必须为数组
    // console.log(state.cart)
    id = Number(id)
    let isExist = state.cart.some(product => product.id === id)
    if (isExist) {
      state.cart = state.cart.map(product => {
        if (product.id === id) product.num++
        return product
      })
    } else {
      state.cart.push({
        id,
        img,
        title,
        price,
        num: 1,
        checked: true
      })
    }
    state.total.isCheck = state.cart.every(product => {
      return product.checked === true
    })
  },
  [TOGGLE_CHECKED] (state, { id }) {
    // 根据id值修改当前商品的checked属性
    state.cart = state.cart.map(product => {
      if (product.id === id) product.checked = !product.checked
      return product
    })
    state.total.isCheck = state.cart.every(product => {
      return product.checked === true
    })
    console.log(state.total.isCheck)
  },
  [TOGGLE_CHECKED_TOTAL] (state) {
    state.total.isCheck = !state.total.isCheck
    state.cart = state.cart.map(product => {
      product.checked = state.total.isCheck
      return product
    })
  },
  [ADD_NUM] (state, { id }) {
    state.cart = state.cart.map(product => {
      if (product.id === id) product.num++
      return product
    })
  },
  [CUT_NUM] (state, { id }) {
    state.cart = state.cart.map(product => {
      if (product.id === id) {
        if (product.num > 1) {
          product.num--
          return product
        }
      }
      return product
    })
  },
  delItem (state, { id }) {
    state.cart = state.cart.filter(product => product.id !== id)
    if (state.cart.length > 0) {
      state.total.isCheck = state.cart.every(product => {
        return product.checked === true
      })
    } else {
      state.total.isCheck = false
      return state.total.isCheck
    }
  },
  [TOGGLE_IS_LOGIN] (state, userinfo = {}) {
    state.userinfo = userinfo
    console.log(state.userinfo)
  }
}
