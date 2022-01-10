<template>
    <div class="bg-center">
        <h2 class="mt-4 mb-4 font-bold text-4xl text-gray-900">Espace membre</h2>
    </div>

    <div class="md:flex md:items-start md:place-content-center">
        <div class="md:w-1/6 border-2 rounded-sm">
            <div v-for="tab in tabs" :key="tab" >
                <button class="flex-shrink-0 text-base font-semibold py-2 px-4 shadow-md w-full hover:bg-gray-700 hover:text-white focus:outline-none" :class="tab == selected ? 'bg-gray-900 hover:bg-gray-900 text-white' : 'bg-gray-100'" @click="selected = tab;">
                    {{ tab }}
                </button>
            </div>
        </div>
        
        <component :is="selected" class="md:ml-10 md:w-1/2"></component>
    </div>
</template>

<script>
import Informations from "../components/user/PersonalInfosComponent";
import Commandes from "../components/user/OrdersComponent";

export default {
  data: function() {
    return {
      tabs: ["Informations", "Commandes"],
      selected: "Informations"
    };
  },
  components: {
    Informations,
    Commandes
  }
};
</script>

<style scoped>
.maxHeightCenter{
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>