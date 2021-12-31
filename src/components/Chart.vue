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
    
    <h1>Nombre de clients sur l'année en cours</h1>
    <div class="mt-5">
        <canvas id="layanan-chart"></canvas>
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

    // Sinon tu peux aussi les créer comme ça en direct :
    // https://stackoverflow.com/questions/53172262/multiple-charts-in-one-page-with-chart-js/53172498
    var ctx3 = document.getElementById("layanan-chart").getContext('2d');
    var data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#3c8dbc',
                '#f56954',
                '#f39c12',
            ],
        }],
        labels: [
            'Request',
            'Layanan',
            'Problem'
        ]
    };
    new Chart(ctx3, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });
  }
}
</script>