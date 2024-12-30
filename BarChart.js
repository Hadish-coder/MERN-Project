// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import axios from "axios";
// import "../chartSetup";


// const BarChart = ({ selectedMonth }) => {
//   const [barData, setBarData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`/bar-chart?month=${selectedMonth}`)
//       .then((res) => setBarData(res.data))
//       .catch((err) => console.error(err));
//   }, [selectedMonth]);

//   const data = {
//     labels: Object.keys(barData),
//     datasets: [
//       {
//         label: "Number of Items",
//         data: Object.values(barData),
//         backgroundColor: "rgba(75,192,192,1)"
//       }
//     ]
//   };

//   return <Bar data={data} />;
// };

// export default BarChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import { Paper, Typography } from "@mui/material";

const BarChart = ({ barChartData }) => {
  const data = {
    labels: barChartData.labels || [],
    datasets: [
      {
        label: "Number of Items",
        data: barChartData.data || [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Paper elevation={3} style={{ padding: "1rem", marginTop: "1rem" }}>
      <Typography variant="h6">Price Range Distribution</Typography>
      <Bar data={data} />
    </Paper>
  );
};

export default BarChart;


