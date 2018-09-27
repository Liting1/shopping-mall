import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import goods from '@/pages/goods'
import surface from '@/pages/surface'
import computer from '@/pages/computer'
import game from '@/pages/game'
import shopcart from '@/pages/shopcart'
import user from '@/pages/user'
import login from '@/pages/login'
import test from '@/pages/test'
import notfound from '@/pages/404'
Vue.use(Router)

export default new Router({
  routes: [{
    name: 'index',
    path: '/', // 主页
    component: index
  }, {
    name: 'goods',
    path: '/goods/:id', // 商品页
    component: goods
  }, {
    name: 'surface',
    path: '/Surface',
    component: surface
  }, {
    name: 'computer',
    path: '/Computer',
    component: computer
  }, {
    name: 'game',
    path: '/Game',
    component: game
  }, {
    name: 'shopcart',
    path: '/shopcart',
    component: shopcart
  }, {
    name: 'user',
    path: '/user',
    component: user
  }, {
    name: 'test',
    path: '/test',
    component: test
  }, {
    name: 'login',
    path: '/login',
    component: login
  }, {
    path: '*',
    component: notfound
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: '/dist'
})
