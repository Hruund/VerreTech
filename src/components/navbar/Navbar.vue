<template>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex float-left">
            <router-link to="/"><img class="mx-6 h-5 md:h-8 w-auto lg:block" src="https://i.imgur.com/imy5E5o.png" alt="Workflow" /></router-link>
          </div>
          <div class="hidden sm:block sm:ml-6 absolute inset-y-0 right-0 mt-3 mr-24">
            <div class="flex space-x-4">
              <div class="relative text-gray-600">
                <input class="mx-6 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  v-model="searchInput" type="search" name="search" placeholder="Rechercher un produit">
                <button @click="searchProduct" type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                  <svg class="text-gray-600 h-4 w-12 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                    width="512px" height="512px">
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
              <a v-for="item in navigation" :key="item.name" v-on:click="navTabSelected = item.name;" :href="item.href" :class="[item.name == navTabSelected ? 'bg-gray-900 text-white' : 'text-gray-700 font-bold hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.name == navTabSelected ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Panier -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="p-1 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <i class="fas fa-shopping-cart fa-2x">
                  <span v-if="productsList.length != 0" class="absolute right-0 top-0 rounded-full bg-red-600 w-5 h-5 p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {{ this.getNumberProduct() }}
                  </span>
                </i>
              </MenuButton>
            </div>
            <!-- Affichage du panier -->
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-64 py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <div :class="[active ? '' : '', '']">
                    <div class="flex border rounded-md relative">

                      <div class="bg-white w-full">

                        <header class="bg-gray-300 font-extrabold py-2">
                          Mon panier
                        </header>

                        <div class="flex flex-col justify-center" v-if="cartIsReady">
                          <ProductCartMini
                              v-for="productcart in productsList"
                              :key="productcart.id"
                              :id="productcart.id"
                              :quantity="productcart.quantity"
                              :name="productcart.name"
                              :imageLink="productcart.image"
                              :categorie="productcart.categorie"
                          ><hr>
                          </ProductCartMini>
                        </div>
                      </div>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <div :class="[active ? '' : '']">
                  <router-link to="/panier" v-if="productsList.length != 0" class="block px-4 py-2 text-sm font-extrabold text-white bg-gray-800 hover:bg-gray-600">
                    Visualiser mon panier
                  </router-link>
                  <div v-else class="block px-4 py-2 text-sm font-extrabold text-white bg-gray-800">
                    Panier vide
                  </div>
                </div>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <!-- Profile Utilisateur -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="bg-gray-900 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="(userIsConnected)?'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80':'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-user-icon-man-profil-homme-d-affaires-avatar-personne-ic%C3%B4ne-illustration-vectorielle.jpg?ver=6'" alt="" />
              </MenuButton>
            </div>
            <!-- L'utilisateur est connecté -->
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems v-if="userIsConnected" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <!-- Accès à son espace personnel -->
                <MenuItem v-slot="{ active }">
                  <router-link to="/userspace"><p v-on:click="navTabSelected = '';" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Espace membre</p></router-link>
                </MenuItem>
                <!-- Accès à l'espace administration -->
                <MenuItem v-if="displayAdminSpace" v-slot="{ active }">
                  <router-link to="/administration"><p v-on:click="navTabSelected = '';" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Administration</p></router-link>
                </MenuItem>
                <!-- Déconnexion de l'utilisateur -->
                <MenuItem v-slot="{ active }">
                  <router-link to="/redir/page_deconnexion"><p v-on:click="navTabSelected = 'Accueil';disconnectedUser()" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Déconnexion</p></router-link>
                </MenuItem>
              </MenuItems>
            </transition>
            <!-- L'utilisateur est déconnecté -->
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems v-if="!userIsConnected" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <p v-on:click="navTabSelected = '';" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Vous n'êtes pas connecté</p>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link to="/login"><p :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Connexion/inscription</p></router-link>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navigation" :key="item.name" v-on:click="navTabSelected = item.name;" :href="item.href" :class="[item.name == navTabSelected ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.name == navTabSelected ? 'page' : undefined">{{ item.name }}</a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>


<script>
const axios = require('axios');
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

import ProductCartMini from "../cart/product_cart_mini.vue";

