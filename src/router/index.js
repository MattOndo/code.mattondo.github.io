import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Portfolio from '@/pages/Portfolio'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'is-active',
  routes: [
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
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
