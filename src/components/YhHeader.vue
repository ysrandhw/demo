<template>
    <div class="yh-mine-header">
    <i class="yh-icon yh-mine-header-iconL" @click="goBack">&#xe600;</i>
    <p
    v-for="nav in navs"
    :key="nav.name"
    :path="nav.path"
    >{{ nav.meta.headerTitle }}</p>
    <i
    class="yh-icon yh-mine-header-iconR"
    @click="showMue"
    >&#xe603;
    </i>
    <ul v-show="isShow">
      <!-- <li>首页</li>
      <li>分类</li>
      <li>购物车</li>
      <li>我的</li> -->
      <router-link tag="li" to="/home">首页</router-link>
      <router-link tag="li" to="/mall">分类</router-link>
      <router-link tag="li" to="/cart">购物车</router-link>
      <router-link tag="li" to="/mine">我的</router-link>
    </ul>
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  data () {
    return {
      isShow: false,
      navs: []
    }
  },
  created () {
    this.navs = routes.filter(nav => nav.meta.isTabbar === true)
    // this.navs = routes.filter(nav => nav.path === routes.path)
    // console.log(this.navs)
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    showMue () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'yh-icon';  /* project id 1275735 */
  src: url('//at.alicdn.com/t/font_1275735_tyepdgxbne.eot');
  src: url('//at.alicdn.com/t/font_1275735_tyepdgxbne.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1275735_tyepdgxbne.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1275735_tyepdgxbne.woff') format('woff'),
  url('//at.alicdn.com/t/font_1275735_tyepdgxbne.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1275735_tyepdgxbne.svg#iconfont') format('svg');
}
.yh-icon {
    font-family: yh-icon;
  }
.yh-mine {
  width: 100%;
  height: 100%;
  &-header {
    position: relative;
    height: 45px;
    line-height: 45px;
    width: 100%;
    font-size: 20px;
    display: flex;
    color: #fff;
    justify-content: space-between;
    // padding-left: 20px;
    // padding-right: 10px;
    background-color: #000;
    &-iconL {
      margin-left: 15px;
      font-size: 28px;
    }
    &-iconR {
      margin-right: 10px;
      font-size: 28px;
    }
    p {
      position: absolute;
      left: 35%;
      text-align: center;
      font-weight: 600;
      font-style: italic;
    }
    ul {
        position: absolute;
        top: 45px;
        right: 20px;
        width: 80px;;
        font-size: 14px;
        height: 120px;
        background: #000;
        li {
          height: 30px;
          padding-left: 10px;
          line-height: 30px;
          border-bottom: 1px solid #eee;
        }
      }
  }
}
</style>
