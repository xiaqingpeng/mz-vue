<template>
  <div class="warp">
    <ul>
      <li>
        <div class="img">
          <img src="" alt="" />
        </div>
        <div class="info">
          <div>
            <span class="name">海王</span>
            <span class="type">3D</span>
          </div>
          <div>
            <span class="label">观众评分</span>
            <span class="grade">7</span>
          </div>
          <div>
            <span class="label">主演： 帕特里克·威尔森 妮可·基德曼 杜夫·龙格尔 温子仁 杰森·莫玛 安柏·赫德</span>
          </div>
          <div>
            <span class="label">美国 澳大利亚 | 143分钟</span>
          </div>
        </div>
        <div class="buy">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NowPlaying',

  data () {
    return {
      pageNum: 1,     // 当前页码
      pageSize: 10,   // 每页显示条数
      totalPages: 0,  // 总页数
      films: [],      // 影片数据
    }
  },

  methods: {
    /**
     * 获取影片数据
     */
    getList () {
      this.$http.get('/api/film', {
        params: {
          type: 1,
          pageNum: 1,
          pageSize: 10,
        }
      }).then(res => {
        if (res.code === 0) {
          // 设置
          this.total = res.total;
        }
      })
    }
  },

  created () {
    this.getList();
  }
};
</script>
