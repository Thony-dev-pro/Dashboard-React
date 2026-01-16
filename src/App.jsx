import './App.css'
import { useState, useEffect } from 'react'

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function MyBarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 300, 250],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return <Bar data={data} options={options} />;
}

function App() {
//https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2025-12-27&end_date=2026-01-10&hourly=temperature_2m
  const [data , setData] = useState([]);

  useEffect(() => {
    console.log('Data updated:', data);
  }, [data]);

  useEffect(() => {
    fetch('https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2025-12-27&end_date=2026-01-10&hourly=temperature_2m')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
  }, []);


  return (
    <>
        <MyBarChart></MyBarChart>
    </>
  )
}

export default App
