import { postLogin } from '@/request'

export default {
  login (context, { username, password }) {
    postLogin({ username, password }).then(resp => {
      console.log(resp)
      if (resp.code === 200) {
        const { displayName, id, token } = resp.body.userinfo
        context.commit('toggleIsLogin', {
          displayName,
          id,
          token
        })
        // context.commit('toggleIsLogin', userInfo)
      }
    })
  }
}
