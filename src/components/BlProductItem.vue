<template>
  <router-link
    tag="div"
    class="bl-product-item"
    :to="`/detail?id=${id}`"
    v-if="price"
  >
    <div class="bl-product-item-img">
      <img :src="image" alt="">
    </div>
    <p class="bl-product-item-title">{{ title }}</p>
    <p class="bl-product-item-sale">
      <span class="bl-product-item-sale__price">¥ {{ price | tofix2 }}</span>
      <span class="bl-product-item-sale__tag">包邮</span>
    </p>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: false
    }
  }
}
</script>

<style lang="scss">
$activeColor: #26a2ff;
.bl-product-item {
  box-sizing: border-box;
  width: 50%;
  padding: 8px;
  display: inline-block;
  &-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  &-title {
    font-size: 12px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-sale {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    line-height: 28px;
    &__price {
      color: #e00;
      font-size: 14px;
    }
  }
}
</style>
