<template>
  <div class="container mx-auto p-6 grid grid-cols-1 row-gap-12 lg:grid-cols-10 lg:col-gap-10 lg:pt-12">
    <!-- Affichage du formulaire de paiement -->
    <Payment @handle-card="handleCard" @change-parent="handleAlert" :total="total"></Payment>
    <!-- Affichage du résumé du panier -->
    <Summary :items="items"></Summary>
    <!-- Affichage de l'alerte de fin d'achat -->
    <Alert :visible="alertVisible" position="top-right" color="success" title="Succès" description="Votre achat a été correctement effectué ! Retrouvez nous en boutique dans les 2 heures !" />
  </div>
</template>

<script>
const axios = require('axios');
import Payment from "../components/payement/Payment";
import Summary from "../components/payement/Summary";
import Alert from "../components/payement/Alert";

export default {
  name: "CheckoutPage",
  components: {
    Payment,
    Summary,
    Alert
  },
  data() {
    return {
      items: [
        // {
        //   title: "Paroi de douche Arbor",
        //   description: "Superbe vitre",
        //   price: 550,
        //   img: "https://picsum.photos/seed/picsum/200/300"
        // },
        // {
        //   title: "Crédence de cuisine",
        //   description: "Opaque",
        //   price: 250,
        //   img: "https://picsum.photos/seed/picsum/200/300"
        // },
        // {
        //   title: "Cloison",
        //   description: "Laisse passer la lumière",
        //   price: 150,
        //   img: "https://picsum.photos/seed/picsum/200/300"
        // }
      ],
      alertVisible: false,
      total: 0,
      isCard: false
    };
  },
  mounted() {
    this.getProducts();
    this.getTotal(this.items);
  },
  methods: {
    /**
     * Récupération des produits
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
                this.displayProduct(response.data.products);
                this.readyToDisplay = true;
            })
            .catch(error => {
                console.log(error);
            });
    },
    displayProduct(products){
      /*
        //   title: "Cloison",
        //   description: "Laisse passer la lumière",
        //   price: 150,
        //   img: "https://picsum.photos/seed/picsum/200/300"
        // }
      */
     for(let i = 0; i < products.length; i++){
       for(let i2 = 0; i2 < products[i].quantity; i2++){
         this.items.push({
            title: products[i].title,
            description: products[i].feature,
            price: products[i].price,
            img: products[i].image
         });
       }
      }
      this.getTotal(this.items);
    },
    getTotal(items) {
      items.forEach(item => {
        this.total += item.price;
      });
    },
    handleAlert() {
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
      }, 4000);
    },
    handleCard() {
      this.isCard = true;
    }
  }
};
</script>