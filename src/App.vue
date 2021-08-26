<template>   
  <div id="app" class="relative">
    <Navbar />
      <router-view class="h-auto w-screen"> </router-view>   <!-- Route render here -->
    <AppFooter />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
