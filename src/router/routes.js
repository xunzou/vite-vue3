/*
* @Author: ylq
 * @Date: 2021-04-09 14:53:39
 * @Desc: Routes
 * @Last Modified by: ylq
 * @Last Modified time: 2021-04-09 15:28:45
 */

import Layout from '../layout/layout.vue'
import Login from '../pages/login/login.vue'
import Home from '../pages/home/home.vue'
import Error404 from '../pages/404.vue'




const constantRouterMap = [{
  path: '/login',
  name: 'login',
  component: Login,
  meta: { pageTitle: '用户登录' }
}]
export default constantRouterMap


//动态路由
export const asyncRouterMap = () =>{
  return [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      meta: {pageTitle: '首页',},
      children: [
        {
          path: '/home',
          name: 'home',
          icon: 'ti-home',
          component: Home,
          meta: { pageTitle: '首页' }
        },
      ]
    },




    

    
    {
      path: '*',
      name: 'error',
      component: Error404,
      meta: { pageTitle: '404' }
    }
  ]
}