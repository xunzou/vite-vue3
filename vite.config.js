import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require('path')

// https://vitejs.dev/config/

let api = 'http://api.xiaolutg.com';
let crm = 'http://api.crm.xiaolutuiguang.com';
let tk = 'http://api.track.jwsem.com/';
console.log(123, api)
console.log(456, crm)
console.log(789, tk)


export default defineConfig({
  // resolve:{
  //   alias:{
  //     '/@/': resolve(__dirname, './src/'),
  //   },
  // },
  server: {
    open:true,
    proxy: {
      '/api': {
        target: api,
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/ins\/v2/, ''),
        // pathRewrite:{
        //   '^/api': '/api/ins/v2'
        // },
      },
      '/crm': {
        target: crm,
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/v3/, ''),
        // pathRewrite:{
        //   '^/crm': '/api/v3/'
        // },
      },
      '/tk': {
        target: tk,
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/v1/, ''),
        // pathRewrite:{
        //   '^/tk': '/api/v1/'
        // },
      },
    }
  },
  plugins: [vue()]
})
