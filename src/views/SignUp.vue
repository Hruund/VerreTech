<template>
    <div class="container mx-auto h-screen bg-gray-100 p-6">
        <img class= "mx-auto pt-4" width="100" height="100" src="../assets/user.png">
        <div class="text-4xl font-bold mb-6">Inscription</div>
        <form v-if="!success" method="post" @submit.prevent="register" class="mx-auto p-8 border-gray-900 rounded-lg border border-4">
            <div class="grid grid-cols-2">
                <div class="mr-8 border-r-4 border-gray-600 p-6">
                    <h2 class="font-bold">Je m'identifie</h2>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="lastname">
                                Nom
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="lastname" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="lastname" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="firstname">
                                Prénom
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="firstname" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="firstname" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="email">
                                Email utilisateur
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="email" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" placeholder="email@namespace.com">
                        </div>
                    </div>
                    <h2 class="font-bold mt-8">Sécuriser mon compte</h2>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="password">
                                Mot de passe
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="password" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" placeholder="******************">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="repassword">
                                Confirmer
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="repassword" type="password" placeholder="******************">
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="font-bold">Mon adresse</h2>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="address">
                                Adresse et N° de rue
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="address" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="address" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="addressCP">
                                Code Postal
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="addressCP" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="addressCP" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="city">
                                Ville
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="city" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="city" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-8" for="number">
                                Numéro de téléphone
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="number" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="number" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3 md:text-right">
                            <input class="leading-tight" type="checkbox">
                        </div>
                        <div class="md:w-2/3">
                            <label class="block md:text-left ml-2 md:mb-0" for="newsletter">
                                S'inscrire à la newsletter
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        <router-link to="/login"> Retour </router-link>
                    </button>
                </div>
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Inscription
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
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
            this.error = null;
        try {
            this.$axios.setToken(false);
            await this.$axios.post("auth/local/register", {
                email: this.email,
                password: this.password,
            });
            this.success = `Inscription réussie !`;
        }   catch (e) {
                this.error = e.response.data.message[0].messages[0].message;
            }
        },
    },
};
</script>