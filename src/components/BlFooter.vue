<template>
  <ul class="yh-footer">
    <router-link
    class="yh-footer-item"
    tag="li"
    v-for="nav in navs"
    :key="nav.name"
    :to="nav.path"
    :event="$route.path.includes(nav.path) ? '' : 'click'"
    >
    <span class="yh-footer-item-badge" v-if="nav.name === 'cart'">{{ totalCartNum | gt99 }}</span>
    <i class="yh-footer-item-icon yh-icon" v-html="nav.meta.icon">abc</i>
    <span class="yh-footer-item-text">{{ nav.meta.title }}</span>
    </router-link>
  </ul>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import routes from '@/router/routes'
export default {
  data () {
    return {
      navs: []
    }
  },
  computed: {
    ...mapGetters([
      'totalCartNum'
    ])
  },
  created () {
    this.navs = routes.filter(nav => nav.meta.isTabbar === true)
    // console.log(this.navs)
  }
}
</script>

<style lang="scss" scoped>
  $activeColor: #26a2ff;
  .yh-footer {
    height: 52px;
    display: flex;
    border-top: 1px solid #b0b0b0;
    position: relative;
    &-item {
      flex: 1;
      height: 52px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #b0b0b0;
      &-icon {
        height: 32px;
        line-height: 32px;
        font-size: 20px;
      }
      &-text {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
      }
      &-badge {
        position: absolute;
        color: #ffffff;
        left: 65%;
        top: 5px;
        font-size: 12px;
        background: #ee0000;
        line-height: 16px;
        padding: 0 5px;
        border-radius: 10px;
      }
    }
    .router-link-exact-active,
    .router-link-active {
      color: #414141;
    }
  }
</style>
