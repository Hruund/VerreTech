<template>
    <div class="mb-10">
        <div class="mx-auto px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
             <form v-if="!success" method="post" @submit.prevent="register">

                <div class="w-full flex">
                    <div class="w-3/12 mt-1">
                        <div class="mb-5 text-left"><label>Prénom</label></div>
                        <div class="mb-5 text-left"><label>Nom</label></div>
                        <div class="mb-5 text-left"><label>E-mail</label></div>
                        <div class="mb-5 text-left"><label>Adresse complète</label></div>
                    </div>

                    <div class="w-9/12">
                        <input
                        v-model="firstname"
                        type="text"
                        name="firstname"
                        placeholder="Prénom"
                        class="w-4/5 mb-5 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />

                        <input
                        v-model="lastname"
                        type="text"
                        name="lastname"
                        placeholder="Nom"
                        class="w-4/5 mb-5 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />

                        <input
                        v-model="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        class="w-4/5 mb-5 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />

                        <input
                        v-model="adress"
                        type="text"
                        name="adress"
                        placeholder="Adresse complète"
                        class="w-4/5 mb-5 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                    </div>
                </div>

                <button 
                    id="button"
                    type="submit"
                    class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:outline-none">
                    Enregistrer
                </button>
            </form>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
            success: null,
            error: null,
        };
    },
    methods: {
         async register() {
            this.error = null;
        try {
            this.$axios.setToken(false);
            await this.$axios.post("auth/local/register", {
                username: this.username,
                email: this.email,
                password: this.password,
            });
            this.success = `Inscription réussie !`;
        }   catch (e) {
                this.error = e.response.data.message[0].messages[0].message;
            }
        },
    },
    async mounted(){
        if (document.cookie.length > 0) {
            const cookies = document.cookie.split(";");
            let actualCookies = {};
            for (let i = 0; i < cookies.length; i++) {
                let cookiename = cookies[i].split("=")[0];
                let cookievalue = cookies[i].split("=")[1];
                actualCookies[cookiename.trim()] = cookievalue;
            }
            const idOfUser = actualCookies.id;
            const access_token = actualCookies.access_token; 
            axios.get('http://'+process.env.VUE_APP_SERVER_IP+":"+process.env.VUE_APP_USER_PORT+'/api/user/'+idOfUser, {
                    params : {
                        access_token: access_token
                    }
                })
                .then(response => {
                    console.log(response.data);
                    this.adress = response.data.user.user_adress + " " + response.data.user.user_postal_code + " " + response.data.user.user_city;
                    this.email = response.data.user.email;
                    this.lastname = response.data.user.nom;
                    this.firstname = response.data.user.prenom;
                })
                .catch(error => {
                    console.log(error); //Error todo?
                    this.$router.push("/login");
                });
        }else{
            this.$router.push("/login");
        }
        
    }
};
</script>