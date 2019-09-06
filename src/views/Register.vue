<template>
  <div class="yh">
    <div class="yh-reg">
      <div class="yh-reg-header">
        <i class="yh-icon" @click="goBack">&#xe6c7;</i><span>注册</span>
      </div>
      <div class="yh-reg-main">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="username"></mt-field>
        <!-- <mt-field label="验证码" placeholder=""><a href="javascript:;">获取验证码</a></mt-field> -->
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="口令" placeholder="好友口令(非必填)"></mt-field>
        <mt-button type="primary" size="large" @click="doReg">注册</mt-button>
      </div>
      <div class="yh-reg-protocol">
        注册即表示您已阅读并同意<br>
        <a href="javascript:;" title="有货用户服务协议" target="_blank">有货用户服务协议</a>
        <a href="javascript:;"  title="Yoho!Buy有货隐私政策" target="_blank">有货隐私条款</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    doReg () {
      let instance = this.$toast('注册成功')
      setTimeout(() => {
        instance.close()
        this.$router.back()
        // window.localStorage.setItem('username')
      }, 1000)
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
  &-reg {
    width: 80%;
    height: 90%;
    margin: 0 auto;
    // background: orange;
    margin-top: 20px;
    &-header {
      width: 100%;
      height: 30px;
      line-height: 30px;
      margin-bottom: 50px;
      i {
        font-size: 18px;
        // margin-right: 1px;
      }
      span {
        font-size: 15px;
        margin-left: 35%;
      }
    }
    &-main {
      a {
        text-decoration: none;
        font-size: 12px;
        float: right;
      }
    }
    &-protocol {
      color: #444;
      font-size: 12px;
      margin-top: 8px;
      a {
        color: #c00;
        display: inline-block;
        font-size: 12px;
        text-decoration: underline;
        margin-top: 5px;
        margin-right: 5px;
      }
    }
  }
}
</style>
