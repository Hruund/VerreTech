<template>
    <div id="about" class="mx-auto container">
        <div id="home" class="text-gray-900 text-4xl font-bold mb-4 mt-24">
            Verre-Tech, entreprise familiale
        </div>
        <div>
            <img src="../../assets/ville.png">
        </div>
        <div id="home" class="mt-4">
            <div class="text-left p-2 m-4">
                <p>
                    Le groupe Verre-Tech est un groupe 100% familial créé en 1995 qui a étalie son siège social dans la ville de Besançon dans l'est de la France.
                </p>
                <p class="mt-4">
                    Depuis son origine Verre-Tech est spécialisée et leader dans la fabrication et la distribution en magasins de produits en verre techniques et décoratifs.
                    Petit à petit l'entreprise a sû se répandre dans différents secteurs en ouvrant d'autres entrepôts permettant à tous d'accèder à notre gamme de produits de verre.
                </p>
            </div>
            <div @click="scrollToTop" class="cursor-pointer">
                Remonter en haut de la page
            </div>
        </div>
        <hr style="height: 2px; width: 50%;" class="mx-auto">
    </div>
</template>
<script>
export default {
    methods:{
        scrollToTop(){ // Revenir en haut de la page d'accueil
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>
#home {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}