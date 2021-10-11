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
                        <div class="mb-5 text-left"><label>Date de naissance</label></div>
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
                        type="text"
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

                        <input
                        v-model="birthdate"
                        type="text"
                        name="birthdate"
                        placeholder="Date de naissance"
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
};
</script>