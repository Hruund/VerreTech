<template>
    <div id="cookies" class="mx-auto container bg-gray-100 md:h-full p-2">
        <div class="text-gray-900 text-4xl font-bold">
            Charte d'utilisation des cookies chez Verre-Tech
        </div>

        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="mr-3">
                    <router-link to="/fr-fr/mentions-legales" class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"> Mentions légales </router-link>
                </li>
                <li class="mr-3">
                    <router-link to="/contact" class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"> Contact </router-link>
                </li>
            </ul>
        </div>
        <div id="cookies" class="p-4 mx-6 my-12 text-left text-justify">
            <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                1. Explications du cookie :
                <hr style="height: 2px; width: 50%;">
            </div>
            <p>
                Un cookie est un fichier texte susceptible d’être enregistré dans un espace dédié du disque dur de votre terminal
                (PC, ordinateur portable ou smartphone, par exemple) à l’occasion de la consultation d’un service en ligne grâce à votre logiciel de navigation.
                Un fichier cookie permet à son émetteur d’identifier le terminal dans lequel il est enregistré, pendant la durée de validité ou d’enregistrement dudit cookie.
                Nous utilisons uniquement les cookies pour vous suivre en tout anonymat sur notre site.
                Nous pouvons ainsi vous offrir le contenu le plus adapté et la meilleure expérience utilisateur.
            </p>

            <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                2. Utilisation du cookie :
                <hr style="height: 2px; width: 50%;">
            </div>
            <p>
                Pour le cas des cookies plucitaires, leur fonctionnement sert à enregistrer des informations sur la navigation des utilisateurs afin de définir ses centres d'intérêts. Ils offrent aux sociétés le moyen de personnaliser leur publicité en fonction des actions effectuées sur le site visité.
            </p>
            <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                3. Désactivation des cookies
                <hr style="height: 2px; width: 50%;">
            </div>
            <p>
                Vous pouvez révoquer votre consentement à l’utilisation des cookies à tout moment, de la façon suivante :
                <br><br>
                Si vous souhaitez supprimer les cookies enregistrés sur votre terminal et paramétrer votre navigateur pour refuser les cookies, vous pouvez le faire via les préférences de votre navigateur internet. Ces options de navigation relatives aux cookies se trouvent habituellement dans les menus « Options », « Outils » ou « Préférences » du navigateur que vous utilisez pour accéder à ce site. Cependant, selon les différents navigateurs existants, des moyens différents peuvent être utilisés pour désactiver les cookies.
                <br><br>
                Veuillez noter que si vous refusez, depuis votre navigateur internet, l’enregistrement de cookies sur votre terminal, vous serez toujours en mesure de naviguer sur ce site, mais certaines parties et options pourraient ne pas fonctionner correctement.
                <br><br>
                S’agissant des cookies publicitaires déposés par des tiers, vous pouvez également vous connecter au site www.youronlinechoices.com, proposé par les professionnels de la publicité digitale regroupés au sein de l’association européenne EDAA (European Digital Advertising Alliance).Vous pourrez ainsi refuser ou accepter les cookies utilisés les professionnels de la publicité adhérents.
            </p>
            
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

#cookies {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>