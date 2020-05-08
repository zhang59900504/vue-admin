import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title:'重庆市鸿章网络有限公司',keyword:'success-list',description:'重庆市鸿章网络有限公司'},
  },
  {
    path: '/about/:id',
    name: 'About',
    meta: {title:'重庆市鸿章网络有限公司',keyword:'success-list',description:'重庆市鸿章网络有限公司'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
