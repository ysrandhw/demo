<template>
  <div class="yh-footer">
    <div class="yh-footer-op">
      <router-link class="yh-footer-op-link" to="/login">登录</router-link>
      <span class="yh-footer-op-line">|</span>
      <router-link class="yh-footer-op-link" to="/">注册</router-link>
    </div>
    <div class="yh-footer-copyright">
      CopyRight©2007-2019 南京新与力文化传播有限公司
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scpoed>
  .yh-footer {
    background-color: #fff;
    &-op {
      height: 52px;
      line-height: 52px;
      padding: 0 12px;
      font-size: 12px;
      position: relative;
      &-link {
        color: #000;
      }
      &-line {
        color: #e0e0e0;
        margin: 0 12px;
      }
    }
    &-copyright {
      background-color: #eee;
      color: #666;
      font-size: 12px;
      height: 45px;
      line-height: 45px;
      text-align: center;
    }
  }
</style>
