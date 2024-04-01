import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/pages/AppHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      navbar: true
    }
  }
]

const index = createRouter({
  history: createMemoryHistory(),
  routes
})

export default index
