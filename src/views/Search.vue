<template>
  <div class="yh-search">
    <YhHeader></YhHeader>
    <div class="yh-search-main">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
      <div class="yh-search-main-hot">
        <p class="yh-search-main-hot-title">热搜</p>
        <router-link
          tag="div"
          :to="`/mall/${hot.id}`"
          class="yh-search-main-hot-term"
          v-for="hot in hots"
          :key="hot.id"
        >
          {{ hot.name }}
        </router-link>
      </div>
      <div class="yh-search-main-white"></div>
      <div class="yh-search-main-box">
        <div class="yh-search-main-box-want">
          <h3 class="yh-search-main-box-title">猜你喜欢</h3>
          <ul class="yh-search-main-box-content">
            <router-link
              class="yh-search-main-box-content-item"
              tag="li"
              :to="`/mall/${want.id}`"
              v-for="want in wants"
              :key="want.id"
            >
              {{ want.name }}
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <CrFooter scrollContainer=".yh-search-main"></CrFooter>
  </div>
</template>

<script>
import YhHeader from '@/components/YhHeader'
import CrFooter from '@/components/CrFooter'
export default {
  data () {
    return {
      value: '',
      hots: [],
      wants: []
    }
  },
  components: {
    CrFooter,
    YhHeader
  },
  created () {
    this.$http.getTabs().then(resp => {
      this.hots = resp.data.list.slice(1, 11)
    })
    this.$http.getTabs().then(resp => {
      this.wants = resp.data.list.slice(4, 15)
    })
  },
  methods: {
    onSearch () {}
  }
}
</script>

<style lang="scss" scoped>
  .yh-search {
    height: 100%;
    display: flex;
    flex-direction: column;
    &-main {
      flex: 1;
      &-hot {
        color: #000;
        padding: 10px 12px;
        background-color: #f8f8f8;
        flex-flow:row nowrap;
        overflow-x: auto;
        white-space: nowrap;
        border-bottom: 1px solid #e0e0e0;
        &-title {
          height: 28px;
          display: inline-block;
          font-size: 15px;
          margin-right: 6px;
          line-height: 28px;
        }
        &-term {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          display: inline-block;
          font-size: 12px;
          height: 26px;
          line-height: 26px;
          margin-right: 6px;
          padding: 0 8px;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: auto;
        }
      }
      &-white {
        height: 12px;
        background-color: #f0f0f0;
      }
      &-box {
        background-color: #fff;
        padding: 12px;
        font-size: 12px;
        border-top: 1px solid #e0e0e0;
        &-title {
          color: #b0b0b0;
          margin-bottom: 8px;
        }
        &-content {
          &-item {
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            display: inline-block;
            font-size: 12px;
            height: 26px;
            line-height: 26px;
            margin: 0 8px 8px 0;
            padding: 0 8px;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: auto;
          }
        }
      }
    }
  }
</style>
