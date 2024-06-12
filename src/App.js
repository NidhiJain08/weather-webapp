import React,{useState} from 'react';
import axios from  'axios';
import './index.css'; // Ensure you import your CSS file
function App(){

  const [data,setData]=useState({})
  const [location,setLocation]=useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid={API key}`
  const handleKeyDown=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
     })
     setLocation('')
    }
    
  }
  return (
  <div className='app'>
    <div className="search">
    <input type='text' 
    value={location} 
    onChange={event=> setLocation(event.target.value)} 
    placeholder='Enter city'
    onKeyDown={handleKeyDown} />
 
    </div>
    
    <div className="container">
      <div className="top">
         <div className="location">
          <p>{data.name}</p>
         </div>
         <div className="temp">
          {data.main ? <h1>{data.main.temp}°C</h1> : null}
         </div>
         <div className="description">
           {data.weather ? <p>{data.weather[0].description}</p> : null}
         </div>
      </div>
      {!data.name && (
          <div className="welcome">
            <h2>Weather Web App</h2>
            <p>Enter a city name to get the current weather information.</p>
          </div>
        )}
    
      {
      data.name !== undefined && (<div className="bottom">
        <div className="feels">
        {data.main ? <p>{data.main.feels_like}</p> : null}
        <p>Feels like</p>
        </div>
        <div className="humidity">
        {data.main ? <p>{data.main.humidity}</p> : null}
         <p>Humidity</p>
        </div>
        <div className="wind">
        {data.wind ? <p>{data.wind.speed} MPH</p> : null}
         <p>Wind speed</p>
        </div>
      </div>)
      }
    </div>

  </div>
  );
}
export default App;