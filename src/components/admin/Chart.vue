<template>
    <h1>Nombre de commandes sur l'année en cours</h1>
    <div>
        <canvas id="orders-chart"></canvas>
    </div>
    <h1 class="mt-12">Nombre de visites du site sur le mois en cours</h1>
    <div>
        <canvas id="views-chart"></canvas>
    </div>
    
    <h1 class="mt-12">Catégories des articles commandés (en pourcentage)</h1>
    <div class="mt-6">
        <canvas class="container mx-auto w-2/3" id="tickets-chart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
import {currentYearOrdersData, currentMonthViewsData} from '../../../chart-data.js'

export default {
  name: 'Chart',
  data() {
    return {
        currentYearOrdersData: currentYearOrdersData,
        currentMonthViewsData: currentMonthViewsData
    }
  },
  mounted() {
    // Graphes de ventes
    const ctx = document.getElementById('orders-chart');
    new Chart(ctx, this.currentYearOrdersData);

    // Graphes de retrait
    const ctx2 = document.getElementById('views-chart');
    new Chart(ctx2, this.currentMonthViewsData);

    var ctx3 = document.getElementById("tickets-chart").getContext('2d');
    var data = {
        datasets: [{
            data: [12, 22, 6, 27, 33],
            backgroundColor: [
                '#3c8dbc',
                '#f56954',
                '#11ad01',
                '#fa129a',
                '#f39c12',
            ],
        }],
        labels: [
            'Parois de douches',
            'Crédence cuisine',
            'Cloison',
            'Miroir',
            'Verre décoratif',
        ]
    };
    new Chart(ctx3, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
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