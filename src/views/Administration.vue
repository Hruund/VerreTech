<template>
    <div class="w-screen">
        <h2 class="mt-4 mb-4 font-semi-bold text-3xl text-gray-900">Administration</h2>
        <div class="w-1/2 container mx-auto">
          <Chart/>
        </div>
    </div>
</template>



<script>
import Chart from '../components/Chart.vue'
export default {
  components: {
    Chart
  }
}
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