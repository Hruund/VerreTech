<template>
    <div class="container mx-auto bg-gray-100 p-6 md:h-full">
        <div class="text-4xl font-bold mb-6">Fiche produit</div>
        <div class="my-12 px-4 md:px-12">
            <div class="flex items-start place-content-center flex-wrap -mx-1 lg:-mx-4">
                <div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <span class="text-xl font-semibold">Catégories</span>
                    <div class="border-2 rounded-sm w-full mt-3 bg-gray-200 text-gray-900 rounded-lg shadow">
                        <ul id="category_but" class="divide-y-2 divide-gray-100">
                            <li class="flex-shrink-0 py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Paroi de douche </router-link></button></li>
                            <li class="flex-shrink-0 py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Crédence de cuisine </router-link></button></li>
                            <li class="flex-shrink-0 py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Cloison </router-link></button></li>
                            <li class="flex-shrink-0 py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Insert de cheminée </router-link></button></li>
                            <li class="flex-shrink-0 py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Verre décoratif </router-link></button></li>
                            <li class="flex-shrink-0 py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Tous les produits </router-link></button></li>
                        </ul>
                    </div>
                    <router-link to="/products">
                        <button class="py-2 px-4 w-full mt-8 text-lg text-white rounded-lg shadow outline-none bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:outline-none">
                            Retour
                        </button>
                    </router-link>
                </div>
                <!-- Card de la fiche Produit -->
                <div class="mx-auto flex mb-10 my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-2/3">
                    <div class="px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl flex flex-col sm:flex-row md:w-96 place-content-center" v-if="readyToDisplay">
                        <div class="lg:w-1/4 mr-6 lg:my-auto">
                            <img class="rounded-3xl lg:h-auto lg:w-64" :src="productInfo.image" alt="image"/>
                        </div>
                        <div class="w-3/4 text-left">
                            <h1 class="text-gray-900 font-bold text-xl mb-3 mt-3">
                                {{ productInfo.name }}
                            </h1>
                            <span class="text-gray-900 text-2xl leading-none mr-2">{{ productInfo.price }} €</span><span class="text-gray-600">Taxes incluses</span>
                            <p>
                                <span class="mt-4 font-semibold"> Description : </span>
                                <br>
                                {{ productInfo.description }}
                            </p>
                            <div class="mt-4">
                                <span class="text-xl">Quantité : </span>
                                <select class="bg-gray-200 border border-gray-200 text-gray-700 py-2 px-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantite">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="mx-auto mt-4">
                                <button id="buttonAdd" @click="addProductToCart" class="px-6 py-3 text-lg mr-2 mb-2 text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:outline-none">
                                    Ajouter au panier
                                </button>

                                <button id="buttonBuy" class="px-6 py-3 text-lg text-white rounded-lg shadow outline-none bg-blue-600 hover:bg-blue-500 hover:shadow-lg focus:outline-none">
                                    <router-link to="/panier"> Acheter maintenant </router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fin Card de la fiche Produit -->
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
import { useRouter } from 'vue-router';


export default {
    data(){
        return{
            id : null,
            name : "Paroi de douche Arbor",
            image : 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            price : 250,
            description : "La paroi de douche Arbor sera parfaitement étanche pour éviter les projections d'eau tout en sublimant votre salle de bain. Facile à nettoyer, laissant passer la lumière en apportant confort et modernité à la pièce.",
            readyToDisplay : false
        }
    },
    mounted() {
        this.getInfosProduct();
    },
    computed:{
        productListIsEmpty(){
            if(typeof this.productInfo != "undefined"){
                return true;
            }
            return this.productInfo.length === 0;
        }
    },
    methods:{
        checkIfuserIsConnected(){
        try{
            if(document.cookie.length > 0){
                const cookies = document.cookie.split(';');
                let actualCookies = {};
                for(let i = 0; i < cookies.length; i++){
                    let cookiename = cookies[i].split('=')[0];
                    let cookievalue = cookies[i].split('=')[1];
                    actualCookies[cookiename.trim()] = cookievalue;
                }
                //test if access_token, id and username exist and is not null
                if(actualCookies.access_token && actualCookies.id && actualCookies.username){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }catch(err){
            return false;
        }
        },
        getInfosProduct(){
            let idToUse = useRouter().currentRoute._value.params.id;
            this.id = idToUse;
            //axios call for getting products list without filter
            axios.get('http://127.0.0.1:3000/api/product/'+idToUse)
                .then(response => {
                    this.productInfo = response.data;
                    this.readyToDisplay = true;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        addProductToCart(){
            if(this.checkIfuserIsConnected()){
                if(this.id != null){
                    let idProduct = this.id;
                    let quantityToUse = document.querySelector("#quantite").value

                    const cookies = document.cookie.split(';');
                    let actualCookies = {};
                    for(let i = 0; i < cookies.length; i++){
                        let cookiename = cookies[i].split('=')[0];
                        let cookievalue = cookies[i].split('=')[1];
                        actualCookies[cookiename.trim()] = cookievalue;
                    }
                    let idClient = actualCookies.id;
                    if(idClient == null || idClient == ""){
                        return;
                    }
                    const paramsToSend = {
                        idProduct : idProduct,
                        quantityToUse : quantityToUse,
                        idClient : idClient
                    }
                    axios.post('http:///127.0.0.1:3000/api/cart/'+actualCookies.id, null, {params : paramsToSend})
                        .then(response => {
                            console.log(response);
                            alert("Produit ajouté au panier");
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            }else{
                alert("Vous devez être connecté pour ajouter un produit au panier");
            }
        }
    }
}
</script>

<style>
#category_but {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
