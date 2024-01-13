import '../App.css';
import { MapComponent } from '../components/MapComponent';
import { WeatherWidget } from '../components/WeatherWidget';
import AerisWeather from '@aerisweather/javascript-sdk';
import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState({});
  const CLIENT_ID = "F9AOaKXHdBXXfYnkTchi4";
  const CLIENT_SECRET = "zNdXreDts6Z3zAjosCewOOkwqfxg5HphiJ55gJr3";
  const aeris = new AerisWeather(CLIENT_ID, CLIENT_SECRET);

  // Get location details
  // aeris.api().endpoint('observations').place('london, on').get().then((result) => {
  //   const data = result.data.ob;
  //   setWeather(data);
  // });
  
  return (
    <div className="App" id='root'>
      <header className="App-header">
        {/* { weather && (
          <WeatherWidget 
            lat={42.9849}
            lng={-81.2453}
            city={'London, Ontario'}
            weather={weather}
          />
        )} */}
        <MapComponent/>
      </header>
    </div>
  );
}

export default App;
