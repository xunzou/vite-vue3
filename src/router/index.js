/*
* @Author: ylq
 * @Date: 2021-04-07 18:19:20
 * @Desc: VUE-router4
 * @Last Modified by: ylq
 * @Last Modified time: 2021-04-09 16:55:51
 */
import {createRouter,createWebHistory} from 'vue-router'
import storage from '../utils/storage'
import routes from './routes.js'


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
// 当前路径保存
const loginRouter = to => {
  return {
    name: 'login',
    query: {
      // 将当前路径传参
      back: to.fullPath
    }
  }
}

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from,1)
  let isAuthenticated = storage.getItem('token')
  console.log(24,isAuthenticated)
  // 已登录
  if (to.name !== 'login' && isAuthenticated){
    
    next()

  } else {
    // 未登录
    if(to.name == 'error' || to.name == 'login'){
      next()
    } else {
      next(loginRouter(to))
    }
  }
})

export default router
