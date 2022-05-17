<template>
  <div class="mb-10">
    <div class="mx-auto px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">

      <div class="mb-3 w-full border-2" v-for="order in orders" :key="order">
        <button class="text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none" :class="order.show ? 'bg-gray-900 hover:bg-gray-900 text-white' : ''" @click="order.show = !order.show">
          Commande du {{ order.date }} | {{ order.state }}
        </button>

        <div class="m-4" v-if="order.show">
          <div class="flex items-center mb-2">
            <p v-if="order.state == 'Validation du paiement'">Votre commande est en attente de validation du paiement.</p>
            <p v-if="order.state == 'En attente de retrait'">Votre commande est en attente de retrait.</p>
            <p v-if="order.state == 'Retirée'">Votre commande a été retirée le {{ order.date_maj }}.</p>

            <div class="m-1 flex-grow-none h-24 w-24" v-for="product in order.products" :key="product">
              <img src="../../assets/produits/miroirs/miroir2.jpeg">
              <!-- <img :src="product.img"> TODO: charger images dynamiquement -->
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow text-left">
              <p class="font-semibold">Coût total : {{ order.cost }}€</p>
              <p class="font-semibold">Date de la commande : {{ order.date }}</p>
            </div>
            <router-link :to="`/order/${order.number}`" class="w-48 mr-1" >
              <button  class="bg-gray-200 w-full rounded text-base font-semibold py-2 px-4 shadow-md hover:bg-gray-700 hover:text-white focus:outline-none">
                Détails
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const axios = require('axios');
export default {
  data: function() {
    return {
      orders: [
        // {
        //   number:'1783', 
        //   date:'11-10-2021', 
        //   date_maj:'', 
        //   cost:137, 
        //   products:
        //   [
        //     {name:"Parroi de douche", img:"../../assets/produits/miroirs/miroir2.jpeg", price:59},
        //     {name:"Cloison", img:"../../assets/produits/miroirs/miroir2.jpeg", price:49},
        //     {name:"Miroir", img:"../../assets/produits/miroirs/miroir2.jpeg", price:29}
        //   ], 
        //   state:'Validation du paiement', 
        //   show:false
        // },
        // {
        //   number:'1675',
        //   date:'09-10-2021', 
        //   date_maj:'', 
        //   cost:108, 
        //   products:
        //   [
        //     {name:"Parroi de douche", img:"../../assets/produits/miroirs/miroir2.jpeg", price:59},
        //     {name:"Cloison", img:"../../assets/produits/miroirs/miroir2.jpeg", price:49}
        //   ], 
        //   state:'En attente de retrait', 
        //   show:false
        // },
        // {
        //   number:'1554',
        //   date:'21-09-2021', 
        //   date_maj:'22-09-2021', 
        //   cost:108, 
        //   products:
        //   [
        //     {name:"Parroi de douche", img:"../../assets/produits/miroirs/miroir2.jpeg", price:59},
        //     {name:"Cloison", img:"../../assets/produits/miroirs/miroir2.jpeg", price:49}
        //   ], 
        //   state:'Retirée', 
        //   show:false
        // },
        // {
        //   number:'1321',
        //   date:'10-09-2021',
        //   date_maj:'10-09-2021',
        //   cost:108,
        //   products:
        //   [
        //     {name:"Parroi de douche", img:"../../assets/produits/miroirs/miroir2.jpeg", price:59},
        //     {name:"Cloison", img:"../../assets/produits/miroirs/miroir2.jpeg", price:49}
        //   ], 
        //   state:'Retirée', 
        //   show:false
        // },
        // {
        //   number:'1228',
        //   date:'26-08-2021', 
        //   date_maj:'26-08-2021', 
        //   cost:59, 
        //   products:
        //   [
        //     {name:"Cloison", img:"../../assets/produits/miroirs/miroir2.jpeg", price:49}
        //   ], 
        //   state:'Retirée', 
        //   show:false
        // }
      ]
    };
  },
  async mounted(){
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
            axios.get('http://'+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_USER_PORT+'/api/user/'+idOfUser, {
                    params : {
                        access_token: access_token
                    }
                })
                .then(() => {
                  axios.get('http://'+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_CART_PORT+'/api/cart/orders/'+idOfUser)
                  .then(response => {
                    console.log(response);
                    response.data.order_table.forEach(order => {
                      let stateToSend = "";
                      switch(order.state){
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
                      let toPush = {
                        number : order.id,
                        date: order.date,
                        date_maj: order.date_maj,
                        cost: order.price,
                        products: [],
                        state: stateToSend,
                      }
                      this.orders.push(toPush);
                    });
                  })
                  .catch(error => {
                      console.log(error);
                  });
                })
                .catch(error => {
                    console.log(error); //Error todo?
                    this.$router.push("/login");
                });
        }else{
            this.$router.push("/login");
        }
    /*
     {
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
          show:false
        },
    */
  }
};
</script>