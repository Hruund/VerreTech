import { createRouter, createWebHashHistory } from 'vue-router'
import AppIndex from '../views/Index.vue'
import About from '../views/About.vue'
import AppContact from '../views/Contact.vue'
import AppProduct from '../views/Products.vue'

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
  },
  {
    path: '/products',
    name: 'Produits',
    component: AppProduct 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
