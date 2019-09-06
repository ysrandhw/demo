<template>
  <div
    class="yh-cate"
    v-infinite-scroll="getData"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <BlProductItem
      v-for="product in list"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :image="product.image"
    ></BlProductItem>
    <button v-if="isEnd" class="yh-cate-btn-loadmore">没有更多了</button>
    <button v-else class="yh-cate-btn-loadmore" @click="getData">加载更多。。。</button>
    <BackTop
      :heightToShow="500"
      scrollContainer=".yh-mall-nav-section"
    ></BackTop>
  </div>
</template>

<script>
import BlProductItem from '@/components/BlProductItem'
export default {
  data () {
    return {
      cateId: '',
      list: [],
      isEnd: false,
      nextIndex: 0,
      loading: false
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
    this.list = []
    this.nextIndex = 0
    this.getData()
    next()
  },
  methods: {
    getData () {
      this.loading = true
      this.$http.getProductList(this.cateId, this.nextIndex).then(resp => {
        console.log(resp)
        this.list = this.list.concat(resp.data.items.list)
        // this.list = [...this.list, ...resp.data.items.list]
        this.isEnd = resp.data.items.isEnd
        this.nextIndex = resp.data.items.nextIndex
        this.loading = false
      })
    }
  },
  components: {
    BlProductItem
  }
}
</script>

<style lang="scss">
.yh-cate-btn-loadmore {
  font-size: 12px;
  border: none;
  background-color:  #26a2ff;
  color: #fff;
  line-height: 30px;
  height: 30px;
  border-radius: 3px;
  width: 100%;
}
</style>
