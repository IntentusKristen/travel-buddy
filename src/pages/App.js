import '../App.css';
import { MapComponent } from '../components/MapComponent';
import { WeatherWidget } from '../components/WeatherWidget';
import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState({});
  
  fetch('http://localhost:5001/api/weather')
  .then(res => res.json())
  .then(data => {
    setWeather(data.data);
  })
  .catch(error => {
      console.error('Error fetching weather data:', error);
  });

  return (
    <div className="App" id='root'>
      <header className="App-header">
        { weather && (
          <WeatherWidget 
            lat={42.9849}
            lng={-81.2453}
            city={'London, Ontario'}
            weather={weather}
          />
        )}
        <MapComponent/>
      </header>
    </div>
  );
}

export default App;
