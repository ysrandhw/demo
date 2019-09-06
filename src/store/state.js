export default {
  cart: JSON.parse(window.localStorage.getItem('cart')) || [],
  total: JSON.parse(window.localStorage.getItem('total')) || { isCheck: false },
  userinfo: JSON.parse(window.localStorage.getItem('login')) || {}
}
