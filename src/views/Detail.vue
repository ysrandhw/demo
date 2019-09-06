<template>
  <div class="detail">
    <header class="detail-header">
      <span class="detail-header-back" @click="goBack"></span>
      <p>商品详情</p>
      <span  class="detail-header-edit">编辑</span>
    </header>
    <van-swipe class="detail-swipe" :autoplay="3000">
      <van-swipe-item
        v-for="banner in detail.photo"
        :key="banner.id"
      >
        <img :src="banner.url" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="detail-title">{{ detail.title }}</div>
        <div class="detail-price">￥{{ detail.price | tofix2 }}</div>
      </van-cell>
      <van-cell class="detail-express">
        <van-col span="10">原价：￥{{ detail.originPrice | tofix2 }}</van-col>
        <van-col span="14">月销量：{{ detail.saleNum }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="detail-cell-group">
      <van-cell title="查看商品详情" />
      <img
        class="detail-cell-group-img"
        v-for="(bannerList, index) in detail.descContentList"
        :key="bannerList.photo?bannerList.photo.id:index"
        :src="bannerList.photo?bannerList.photo.url:''"
      >
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        <span class="detail-badge">{{ totalCartNum | gt99 }}</span>
        购物车
      </van-goods-action-icon>
      <van-goods-action-button
        type="warning"
        @click="addCard({
          id,
          img: detail.photo[0].url,
          title: detail.title,
          price: detail.price
        })"
      >
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
    <!-- <BackTop
      :heightToShow="500"
      scrollContainer=".detail"
    ></BackTop> -->
  </div>
</template>

<script>
import {
  mapMutations,
  mapGetters
} from 'vuex'
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant'
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data () {
    return {
      id: '',
      detail: {}
    }
  },
  created () {
    this.id = this.$route.query.id
    // 带上id请求详情页数据
    this.$http.getDetail(this.id).then(resp => {
      console.log(resp)
      this.detail = resp.data.detail
      console.log(this.detail.descContentList, 1111111111)
    })
  },
  computed: {
    ...mapGetters([
      'totalCartNum'
    ])
  },
  methods: {
    onClickCart () {
      this.$router.push('cart')
    },
    sorry () {
      Toast('暂无后续逻辑~')
    },
    goBack () {
      this.$router.back()
    },
    ...mapMutations([
      'addCard'
    ])
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding-bottom: 50px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
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
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    &-img {
      width: 100%;
    }
  }
  &-tag {
    margin-left: 5px;
  }
  &-badge {
    position: absolute;
    color: #ffffff;
    left: 70%;
    top: 5px;
    font-size: 12px;
    background: #ee0000;
    line-height: 16px;
    padding: 0 5px;
    border-radius: 10px;
    z-index: 1;
  }
}
</style>
