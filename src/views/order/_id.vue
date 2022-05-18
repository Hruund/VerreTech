<template>
    <div class="flex-grow">
        <h2 class="mt-4 mb-4 font-semi-bold text-3xl text-gray-900">Résumé de commande.</h2>
        <h3 class="mt-4 mb-4 font-semi-bold text-2xl text-gray-900">Récapitulatif</h3>
        <p class="font-bold mt-4 mb-4 text-gray-900">Etat de la commande: {{ state }}.</p>
        <button @click="sendToPDF">PDF</button>
        <p>Numéro de commande: {{ number }}.</p>
        <p>Date de la commande: {{ date }}.</p>
        <p v-if="date_maj">Dernière mise à jour: {{ date_maj }}.</p>
        <p>Boutique de retrait: {{ shop }}.</p>
        <p>Prix total: {{ cost }}€.</p>
        <h3 class="mt-12 mb-4 font-semi-bold text-2xl text-gray-900">Articles</h3>
    </div>
    <div class="flex-grow grid grid-flow-col justify-items-center mx-12 md:w-1/2 container mx-auto">
        <div v-for="product in products" :key="product" class="text-gray-900 justify-items-center">
            <router-link :to="`/ficheProduit/${product.id}`">
                <img v-if="product.img" :src="product.img" class="h-32 w-32">
                <!-- <img v-if="product.img" src="../../assets/produits/miroirs/miroir2.jpeg" class="h-32 w-32"> -->
            </router-link>
            <h1 class="mt-6 font-bold">{{ product.name }}</h1>
            <h2 class="mt-4 mb-4 font-semi-bold">{{ product.price }}€</h2>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
            number:'1783', 
            date:'11-10-2021', 
            date_maj:'', 
            cost:137, 
            products:
            [
                // {name:"Parroi de douche", img:"../../assets/produits/miroirs/miroir2.jpeg", price:59},
                // {name:"Cloison", img:"../../assets/produits/miroirs/miroir2.jpeg", price:49},
                // {name:"Miroir", img:"../../assets/produits/miroirs/miroir2.jpeg", price:29}
            ], 
            state:'Validation du paiement',
            shop:'Verre-Tech Paris',
            datafromServer : null
        }
    },
    created() {
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
            /*
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
            shop:'Verre-Tech Paris'
            */
            // this.date = response.data.date;
            // this.date_maj = response.data.date_maj;
            // this.cost = response.data.cost;
            // this.state = response.data.state;
            // this.shop = response.data.shop;
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
        sendToPDF(){
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
                .then(response=>{
                    const objectToSend = {
                        id_order : self.dataFromServer.order.id,
                        date : self.dataFromServer.order.date,
                        nom : response.data.user.nom,
                        prenom : response.data.user.prenom,
                        mail : response.data.user.email,
                        telephone : response.data.user.user_phone,
                        productsList : self.dataFromServer.products,
                    }
                    console.log(objectToSend);
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