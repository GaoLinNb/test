const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:'./',
  devServer: {
    proxy: {
      '/gl': {//请求前缀
        target: 'http://127.0.0.1:8000',
    pathRewrite:{'^/gl':''}
        //ws: true,//用于支持websocket
        //changeOrigin: true,//用于控制请求头的host配置
      },
    }
  }
})
