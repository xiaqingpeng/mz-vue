import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({

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
    return response;
  },
  error => {
    return Promise.reject(error);
  }
)

// 暴露实例
export default instance;
