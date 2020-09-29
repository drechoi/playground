import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Landing from '@/views/Landing'
import Content from '@/views/Content'
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
    path: '/*',
    name: 'error',
    component: Error
  }
]

export default new Router({
  mode: 'history',
  routes
})
