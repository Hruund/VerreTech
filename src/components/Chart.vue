<template>
    <h1>Nombre de vente sur l'année en cours</h1>
    <div>
        <canvas id="vente-chart"></canvas>
    </div>
    <!--  Tu dupliques ces div pour autant de graphs-->
    <h1>Nombre de retrait en boutiques sur l'année en cours</h1>
    <div class="mt-5">
        <canvas id="retrait-chart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
import ChartData from '../../chart-data.js'

export default {
  name: 'Chart',
  data() {
    return {
      ChartData: ChartData
    }
  },
  mounted() {
    // Tu crées autant de ces parties pour chaque graphique, go dans chart-data.js pour alimenter en données
    // https://www.digitalocean.com/community/tutorials/vuejs-vue-chart-js
    // https://www.chartjs.org/docs/latest/samples/line/stepped.html
    // Graphes de ventes
    const ctx = document.getElementById('vente-chart');
    new Chart(ctx, this.ChartData);

    // Graphes de retrait
    const ctx2 = document.getElementById('retrait-chart');
    new Chart(ctx2, this.ChartData);
  }
}
</script>