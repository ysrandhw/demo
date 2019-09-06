import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax = axios.create()

ajax.interceptors.request.use(config => {
  Indicator.open({
    text: 'Loading...',
    spinnerType: 'fading-circle'
  })
  return config
})
ajax.interceptors.response.use(resp => {
  Indicator.close()
  if (resp.status === 200) {
    return resp.data
  } else {
    return resp
  }
})
export const getBanners = (nextIndex) => ajax.get(`/api/tab/1?start=${nextIndex}`)

export const getTabs = () => ajax.get('/api/tabs')

export const getHotSearch = () => ajax.get('/api/search/home')

export const postLogin = ({ username, password }) => ajax.post('http://rap2api.taobao.org/app/mock/177444/user/login', { username, password })

export const getProductList = (id, nextIndex) => ajax.get(`/api/tab/${id}?start=${nextIndex}`)

export const getDetail = (id) => ajax.get(`/api/detail?id=${id}`)

export const getProductMine = () => ajax.get(`/api/tab/2`)
