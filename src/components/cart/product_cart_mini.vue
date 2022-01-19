<template>
    <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div class="w-full md:w-1/3 bg-white grid place-items-center">
            <img :src="imageLink.default" alt="product" ref="image" class="rounded-xl" />
        </div>
        <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 text-left">
            {{name}}
            <p class="text-gray-600">{{categorie}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCartMini",
    props:{
        id : {default :'1'},
        quantity : {default :'1'},
        imageLink : {default :'../../assets/produits/miroirs/miroir2.jpeg'},
        name : {default :'Paroi de douche Arbor'},
        categorie : {default :'Paroi de douche'}
    },
    mounted(){
        if(this.imageLink != this.imageLink.default){
            this.$refs.image.src = this.imageLink;
        }
    }
}
</script>