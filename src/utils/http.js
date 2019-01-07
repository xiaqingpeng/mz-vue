import axios from 'axios';
import { Toast } from 'vant';

console.log(process.env);
// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'http://58.87.126.209:9090'
    : 'http://58.87.126.209:9090'
});

// 请求拦截
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
)

// 响应拦截
instance.interceptors.response.use(
  response => {
    // 直接返回 response.data 数据
    return response.data;
  },
  error => {
    Toast.fail(error.message);
    return Promise.reject(error);
  }
)

// 暴露实例
export default instance;
