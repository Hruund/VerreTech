<template>
    <div class="container mx-auto h-screen bg-gray-100 p-6">
        <div class="text-4xl font-bold mb-6">Panier</div>
        <!-- Cards 1 -->
        <div class="flex justify-center items-center w-full">
            <div class="bg-white shadow-md h-64 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-96">
                <img class="h-64 lg:h-auto lg:w-64 object-cover" src="../assets/produits/miroirs/miroir2.jpeg" alt="image"/>
                <div class="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
                    <div class="w-full flex justify-between items-center">
                    <h1 class="text-lg font-normal text-gray-600 font-sans">
                        Paroi de douche Arbor
                    </h1>
                    <h1 class="font-bold text-gray-900 mr-8">$200</h1>
                    </div>
                        <p class="text-gray-600">Paroi de douche</p>
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

        <!-- Cards 2 -->
        <div class="flex justify-center items-center w-full mt-6">
            <div class="bg-white shadow-md h-64 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-96">
                <img class="h-64 lg:h-auto lg:w-64 object-cover" src="../assets/produits/miroirs/miroir2.jpeg" alt="image"/>
                <div class="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
                    <div class="w-full flex justify-between items-center">
                        <h1 class="text-lg font-normal text-gray-600 font-sans">
                            Paroi de douche Arbor
                        </h1>
                        <h1 class="font-bold text-gray-900 mr-8">$200</h1>
                    </div>
                        <p class="text-gray-600">Paroi de douche</p>
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
        <!-- / -->
        <hr style="height: 2px; width: 50%; background-color: black;" class="border-solid mx-auto mt-8">
        <div class="container mx-auto px-64 m-10">
            <p style="text-align:left;">
                Taxes
                <span style="float:right;">
                    4€
                </span>
            </p>
            <p style="text-align:left; font-weight: bold;">
                Total
                <span style="float:right;">
                    404€
                </span>
            </p>
            <div>
                <button class="mr-20 shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    <router-link to="/products"> Continuer mes achats </router-link>
                </button>
                <button class="shadow bg-blue-400 hover:bg-blue-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    <router-link to="/checkout"> Valider mon panier </router-link>
                </button>
            </div>
        </div>
    </div>
</template>