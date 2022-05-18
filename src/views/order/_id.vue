<template>
    <div class="flex-grow">
        <h2 class="mt-4 mb-4 font-semi-bold text-3xl text-gray-900">Résumé de commande</h2>

            <div class="w-full container mx-auto items-center justify-between px-2 py-3">
                <!--Information de la commande-->
                <div class="md:fixed md:mt-1 w-full md:w-1/4 px-7 mb-6 md:mb-0">
                    <h2 class="font-bold text-xl pb-4">Information commande n° {{ number }}</h2>
                    <div class="p-8 border-gray-900 rounded-lg border border-4">
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-2/3">
                                <label class="block font-bold mb-1 md:mb-0 text-left">
                                    Statut de la commande
                                </label>
                            </div>
                            <div class="md:w-2/3 text-right">
                                {{ state }}
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-2/3">
                                <label class="block font-bold mb-1 md:mb-0 text-left">
                                    Date de la commande
                                </label>
                            </div>
                            <div class="md:w-2/3 text-right">
                                {{ number }}
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-2/3">
                                <label v-if="date_maj" class="block font-bold mb-1 md:mb-0 text-left">
                                    Dernière mise à jour
                                </label>
                            </div>
                            <div class="md:w-2/3 text-right">
                                {{ date }}
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-2/3">
                                <label class="block font-bold mb-1 md:mb-0 text-left">
                                    Boutique de retrait
                                </label>
                            </div>
                            <div class="md:w-2/3 text-right">
                                {{ shop }}
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-2/3">
                                <label class="block font-bold mb-1 md:mb-0 text-left">
                                    Prix total
                                </label>
                            </div>
                            <div class="md:w-2/3 text-right">
                                {{ cost }} €
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/4 mb-6 md:mb-0">
                        <PDFgenerator :pdfData="pdfDataToSend"></PDFgenerator>
                    </div>
                </div>
                <!--Liste des articles de la commande-->
                <div class="w-full md:w-3/4 px-3 ml-auto md:mb-0">
                    <label class="mt-4 mb-4 font-bold text-xl pb-4 text-gray-900">
                        Articles commandés
                    </label>
                    <div v-for="product in products" :key="product" class="text-gray-900 justify-items-center mx-auto flex mb-10 my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-2/3">
                        <router-link :to="`/ficheProduit/${product.id}`">
                            <div class="px-24 py-12 border-b flex flex-col sm:flex-row md:w-96 place-content-center">
                                <img v-if="product.img" :src="product.img" class="lg:h-auto lg:w-64">
                                <div class="w-3/4 text-right">
                                    <h1 class="text-gray-900 font-bold text-xl mb-3 mt-3">
                                        {{ product.name }}
                                    </h1>
                                    <h2 class="mt-4 mb-4 font-semi-bold">{{ product.price }}€</h2>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

import PDFgenerator from "../../components/makePdf/makePdf.vue";
const axios = require('axios');
export default {
    components: {
        PDFgenerator
    },
    data() {
        return {
            number:'1783', 
            date:'11-10-2021', 
            date_maj:'', 
            cost:137, 
            products:
            [
                {name:"Parroi de douche", img:"../../assets/produits/miroirs/miroir2.jpeg", price:59},
                {name:"Cloison", img:"../../assets/produits/miroirs/miroir2.jpeg", price:49},
                {name:"Miroir", img:"../../assets/produits/miroirs/miroir2.jpeg", price:29}
            ], 
            state:'Validation du paiement',
            shop:'Verre-Tech Paris',
            datafromServer : null,
            pdfDataToSend : null
        }
    },
    mounted() {
        this.number = this.$route.params.id;
        axios.get('http://'+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_CART_PORT+'/api/cart/order/'+this.number)
        .then(response => {
            console.log(response);
            this.dataFromServer = response.data;
            this.number = response.data.order.id;
            this.date = response.data.order.date;
            this.date_maj = response.data.order.date_maj;
            this.cost = response.data.order.price;
            this.shop = response.data.order.shop;
            let stateToSend = "";
            switch(response.data.order.state){
                case 0:
                    stateToSend = "Validation du paiement";
                    break;
                case 1:
                    stateToSend = "En attente de retrait";
                    break;
                case 2:
                    stateToSend = "Retirée";
                    break;
                default:
                    stateToSend = "En attente de validation";
            }
            this.state = stateToSend;
            this.products = this.getProductList(response.data.products);
            this.sendToPDF();
        })
        .catch(error => {
            console.log(error);
        })
    },
    methods:{
        getProductList(products){
            let productList = [];
            products.forEach(product => {
                let toPush = {
                    id : product[0].id,
                    name : product[0].name,
                    img : product[0].image,
                    price : product[0].price
                }
                productList.push(toPush);
            });
            return productList;
        },
        async sendToPDF(){
            var self = this;
            if (document.cookie.length > 0) {
                const cookies = document.cookie.split(";");
                let actualCookies = {};
                for (let i = 0; i < cookies.length; i++) {
                    let cookiename = cookies[i].split("=")[0];
                    let cookievalue = cookies[i].split("=")[1];
                    actualCookies[cookiename.trim()] = cookievalue;
                }
                const idOfUser = actualCookies.id;
                const access_token = actualCookies.access_token; 
                axios.get("http://"+ process.env.VUE_APP_SERVER_IP + ":" + process.env.VUE_APP_USER_PORT + "/api/user/" + idOfUser,
                {
                    params : access_token
                })
                .then(async response=>{
                    const objectToSend = {
                        id_order : self.dataFromServer.order.id,
                        date : self.dataFromServer.order.date,
                        nom : response.data.user.nom,
                        prenom : response.data.user.prenom,
                        mail : response.data.user.email,
                        telephone : response.data.user.user_phone,
                        productsList : self.dataFromServer.products,
                    }
                    await this.$nextTick();
                    console.log(" this.pdfData : ",objectToSend);
                    self.pdfDataToSend = objectToSend;
                })
                .catch(error=>{
                    console.log(error);
                })


                // const objectToSendToPDF = {
           
                // };
            }
        },
    }
}
</script>