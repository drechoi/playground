import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Landing from '@/views/Landing'
import Content from '@/views/Content'
import Login from '@/views/Login'
import Error from '@/views/Error'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/*',
    name: 'error',
    component: Error
  }
]

console.log('router' + process.env.BASE_URL)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
