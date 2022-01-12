export const currentYearOrdersData = {
  type: "line",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
    datasets: [
      {
        label: "Nombre de commandes",
        data: [2823, 2587, 3241, 3768, 2985, 2894, 3876, 4023, 3789, 3897, 5203, 4873],
        backgroundColor: "rgba(54,73,93,.5)",
        borderColor: "#36495d",
        borderWidth: 3
      },
      {
        label: "Nombre de retraits en boutiques Verre-Tech",
        data: [1267, 1234, 1423, 2164, 1693, 1407, 2109, 2389, 2485, 2465, 2801, 2623],
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

export const currentMonthViewsData = {
  type: "line",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
    datasets: [
      {
        label: "Nombre de visites sur la boutique",
        data: [98923, 107856, 120984, 121293, 113098, 111876, 119845, 137856, 149583, 169487, 178394, 172392],
        backgroundColor: "rgba(54,73,93,.5)",
        borderColor: "#36495d",
        borderWidth: 3
      },
      {
        label: "Nombre de connexions utilisateur",
        data: [13342, 14203, 19038, 18987, 14012, 12845, 11213, 16045, 19043, 21567, 23794, 24231],
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

export default { currentYearOrdersData, currentMonthViewsData };