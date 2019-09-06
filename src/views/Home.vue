<template>
  <div class="yh-home">
    <div class="yh-home-header">
      <van-button
        type="primary"
        @click="showPopup"
        class="yh-home-header-nav yh-icon"
      >
        &#xe64d;
      </van-button>
      <div class="yh-home-header-logo"></div>
      <div class="yh-home-header-search">
        <router-link to="/search" class="yh-icon">&#xe63d;</router-link>
      </div>
    </div>
    <van-popup
      class="yh-home-model"
      v-model="show"
      position="left"
      :style="{ height: '100%', width: '85%'}"
    >
      <ul class="yh-home-model-list">
        <router-link
          class="yh-home-model-list-item"
          tag="li"
          v-for="cate in cates"
          :key="cate.id"
          :to="`/mall/${ cate.id }`"
        >
          <i class="yh-icon yh-home-model-list-item-icon">&#xe618;</i>
          <p class="yh-home-model-list-item-name">{{ cate.name }}</p>
        </router-link>
      </ul>
    </van-popup>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <router-link
            tag="div"
            class="swiper-slide"
            v-for="banner in banners"
            :key="banner.id"
            to="/mall"
          >
            <img :src="banner.imageUrl" :alt="banner.title">
          </router-link>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <ul class="yh-home-icon-list">
      <router-link
        class="yh-home-icon-list-item"
        tag="li"
        :to="`/mall/${cate.id}`"
        v-for="cate in cates"
        :key="cate.id"
      >
        <img
          class="yh-home-icon-list-item-icon"
          :src="cate.imageUrl"
        >
        <p class="yh-home-icon-list-item-title">{{ cate.name }}</p>
      </router-link>
    </ul>
    <div class="yh-home-banner">
      <router-link to="/mall" class="yh-home-banner-middle">
        <img
          v-if="banners[0]"
          class="yh-home-banner-middle-pic"
          :src="banners[0].imageUrl"
        >
      </router-link>
    </div>
    <div class="yh-home-category">
      <h4 class="yh-home-category-hot">热门品类</h4>
      <ul class="yh-home-category-list">
        <router-link
          v-for="tab in tabs"
          :key="tab.id"
          class="yh-home-category-list-item"
          tag="li"
          :to="`/mall/${tab.id}`"
        >
          <img
            class="yh-home-category-list-item-pic"
            :src="tab.imageUrl"
          >
          <span class="yh-home-category-list-item-name">{{ tab.name }}</span>
        </router-link>
      </ul>
    </div>
    <div class="yh-home-single">
      <div class="yh-home-single-header">
        <h4 class="yh-home-single-header-title">人气推荐</h4>
        <a href="javascript:;" class="yh-icon yh-home-single-header-more">&#xe6fc;</a>
      </div>
      <router-link
        class="yh-home-single-one"
        tag="div"
        to="/mall"
      >
        <img
          v-if="banners[1]"
          class="yh-home-single-one-pic"
          :src="banners[1].imageUrl"
        >
      </router-link>
      <ul class="yh-home-single-goods">
        <router-link
          v-for="top in tops"
          :key="top.id"
          :to="`/detail/?id=${top.id}`"
          class="yh-home-single-goods-item"
        >
          <img class="yh-home-single-goods-item-pic" :src="top.image">
          <div class="yh-home-single-goods-item-info">
            <p class="yh-home-single-goods-item-info-title">{{ top.title }}</p>
            <p class="yh-home-single-goods-item-info-price">￥{{ top.price }}</p>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="yh-home-like">
      <div class="yh-home-like-title">
        <i class="yh-icon yh-home-like-title-icon">&#xe71a;</i>
        <span>你可能喜欢</span>
      </div>
      <div
        class="yh-home-like-list"
        v-infinite-scroll="getData"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <BlProductItem
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.image"
        >
        </BlProductItem>
      </div>
    </div>
    <CrFooter></CrFooter>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import CrFooter from '@/components/CrFooter'
