<template>
    <div class="container mx-auto">
        <div class="text-4xl font-bold">
            Fiche Produit
        </div>
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/4 p-4 text-center text-gray-900">
                <span class="text-xl">Catégories</span>
                <div class="w-full mt-3 bg-gray-200 text-gray-900 rounded-lg shadow">
                    <ul class="divide-y-2 divide-gray-100">
                        <li class="p-3 hover:bg-gray-400"><button><router-link to="/products"> Paroi de douche </router-link></button></li>
                        <li class="p-3 hover:bg-gray-400"><button><router-link to="/products"> Crédence de cuisine </router-link></button></li>
                        <li class="p-3 hover:bg-gray-400"><button><router-link to="/products"> Cloison </router-link></button></li>
                        <li class="p-3 hover:bg-gray-400"><button><router-link to="/products"> Insert de cheminée </router-link></button></li>
                        <li class="p-3 hover:bg-gray-400"><button><router-link to="/products"> Verre décoratif </router-link></button></li>
                        <li class="p-3 hover:bg-gray-400"><button><router-link to="/products"> Tous les produits </router-link></button></li>
                    </ul>
                </div>
            </div>
            
            <div class="w-full md:w-3/4 p-4 text-center text-gray-700 px-8">
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                    <img class="h-64 lg:h-auto lg:w-64 flex-none bg-cover rounded-t" src="../assets/produits/miroirs/miroir2.jpeg">
                    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                            <div class="flex text-gray-900 font-bold text-xl mb-3">
                                Paroi de douche Arbor
                            </div>
                            <div class="flex mb-3">
                                <div>
                                    <span class="text-gray-900 text-2xl leading-none mr-2">250 €</span><span class="text-gray-600">Taxes incluses</span>
                                </div>
                            </div>
                            <span class="flex">Description :</span>
                            <p class="text-gray-700 text-left">La paroi de douche Arbor sera parfaitement étanche pour éviter les projections d'eau tout en sublimant votre salle de bain. Facile à nettoyer, laissant passer la lumière en apportant confort et modernité à la pièce.</p>

                            <div class="text-left mt-4">
                                <span>Quantité : </span>
                                <select class="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantite">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="mx-auto mt-4">
                                <button id="button" class="px-6 py-3 mr-24 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:outline-none">
                                    Ajouter au panier
                                </button>

                                <button id="button" class="px-6 py-3 text-lg text-white rounded-lg shadow outline-none bg-blue-600 hover:bg-blue-500 hover:shadow-lg focus:outline-none">
                                    Acheter maintenant
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>