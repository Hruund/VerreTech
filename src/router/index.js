import { createRouter, createWebHashHistory } from 'vue-router'
import AppIndex from '../views/Index.vue'
import AppContact from '../views/Contact.vue'
import AppProduct from '../views/Products.vue'
import AppProductCategories from '../views/product/_idproduct.vue'
import AppUserSpace from '../views/UserSpace.vue'
import AppUnitProduct from '../views/FicheProduit.vue'
import AppLogin from '../views/Login.vue'
import AppSignUp from '../views/SignUp.vue'
import AppCart from '../views/Cart.vue'
import AppOrderDetails from '../views/order/_id.vue'
import AppChangeProduct from '../views/admin/_id.vue'
import AppPaiement from '../views/InformationsPaiement.vue'
import AppAdmin from '../views/Administration.vue'
import AppCards from '../views/PaymentForm.vue'
import AppMentions from '../views/footer_infos/MentionsLegales.vue'
import AppCookies from '../views/footer_infos/cookies.vue'
import AppPageDeco from '../views/pages_redirections/page_deconnexion.vue'
import AppPageErrDroits from '../views/pages_redirections/erreur_droits.vue'
import AppPageInex from '../views/pages_redirections/page_inexistante.vue'

import AppTestPDF from '../components/makePdf/makePdf.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppIndex
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
    path:'/products/:id',
    name: 'Produits from categories',
    component: AppProductCategories
  },
  {
    path: '/ficheProduit/:id',
    name: 'Fiche Produit',
    component: AppUnitProduct
  },
  {
    path: '/userspace',
    name: 'Espace membre',
    component: AppUserSpace 
  },
  {
    path: '/administration',
    name: 'Administration',
    component: AppAdmin
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
    path: '/order/:id',
    name: 'Détails de la commande',
    component: AppOrderDetails
  },
  {
    path: '/admin/:id',
    name: 'Modifier un article',
    component: AppChangeProduct
  },
  {
    path: '/checkout',
    name: 'Informations client',
    component: AppPaiement 
  } ,
  {
    path: '/cards',
    name: 'Informations paiement',
    component: AppCards 
  }, 
  {
    path: '/fr-fr/mentions-legales',
    name: 'Mentions Légales',
    component: AppMentions 
  },
  {
    path: '/fr-fr/charte-d-utilisation-des-cookies',
    name: 'Cookies',
    component: AppCookies 
  },
  {
    path: '/pdfGenerator',
    name: 'PDF',
    component: AppTestPDF 
  },
  {
    path: '/redir/page_deconnexion',
    name: 'Page de déconnexion',
    component: AppPageDeco
  },
  {
    path: '/redir/erreur_droits',
    name: 'Page erreur de droits',
    component: AppPageErrDroits
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page inexistante',
    component: AppPageInex
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
