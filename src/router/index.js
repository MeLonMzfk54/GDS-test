import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/ToDo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: "*",
    redirect: "/",
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
