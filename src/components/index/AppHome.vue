<template>
	<div class="h-auto mx-auto w-full">
		<div>
            <img src="../../assets/1.jpg">
        </div>
		<div id="home" class="text-gray-900 lg:text-4xl font-bold mb-4 mt-24 md:text-xs">
            VerreTech vous accompagne dans toutes vos démarches de construction et de pose !
        </div>
		<div id="home" class="container mx-auto">
			<div class="my-12 px-4 md:px-12">
				<h1 class="text-left text-gray-900 text-4xl font-bold">Produits vedettes</h1>
				
				<div class="flex flex-wrap -mx-1 lg:-mx-4">
					<!-- <h1>{{ titre1 }}</h1> En attendant d'utiliser les props-->
					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<div class="flex items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products" class="underline"> Paroi de douche </router-link>	
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<div class="flex items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products" class="underline"> Cloison </router-link>
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<div class="flex items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products" class="underline"> Insert Cheminée </router-link>
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<div class="flex items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products" class="underline"> Miroirs </router-link>
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<div class="flex items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products" class="underline"> Crédence de cuisine </router-link>
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<div class="flex items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products" class="underline"> Verre décoratif </router-link>
						</div>
					</div>
				</div>
			</div>
			<hr style="height: 2px; width: 50%;" class="mx-auto">
			<div class="my-12 px-4 md:px-12">
				<h1 class="text-left text-gray-900 text-4xl font-bold">Nouveautés</h1>
				<div class="flex flex-wrap -mx-1 lg:-mx-4">
					<!-- <h1>{{ titre2 }}</h1> En attendant d'utiliser les props-->	
					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class="rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<router-link to="/ficheProduit" class="underline"> Arbor </router-link>
					</div>					
					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class="rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<router-link to="/ficheProduit" class="underline"> Echo </router-link>
					</div>					
					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class="rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<router-link to="/ficheProduit" class="underline"> Filae </router-link>
					</div>
				</div>
			</div>
			<hr style="height: 2px; width: 50%;" class="mx-auto">
		</div>
	</div>
</template>

<script>

export default {

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