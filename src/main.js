import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './utils/http';

import './styles/base.scss';

Vue.config.productionTip = false;
// 给Vue原型上绑定 axios 实例。
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
