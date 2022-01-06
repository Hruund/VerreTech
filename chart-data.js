export const ChartData = {
    type: "line",
    data: {
      labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
      datasets: [
        {
          label: "Nombre de ventes par année",
          data: [0, 0, 1, 2, 79, 82, 27, 14, 45, 84, 25, 10],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
        {
          label: "Nombre de jour",
          data: [30, 15, 45, 84, 954, 285, 43, 51, 65, 402, 320, 150],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default ChartData;