<template>
    <div class="container mx-auto bg-gray-100 p-6 h-screen">
        <img class= "mx-auto pt-4" width="100" height="100" src="../assets/user.png">
        <div class="text-4xl font-bold mb-6">Connexion</div>
        <form class="lg:w-3/5 lg:mx-auto p-8 border-gray-900 rounded-lg border border-4">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="email">
                        Email utilisateur
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input required v-model="email" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" placeholder="email@namespace.com">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="password">
                        Mot de passe
                        <p class="text-gray-500 text-xs mb-2"><a href="#">Mot de passe oublié</a></p>
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input required v-model="password" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" placeholder="******************">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3 text-right">
                    <input class="leading-tight" type="checkbox" v-model="rememberUser">
                    <label class="font-bold md:text-left md:mb-0 pr-8" for="inline-password">
                        Se souvenir de moi
                    </label>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" @click="tryToLogin" type="submit">
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

<script>
    const axios = require('axios');
    export default {
        data() {
            return {
                email: "",
                password: "",
                rememberUser: false,
                success: null,
                error: null,
            };
        },
        methods:{
            /**
            * Connexion de l'utilisateur
            */
            tryToLogin(){
                const request = {
                    email: this.email,
                    password: this.password
                };
                axios.post('http://127.0.0.1:3000/api/login', null,  { params : request})
                .then(response => {
                    this.responseMessage = response.data;
                    if(this.responseMessage.message == "success"){
                        if(this.rememberUser)
                        {
                        let date = new Date();
                        date.setDate(date.getDate() + 3);
                            document.cookie =  `access_token=${response.data.access_token}; expires=${date.toUTCString()}; path=/`;
                            document.cookie =  `id=${response.data.user.id}; expires=${date.toUTCString()}; path=/`;
                            document.cookie =  `username=${response.data.user.username}; expires=${date.toUTCString()}; path=/`;
                            document.cookie =  `email=${response.data.user.email}; expires=${date.toUTCString()}; path=/`;
                        }else{
                            document.cookie =  `access_token=${response.data.access_token}; path=/`;
                            document.cookie =  `id=${response.data.user.id}; path=/`;
                            document.cookie =  `username=${response.data.user.username}; path=/`;
                            document.cookie =  `email=${response.data.user.email}; path=/`;
                        }
                        const evtToDispatch = new CustomEvent("userLoggedIn");
                        document.dispatchEvent(evtToDispatch);
                        this.$router.push('/');
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.error = error.response;
                });
            }
        }
    }
</script>