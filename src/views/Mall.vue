<template>
  <div class="yh-mall">
    <div class="yh-mall-header">
      <p class="yh-mall-header-search">
        <img src="../../public/image/放大镜.png" alt="" class="yh-mall-header-search-icon">
        <span class="yh-mall-header-search-text">搜索商品</span>
      </p>
    </div>
    <div class="yh-mall-nav">
      <div class="yh-mall-nav-aside">
        <ul>
          <router-link
            v-for="tab in tabs"
            :key="tab.id"
            :to="`/mall/${tab.id}`"
            tag="li"
          >
            {{ tab.name }}
          </router-link>
        </ul>
      </div>
      <div class="yh-mall-nav-section">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.$http.getTabs().then(resp => {
      console.log(resp)
      this.tabs = resp.data.list.slice(1)
      const { cateId = this.tabs[0].id } = this.$route.params
      this.$router.push(`/mall/${cateId}`)
    })
  }
}
</script>

<style lang="scss" scoped>
  $activeColor: #26a2ff;
  .yh-mall {
    height: 100%;
    &-header {
      width: 100%;
      height: 42px;
      background: #f8f8f8;
      overflow: hidden;
      &-search {
        height: 30px;
        width: 95%;
        background: #fff;
        margin: 0 auto;
        margin-top: 6px;
        border-radius: 50px;
        &-icon {
          width: 16px;
          height: 16px;
          margin-left: 10px;
          margin-top: 7px;
          float: left;
        }
        &-text {
          font-size: 14px;
          color: #e6e6e6;
          float: left;
          line-height: 30px;
          margin-left: 10px;
        }
      }
    }
    &-nav{
      display: flex;
      height: 100%;
      overflow: hidden;
      &-aside {
        line-height: 44px;
        font-size: 14px;
        overflow-x: hidden;
        height: 100%;
        li {
          padding-left: 10px;
          &.router-link-exact-active,
          &.router-link-active {
            background: #eee;
          }
        }
      }
      &-section {
        flex: 1;
        overflow-x: hidden;
      }
    }
  }
</style>
