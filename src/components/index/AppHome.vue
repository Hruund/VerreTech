<template>
	<div class="h-auto mx-auto">
		<div class="mx-24 flex content-center items-center my-24 grid grid-cols-4">
			<div class="w-1/2"></div>
			<div class="w-1/2 h-full text-left text-gray-900 text-4xl font-bold">VerreTech vous accompagne dans toutes vos démarches de construction et de pose !</div>
			<div class="w-1/1 h-full">
				<img class= "rounded-3xl h-full object-cover" width="800" height="1080" src="../../assets/1.jpg">
			</div>
			<div class="w-1/2"></div>
		</div>
		<div class="container mx-auto">
			<div class="container mx-auto my-12">
				<div>
					<!-- <h1>{{ titre1 }}</h1> En attendant d'utiliser les props--> 
					<h1 class="text-left text-gray-900 text-4xl font-bold">Produits vedettes</h1>
					<div class="grid grid-cols-3 gap-4 mt-3 font-serif">
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							Paroi de douche
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							Cloison
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							Insert Cheminée
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							Miroirs
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							Crédence de cuisine
						</div>
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							Verre décoratif
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
							Arbor
						</div>					
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							Echo
						</div>					
						<div class="mx-auto">
							<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
							Filae
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

</style>