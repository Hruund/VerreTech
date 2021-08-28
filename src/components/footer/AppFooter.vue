<template>
  <footer class="bg-gray-500 h-32 w-screen flex bottom-0">
      <div class="h-full w-6/12 text-center flex flex-col justify-center">
        Copyright Verre-Tech @2021
      </div>
      <div class="h-full w-6/12 flex">
        <div class="h-full w-3/12 text-center flex flex-col justify-center">
          <router-link to="/contact"> Contact </router-link>
        </div>
        <div class="h-full w-3/12 text-center flex flex-col justify-center">
        Mentions légales
        </div>
        <div class="h-full w-3/12 text-center flex flex-col justify-center">
        Cookies
        </div>
        <div class="h-full w-3/12 text-center flex flex-col justify-center">
        Plan de site
        </div>
        <div class="h-full w-3/12 text-center flex flex-col justify-center">
        <router-link to="/#about"> A propos </router-link>
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