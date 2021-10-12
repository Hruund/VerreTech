<template>
    <div class="container w-screen mx-auto my-56">
        <div class="text-4xl font-bold">Contact</div>
        <div class="mt-24 w-auto text-left text-2xl">
            Pour nous contacter quel que soit le motif, merci d'adresser un mail à l'adresse : <span class="font-bold"><a href="mailto:verretech@contact.com" class="btn btn-primary">verretech@contact.com</a></span><br>
            Avant de nous contacter par mail, vous pouvez également prendre connaissance de notre <router-link to="/"><span class="font-bold">FAQ : Foire aux questions</span></router-link> 
            qui se trouve en bas de notre page d'accueil afin de vérifier si la réponse à votre question ne s'y trouve pas déjà.
            <br>
            <br>
            Merci.
        </div>
    </div>
</template>
<style scoped>
.maxHeightCenter{
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>