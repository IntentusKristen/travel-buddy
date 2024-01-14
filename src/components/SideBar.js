import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { WeatherWidget } from '../components/WeatherWidget';

export const SideBar = ({onHandleStartLatLong, onHandleEndLatLong}) => {
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');
  const [startLatLong, setStartLatLong] = useState('');
  const [endLatLong, setEndLatLong] = useState('');
  const [weather, setWeather] = useState({});

    // Update weather only if end latitude changes
    // 
    useEffect(() => {
      // fetch('http://localhost:5001/api/weather')
      // .then(res => res.json())
      // .then(data => {
      //   setWeather(data.data);
      // })
      // .catch(error => {
      //     console.error('Error fetching weather data:', error);
      // });
    }, [endAddress]);

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
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        onHandleEndLatLong(latLng);
      })
      .catch(error => console.error('Error', error));
  };

  return (
    <div style={{backgroundColor: "#ebe4d1",
      top: 0,
      left: 0,
      height: "100vh",
      width: "400px",
      borderRadius: "0% 5% 5% 0%",
      position: "absolute",
      zIndex: 1,
      }}>
        <div style={{paddingTop:"30px"}}>
        <SearchBar onAddressChange={handleStartAddress} placeholder={"Search Starting Point 🔎"}/>
        <SearchBar onAddressChange={handleEndAddress} placeholder={"Search Destination 🔎"}/>
        </div>
         {/* Showing address selected */}
        <div style={{paddingTop: 30, marginLeft: 30, marginRight: 30}}>
          <h4>Routing you from: <br></br>{startAddress} {endAddress}</h4>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          { weather && (
            <WeatherWidget 
              address={endAddress}
              weather={weather}
            />
          )}
        </div>
      </div>
  )
}
