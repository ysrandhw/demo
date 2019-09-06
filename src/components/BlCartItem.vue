<template>
  <div class="bl-cart-item">
    <div class="bl-cart-item-check">
      <label>
        <input type="checkbox" :checked="checked" @change="toggleChecked({ id })">
        <span></span>
      </label>
    </div>
    <div class="bl-cart-item-img">
      <img :src="img" alt="">
    </div>
    <div class="bl-cart-item-content">
      <p class="bl-cart-item-content_title">{{ title }}</p>
      <div class="bl-cart-item-content-action">
        <span class="bl-cart-item-content-action_price">￥{{ price | tofix2 }}</span>
        <span class="bl-cart-item-content-action-counter">
          <span @click="cutNum({ id })">-</span>
          <span>{{ num }}</span>
          <span @click="addNum({ id })">+</span>
        </span>
        <button class="bl-cart-item-content-action-del" @click="delItem({ id })">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    num: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations([
      'toggleChecked',
      'addNum',
      'cutNum',
      'delItem'
    ])
  }
}
</script>

<style lang="scss" scoped>
$activeColor: #26a2ff;
.bl-cart-item {
  display: flex;
  margin-top: 10px;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 10px;
  &-check {
    width: 40px;
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
      margin-top: 30px;
      border-radius: 50%;
    }
  }
  &-img {
    width: 80px;
    img {
      width: 100%
    }
  }
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 8px;
    &_title {
      font-size: 12px;
      line-height: 20px;
    }
    &-action {
      display: flex;
      justify-content: space-between;
      &_price {
        color: #ee0000;
        font-size: 14px;
      }
      &-counter {
        height: 20px;
        border: 1px solid #999;
        border-radius: 3px;
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          &:nth-child(2) {
            border: 1px solid #9999;
            border-width: 0 1px;
            width: auto;
            padding: 0 5px;
          }
        }
      }
      &-del {
        background-color: #ee0000;
        border: none;
        outline: none;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        width: 50px;
        height: 25px;
      }
    }
  }
}
</style>
