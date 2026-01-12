import './App.css'
import { useState, useEffect } from 'react'

function App() {
//https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2025-12-27&end_date=2026-01-10&hourly=temperature_2m
  const [data , setData] = useState([]);

  useEffect(() => {
    fetch('https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2025-12-27&end_date=2026-01-10&hourly=temperature_2m')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
  }, []);


  return (
    <>

    </>
  )
}

export default App
