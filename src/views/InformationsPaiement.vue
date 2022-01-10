<template>
    <div class="container mx-auto bg-gray-100 p-6">
        <div class="text-4xl font-bold mb-6">Informations de paiement</div>
        <form method="#" class="mx-auto p-8 border-gray-900 rounded-lg border border-4">
            <div class="md:grid md:grid-cols-2">
                <div class="md:mr-8 md:border-r-4 md:border-gray-600 p-6 md:text-left">
                    <h2 class="font-bold mb-4">Je vérifie mes informations</h2>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold  mb-1 md:mb-0 pr-8" for="lastname">
                                Nom
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="lastname" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="lastname" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold mb-1 md:mb-0 pr-8" for="firstname">
                                Prénom
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="firstname" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="firstname" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold mb-1 md:mb-0 pr-8" for="email">
                                Email utilisateur
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="email" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" placeholder="email@namespace.com">
                        </div>
                    </div>
                    <h2 class="font-bold mb-4">Mon adresse</h2>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold mb-1 md:mb-0 pr-8" for="address">
                                Adresse et N° de rue
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="address" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="address" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold mb-1 md:mb-0 pr-8" for="addressCP">
                                Code Postal
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="addressCP" type="text" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="5" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="addressCP">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold mb-1 md:mb-0 pr-8" for="city">
                                Ville
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="city" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="city" type="text">
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block font-bold mb-1 md:mb-0 pr-8" for="number">
                                Numéro de téléphone
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input v-model="number" class="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="number" type="text">
                        </div>
                    </div>
                </div>
                <div class="p-6 md:text-left">
                    <h2 class="font-bold mb-4">Choisir la boutique près de chez moi :</h2>
                    <div class="mt-4">
                        <select v-model="maps" class="w-full bg-gray-200 border border-gray-900 text-gray-700 px-8 py-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="localisation">
                            <option selected disabled value="">Choisissez</option>
                            <option v-for="shop in listShop" v-bind:key="shop.address" :value="shop.localisation">{{shop.address}}</option>
                        </select>
                    </div>
                    <div class="mt-4 rounded-lg border">
                        <iframe :src=maps height="450" class="w-full" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        <router-link to="/panier"> Retour </router-link>
                    </button>
                </div>
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        <router-link to="/cards"> Passer au paiement </router-link>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
  export default {
    data() {
    return{
        listShop: [
            { address: '23 Rue Bouffard, 33000 Bordeaux', localisation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.1103618453076!2d-0.5821868486748426!3d44.83968578281391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527c32b2508d3%3A0xac7c05a3e443d4e5!2s23%20Rue%20Bouffard%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1634037329491!5m2!1sfr!2sfr'},
            { address: '23 Rue Bouffard, 54000 Nancy', localisation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.8183355130536!2d6.17225065142327!3d48.689837820411654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47949873fb4e9999%3A0x454ee20d6d28cdb!2sGare%20de%20Nancy-Ville!5e0!3m2!1sfr!2sfr!4v1634046584457!5m2!1sfr!2sfr'},
            { address: '22 Rue Littré, 59000 Lille', localisation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.059618456679!2d3.053687451475348!3d50.626009282479444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d59c79716a15%3A0x22fc6e37f85a5cfd!2s22%20Rue%20Littr%C3%A9%2C%2059000%20Lille!5e0!3m2!1sfr!2sfr!4v1641835655302!5m2!1sfr!2sfr'},
            { address: '8 Rue Gasparin, 69002 Lyon', localisation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5715920604207!2d4.831118051347967!3d45.75973392159294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea540de77337%3A0x777286b1d4c697da!2s8%20Rue%20Gasparin%2C%2069002%20Lyon!5e0!3m2!1sfr!2sfr!4v1641835907008!5m2!1sfr!2sfr'},
        ],
        maps: null
    }
}
  }
</script>