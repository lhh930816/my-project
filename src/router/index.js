import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main/main'
import Home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['@/views/home/home.vue'], resolve)
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
//  {
//    path: '/home',
//    name: 'Home',
//    component: Home
//  }
  ]
})
