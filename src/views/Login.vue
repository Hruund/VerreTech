<template>
    <div class="container mx-auto h-full bg-gray-100 p-6">
        <img class= "mx-auto pt-4" width="100" height="100" src="../assets/user.png">
        <div class="text-4xl font-bold mb-6">Connexion</div>
        <form action="#" method="POST" class="mx-auto max-w-sm p-8 border-gray-900 rounded-lg border border-4">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="email">
                        Email utilisateur
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" placeholder="email@namespace.com">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="password">
                        Mot de passe
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
                </div>
            </div>
            <div class="md:flex md:items-center mb-1">
                <input class="mr-2 leading-tight" type="checkbox">
                <label class="block font-bold md:text-right md:mb-0 pr-8" for="inline-password">
                    Se souvenir de moi
                </label>
            </div>
            <p class="text-gray-500 md:text-left text-xs italic mb-2"><a href="#">Mot de passe oublié</a></p>
            <div class="md:flex md:items-center">
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Connexion
                    </button>
                </div>
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        <router-link to="/signup"> Inscription </router-link>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>