// import { useState } from "react";
//  import "./App.css";
// import BarChart from "./BarChart";
// // //import LineChart from "./components/LineChart";
//  import PieChart from "./PieChart";
//  import { UserData } from "./Data";

//   const [userData, setUserData] = useState({
//     labels: UserData.map((data) => data.year),
//      datasets: [
//       {
//         label: "Users Gained",
//         data: UserData.map((data) => data.userGain),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
          
//         ],
//          borderColor: "black",
//          borderWidth: 2,
//       },
//     ],
//   });
//   return(
//      <div className="graphe">
//      { <div className="App">

//       <div style={{ width: 500 }}>
//       <PieChart chartData={userData} />
//      </div>
//      </div> }
//     <div style={{ width: 600 }}>
//       <BarChart chartData={userData} />
//     </div>
//   </div>)