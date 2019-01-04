<template>
  <div class="warp">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getList"
      >
      <ul>
        <li v-for="film in films"
          :key="film.filmId">
          <div class="img">
            <img :src="film.poster" alt="" />
          </div>
          <div class="info">
            <div>
              <span class="name">{{ film.name }}</span>
              <span class="type">{{ film.filmType && film.filmType.name }}</span>
            </div>
            <div>
              <span class="label">观众评分</span>
              <span class="grade">{{ film.grade }}</span>
            </div>
            <div>
              <span class="label">主演： {{ film.actors }}</span>
            </div>
            <div>
              <span class="label">{{ film.nation }} | {{ film.runtime }}分钟</span>
            </div>
          </div>
          <div class="buy">购票</div>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);

export default {
  name: 'ComingSoon',

  data () {
    return {
      pageNum: 0, // 当前页码
      pageSize: 10, // 每页显示条数
      totalPages: 2, // 总页数
      films: [], // 影片数据

      loading: false,
      finished: false,
    }
  },

  methods: {
    /**
     * 获取影片数据
     */
    getList () {
      this.pageNum++;

      this.$http.get('/api/film', {
        params: {
          type: 2,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
      }).then(res => {
        if (res.code === 0) {
          // 设置总页数
          this.totalPages = Math.ceil(res.data.total / this.pageSize);
          this.films = this.films.concat(res.data.films);
        } else {
          this.$Toast.fail(res.msg);
        }

        // 加载状态结束
        this.loading = false;

        if (this.pageNum >= this.totalPages) {
          this.finished = true;
        }
      })
    }
  }
};
</script>
