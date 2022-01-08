<template>
    <div class="container mx-auto lg:h-screen md:h-full bg-gray-100 p-2">
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
        <div class="m-10">
            <p style="text-align:left;">
                Taxes
                <span class="float-right">
                    4€
                </span>
            </p>
            <p style="text-align:left; font-weight: bold;">
                Total du panier
                <span style="float:right;">
                    {{totalProduct}}
                </span>
            </p>
            <div class="">
                <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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
            productsList: [
                {
                    id : 1,
                    name : "toto",
                    image : 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                    price : 250,
                    categorie : "Paroi de douche"
                },
                {
                    id : 2,
                    name : "toto",
                    image : 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                    price : 250,
                    categorie : "Paroi de douche"
                }
            ],
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