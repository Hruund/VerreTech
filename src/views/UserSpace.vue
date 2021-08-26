<template>
    <div class="bg-center">
        <h2 class="mt-4 mb-4 font-semi-bold text-3xl">Espace membre</h2>
    </div>

    <div class="flex items-start place-content-center">
        <div class="border-2 rounded-sm">
            <div v-for="tab in tabs" :key="tab" >
                <button class="bg-gray-100 p-3 w-full transition-all duration-100 ease-linear hover:bg-blue-300" @click="selected = tab;">
                    {{ tab }}
                </button>
            </div>
        </div>
        
        <component :is="selected" class="ml-10"></component>
    </div>
</template>

<script>
import Informations from "../components/user/PersonalInfosComponent";
import Commandes from "../components/user/OrdersComponent";
import Support from "../components/user/SupportComponent";

export default {
  data: function() {
    return {
      tabs: ["Informations", "Commandes", "Support"],
      selected: "Informations"
    };
  },
  components: {
    Informations,
    Commandes,
    Support
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