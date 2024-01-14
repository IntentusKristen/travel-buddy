import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { WeatherWidget } from '../components/WeatherWidget';
const axios = require('axios');
const { parse } = require('node-html-parser');

export const SideBar = ({onHandleStartLatLong, onHandleEndLatLong, tags}) => {
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');

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
        
          
          {tags.map(tag => (
      <div key={tag.name} style={{ marginBottom: '15px', marginTop: '15px', textAlign: 'left', marginLeft: "50px" }}>
        <h4 style={{ marginBottom: '0px', marginTop: '2px' }}>{tag.name}: </h4>
        <p style={{ marginBottom: '0px', marginTop: '2px' }}>Type of road: {tag.highway? tag.highway: "Unavailable"}</p>
        <p style={{ marginBottom: '0px', marginTop: '2px' }}>Lanes: {tag.lanes? tag.lanes: "Unavailable"}</p>
        <p style={{ marginBottom: '0px', marginTop: '2px' }}>Max Speed: {tag.maxspeed? tag.maxspeed: "Unavailable"}</p>
      </div>
    ))}
        </div>
  
  
  )
}
