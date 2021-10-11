<template>
    <div class="flex-grow">
        <div><label>Numéro de commande: {{ number }}.</label></div>
        <div><label>Date de la commande: {{ date }}.</label></div>
        <div><label>Etat de la commande: {{ state }}.</label></div>
        <div><label>Dernière mise à jour: {{ date_maj }}.</label></div>
        <div><label>Prix total: {{ cost }}€.</label></div>
        <div><label>Produits: </label></div>
    </div>
    <div v-for="product in products" :key="product" class="bg-center overflow-hidden text-gray-900 h-screen">
        <div class="flex">
            <div class="ml-10 rounded overflow-hidden w-3/12 flex-none">
                <img v-if="product.img" :src="product.img" class="w-full">
            </div>
                <div>
                    <div>
                    <h1 class="mt-6 font-bold text-5xl">{{ product.name }}</h1>
                </div>
                <div>
                    <h2 class="mt-4 mb-4 font-semi-bold text-4xl">{{ product.price }}€</h2>
                </div>
            </div>
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
            state:'Validation du paiement'
        }
    },
    created() {
        this.number = this.$route.params.id;
    }
}
</script>