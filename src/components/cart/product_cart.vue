<template>
    <div class="mx-auto flex mb-10 my-1 px-1 md:w-1/2">
        <div class="px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl flex flex-col sm:flex-row md:w-96 place-content-center">
            <div class="lg:w-1/4 mr-6 lg:my-auto">
                <img class="rounded-3xl lg:h-auto lg:w-64" :src="imageLink.default" alt="image" ref="image"/>
            </div>
            <div class="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
                <div class="w-3/4 text-left">
                    <h1 class="text-lg font-normal text-gray-600 font-sans">
                        {{name}}
                    </h1>
                    <h1 class="font-bold text-gray-900 mr-8 price">{{price}} €</h1>
                </div>
                <p class="text-gray-600">{{categorie}}</p>
                <div class="w-full flex justify-between items-center">
                    <div class="text-left mt-4">
                        <span>Quantité : </span>
                        <select v-model="dataquantity" class="quantity bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 w-36 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantite">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button class="mr-8" @click="deleteProductFromCart"><i class="fa fa-times text-red-600 fa-2x"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCart",
    props:{
        id : {default :'1'},
        imageLink : {default :'../../assets/produits/miroirs/miroir2.jpeg'},
        name : {default :'Paroi de douche Arbor'},
        categorie : {default :'Paroi de douche'},
        price : {default :'250€'},
        quantity : {default :'1'}
    },
    data(){
        return {
            dataquantity : this.quantity
        }
    },
    mounted(){
        console.log("toto")
        if(this.imageLink != this.imageLink.default){
            this.$refs.image.src = this.imageLink;
        }
    },
    methods:{
        deleteProductFromCart(){
            this.$emit('deleteProductFromCart', this.id);
        }
    }
}
</script>