import { createRouter, createWebHashHistory } from 'vue-router'
import Vue from 'vue'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/detail/:bookId',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')