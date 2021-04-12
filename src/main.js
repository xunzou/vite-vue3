import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import store from './store/index'

const app = createApp(App)

app
.use(Router)// 路由
.use(store)// store
.mount('#app')

