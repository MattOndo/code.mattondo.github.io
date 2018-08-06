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
      component: Home,
      meta: {
        title: 'Matt Ondo | Home',
        metaTags: [
          {
            name: 'description',
            content: 'Matt Ondo\'s digital playground.'
          },
          {
            property: 'og:description',
            content: 'Matt Ondo\'s digital playground.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'Matt Ondo | About',
        metaTags: [
          {
            name: 'description',
            content: 'About Matt Ondo.'
          },
          {
            property: 'og:description',
            content: 'About Matt Ondo.'
          }
        ]
      }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      meta: {
        title: 'Matt Ondo | Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'Matt Ondo\'s Portfolio of Work.'
          },
          {
            property: 'og:description',
            content: 'Matt Ondo\'s Portfolio of Work.'
          }
        ]
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Matt Ondo | Contact',
        metaTags: [
          {
            name: 'description',
            content: 'Contact Matt Ondo'
          },
          {
            property: 'og:description',
            content: 'Contact Matt Ondo'
          }
        ]
      }
    }
  ]
})
