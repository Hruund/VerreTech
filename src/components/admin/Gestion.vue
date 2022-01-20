<template>
  <div class="mb-10">
    <div class="space-y-2">
      <div>
        <h2 class="mt-4 mb-4 font-semi-bold text-3xl text-gray-900">
          Ajouter un article
        </h2>
      </div>
      <!-- Formulaire d'ajout d'un produit -->
      <form class="container mx-auto mb-12">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-1/2 px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="article-name"
            >
              Nom de l'article
            </label>
            <input
              v-model="article_name"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="article-name"
              type="text"
              placeholder="Parroi de douche"
            />
          </div>

          <div class="w-1/2 px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="article-name"
            >
              Image
            </label>
            <input
              v-model="article_imageLink"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="article-image"
              type="text"
              placeholder="https://superbeImage.fr"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="article-desc"
            >
              Description
            </label>
            <input
              v-model="article_desc"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="article-desc"
              type="text"
              placeholder="Parroi de douche en verre trempé ultra-résistante."
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="price"
            >
              Prix
            </label>
            <input
              v-model="article_price"
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="price"
              type="number"
              placeholder="100"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="category"
            >
              Categorie
            </label>
            <div class="relative">
              <select
                v-model="article_categorie"
                class="
                  block
                  appearance-none
                  w-full
                  bg-gray-200
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                id="category"
              >
                <option value="1">Parois de douches</option>
                <option value="2">Cloison</option>
                <option value="3">Insert Cheminée</option>
                <option value="4">Miroir</option>
                <option value="5">Crédence de cuisine</option>
                <option value="6">Verre décoratif</option>
              </select>
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  px-2
                  text-gray-700
                "
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="font-bold mt-6">
          Boutiques Verre-Tech proposant de retirer cet article :
        </div>

        <div class="md:flex w-full place-content-center mt-3">
          <label class="inline-flex items-center mr-6">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-gray-600"
              checked
            /><span class="ml-2 text-gray-700">Lille</span>
          </label>

          <label class="inline-flex items-center mr-6">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-red-600"
              checked
            /><span class="ml-2 text-gray-700">Versailles</span>
          </label>

          <label class="inline-flex items-center mr-6">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-orange-600"
              checked
            /><span class="ml-2 text-gray-700">Toulon</span>
          </label>

          <label class="inline-flex items-center mr-6">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-yellow-600"
              checked
            /><span class="ml-2 text-gray-700">Bordeaux</span>
          </label>

          <label class="inline-flex items-center mr-6">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-green-600"
              checked
            /><span class="ml-2 text-gray-700">Nantes</span>
          </label>

          <label class="inline-flex items-center mr-6">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-teal-600"
              checked
            /><span class="ml-2 text-gray-700">Lyon</span>
          </label>
        </div>

        <button
          @click="addArticle"
          id="button"
          type="submit"
          class="
            w-full
            px-6
            py-3
            mt-6
            text-lg text-white
            transition-all
            duration-150
            ease-linear
            rounded-lg
            shadow
            outline-none
            bg-gray-900
            hover:bg-gray-800 hover:shadow-lg
            focus:outline-none
          "
        >
          Valider
        </button>
      </form>
      <!-- Affichage du tableau des articles à modifier ou supprimer -->
      <div>
        <h2 class="mt-24 mb-4 font-semi-bold text-3xl text-gray-900">
          Modifier ou supprimer des articles
        </h2>
      </div>
    </div>
    <table class="container mx-auto">
      <tr>
        <th>NOM DE L'ARTICLE</th>
        <th>DESCRIPTION</th>
        <th>PRIX</th>
        <th>CATEGORIE</th>
        <th>ACTION</th>
      </tr>
      <ProductInAdmin
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :description="product.feature"
        :image="product.image"
        :price="product.price"
        :category="product.id_categorie"
        :id="product.id"
        @deleteItem="deleteItem"
      />
    </table>
  </div>
</template>
<script>
const axios = require("axios");
import ProductInAdmin from "./ProductInAdmin";
export default {
  components: {
    ProductInAdmin,
  },
  data() {
    return {
      products: [],
      article_name: "",
      article_desc: "",
      article_price: "",
      article_categorie: "",
      article_id: "",
      article_imageLink: "",
    };
  },
  async mounted() {
    if (this.checkIfuserIsConnected()) {
      let isAdmin = await this.userIsAdmin();
      if (isAdmin) {
        this.getProducts();
      } else {
        alert("Vous n'êtes pas administrateur");
      }
    }
  },
  methods: {
    /**
    * Vérification si l'utilisateur est administrateur
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
              .post("http://195.110.58.84:4000/api/checkToken_admin/", null, {
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
    * Vérification si l'utilisateur est connecté
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
    getProducts() {
      //axios call for getting products list without filter
      axios
        .get("http://195.110.58.84:5000/api/products")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addArticle() {
      //test every field and send to axios post request
      if (
        this.article_name == "" ||
        this.article_desc == "" ||
        this.article_price == "" ||
        this.article_categorie == "" ||
        this.article_imageLink == ""
      ) {
        alert("Veuillez remplir tous les champs");
      } else {
        const objectToSend = {
          name: this.article_name,
          feature: this.article_desc,
          price: this.article_price,
          id_categorie: this.article_categorie,
          image: this.article_imageLink,
        };
        axios
          .post("http://195.110.58.84:5000/api/addProduct", null, {
            params: objectToSend,
          })
          .then((response) => {
            console.warn(response);
            this.getProducts();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    deleteItem(id) {
      console.log("product deleted : ", id);
      this.getProducts();
    },
  },
};
</script>