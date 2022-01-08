<template>
  <footer class="bg-gray-900 h-10 flex bottom-0">
      <div class="h-full w-6/12 text-center text-white flex flex-col justify-center">
        Copyright Verre-Tech @2021
      </div>
      <div class="h-full w-6/12 flex">
        <div class="h-full w-3/12 text-center text-white flex flex-col justify-center">
          <router-link to="/contact"> Contact </router-link>
        </div>
        <div class="h-full w-3/12 text-center text-white flex flex-col justify-center">
          <router-link to="/fr-fr/mentions-legales"> Mentions légales </router-link>
        </div>
        <div class="h-full w-3/12 text-center text-white flex flex-col justify-center">
          <router-link to="/fr-fr/charte-d-utilisation-des-cookies"> Cookies </router-link>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>