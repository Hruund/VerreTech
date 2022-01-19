<template>
    <div id="mentions" class="mx-auto container bg-gray-100 md:h-full p-2">
        <div class="text-gray-900 text-4xl font-bold">
            Mentions légales d'utilisation
        </div>

        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="mr-3">
                    <router-link to="/fr-fr/charte-d-utilisation-des-cookies" class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"> Cookies </router-link>
                </li>
                <li class="mr-3">
                    <router-link to="/contact" class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"> Contact </router-link>
                </li>
            </ul>
        </div>
        <div id="mentions" class="p-4 mx-6 my-12 text-left text-justify">
            <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                Date de mise à jour :
                <hr style="height: 2px; width: 50%;">
            </div>
            <p>
                07.01.2022
            </p>

            <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                Editeur du site :
                <hr style="height: 2px; width: 50%;">
            </div>
            <p>
                Ecom-Ming <br>
                7 rue du Capitaine Truffaud<br>
                Uchaux (84100)
            </p>
            <p>
                Pour tout contact : <span class="font-bold"><a href="mailto:servicesclientsVerreTech@contact.com" class="btn btn-primary">servicesclientsVerreTech</a></span>
            </p>

            <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                Hébergeur :
                <hr style="height: 2px; width: 50%;">
            </div>
            <p>
                <ul>
                    <li>
                        OVHcloud
                    </li>
                    <li>
                        Siège social : 2 rue Kellermann - 59100 Roubaix - France
                    </li>
                    <li>
                        Numéro de téléphone service client : 1007
                    </li>
                </ul>
            </p>

            <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                1. PREAMBULE
                <hr style="height: 2px; width: 50%;">
            </div>
            <p>
                La société Verre-Tech exploite le site internet <a href="http://www.verretech.com/">http://www.verretech.com/</a>. Toute personne utilisant le Site s'engage à respecter les dispositions suivantes.
            </p>
            <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                2. ACCES AU SITE
                <hr style="height: 2px; width: 50%;">
            </div>
            <p>
                Le Site est accessible par le biais du réseau Internet. L'utilisateur reconnaît que des aléas techniques indépendants de la volonté de Verre-Tech peuvent affecter le réseau Internet et entraîner l’indisponibilité ou le ralentissement du fonctionnement du Site.
                La responsabilité de Verre-Tech ne saurait en aucun cas être engagée à ce titre.
            </p>
            <br>
            <p>
                L’accès au Site est gratuit. Toutefois, le prix de la connexion à Internet est à la charge de l’Internaute.
                <br>
                Il appartient à l’Internaute de s’assurer qu’il dispose d’une protection adéquate contre les virus informatiques.
                <br>
                L'utilisateur reconnaît que Verre-Tech ne saurait être responsable de l’intrusion par des 
                tiers dans son système informatique et/ou de l’interception par des tiers des transmissions de données effectuées à l’occasion de l’utilisation par l’Internaute du Site.
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

#mentions {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>