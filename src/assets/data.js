// data.js
export const dummyDataSets = {
  "1 Day": {
    pieData: {
      labels: ["Leads", "Opportunities", "Closed"],
      datasets: [
        {
          data: [20, 10, 5],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
    lineData: {
      labels: ["Hour 1", "Hour 2", "Hour 3", "Hour 4", "Hour 5"],
      datasets: [
        {
          label: "Sales",
          data: [1, 5, 2, 3, 1],
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    },
  },
  "1 Week": {
    pieData: {
      labels: ["Leads", "Opportunities", "Closed"],
      datasets: [
        {
          data: [150, 100, 75],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
    lineData: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales",
          data: [10, 20, 5, 15, 10, 5, 7],
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    },
  },
  "1 Month": {
    pieData: {
      labels: ["Leads", "Opportunities", "Closed"],
      datasets: [
        {
          data: [500, 300, 200],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
    lineData: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Sales",
          data: [40, 60, 30, 50],
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    },
  },
  "1 Year": {
    pieData: {
      labels: ["Leads", "Opportunities", "Closed"],
      datasets: [
        {
          data: [2000, 1500, 1000],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
    lineData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Sales",
          data: [120, 90, 130, 100, 150, 200, 170, 130, 160, 180, 210, 230],
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    },
  },
};
