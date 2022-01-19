<template>
	<div class="h-auto mx-auto w-full">
		<div>
            <img src="../../assets/1.jpg">
        </div>
		<div id="home" class="text-gray-900 lg:text-4xl font-bold mb-4 mt-24 md:text-xs">
            Verre-Tech vous accompagne dans toutes vos démarches de construction et de pose !
        </div>
		<div id="home" class="container mx-auto w-full">
			<div class="my-12 px-4 md:px-12">
				<h1 class="text-left text-gray-900 text-4xl font-bold">Produits vedettes</h1>

				<div class="flex flex-wrap -mx-1 lg:-mx-4">
					<!-- <h1>{{ titre1 }}</h1> En attendant d'utiliser les props-->
					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/paroi_douche/paroidouche8.jpeg">
						<div class="items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products/1" class="underline"> Paroi de douche </router-link>	
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/cloison/cloison2.jpeg">
						<div class="items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products/2" class="underline"> Cloison </router-link>
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/insert_cheminée/insert2.jpg">
						<div class="items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products/3" class="underline"> Insert Cheminée </router-link>
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/miroirs/miroir2.jpeg">
						<div class=" items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products/4" class="underline"> Miroirs </router-link>
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/crédence/crédence6.jpg">
						<div class=" items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products/5" class="underline"> Crédence de cuisine </router-link>
						</div>
					</div>

					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class= "rounded-3xl" width="300" height="200" src="../../assets/produits/verredecoratif/verredecoratif.jpg">
						<div class=" items-center justify-between leading-tight p-2 md:p-4">
							<router-link to="/products/6" class="underline"> Verre décoratif </router-link>
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
						<router-link to="/products" class="underline"> Arbor </router-link>
					</div>					
					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class="rounded-3xl" width="300" height="200" src="../../assets/produits/miroirs/miroir2.jpeg">
						<router-link to="/products" class="underline"> Echo </router-link>
					</div>					
					<div class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
						<img class="rounded-3xl" width="300" height="200" src="../../assets/produits/verredecoratif/verredecoratif.jpg">
						<router-link to="/products" class="underline"> Filae </router-link>
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