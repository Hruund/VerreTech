<template>
    <div class="container">
        <div class="text-4xl font-bold">Nom du Produit</div>
        <nav id="filter" class="w-full z-30 top-0 px-6 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-filtre">
                        Filtrer
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-filtre" type="text">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-budget">
                        Budget
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-budget" type="text" placeholder="250">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nom">
                        Nom
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nom" type="text" placeholder="Arbor">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-typeVerre">
                        Type de verre
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-typeVerre">
                            <option>Transparent</option>
                            <option>Sablé</option>
                            <option>Opaque</option>
                            <option>Dépoli</option>
                            <option>Opaque</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="cards" class="w-full z-30 top-0 px-6 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-12 py-3">
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <div class="max-w-xs rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="../assets/produits/miroirs/miroir2.jpeg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-lg mb-2">Paroi de douche Arbor</div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">250€</span>
                            <button class="bg-gray-400 hover:bg-gray-600 text-xs text-white font-bold py-2 px-4 rounded">
                                <router-link to="/ficheProduit"> Consulter l'article </router-link>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <div class="max-w-xs rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="../assets/produits/miroirs/miroir2.jpeg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-lg mb-2">Paroi de douche Arbor</div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">250€</span>
                            <button class="bg-gray-400 hover:bg-gray-600 text-xs text-white font-bold py-2 px-4 rounded">
                                <router-link to="/ficheProduit"> Consulter l'article </router-link>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <div class="max-w-xs rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="../assets/produits/miroirs/miroir2.jpeg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-lg mb-2">Paroi de douche Arbor</div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">250€</span>
                            <button class="bg-gray-400 hover:bg-gray-600 text-xs text-white font-bold py-2 px-4 rounded">
                                <router-link to="/ficheProduit"> Consulter l'article </router-link>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <div class="max-w-xs rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="../assets/produits/miroirs/miroir2.jpeg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-lg mb-2">Paroi de douche Arbor</div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">250€</span>
                            <button class="bg-gray-400 hover:bg-gray-600 text-xs text-white font-bold py-2 px-4 rounded">
                                <router-link to="/ficheProduit"> Consulter l'article </router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-4xl font-bold">1   2   3</div>
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