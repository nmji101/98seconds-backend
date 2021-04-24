module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:9000',
        ws: true,
        changeOrigin:true,
        logLevel: 'debug'
      }
    }
  }
}
