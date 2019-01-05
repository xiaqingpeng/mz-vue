module.exports = {
  baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/mz-vue/',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090/'
      }
    }
  }
}
