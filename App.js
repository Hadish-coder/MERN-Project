// // import React, { useState } from "react";
// // import Dropdown from "./components/Dropdown";
// // import TransactionsTable from "./components/TransactionsTable";
// // import Statistics from "./components/Statistics";
// // import BarChart from "./components/BarChart";
// // import PieChart from "./components/PieChart";

// // const App = () => {
// //   const [selectedMonth, setSelectedMonth] = useState("March");

// //   return (
// //     <div>
// //       <h1>Transaction Dashboard</h1>
// //       <Dropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
// //       <TransactionsTable selectedMonth={selectedMonth} />
// //       <Statistics selectedMonth={selectedMonth} />
// //       <BarChart selectedMonth={selectedMonth} />
// //       <PieChart selectedMonth={selectedMonth} />
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState } from "react";
// import Dropdown from "./components/Dropdown";
// import TransactionsTable from "./components/TransactionsTable";
// import Statistics from "./components/Statistics";
// import BarChart from "./components/BarChart";
// import PieChart from "./components/PieChart";

// const App = () => {
//   const [selectedMonth, setSelectedMonth] = useState("March");

//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <Dropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
//       <TransactionsTable selectedMonth={selectedMonth} />
//       <Statistics selectedMonth={selectedMonth} />
//       <BarChart selectedMonth={selectedMonth} />
//       <PieChart selectedMonth={selectedMonth} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import TransactionsTable from "./components/TransactionsTable";
// import BarChart from "./components/BarChart";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");
  // const [barChartData] = useState({
  //   labels: ["0-100", "101-200", "201-300"],
  //   data: [5, 10, 20],
  // });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Transaction Dashboard</h1>
      <Dropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <TransactionsTable selectedMonth={selectedMonth} />
      {/* <BarChart barChartData={barChartData} /> */}
    </div>
  );
};

export default App;

