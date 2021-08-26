<template>
    <div class="mb-10">
        <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
             <form v-if="!success" method="post" @submit.prevent="register">

                <div class="w-full mb-5 flex">
                    <label class="">Prénom</label>
                    <input
                    v-model="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                    class="ml-4 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                </div>

                <div class="w-full mb-5 flex">
                    <label class="">Nom</label>
                    <input
                    v-model="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Nom"
                    class="ml-4 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                </div>

                <div class="w-full mb-5 flex">
                    <label class="">EMail</label>
                    <input
                    v-model="email"
                    type="text"
                    name="email"
                    placeholder="EMail"
                    class="ml-4 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                </div>

                <div class="w-full mb-5 flex">
                    <label class="">Adresse</label>
                    <input
                    v-model="adress"
                    type="text"
                    name="adress"
                    placeholder="Adresse"
                    class="ml-4 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                </div>

                <div class="w-full mb-5 flex">
                    <label class="">Date de naissance</label>
                    <input
                    v-model="birthdate"
                    type="text"
                    name="birthdate"
                    placeholder="Date de naissance"
                    class="ml-4 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
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