import { createRouter, createWebHashHistory } from 'vue-router'
import AppIndex from '../views/Index.vue'
import About from '../views/About.vue'
import AppContact from '../views/Contact.vue'
import AppProduct from '../views/Products.vue'
import AppUserSpace from '../views/UserSpace.vue'
import AppUnitProduct from '../views/FicheProduit.vue'
import AppLogin from '../views/Login.vue'
import AppSignUp from '../views/SignUp.vue'
import AppCart from '../views/Cart.vue'
import AppPaiement from '../views/InformationsPaiement.vue'

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
  },
  {
    path: '/ficheProduit',
    name: 'Fiche Produit',
    component: AppUnitProduct
  },
  {
    path: '/userspace',
    name: 'Espace membre',
    component: AppUserSpace 
  },
  {
    path: '/login',
    name: 'Connexion',
    component: AppLogin 
  },
  {
    path: '/signup',
    name: 'Inscription',
    component: AppSignUp 
  },
  {
    path: '/panier',
    name: 'Panier',
    component: AppCart 
  },
  {
    path: '/checkout',
    name: 'Informations client',
    component: AppPaiement 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
