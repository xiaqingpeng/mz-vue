// 城市模块
import http from '@/utils/http';

const state = {
  // 全部城市
  allCitys: [],
};

const getters = {
  /**
   * 热门城市
   */
  hotCitys (state) {
    return state.allCitys.filter(item => {
      return item.isHot;
    })
  }
};

const mutations = {
  setAllCitys (state, allCitys) {
    state.allCitys = allCitys;
  }
};

const actions = {
  getAllCitys ({ commit }) {
    http.get('/api/city').then(res => {
      if (res.code === 0) {
        commit('setAllCitys', res.data.cities);
      }
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
