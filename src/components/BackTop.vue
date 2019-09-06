<template>
  <div
    class="yh-back-top"
    v-back-top="{ heightToShow, scrollContainer }"
    @click="backToTop"
  >
    <van-icon name="arrow-up" />
  </div>
</template>

<script>
export default {
  props: {
    heightToShow: {
      type: Number,
      required: true
    },
    scrollContainer: {
      type: String,
      required: true
    }
  },
  methods: {
    backToTop () {
      document.querySelector(this.scrollContainer).scrollTop = 0
    }
  },
  directives: {
    backTop: {
      inserted (el, binding) {
        console.log({ el, binding })
        const { heightToShow, scrollContainer } = binding.value
        document.querySelector(scrollContainer).onscroll = function () {
          let top = this.scrollTop
          if (top > heightToShow) {
            el.style.display = 'block'
          } else {
            el.style.display = 'none'
          }
        }
      }
    }
  }
}
</script>

<style>
.yh-back-top {
  width: 40px;
  height: 40px;
  position: fixed;
  display: none;
  bottom: 70px;
  right: 20px;
  border-radius: 10px;
  background: #1989fa;
  color: #fff;
  line-height: 40px;
  text-align: center;
  opacity: .7;
}
</style>