// Boutons disponibles lorsque l'utilisateur n'est pas connecté
const navigation = [
  { name: 'Accueil', href: '#/', current: true },
  { name: 'Catalogue', href: '#/products', current: false },
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    XIcon,
    ProductCartMini,
  },
  data(){
    return{
      productsList: [
        // {
        //   id: 1,
        //   name: 'Crédence cuisine',
        //   image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        //   categorie: 'Crédence',
        // },
        // {
        //   id: 2,
        //   name: 'Crédence cuisine',
        //   image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        //   categorie: 'Crédence',
        // }
      ],
      cartIsReady : false,
      navTabSelected: 'Accueil',
      userIsConnected: false,
      displayAdminSpace : false
    }
  },
  async mounted(){
    document.addEventListener("userLoggedIn",this.updateFront);
    document.addEventListener("userAddProductCart",this.updateFront);
    document.addEventListener("updateFront",this.updateFront);
    this.updateCart();
    this.updateNavbar();
    if (this.checkIfuserIsConnected()) {
      let isAdmin = await this.userIsAdmin();
      if (isAdmin) {
        this.displayAdminSpace = true;
      }
    }
  },
  watch:{
    searchInput(){
      this.searchProduct();
    }
  },
  methods:{
    updateFront(){
      this.updateCart();
      this.updateNavbar();
    },
    getNumberProduct(){
      let numberProduct = 0;
      this.productsList.forEach(product => {
        numberProduct += product.quantity;
      });
      return numberProduct;
    },
    userIsAdmin() {
      return new Promise((resolve) => {
        if (document.cookie.length > 0) {
          const cookies = document.cookie.split(";");
          let actualCookies = {};
          for (let i = 0; i < cookies.length; i++) {
            let cookiename = cookies[i].split("=")[0];
            let cookievalue = cookies[i].split("=")[1];
            actualCookies[cookiename.trim()] = cookievalue;
          }
          //test if access_token, id and username exist and is not null
          if (
            actualCookies.access_token && actualCookies.id && actualCookies.email) {
            const paramsToUse = {
              access_token: actualCookies.access_token,
              id: actualCookies.id,
              email: actualCookies.email,
            };
            axios
              .post("http://"+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_TOKEN_PORT+"/api/checkToken_admin/", null, {
                params: paramsToUse,
              })
              .then((response) => {
                if (response.data.isAdmin == true) {
                  resolve(true);
                } else {
                  resolve(false)
                }
              })
              .catch((error) => {
                console.log(error);
                resolve(false)
              });
          } else {
            resolve(false)
          }
        } else {
          resolve(false)
        }
      });
    },
    searchProduct(){
      this.searchInput
    },
    updateCart(){
      if(this.checkIfuserIsConnected()){
        const cookies = document.cookie.split(';');
        let actualCookies = {};
        for(let i = 0; i < cookies.length; i++){
          let cookiename = cookies[i].split('=')[0];
          let cookievalue = cookies[i].split('=')[1];
          actualCookies[cookiename.trim()] = cookievalue;
        }
        let idOfClient = actualCookies.id;
        if (typeof idOfClient != "undefined" && idOfClient != "" && idOfClient != null ) {
          axios.get('http://'+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_CART_PORT+'/api/cart/'+idOfClient)
             .then(response => {
                  this.productsList = response.data.products;
                  this.cartIsReady = false;
              })
        } 
      } else {
        this.cartIsReady = true;
      }
    },
    disconnectedUser() {
      this.userIsConnected = false;
      var allCookies = document.cookie.split(';');
      // The "expire" attribute of every cookie is 
      // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
      for (var i = 0; i < allCookies.length; i++)
          document.cookie = allCookies[i] + "=;expires="
          + new Date(0).toUTCString();    
    },
    async updateNavbar(){
      if (this.checkIfuserIsConnected()) {
        this.userIsConnected = true;
        let isAdmin = await this.userIsAdmin();
        if (isAdmin) {
          this.displayAdminSpace = true;
        } else {
          this.displayAdminSpace = false;
        }
      } else {
        this.userIsConnected = false;
      }
    },
    checkIfuserIsConnected(){
      try {
        if (document.cookie.length > 0) {
          const cookies = document.cookie.split(';');
          let actualCookies = {};
          for (let i = 0; i < cookies.length; i++) {
            let cookiename = cookies[i].split('=')[0];
            let cookievalue = cookies[i].split('=')[1];
            actualCookies[cookiename.trim()] = cookievalue;
          }
          //test if access_token, id and username exist and is not null
          if (actualCookies.access_token && actualCookies.id && actualCookies.username) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } catch(err) {
        return false;
      }
    },
  },
  beforeUnmount(){
    document.removeEventListener("userLoggedIn",this.updateNavbar);
  },
  setup() {
    const open = ref(false)

    return {
      navigation,
      open,
    }
  },
}
</script>