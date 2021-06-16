import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Markdown from '@/view/markdown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/md',
      name: 'md',
      component: Markdown
    }
  ]
})
