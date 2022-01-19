<template>
    <div class="bg-center">
        <h2 class="mt-4 mb-4 font-bold text-4xl text-gray-900">Administration</h2>
    </div>

    <div class="md:flex md:items-start md:place-content-center" v-if="canBeDisplay">
      <div class="md:w-1/6 border-2 rounded-sm">
        <!-- Affichage des boutons disponibles pour l'administrateur -->
        <div v-for="tab in tabs" :key="tab" >
            <button class="flex-shrink-0 text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none" :class="tab == selected ? 'bg-gray-900 hover:bg-gray-900 text-white' : 'bg-gray-100'" @click="selected = tab;">
                {{ tab }}
            </button>
        </div>
      </div>
      
      <component :is="selected" class="md:ml-10 md:w-1/2"></component>
  </div>
</template>

<script>
import Statistiques from '../components/admin/Statistiques.vue'
import Gestion from '../components/admin/Gestion.vue'
const axios = require('axios');
export default {
  data: function() {
    return {
      tabs: ["Statistiques", "Gestion"],
      selected: "Statistiques",
      canBeDisplay : false
    };
  },
  components: {
    Statistiques,
    Gestion
  },
  async mounted(){
     if (this.checkIfuserIsConnected()) {
      let isAdmin = await this.userIsAdmin();
      if (isAdmin) {
        this.canBeDisplay = true;
      } else {
        alert("Vous n'êtes pas administrateur");
      }
    }
  },
  methods:{
    /**
    * Vérification des droits Admin
    */
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
              .post("http://127.0.0.1:3000/api/checkToken_admin/", null, {
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
    /**
    * Vérification de la connexion utilisateur
    */
    checkIfuserIsConnected() {
      try {
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
            actualCookies.access_token &&
            actualCookies.id &&
            actualCookies.username
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    },
  }
};
</script>