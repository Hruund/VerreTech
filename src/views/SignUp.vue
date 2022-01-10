<template>
    <div class="container mx-auto bg-gray-100 p-6 lg:h-screen md:h-full">
        <img class= "mx-auto pt-4" width="100" height="100" src="../assets/user.png">
        <div class="text-4xl font-bold mb-6">Inscription</div>
        <form v-if="!success" method="post" @submit.prevent="register" class="p-8 border-gray-900 rounded-lg border border-4">
            <div class="md:grid md:grid-cols-2">
                <div class="md:mr-8 md:border-r-4 md:border-gray-600 md:text-left">
                    <h2 class="font-bold text-xl pb-4">Je m'identifie</h2>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="lastname">
                                Nom
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)" required v-model="lastname" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="lastname" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="firstname">
                                Prénom
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)" required v-model="firstname" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="firstname" type="text">
                        </div>
                    </div>
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
                    <h2 class="font-bold text-xl pb-4">Sécuriser mon compte</h2>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="password">
                                Mot de passe
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input required v-model="password" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" placeholder="******************">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="repassword">
                                Confirmer
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="repassword" type="password" placeholder="******************">
                        </div>
                    </div>
                </div>
                <div class="md:mr-8 md:text-left">
                    <h2 class="font-bold text-xl pb-4">Mon adresse</h2>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="address">
                                Adresse et N° de rue
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input required v-model="address" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="address" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="addressCP">
                                Code Postal
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="5" required v-model="addressCP" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="addressCP" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="city">
                                Ville
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)" required v-model="city" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="city" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="number">
                                Numéro de téléphone
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="10" required v-model="number" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="number" type="text">
                        </div>
                    </div>
                    <div class="md:w-1/3 text-right">
                        <input class="leading-tight" type="checkbox">
                        <label class="font-bold md:text-left md:mb-0 pr-8" for="newsletter">
                            S'inscrire à la newsletter
                        </label>
                    </div>
                </div>
            </div>
            <div class="md:flex md:items-center md:p-4">
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        <router-link to="/login"> J'ai déjà un compte </router-link>
                    </button>
                </div>
                <div class="md:w-2/3">
                    <button class="mt-2 shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Finaliser mon compte
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
            lastname: "",
            firstname: "",
            email: "",
            password: "",
            address: "",
            addressCP: "",
            city: "",
            number: "",
            success: null,
            error: null,
        };
    },
    methods: {
         async register() {
             if( this.lastname == "" || this.firstname == "" || this.email == "" || this.password == "" || this.address == "" || this.addressCP == "" || this.city == "" || this.number == ""){
                    this.error = "Veuillez remplir tous les champs";
                    this.success = null;
            }else{
                try {
                    const objectToSend = {
                        lastname: this.lastname,
                        firstname: this.firstname,
                        email: this.email,
                        password: this.password,
                        address: this.address,
                        addressCP: this.addressCP,
                        city: this.city,
                        number: this.number,
                    }
                    const response = await axios.post('http://127.0.0.1:3000/api/register', null, { params : objectToSend });
                    if(response.data.message != "success"){
                        this.success = null;
                        this.error = response.data.message;
                        this.clearInput();
                        alert(this.error);
                    }else{
                        this.success = response.data.message;
                        this.error = null;
                    }
                } catch (error) {
                    this.error = error.response.data.message;
                    this.success = null;
                    this.clearInput();
                    alert(this.error);
                }
             }
        },
        clearInput(){
            this.lastname = "";
            this.firstname = "";
            this.email = "";
            this.password = "";
            this.address = "";
            this.addressCP = "";
            this.city = "";
            this.number = "";
        }
    },
};
</script>