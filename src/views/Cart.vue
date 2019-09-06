<template>
  <div class="yh-cart">
    <YhHeader></YhHeader>
    <div v-if="isCartEmpty" class="yh-cart-empty">购物车空空如也，快去选购吧</div>
    <div v-else>
      <BlCartItem
      v-for="item in cart"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :img="item.img"
      :price="item.price"
      :num="item.num"
      :checked="item.checked"
    ></BlCartItem>
    <div class="yh-cart-total">
      <p class="yh-cart-total-p1">共有{{ totalCartNum }}件商品</p>
      <p class="yh-cart-total-p2">选中了{{ totalCheckedCartNum }}件</p>
      <p class="yh-cart-total-p3">总价：￥{{ totalMoney | tofix2 }}元</p>
    </div>
    </div>
    <van-submit-bar
      :price="totalMoney*100"
      button-text="提交订单"
    >
      <div class="bl-cart-check">
        <label>
          <input type="checkbox" :checked="total.isCheck" @change="toggleCheckedTotal">
          <span></span>
          <b>全选</b>
        </label>
      </div>
      <span slot="tip">
        你的收货地址不支持同城送, <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import BlCartItem from '@/components/BlCartItem'
import YhHeader from '@/components/YhHeader'
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  computed: {
    ...mapState([
      'cart',
      'total'
    ]),
    ...mapGetters([
      'totalCartNum',
      'totalCheckedCartNum',
      'totalMoney',
      'isCartEmpty'
    ])
  },
  components: {
    BlCartItem,
    YhHeader
  },
  methods: {
    ...mapMutations([
      'toggleCheckedTotal'
    ]),
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
$activeColor: #26a2ff;
.yh-cart {
  background-color: #f2f2f2;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  // background-color: #b0b0b0;
  &-header {
    width: 100%;
    height: 45px;
    background-color: #000;
    font-size: 18px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-back {
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 3px solid #ffffff;
      border-width: 0 0 3px 3px;
      transform: rotate(45deg);
      margin-left: 25px;
    }
    &-edit {
      margin-right: 15px;
      font-size: 14px;
    }
  }
  &-empty {
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 70%;
    font-size: 18px;
    color: #ee0000;
    font-weight: bolder;
  }
  &-total {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      width: 100%;
      background-color: #fff;
      line-height: 30px;
      height: 30px;
      font-size: 14px;
      &-p1 {
        width: 30%;
      }
      &-p2 {
        width: 25%;
      }
      &-p3 {
        width: 35%;
      }
   }
   &-bottom {
    border-top: 1px solid #dddddd;
    height: 50px;
    line-height: 50px;
    width: 100%;
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: space-around;
    &-check {
      width: 80px;
      text-align: center;
      input {
        display: none;
        &:checked + span {
          border-color: $activeColor;
          background-color: $activeColor;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 12px;
            height: 8px;
            border: 2px solid #fff;
            border-width: 0 0 2px 2px;
            transform: rotate(-45deg);
          }
        }
      }
      span {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid #666;
      margin-top: 20px;
      margin-right: 5px;
      }
    }
    &-yuan {
      color: #ee0000;
    }
    &-clearing {
      height: 30px;
      margin-top: 10px;
      width: 50px;
      border: none;
      outline: none;
      background-color: #ee0000;
      color: #fff;
      border-radius: 5px;
    }
   }
   .bl-cart-check {
    width: 70px;
    height: 30px;
    text-align: center;
    font-size: 12px;
    input {
      display: none;
      &:checked + span {
        border-color: $activeColor;
        background-color: $activeColor;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 2px;
          top: 1px;
          width: 10px;
          height: 6px;
          border: 2px solid #fff;
          border-width: 0 0 2px 2px;
          transform: rotate(-45deg);
        }
      }
    }
    span {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid #dddddd;
      border-radius: 50%;
      margin-top: 5px;
    }
    b {
      padding-left: 5px;
      padding-bottom: 5px;
    }
  }
}
</style>
