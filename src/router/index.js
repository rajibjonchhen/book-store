/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
    routes : [
        {
            path : '/',
            name : 'Home',
            component : Home
        },
        {
            path : '/about',
            name : 'About',
            component : About
        },
        {
            path : '/contact',
            name : 'Contact',
            component : Contact
        },
        {
            path : '/detail',
            name : 'Detail',
            component : Detail
        },
        {
            path : '/ligin',
            name : 'Login',
            component : Login
        }
]
})