import BlProductItem from '@/components/BlProductItem'
export default {
  data () {
    return {
      banners: [],
      tabs: [],
      cates: [],
      tops: [],
      products: [],
      show: false,
      isEnd: false,
      nextIndex: 0,
      loading: false
    }
  },
  components: {
    CrFooter,
    BlProductItem
  },
  created () {
    this.getData()
    this.$http.getTabs().then(resp => {
      this.tabs = resp.data.list.slice(1, 17)
      this.cates = resp.data.list.slice(0, 4)
    })
  },
  methods: {
    showPopup () {
      this.show = true
    },
    getData () {
      this.loading = true
      this.$http.getBanners(this.nextIndex).then(resp => {
      // console.log(resp)
        this.banners = resp.data.banners
        this.tops = resp.data.topList
        this.products = this.products.concat(resp.data.items.list)
        this.isEnd = resp.data.items.isEnd
        this.nextIndex = resp.data.items.nextIndex
        this.loading = false
        this.$nextTick().then(() => {
          /* eslint-disable no-new */
          new Swiper('.swiper-container', {
            autoplay: true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @font-face {
  font-family: 'iconfont';  /* project id 1283308 */
  src: url('//at.alicdn.com/t/font_1283308_js4pgmp8dqh.eot');
  src: url('//at.alicdn.com/t/font_1283308_js4pgmp8dqh.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1283308_js4pgmp8dqh.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1283308_js4pgmp8dqh.woff') format('woff'),
  url('//at.alicdn.com/t/font_1283308_js4pgmp8dqh.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1283308_js4pgmp8dqh.svg#iconfont') format('svg');
  }
  .yh-icon {
    font-family: iconfont;
    line-height: 45px;
    font-size: 20px;
    color: #ffffff;
  }
  .yh-home {
    background: #f0f0f0;
    &-header {
      height: 45px;
      display: flex;
      justify-content: space-between;
      background: linear-gradient(#323232,#414141);
      &-nav {
        width: 20px;
        height: 100%;
        background-color: #323232;
        border: none;
        // margin: 0 20px;
      }
      &-logo {
        width: 104px;
        height: 100%;
        background: url(https://cdn.yoho.cn/yohobuywap-node/img/yohologo02.4b84a9fb7d.png) no-repeat 50%;
        background-size: 100%;
      }
      &-search {
        width: 45px;
        height: 100%;
      }
    }
    &-model {
      &-list {
        border-top: 1px solid #e0e0e0;
        &-item {
          border-bottom: 1px solid #e0e0e0;
          height: 45px;
          line-height: 45px;
          font-size: 16px;
          font-weight: 700;
          padding-left: 10px;
          color: #444;
          &-icon {
            font-size: 24px;
            color: #444;
            display: inline-block;
            margin-right: 10px;
          }
          &-name {
            display: inline-block;
          }
        }
      }
    }
    .swiper-container {
      width: 100%;
      height: 0;
      padding-top: 400 / 1080 * 100%;
      position: relative;
    }
    .swiper-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
    .swiper-slide {
      img {
        width: 100%;
      }
    }
    &-icon-list {
      width: 100%;
      height: 75px;
      display: flex;
      padding: 15px 0 2px 0;
      background-color: #fff;
      border-bottom: 1px solid #e0e0e0;
      &-item {
        width: 25%;
        height: 100%;
        &-icon {
          width: 40px;
          height: 40px;
          display: block;
          margin: 0 auto;
          background-size: 100%;
        }
        &-title {
          height: 22px;
          text-align: center;
          color: #444;
          font-size: 12PX;
          line-height: 22PX;
        }
      }
    }
    &-banner {
      width: 100%;
      height: 100px;
      margin-top: 14px;
      &-middle {
        width: 100%;
        height: 100%;
        display: block;
        &-pic {
          width: 100%;
          height: 100%;
        }
      }
    }
    &-category {
      width: 100%;
      &-hot {
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #000;
        font-size: 15px;
      }
      &-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        &-item {
          width: 25%;
          height: 87px;
          display: block;
          box-sizing: border-box;
          border-left: 1px solid #e0e0e0;
          border-top: 1px solid #e0e0e0;
          &-pic {
            width: 70%;
            height: 70%;
            display: block;
            margin: 0 auto;
          }
          &-name {
            display: block;
            line-height: 22px;
            font-size: 12px;
            color: #b0b0b0;
            text-align: center;
          }
        }
      }
    }
    &-single {
      width: 100%;
      &-header {
        position: relative;
        &-title {
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #000;
          font-size: 15px;
        }
        &-more {
          position: absolute;
          color: #b0b0b0;
          right: 20px;
          top: 0;
        }
      }
      &-one {
        width: 100%;
        height: 100px;
        &-pic {
          width: 100%;
          height: 100%;
        }
      }
      &-goods {
        width: auto;
        flex-flow:row nowrap;
        overflow-x: auto;
        white-space: nowrap;
        padding: 12.5px 0 8.5px 13px;
        background-color: #fff;
        ::after {
          display:block;
          clear:both;
          content:"";
          visibility:hidden;
          height:0;
          zoom: 1;
        }
        &-item {
          display: inline-block;
          width: 30%;
          height: 100%;
          margin-right: 13px;
          &-pic {
            display: block;
            height: 103px;
            width: 100%;
          }
          &-info {
            line-height: 16px;
            font-size: 12px;
            text-align: center;
            color: #000;
            &-title {
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
    &-like {
      background: #fff;
      border-top: 1px solid #ccc;
      margin-top: 15px;
      &-title {
        height: 52px;
        color: #dadada;
        font-size: 18px;
        text-align: center;
        &-icon {
          line-height: 52px;
          color: #dadada;
          margin-right: 4px;
        }
      }
    }
    &-footer {
      background-color: #eee;
      color: #666;
      font-size: 12px;
      height: 45px;
      line-height: 45px;
      text-align: center;
    }
  }
</style>
