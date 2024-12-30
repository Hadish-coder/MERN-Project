import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = ({ selectedMonth }) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get(`/statistics?month=${selectedMonth}`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, [selectedMonth]);

  return (
    <div>
      <h3>Statistics for {selectedMonth}</h3>
      <p>Total Sale Amount: {stats.totalSales}</p>
      <p>Sold Items: {stats.soldItems}</p>
      <p>Unsold Items: {stats.unsoldItems}</p>
    </div>
  );
};

export default Statistics;
