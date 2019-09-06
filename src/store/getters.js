export default {
  totalCartNum (state) {
    return state.cart.reduce((num, product) => {
      num += product.num
      return num
    }, 0)
  },
  totalCheckedCartNum (state) {
    return state.cart.reduce((num, product) => {
      if (product.checked === true) num += product.num
      return num
    }, 0)
  },
  totalMoney (state) {
    return state.cart.reduce((money, product) => {
      if (product.checked === true) money += product.num * product.price
      return money
    }, 0)
  },
  isCartEmpty (state) {
    return !(state.cart.length > 0)
  },
  isLogin (state) {
    return !!state.userinfo.token
  }
}
