<template>
    <div class="mx-auto container bg-gray-100 p-6 h-full">
        <div class="text-4xl font-bold mb-6">Panier</div>
        <!-- Cards des articles du panier -->
        <ProductCart
            v-for="productcart in productsList"
            :key="productcart.id"
            :id="productcart.id"
            :name="productcart.name"
            :imageLink="productcart.image"
            :price="productcart.price"
            :categorie="productcart.categorie"
            :quantity="productcart.quantity"
            @deleteProductFromCart="deleteProductFromCart"
        ></ProductCart>
        <!-- Résumé du montant à payer -->
        <hr style="height: 2px; width: 50%; background-color: black;" class="border-solid mx-auto mt-8">
        <div class="m-10">
            <p style="text-align:left; font-weight: bold;">
                Total du panier
                <span style="float:right;">
                    {{totalProduct}} €
                </span>
            </p>
            <div class="">
                <router-link to="/products">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-6" type="button">
                        Continuer mes achats
                    </button>
                </router-link>
                <router-link to="/checkout">
                    <button class="shadow bg-blue-400 hover:bg-blue-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Valider mon panier
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>

import ProductCart from "../components/cart/product_cart.vue";
const axios = require('axios').default;

export default {
     components: {
        ProductCart
     },
    data(){
        return{
            productsList: [
            ],
            readyToDisplay : false
        }

    },
    mounted() {
        this.getProducts();
    },
    computed:{
        /**
        * Vérification du panier, vide ou avec articles
        */
        productListIsEmpty(){
            if (typeof this.productsList != "undefined") {
                return true;
            }
            return this.productsList.length === 0;
        },
        /**
        * Calcul de la somme des articles
        */
        totalProduct(){
            let sum = 0;
            for (let i = 0; i < this.productsList.length; i++) {
                sum += (parseFloat(this.productsList[i].price) * parseFloat(this.productsList[i].quantity));
            }
            return sum;
        }
    },
    methods:{
        /**
        * récupérations des articles du panier
        */
        getProducts(){
            const cookies = document.cookie.split(';');
            let actualCookies = {};
            for(let i = 0; i < cookies.length; i++){
                let cookiename = cookies[i].split('=')[0];
                let cookievalue = cookies[i].split('=')[1];
                actualCookies[cookiename.trim()] = cookievalue;
            }
            let idClient = actualCookies.id;
            axios.get('http://'+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_CART_PORT+'/api/cart/'+idClient)
                .then(response => {
                    console.log(response);
                    this.productsList = response.data.products;
                    this.readyToDisplay = true;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        /**
        * Suppression d'article du panier
        */
        deleteProductFromCart(idOfProduct){
            const cookies = document.cookie.split(';');
            let actualCookies = {};
            for(let i = 0; i < cookies.length; i++){
                let cookiename = cookies[i].split('=')[0];
                let cookievalue = cookies[i].split('=')[1];
                actualCookies[cookiename.trim()] = cookievalue;
            }
            let idClient = actualCookies.id;
            let idProduct = idOfProduct;
            axios.delete(`http://${process.env.VUE_APP_SERVER_IP}:${process.env.VUE_APP_CART_PORT}/api/cart/${idClient}/${idProduct}`)
                .then(response => {
                    console.log(response);
                    this.getProducts();
                })
                .catch(error => {
                    console.log(error);
                });
            console.log("deleteproductfromcart : "+idOfProduct);
        },
  }
}
</script>