<template>
    <div class="container mx-auto">
        <div class="text-4xl font-bold">Paroi de douche</div>
        <nav id="filter" class="w-full z-30 top-0 px-6 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-filtre">
                        Filtrer
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-filtre" type="text">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-budget">
                        Budget
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-budget" type="text" placeholder="250">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nom">
                        Nom
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nom" type="text" placeholder="Arbor">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-typeVerre">
                        Type de verre
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-typeVerre">
                            <option>Transparent</option>
                            <option>Sablé</option>
                            <option>Opaque</option>
                            <option>Dépoli</option>
                            <option>Opaque</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="cards" class="w-full z-30 top-0 px-6 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between px-12 py-3" v-if="readyToDisplay">
                <Product
                    v-for="product in productsList"
                    :key="product.id"
                    :id="product.id"
                    :name="product.name"
                    :imageLink="product.image"
                    :price="product.price"
                ></Product>
            </div>
        </div>
        <div class="text-4xl font-bold">1   2   3</div>
    </div>
</template>
<style scoped>
.maxHeightCenter{
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
<script>

import Product from "./Product.vue";
const axios = require('axios');

export default {
     components: {
        Product
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
        productListIsEmpty(){
            if(typeof this.productsList != "undefined"){
                return true;
            }
            return this.productsList.length === 0;
        }
    },
    methods:{
        getProducts(){
            //axios call for getting products list without filter
            axios.get('http://127.0.0.1:3000/api/products')
                .then(response => {
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