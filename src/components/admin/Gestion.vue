<template>
  <div class="mb-10">
    <div class="space-y-2">

        <div>
            <h2 class="mt-4 mb-4 font-semi-bold text-3xl text-gray-900">Ajouter un article</h2>
        </div>

        <form class="container mx-auto mb-12">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article-name">
                    Nom de l'article
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="article-name" type="text" placeholder="Parroi de douche">
                </div>

                <div class="w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article-name">
                    Image
                    </label>
                    <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article-desc">
                    Description
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="article-desc" type="text" placeholder="Parroi de douche en verre trempé ultra-résistante.">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
                Prix
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number" placeholder="100">
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="category">
                Categorie
                </label>
                <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category">
                    <option>Parois de douches</option>
                    <option>Crédence cuisine</option>
                    <option>Cloison</option>
                    <option>Miroir</option>
                    <option>Verre décoratif</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
                </div>
            </div>
            </div>
            <div class="font-bold mt-6">Boutiques Verre Tech proposant de retirer cet article :</div>

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
                id="button"
                type="submit"
                class="w-full px-6 py-3 mt-6 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:outline-none">
                Valider
            </button>
        </form>

        <div>
            <h2 class="mt-24 mb-4 font-semi-bold text-3xl text-gray-900">Modifier ou supprimer des articles</h2>
        </div>

        <div class="w-full flex text-xl items-center md:space-x-10" v-for="product in products" :key="product">
            <!--<img :src="product.img" PK CA MARCHE PAS CTE MERDE alt="product" ref="image" class="rounded-xl" />-->
            <img src="../../assets/produits/miroirs/miroir1.jpeg" alt="product" ref="image" class="rounded-xl w-16 h-16" />
            <p>{{ product.name }}</p>

            <div class="flex space-x-2">
                <router-link :to="`/admin/${product.id}`" >
                    <button class="bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded">
                        Modifier
                    </button>
                </router-link>

                <button class="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded">
                    Supprimer
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                products: [
                    {
                        id: 1,
                        name: "Parroi de douche Arbor",
                        img: '../../assets/produits/miroirs/miroir1.jpeg'
                    }, 
                    {
                        id: 2,
                        name: "Miroir Echo",
                        img: '../../assets/produits/miroirs/miroir2.jpeg'
                    },
                    {
                        id: 3,
                        name: "Cloison de verre Filae",
                        img: '../../assets/produits/miroirs/miroir3.jpeg'
                    }
                ]
            };
        },

        methods: {

        uploadImage(event) {

            let data = new FormData();
            data.append('name', 'my-picture');
            data.append('file', event.target.files[0]); 

            /*const URL = 'http://foobar.com/upload'; 

            let data = new FormData();
            data.append('name', 'my-picture');
            data.append('file', event.target.files[0]); 

            let config = {
                header : {
                    'Content-Type' : 'image/png'
                }
            }

            axios.put(
                URL, 
                data,
                config
                ).then(
                    response => {
                        console.log('image upload response > ', response)
                    }
                )*/
        }
    }
}
</script>