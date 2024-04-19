import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/pages/AppHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const index = createRouter({
  history: createMemoryHistory(),
  routes
})

export default index
