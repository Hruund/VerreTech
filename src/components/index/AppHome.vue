<template>
	<div class="h-auto mx-auto w-full">
		<div class="mx-24 flex content-center items-center my-24 h-full">
			<div class="h-full w-1/2">
				<img class= "h-full rounded-3xl" src="../../assets/1.jpg">
			</div>
			<div id="home" class="h-full w-1/2 text-gray-900 text-4xl text-justify font-bold ml-24">
				VerreTech vous accompagne dans toutes vos démarches de construction et de pose !
			</div>
		</div>
		<div id="home" class="container mx-auto">
			<div class="container mx-auto my-12">
				<div>
					<!-- <h1>{{ titre1 }}</h1> En attendant d'utiliser les props--> 
					<h1 class="text-left text-gray-900 text-4xl font-bold">Produits vedettes</h1>
					<div class="grid grid-cols-3 gap-4 mt-3 font-serif">
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Paroi de douche</p><a class="underline" href="#/products">Voir</a>
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Cloison</p><a class="underline" href="#/products">Voir</a>
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Insert Cheminée</p><a class="underline" href="#/products">Voir</a>
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Miroirs</p><a class="underline" href="#/products">Voir</a>
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Crédence de cuisine</p><a class="underline" href="#/products">Voir</a>
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Verre décoratif</p><a class="underline" href="#/products">Voir</a>
						</div>
					</div>
				</div>
			</div>
			<hr style="height: 2px; width: 50%;" class="mx-auto">
			<div class="container mx-auto my-12">
				<div>
					<!-- <h1>{{ titre2 }}</h1> En attendant d'utiliser les props--> 
					<h1 class="text-left text-gray-900 text-4xl font-bold">Nouveautés</h1>
					<div class="grid grid-cols-3 gap-4">
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Arbor</p><a class="underline" href="">Voir</a>
						</div>					
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Echo</p><a class="underline" href="">Voir</a>
						</div>					
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							<p id="home" class="my-2">Filae</p><a class="underline" href="">Voir</a>
						</div>
					</div>
				</div>
			</div>
			<hr style="height: 2px; width: 50%;" class="mx-auto">
		</div>
	</div>
</template>

<script>
//import Carousel from './carousel/Carousel.vue'
//import CarouselSlide from './carousel/CarouselSlide.vue'

export default {
  /*components: { 
    Carousel, 
    CarouselSlide 
  },*/

  props: {
    titre1: String,
    titre2: String
  }
}
</script>

<style>
#home {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>