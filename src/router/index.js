import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [ 
  {
    path: '/add/task',
    name: 'AddTask',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddTask.vue')
  },
  {
    path: '/show/task',
    name: 'AllTasks',
    component: () => import('../views/AllTasks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
