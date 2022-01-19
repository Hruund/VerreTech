<template>
    <form class="container mx-auto mb-12">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article-name">
                Nom de l'article
                </label>
                <input v-model="article_name" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="article-name" type="text">
            </div>

            <div class="w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article-name">
                Image
                </label>
                    <input v-model="article_imageLink" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="article-image" type="text" placeholder="https://superbeImage.fr">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article-desc">
                Description
                </label>
                <input v-model="article_desc" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="article-desc" type="text">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
            Prix
            </label>
            <input v-model="article_price" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number">
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="category">
            Categorie
            </label>
            <div class="relative">
            <select v-model="article_categorie" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category">
                <option value="1">Parois de douches</option>
                <option value="2">Crédence cuisine</option>
                <option value="3">Cloison</option>
                <option value="4">Miroir</option>
                <option value="5">Verre décoratif</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            </div>
        </div>
        </div>
        <div class="font-bold mt-6">Boutiques Verre-Tech proposant de retirer cet article :</div>

        <div class="md:flex w-full place-content-center mt-3">
            <label class="inline-flex items-center mr-6">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700">Lille</span>
            </label>

            <label class="inline-flex items-center mr-6">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" checked><span class="ml-2 text-gray-700">Versailles</span>
            </label>

            <label class="inline-flex items-center mr-6">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-orange-600" checked><span class="ml-2 text-gray-700">Toulon</span>
            </label>

            <label class="inline-flex items-center mr-6">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-yellow-600" checked><span class="ml-2 text-gray-700">Bordeaux</span>
            </label>

            <label class="inline-flex items-center mr-6">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-green-600" checked><span class="ml-2 text-gray-700">Nantes</span>
            </label>

            <label class="inline-flex items-center mr-6">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-teal-600" checked><span class="ml-2 text-gray-700">Lyon</span>
            </label>
        </div>

        <button 
            @click="updateArticle"
            id="button"
            type="submit"
            class="w-full px-6 py-3 mt-6 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:outline-none">
            Valider
        </button>
    </form>
</template>

<script>
const axios = require('axios')
export default {
    data() {
        return {
            id: 0,
            name: "Parroi de douche Arbor",
            img: '../../assets/produits/miroirs/miroir1.jpeg',
            price: 120,
            desc: "Parroi de douche Arbor en verre ultra résistant",
            category: "",

            article_name: "",
            article_imageLink: "",
            article_price: 0,
            article_desc: "",
            article_categorie: ""
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getArticle();
    },
    created() {
        this.id = this.$route.params.id;
    },
     methods: {
         getArticle(){
            axios.get('http://127.0.0.1:3000/api/product/' + this.id)
            .then(response => {
                this.article_name = response.data.name;
                this.article_imageLink = response.data.image;
                this.article_price = response.data.price;
                this.article_desc = response.data.feature;
                this.article_categorie = response.data.id_categorie;
            })
            .catch(error => {
                console.log(error);
            })
         },
         updateArticle(){
            console.log("updateArticle");
            console.log(this.article_name);
            console.log(this.article_imageLink);
            console.log(this.article_price);
            console.log(this.article_desc);
            console.log(this.article_categorie);
            const paramsToUse = {
                name: this.article_name,
                image: this.article_imageLink,
                price: this.article_price,
                feature: this.article_desc,
                id_categorie: this.article_categorie
            }
            axios.put('http://127.0.0.1:3000/api/product/' + this.id, null, { params : paramsToUse})
            .then(response => {
                console.log(response);
                this.$router.push('/administration');
            })
            .catch(error => {
                console.log(error);
            })
         }
     }
}
</script>