<template>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <img class="w-full" ref="image" :src="imageLink.default">
            <div class="px-6 py-4">
                <div class="font-bold text-lg mb-2">{{name}}</div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{price}}€</span>
                <button class="bg-gray-400 hover:bg-gray-600 text-xs text-white font-bold py-2 px-4 rounded">
                    <router-link to="/ficheProduit"> Consulter l'article </router-link>
                </button>
            </div>
        </div>
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
export default {
    name: "Product",
    props:{
        imageLink : {default :'../assets/produits/miroirs/miroir2.jpeg'},
        name : {default :'Paroi de douche Arbor'},
        price : {default :'250€'}
    },
    mounted(){
        console.log("toto")
        if(this.imageLink != this.imageLink.default){
            this.$refs.image.src = this.imageLink;
        }
    }
}
</script>