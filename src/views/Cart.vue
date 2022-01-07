<template>
    <div class="container mx-auto h-screen bg-gray-100 p-6">
        <div class="text-4xl font-bold mb-6">Panier</div>
        <!-- Cards des articles du panier -->
        <ProductCart
            v-for="productcart in productsList"
            :key="productcart.id"
            :name="productcart.name"
            :imageLink="productcart.image"
            :price="productcart.price"
            :categorie="productcart.categorie"
        ></ProductCart>
        <!-- Résumé du montant à payer -->
        <hr style="height: 2px; width: 50%; background-color: black;" class="border-solid mx-auto mt-8">
        <div class="container mx-auto px-64 m-10">
            <p style="text-align:left;">
                Taxes
                <span style="float:right;">
                    4€
                </span>
            </p>
            <p style="text-align:left; font-weight: bold;">
                Total du panier
                <span style="float:right;">
                    {{totalProduct}}
                </span>
            </p>
            <div>
                <button class="mr-20 shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    <router-link to="/products"> Continuer mes achats </router-link>
                </button>
                <button class="shadow bg-blue-400 hover:bg-blue-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    <router-link to="/checkout"> Valider mon panier </router-link>
                </button>
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
            productsList: [],
            readyToDisplay : false
        }

    },
    mounted() {
        this.getProducts();
    },
    computed:{
        productListIsEmpty(){
            if(typeof this.productsList != "undefined"){
                return true;
            }
            return this.productsList.length === 0;
        },
        totalProduct(){
          return "mettre la somme des prix";
        }
    },
    methods:{
        getProducts(){
            //axios call for getting products list without filter
            axios.get('http://127.0.0.1:3000/api/cart_product')
                .then(response => {
                    console.log("aa");
                    this.productsList = response.data;
                    this.readyToDisplay = true;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>