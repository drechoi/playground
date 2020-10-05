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

console.log(process.env)

console.log('router' + process.env)

export default new Router({
  mode: 'history',
  base: '/playground/',
  routes
})
