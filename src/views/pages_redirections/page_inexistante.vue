<template>
    <div class="container mx-auto bg-gray-100 p-6 h-screen">
        <img class= "mx-auto pt-4" width="200" height="200" src="../../assets/404.png">
        <div class="text-4xl font-bold mb-6">Oops ! Page introuvable</div>
        <div class="lg:w-3/5 lg:mx-auto p-8 border-gray-900 rounded-lg border border-4">
            {{ information }}
            <router-link to="/"> 
                <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold mt-6 py-2 px-4 rounded" @click="tryToLogin" type="submit">
                    Retour à l'accueil
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                information:"Nous sommes désolés, mais ce lien est introuvable ! Redirigez-vous vers la page d'accueil."
            }
        },
        created(){
        setTimeout( () => this.$router.push({ path: '/'}), 3000);
        }
    }
</script>