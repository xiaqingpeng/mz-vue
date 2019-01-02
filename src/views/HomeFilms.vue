<template>
  <div class="home-films">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in banners" :key="item.bannerId">
        <img :src="item.imgUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

export default {
  name: 'HomeFilms',

  data () {
    return {
      banners: [], // 轮播图图片
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
    }
  },

  created () {
    this.getBanner();
  }
}
</script>

<style lang="scss">
.home-films {
  .van-swipe {
    height: 210px;
    img {
      width: 100%;
    }
  }
}
</style>
