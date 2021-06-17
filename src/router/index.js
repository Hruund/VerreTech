import { createRouter, createWebHashHistory } from 'vue-router'
import AppIndex from '../views/Index.vue'
import About from '../views/About.vue'
import AppContact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppIndex
  },
  {
    path: '/about',
    name: 'About',
    component: About 
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AppContact 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
