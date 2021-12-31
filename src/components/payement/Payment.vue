<template>
 <div class="col-span-1 lg:col-span-6">
  <h4 class="text-3xl text-gray-700 mb-5">Méthode de paiement</h4>
  <div class="p-10 rounded-md shadow-md bg-white">
   <div class="mb-6">
    <label class="block mb-3 text-gray-600 font-bold" for="">Nom figurant sur la carte</label>
    <!-- Cet input n'autorise que les lettres -->
    <input type="text" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"/>
   </div>
   <div class="mb-6">
    <label class="block mb-3 text-gray-600 font-bold" for="">Numéro de carte bancaire</label>
    <!-- Cet input n'autorise que les chiffres avec une entrée restreinte à 16 caractères -->
    <input type="text" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="16" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"/>
   </div>
   <div class="mb-6 flex flex-wrap -mx-3w-full">
    <div class="w-2/3 px-3">
     <label class="block mb-3 text-gray-600 font-bold" for="">Date d’expiration</label>
     <div class="flex">
      <select class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mr-6">
       <option value="" selected disabled>Mois</option>
       <option value="janvier">Janvier</option>
       <option value="fevrier">Février</option>
       <option value="mars">Mars</option>
       <option value="avril">Avril</option>
       <option value="mai">Mai</option>
       <option value="juin">Juin</option>
       <option value="juillet">Juillet</option>
       <option value="aout">Aout</option>
       <option value="septembre">Septembre</option>
       <option value="octobre">Octobre</option>
       <option value="novembre">Novembre</option>
       <option value="decembre">Décembre</option>
      </select>
      <!-- Cet input n'autorise que les chiffres avec une entrée restreinte à 4 caractères -->
      <input type="text" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="4" placeholder="Année" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"/>
     </div>
    </div>
    <div class="w-1/3 px-3">
     <label class="block mb-3 text-gray-600 font-bold" for="">Code de sécurité</label>
     <input type="text" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="3" placeholder="CVC" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"/>
    </div>
   </div>
   <div class="mb-6 text-right">
    <span class="text-right font-bold">Total à régler : {{ total }}€</span>
   </div>
   <div>
    <button @click="finishPayment" class="w-full text-center px-4 py-3 bg-blue-500 hover:bg-blue-400 rounded-md shadow-md text-white font-semibold">
     Confirmer le paiement
    </button>
    <button class="w-full text-center px-4 py-3 mt-2 bg-blue-900 hover:bg-blue-600 rounded-md shadow-md text-white font-semibold">
     Payer avec Paypal
    </button>
   </div>
   
  </div>
  <button class="text-center px-4 float-left py-3 mt-2 bg-gray-900 hover:bg-gray-600 rounded-md shadow-md text-white font-semibold">
    <router-link to="/panier"> Retour </router-link>
  </button>
 </div>
</template>
<script>
export default {
 name: "Payment",
 props:{
  total:Number
 },
 methods:{
 finishPayment(){
  this.$emit('change-parent');
  }
 }
};
</script>