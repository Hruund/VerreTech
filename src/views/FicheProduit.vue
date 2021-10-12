<template>
        <div class="bg-center">
            <h2 class="mt-4 mb-4 font-semi-bold text-3xl text-gray-900">Fiche produit</h2>
        </div>

        <div class="flex items-start place-content-center">
            <div class="w-1/6 ">
                <span class="text-xl">Catégories</span>
                <div class="border-2 rounded-sm w-full mt-3 bg-gray-200 text-gray-900 rounded-lg shadow">
                    <ul class="divide-y-2 divide-gray-100">
                        <li class="flex-shrink-0 text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Paroi de douche </router-link></button></li>
                        <li class="flex-shrink-0 text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Crédence de cuisine </router-link></button></li>
                        <li class="flex-shrink-0 text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Cloison </router-link></button></li>
                        <li class="flex-shrink-0 text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Insert de cheminée </router-link></button></li>
                        <li class="flex-shrink-0 text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Verre décoratif </router-link></button></li>
                        <li class="flex-shrink-0 text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none"><button><router-link to="/products"> Tous les produits </router-link></button></li>
                    </ul>
                </div>
                <button class="py-2 px-4 w-full mt-8 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:outline-none">
                    <router-link to="/products"> Retour </router-link>
                </button>
            </div>
            <div class="mb-10 ml-10 w-1/2">
                <div class="mx-auto px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl flex items-start place-content-center">
                    <div class="w-1/4 mr-6 my-auto">
                        <img class="h-20 lg:h-auto lg:w-64" src="../assets/produits/miroirs/miroir2.jpeg" alt="image"/>
                    </div>
                    <div class="w-3/4 text-left">
                        <h1 class="text-gray-900 font-bold text-xl mb-3">
                            Paroi de douche Arbor
                        </h1>
                        <div>
                            <span class="text-gray-900 text-2xl leading-none mr-2">250 €</span><span class="text-gray-600">Taxes incluses</span>
                            <p>Description : <br> La paroi de douche Arbor sera parfaitement étanche pour éviter les projections d'eau tout en sublimant votre salle de bain. Facile à nettoyer, laissant passer la lumière en apportant confort et modernité à la pièce.</p>
                        </div>
                        <div class="mt-4">
                            <span class="text-xl">Quantité : </span>
                            <select class="bg-gray-200 border border-gray-200 text-gray-700 py-2 px-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantite">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="mx-auto mt-4">
                            <button id="buttonAdd" class="px-6 py-3 mr-24 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:outline-none">
                                Ajouter au panier
                            </button>

                            <button id="buttonBuy" class="px-6 py-3 text-lg text-white rounded-lg shadow outline-none bg-blue-600 hover:bg-blue-500 hover:shadow-lg focus:outline-none">
                                <router-link to="/panier"> Acheter maintenant </router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>