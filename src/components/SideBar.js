import React, { useState } from 'react'
import SearchBar from './SearchBar'

export const SideBar = () => {
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');

  const handleStartAddress = newAddress => {
    setStartAddress(newAddress);
    console.log(newAddress);
  };

  const handleEndAddress = newAddress => {
    setEndAddress(newAddress);
    console.log(newAddress);
  };

  return (
    <div style={{backgroundColor: "#ebe4d1",
      top: 0,
      left: 0,
      height: "100vh",
      width: "30%",
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
  
      </div>
  )
}
