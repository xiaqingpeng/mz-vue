<template>
  <div class="city">
    <LvHeader title="当前城市-"></LvHeader>

    <van-search
      placeholder="输入城市名或拼音"
      show-action
      v-model="value"
      />

    <div class="lv-indexlist">
      <ul class="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail"
                v-for="city in hotCitys"
                :key="city.cityId">
                <div class="city-item-text">{{ city.name }}</div>
              </li>
            </ul>
          </div>
        </div>
        <li class="lv-indexsection">
          <p class="lv-indexsection__index">A</p>
          <ul>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
            <li>安顺</li>
            <li>安康</li>
          </ul>
        </li>
        <li class="lv-indexsection">
          <p class="lv-indexsection__index">B</p>
          <ul>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
            <li>安顺</li>
            <li>安康</li>
          </ul>
        </li>
        <li class="lv-indexsection">
          <p class="lv-indexsection__index">C</p>
          <ul>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
            <li>安顺</li>
            <li>安康</li>
          </ul>
        </li>
        <li class="lv-indexsection">
          <p class="lv-indexsection__index">D</p>
          <ul>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
            <li>安顺</li>
            <li>安康</li>
          </ul>
        </li>
        <li class="lv-indexsection">
          <p class="lv-indexsection__index">E</p>
          <ul>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
            <li>安顺</li>
            <li>安康</li>
            <li>安康</li>
            <li>安康</li>
            <li>安康</li>
            <li>安康</li>
            <li>安康</li>
            <li>安康</li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import LvHeader from '@/components/Header';
import { Search } from 'vant';

Vue.use(Search);

export default {
  name: 'City',

  components: {
    LvHeader
  },

  data () {
    return {
      value: '',
    }
  },

  computed: {
    ...mapState('city', [
      'allCitys'
    ]),
    ...mapGetters('city', [
      'hotCitys'
    ])
  }
}
</script>

<style lang="scss">
@import '@/styles/common/mixins.scss';

.city {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 44px;

  .lv-indexlist {
    width: 100%;
    flex: 1;
    display: flex;
    background: #fff;
    overflow: hidden;
    &__content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 100%;

      li {
        height: 18px;
        font-size: 12px;
        color: #191a1b;
        padding: 0 6px;
      }
    }

    .lv-indexsection {
      &__index {
        background-color: #f4f4f4;
        color: #797d82;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 15px;
        margin-bottom: -1px;
        li {
          @include border-bottom-1px;
          position: relative;
          width: 33.33%;
          height: 48px;
          line-height: 48px;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }

    .recommend-city {
      padding-left: 15px;
      padding-top: 15px;

      .city-index-title {
        font-size: 13px;
        color: #797d82;
        margin-bottom: 10px;
      }

      .city-index-detail {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .city-item-detail {
          width: calc((100vw - 33px)/3);
          text-align: center;
          padding-bottom: 15px;
          box-sizing: border-box;
          float: left;

          .city-item-text {
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            border-radius: 3px;
            box-sizing: border-box;
            margin: 0 7.5px;
            font-size: 14px;
            color: #191a1b;
          }
        }
      }
    }
  }
}
</style>
