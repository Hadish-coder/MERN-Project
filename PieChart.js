import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import "../chartSetup";


const PieChart = ({ selectedMonth }) => {
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    axios
      .get(`/pie-chart?month=${selectedMonth}`)
      .then((res) => setPieData(res.data))
      .catch((err) => console.error(err));
  }, [selectedMonth]);

  const data = {
    labels: Object.keys(pieData),
    datasets: [
      {
        data: Object.values(pieData),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF"
        ]
      }
    ]
  };

  return <Pie data={data} />;
};

export default PieChart;
