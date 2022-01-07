<template>
    <div class="flex justify-center items-center w-full">
        <div class="bg-white shadow-md h-64 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-96">
            <img class="h-64 lg:h-auto lg:w-64 object-cover" :src="imageLink.default" alt="image" ref="image"/>
            <div class="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
                <div class="w-full flex justify-between items-center">
                    <h1 class="text-lg font-normal text-gray-600 font-sans">
                        {{name.default}}
                    </h1>
                    <h1 class="font-bold text-gray-900 mr-8">{{price.default}}</h1>
                </div>
                <p class="text-gray-600">{{categorie.default}}</p>
                <div class="w-full flex justify-between items-center">
                    <div class="text-left mt-4">
                        <span>Quantité : </span>
                        <select class="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 w-36 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantite">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button class="mr-8"><i class="fa fa-times text-red-600 fa-2x"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCart",
    props:{
        imageLink : {default :'../../assets/produits/miroirs/miroir2.jpeg'},
        name : {default :'Paroi de douche Arbor'},
        categorie : {default :'Paroi de douche'},
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