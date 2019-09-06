<template>
  <div class="yh">
    <div class="yh-header">
      <div class="yh-header-container">
        <div class="yh-header-container-top">
          <i class="yh-icon" @click="goBack">&#xe6c7;</i>
          <router-link tag="span" :to="'/register'">注册</router-link>
          <!-- <span>注册</span> -->
        </div>
        <div class="yh-header-container-bot">
          <p>Yoho!Family账号可登录Yoho!Buy有货</p>
        </div>
      </div>
    </div>
    <div class="yh-main">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="username"></mt-field>
      <mt-field label="验证码" placeholder=""><a href="javascript:;">获取验证码</a></mt-field>
      <!-- <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field> -->
      <mt-button type="primary" size="large" @click="doLogin({ username, password})">登录</mt-button>
      <div class="yh-main-bot">
        <!-- <p>账号密码登录</p> -->
        <router-link tag="p" to="/login">账号密码登录</router-link>
        <p>忘记密码？</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    goBack () {
      this.$router.back()
    },
    doLogin () {
      // 先进行表单验证，验证通过调用 login
      this.login({
        username: this.username,
        password: this.password
      })
    }
  },
  watch: {
    isLogin (value) {
      if (value === true) {
        let instance = this.$toast('登录成功')
        setTimeout(() => {
          instance.close()
          // 判断是正常跳转过来的还是需要权限验证的页面强制过来的
          const { from } = this.$route.params
          if (from) {
            // 说明是强制跳转过来的 那么就回到from
            this.$router.push(from)
          } else {
            // 正常跳转，直接返回历史记录
            this.$router.back()
          }
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'yh-icon';  /* project id 1275735 */
  src: url('//at.alicdn.com/t/font_1275735_nics99nuli.eot');
  src: url('//at.alicdn.com/t/font_1275735_nics99nuli.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1275735_nics99nuli.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1275735_nics99nuli.woff') format('woff'),
  url('//at.alicdn.com/t/font_1275735_nics99nuli.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1275735_nics99nuli.svg#iconfont') format('svg');
}
.yh-icon {
    font-family: yh-icon;
  }
.yh {
  width: 100%;
  height: 100%;
  &-header {
    width: 100%;
    height: 124px;
    margin-bottom: 30px;
    background:url(https://img11.static.yhbimg.com/yhb-img01/2018/03/26/10/01cf2c685c5d7ddbb21b7c7b961da77454.jpg?imageView2/2/w/750/h/290);
    background-size: 100% 100%;
    overflow: hidden;
    &-container {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      // background: blue;
      margin-top: 20px;
      &-top {
        display: flex;
        justify-content: space-between;
        i {
            font-size: 18px;
            // margin-right: 1px;
            color: #fff;
          }
        span {
          font-size: 13px;
          border: 1px solid #fff;
          padding: 4px 8px;
          border-radius: 15px;
          color: #fff;
        }
      }
      &-bot {
        margin-top: 60px;
        font-size: 12px;
        text-align: center;
        color: #fff;
      }
    }
  }
  &-main {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    a { text-decoration: none; }
    &-bot {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
</style>
