<template>
  <div
    class="yh-mine"
  >
    <YhHeader></YhHeader>
    <div class="yh-mine-login">
      <p
      v-if="isLogin"
      >欢迎您~{{ userinfo.displayName }}</p>
      <router-link
      v-else
      tag="p"
      to="/login"
      >登录 / 注册</router-link>
      <!-- <p>登录 / 注册</p> -->
    </div>
    <div class="yh-mine-default">
      <span>默认购物频道</span>
      <span>男士MEN<i class="yh-icon">&#xe602;</i></span>
    </div>
    <p class="yh-mine-line"></p>
    <div class="yh-mine-default">
      <span>我的订单</span>
      <span>全部订单<i class="yh-icon">&#xe602;</i></span>
    </div>
    <div class="yh-mine-serviceT">
      <div class="yh-mine-serviceT-left">
        <i class="yh-icon">&#xe6e2;</i>
        <span>待付款</span>
      </div>
      <div class="yh-mine-serviceT-center">
        <i class="yh-icon">&#xe60e;</i>
        <span>待发货</span>
      </div>
      <div class="yh-mine-serviceT-right">
        <i class="yh-icon">&#xe604;</i>
        <span>待收货</span>
      </div>
    </div>
    <div class="yh-mine-serviceB">
      <div class="yh-mine-serviceT-left">
        <i class="yh-icon">0</i>
        <span>商品收藏</span>
      </div>
      <div class="yh-mine-serviceT-center">
        <i class="yh-icon">0</i>
        <span>品牌收藏</span>
      </div>
      <div class="yh-mine-serviceT-right">
        <i class="yh-icon">0</i>
        <span>浏览记录</span>
      </div>
    </div>
    <p class="yh-mine-line"></p>
    <div class="yh-mine-money">
      <a href="javascript:;">
        <div class="yh-mine-money-left"><i class="yh-icon">&#xe798;</i></div>
        <div class="yh-mine-money-right">
          <span>优惠券</span>
          <i class="yh-icon">&#xe602;</i>
        </div>
      </a>
      <a href="javascript:;">
        <div class="yh-mine-money-left"><i class="yh-icon">&#xe605;</i></div>
        <div class="yh-mine-money-right">
          <span>有货币</span>
          <i class="yh-icon">&#xe602;</i>
        </div>
      </a>
    </div>
    <p class="yh-mine-line"></p>
    <div class="yh-mine-money">
      <a href="javascript:;">
        <div class="yh-mine-money-left"><i class="yh-icon">&#xe67d;</i></div>
        <div class="yh-mine-money-right">
          <span>消息</span>
          <i class="yh-icon">&#xe602;</i>
        </div>
      </a>
      <a href="javascript:;">
        <div class="yh-mine-money-left"><i class="yh-icon">&#xe601;</i></div>
        <div class="yh-mine-money-right">
          <span>服务与反馈</span>
          <i class="yh-icon">&#xe602;</i>
        </div>
      </a>
    </div>
    <p class="yh-mine-line"></p>
    <div class="yh-mine-imgT">
      <img src="https://img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60" alt="">
    </div>
    <p class="yh-mine-line"></p>
    <div class="yh-mine-imgB">
      <img src=https://img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60 alt="">
    </div>
    <BlProductItem
     v-for="product in list"
    :key="product.id"
    :id="product.id"
    :title="product.title"
    :price="product.price"
    :image="product.image"
    ></BlProductItem>
    <CrFooter></CrFooter>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'
import YhHeader from '@/components/YhHeader'
import CrFooter from '@/components/CrFooter'
import BlProductItem from '@/components/BlProductItem'
export default {
  components: {
    YhHeader,
    BlProductItem,
    CrFooter
  },
  // methods: {
  //   goBack () {
  //     this.$router.back()
  //   }
  // },
  computed: {
    ...mapState(['userinfo']),
    ...mapGetters(['isLogin'])
  },
  data () {
    return {
      cateId: '',
      list: []
    }
  },
  created () {
    // 从router取到当前的id值，在根据id获取列表数据
    this.cateId = this.$route.params.cateId
    // console.log(this.$route)
    this.getData()
  },
  beforeRouteUpdate (to, from, next) {
    // console.log(to)
    this.cateId = to.params.cateId
    this.getData()
    next()
  },
  methods: {
    getData () {
      this.$http.getProductMine(this.cateId).then(resp => {
        // console.log(resp)
        this.list = resp.data.items.list
      })
    }
  }
}
</script>

<style lang='scss' scoped>
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
.yh-app-main {
  overflow: scroll;
  z-index: 999;
}
.yh-mine {
  width: 100%;
  height: 100%;
  &-header {
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
  }
  &-login {
    overflow: hidden;
    width: 100%;
    height:  88px;
    background-image: url(//cdn.yoho.cn/yohobuywap-node/img/header-bg.b98d69725a.jpg);
    p {
      width: 111px;
      height: 30px;
      border: 1px solid #fff;
      margin: 0 auto;
      margin-top: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      font-size: 12px;
    }
  }
  &-line {
    height: 8px;
    width: 100%;
    background: #eee;
  }
  &-default {
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    :nth-child(1) {
      margin-left: 15px;
    }
    :nth-child(2) {
      float: right;
      margin-right: 20px;
      i {
        margin-left: 0px;
        font-size: 14px;
      }
    }
  }
  &-serviceT {
    border-top: 1px solid #eee;
    height: 60px;
    width: 100%;
    // background: yellow;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    .yh-icon {
      font-size: 25px;
      margin-bottom: 5px;
    }
    &-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
     &-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
     &-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
   &-serviceB {
    border-top: 1px solid #eee;
    height: 60px;
    width: 100%;
    // background: yellow;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    .yh-icon {
      font-size: 15px;
      margin-bottom: 5px;
    }
    &-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
     &-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
     &-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  &-money {
    width: 100%;
    height: 70px;
    // background: orange;
    a {
      width: 100%;
      height: 35px;
      display: block;
      }
      &-left {
      height: 35px;
      float: left;
      margin-right: 10px;
      margin-left: 15px;
      line-height: 35px;
        color: #000;
      }
      &-right {
      color: #000;
      float: left;
      width: 86%;
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #eee;
      span {
        float: left;
      }
      i {
        float: right;
        margin-right: 15px;
      }
      }
  }
  &-imgT {
    width: 100%;
    height: 77px;
    img {
      width: 100%;
      height: 77px;
    }
  }
  &-imgB {
    width: 100%;
    height: 100px;
    img {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
