<template>
  <div :class="isCard ? '' : 'lg:h-screen'" class="container mx-auto p-6 grid grid-cols-1 row-gap-12 lg:grid-cols-10 lg:col-gap-10 lg:pt-12">
    <Payment @handle-card="handleCard" @change-parent="handleAlert" :total="total"></Payment>
    <Summary :items="items"></Summary>
    <Alert :visible="alertVisible" position="top-right" color="success" title="Succès" description="Votre achat a été correctement effectué ! Retrouvez nous en boutique dans les 2 heures !" />
  </div>
</template>

<script>
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
        {
          title: "Article 1",
          description: "lorem impsu liwe",
          price: 550,
          img: "https://picsum.photos/seed/picsum/200/300"
        },
        {
          title: "Article 2",
          description: "lorem impsu liwe",
          price: 250,
          img: "https://picsum.photos/seed/picsum/200/300"
        },
        {
          title: "Article 3",
          description: "lorem impsu liwe",
          price: 150,
          img: "https://picsum.photos/seed/picsum/200/300"
        }
      ],
      alertVisible: false,
      total: 0,
      isCard: false
    };
  },
  mounted() {
    this.getTotal(this.items);
  },
  methods: {
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