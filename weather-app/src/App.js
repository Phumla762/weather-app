import React, {useState} from 'react';
import './App.css';




 function App() {

  const api = {
    key: 'ef532c5c7b3674a8ac2d34d2554a9813'
  }
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")


  const getWeather = (event) => {
    if (event.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(data => {
        setWeatherData(data)
        setCity("")
      })
    }
  }


  return (
    <div className='container'>
    <input
    className='input'
    placeholder='Search city'
    onChange={e => setCity(e.target.value)}
    value={city}
    onKeyPress={getWeather}
    />

{typeof weatherData.main === 'undefined' ? (
  <div>
    <p className='text'>
      Enter in a city to get the weather:
    </p>
  </div>
)
:
(
  <div className='info'>
    <p className='city'>{weatherData.name}</p>
    <p className='temp'>{ Math.round(weatherData.main.temp)}°C</p>
    <p className='weather'>{weatherData.weather[0].main}</p>
  </div>
)}
      
    </div>
  )
}

export default App;