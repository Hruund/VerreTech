<template>
    <div id="about" class="mx-auto container">
        <div class="text-4xl font-bold mb-4">
            Verre Tech, entreprise familiale
        </div>
        <div>
            <img src="../../assets/ville.png">
        </div>
        <div class="mt-4">
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
                    PICTO POUR REMONTER
            </div>
        </div>
        <hr style="height: 2px; width: 50%;" class="mx-auto">
    </div>
</template>
<script>
export default {
    methods:{
        scrollToTop(){
            document.body.scrollY = 0;
        }
    }
}
</script>