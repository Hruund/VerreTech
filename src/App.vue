<template>   
  <body id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <router-view> </router-view>   <!-- Route render here -->
    </main>
    <AppFooter />
  </body>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import AppFooter from './components/footer/AppFooter.vue'

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
