import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { WeatherWidget } from '../components/WeatherWidget';


export const SideBar = ({onHandleStartLatLong, onHandleEndLatLong, tags}) => {
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');
  const [weather, setWeather] = useState();
  // End lat and long
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

    // Update weather only if end location changes
    useEffect(() => {
      if (!latitude || !longitude) {
        return;
      }
      fetch(`http://localhost:5001/api/weather?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}`)
      .then(res => res.json())
      .then(data => {
        setWeather(data.data.ob);
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
    }, [latitude, longitude]);

  const handleStartAddress = newAddress => {
    setStartAddress(newAddress);
    geocodeByAddress(newAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        onHandleStartLatLong(latLng);
      })
      .catch(error => console.error('Error', error));
  };

  const handleEndAddress = newAddress => {
    setEndAddress(newAddress);
    geocodeByAddress(newAddress)
      .then(results => { 
        setLatitude(results[0].geometry.location.lat);
        setLongitude(results[0].geometry.location.lng);
        return getLatLng(results[0]);
      })
      .then(latLng => {
        console.log("latlng called!" + latLng);
        onHandleEndLatLong(latLng);
      })
      .catch(error => console.error('Error', error));
  };


  return (
    <div style={{backgroundColor: "#ebe4d1",
      top: 0,
      left: 0,
      height: "1500px",
      width: "30%",
      borderRadius: "0% 5% 5% 0%",
      position: "absolute",
      zIndex: 1,
      }}>
        <div style={{paddingTop:"10px"}}>
          <h1>Travel Buddy</h1>
        <SearchBar onAddressChange={handleStartAddress} placeholder={"Search Starting Point 🔎"}/>
        <SearchBar onAddressChange={handleEndAddress} placeholder={"Search Destination 🔎"}/>
        </div>
         {/* Showing address selected */}  
          {tags &&(tags.map(tag => (
            <div key={tag.name} style={{ marginBottom: '15px', marginTop: '15px' }}>
              <h4 style={{ marginBottom: '0px', marginTop: '2px' }}>{tag.name}: </h4>
              <p style={{ marginBottom: '0px', marginTop: '2px' }}>Type of road: {tag.highway? tag.highway: "Unavailable"}</p>
              <p style={{ marginBottom: '0px', marginTop: '2px' }}>Lanes: {tag.lanes? tag.lanes: "Unavailable"}</p>
              <p style={{ marginBottom: '0px', marginTop: '2px' }}>Max Speed: {tag.maxspeed? tag.maxspeed: "Unavailable"}</p>
            </div>
          )))}
          {/* Weather widget */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop:"2rem"
            }}>
            {weather && <WeatherWidget address={endAddress} weather={weather}/>}
          </div>
        </div>
  
  
  )
}
