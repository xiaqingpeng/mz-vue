<template>
  <div class="home-films">

    <div class="city-fixed">
      <span>深圳</span>
      <i class="iconfont icon-xiala"></i>
    </div>

    <LvHeader title="电影" v-show="showHeader"></LvHeader>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in banners" :key="item.bannerId">
        <img :src="item.imgUrl" alt="" />
      </van-swipe-item>
    </van-swipe>

    <div class="tabs-wrapper" :style="{top: showHeader ? '44px' : '0'}">
      <ul class="tabs">
        <router-link to="/films/nowPlaying" active-class="active" class="tabs-item">正在热映</router-link>
        <router-link to="/films/comingSoon" active-class="active" class="tabs-item">即将上映</router-link>
      </ul>
      <div class="link" :style="{left: $route.name === 'comingSoon' ? '50%' : '0px'}">
        <span></span>
      </div>
    </div>

    <div class="film-list-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import LvHeader from '@/components/Header';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

export default {
  name: 'HomeFilms',

  components: {
    LvHeader
  },

  data () {
    return {
      banners: [], // 轮播图图片
      showHeader: false, // 显示顶部Header
    }
  },

  methods: {
    /**
     * 获取banner轮播图
     */
    getBanner () {
      this.$http.get('/api/banner')
        .then(res => {
          if (res.code === 0) {
            this.banners = res.data;
          }
        })
    },

    /**
     * 滚动事件的处理函数
     * 用来处理顶部显示
     */
    onScroll () {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= 210) {
        this.showHeader = true;
      } else {
        this.showHeader = false;
      }
    }
  },

  created () {
    this.getBanner();
    window.onscroll = this.onScroll;
  }
}
</script>

<style lang="scss">
@import '@/styles/common/mixins.scss';

.home-films {
  .van-swipe {
    height: 210px;
    img {
      width: 100%;
    }
  }

  .tabs-wrapper {
    @include border-bottom-1px;
    position: sticky;
    top: 0;
    z-index: 3000;
    height: 50px;
    background-color: #fff;
    .tabs {
      display: flex;
      height: 100%;
      .tabs-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 14px;
        color: #191a1b;
        cursor: pointer;

        &.active {
          color: #ff5f16;
        }
      }
    }
    .link {
      position: absolute;
      z-index: 3001;
      left: 0;
      bottom: 0;
      width: 50%;
      transition: left 0.3s ease;
      span {
        display: block;
        width: 56px;
        border-bottom: 2px solid #ff5f16;
        border-radius: 20px;
        margin: 0 auto;
        overflow: hidden;
      }
    }
  }

  .film-list-content {
    background-color: #fff;
    margin-bottom: 60px;
    ul {
      li {
        @include border-bottom-1px;
        display: flex;
        margin: 0 15px;
        padding: 15px 0;
      }

      .img {
        flex-shrink: 0;
        width: 66px;
        height: 94px;
        img {
          width: 100%;
        }
      }

      .info {
        flex: 1;
        min-width: 100px;
        padding: 0 10px;
        font-size: 14px;
        &>div {
          width: 100%;
          height: 22px;
          line-height: 22px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label {
          color: #797d82;
          margin-right: 2px;
        }
        .name {
          font-size: 16px;
          color: #191a1b;
        }
        .type {
          font-size: 12px;
          color: #fff;
          background: #d2d6dc;
          padding: 0 2px;
        }
        .grade {
          color: #ffb232;
        }
      }

      .buy {
        flex-shrink: 0;
        align-self: center;
        width: 50px;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        color: #ff5f16;
        border: 1px solid #ff5f16;
        text-align: center;
        border-radius: 4px;
      }
    }
  }

  .city-fixed {
    display: flex;
    align-items: center;
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
  }
}
</style>
