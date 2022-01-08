<template>
    <div class="flex-grow">
        <h2 class="mt-4 mb-4 font-semi-bold text-3xl text-gray-900">Résumé de commande.</h2>
        <h3 class="mt-4 mb-4 font-semi-bold text-2xl text-gray-900">Récapitulatif</h3>
        <p class="font-bold mt-4 mb-4 text-gray-900">Etat de la commande: {{ state }}.</p>
        <p>Numéro de commande: {{ number }}.</p>
        <p>Date de la commande: {{ date }}.</p>
        <p v-if="date_maj">Dernière mise à jour: {{ date_maj }}.</p>
        <p>Boutique de retrait: {{ shop }}.</p>
        <p>Prix total: {{ cost }}€.</p>
        <h3 class="mt-12 mb-4 font-semi-bold text-2xl text-gray-900">Articles</h3>
    </div>
    <div class="flex-grow grid grid-flow-col justify-items-center mx-12 md:w-1/2 container mx-auto">
        <div v-for="product in products" :key="product" class="text-gray-900 justify-items-center">
            <router-link :to="`/ficheProduit`">
                <!--<img v-if="product.img" :src="product.img" class="w-full">-->
                <img v-if="product.img" src="../../assets/produits/miroirs/miroir2.jpeg" class="h-32 w-32">
            </router-link>
            <h1 class="mt-6 font-bold">{{ product.name }}</h1>
            <h2 class="mt-4 mb-4 font-semi-bold">{{ product.price }}€</h2>
        </div>
    </div>
</template>

<script>
export default {
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
            shop:'Verre-Tech Paris'
        }
    },
    created() {
        this.number = this.$route.params.id;
    }
}
</script>