const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 5119,  //run cmd command propt for open ports {netstat -aon}
    proxy: {
      '/ecommerce' : {
        target : 'http://localhost:8082',
        ws : true,
        changeOrigin : true
      }
    }
  }
})

