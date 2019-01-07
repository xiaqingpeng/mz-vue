module.exports = {
  baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/mz-vue/',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://58.87.126.209:9090'
      }
    }
  }
}
