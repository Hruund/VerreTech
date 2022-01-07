<template>
    <div class="container mx-auto h-screen bg-gray-100 p-6 mb-12">
        <div id="contact">
            <div class="text-gray-900 mx-auto text-4xl font-bold">
                Contactez-nous !
            </div>
            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                    <li class="mr-3">
                        <router-link to="/fr-fr/mentions-legales" class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"> Mentions légales </router-link>
                    </li>
                    <li class="mr-3">
                        <router-link to="/fr-fr/charte-d-utilisation-des-cookies" class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"> Cookies </router-link>
                    </li>
                </ul>
            </div>
            <div id="contact" class="p-4 mx-24 my-12 text-left">
                <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                    Pour les commandes faites sur le site
                    <hr style="height: 2px; width: 50%;">
                </div>
                <p>
                    Si vous rencontrez un soucis lors de votre commande, n'hésitez pas à consulter notre FAQ. Il se peut que des réponses puissent vous guider.
                </p>
                <div class="text-left text-gray-900 text-2xl font-bold mt-6">
                    Prendre contact
                    <hr style="height: 2px; width: 50%;">
                </div>
                <p>
                    Pour toutes vos questions ou commentaires concernant la boutique en ligne Verre Tech, veuillez utiliser une de ces options ci-dessous.
                    <br><br>
                    Par précaution, nous conseillons de ne pas envoyer plusieurs e-mails pour la même requête afin de laissez le temps à nos agents de vous répondre et de vous retourner la réponse la plus optimale.
                </p>
                <div class="text-left text-gray-900 text-xl font-bold mt-6">
                    Par téléphone
                    <hr style="height: 2px; width: 50%;">
                </div> 
                <p>
                    Vous pouvez nous joindre au xx xx xx xx xx du Lundi au Vendredi de 9h à 19h, notre service vous prendra en charge et essayera de vous guider quelque soit le soucis rencontré.
                </p>
                <div class="text-left text-gray-900 text-xl font-bold mt-6">
                    Par mail
                    <hr style="height: 2px; width: 50%;">
                </div>
                <p>
                    Vous pouvez aussi nous contacter par mail à l'adresse mail suivante : <span class="font-bold"><a href="mailto:verretech@contact.com" class="btn btn-primary">verretech@contact.com</a></span>
                    <br>
                    Vous recevrez une réponse par notre service client dans les plus bref délais.
                </p>            
            </div>
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