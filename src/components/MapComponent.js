import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, FeatureGroup, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import L, { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";


export const MapComponent = ({start, end}) => {
  const [startLatLong, setStartLatLong] = useState('');
  const [endLatLong, setEndLatLong] = useState('');
  const position = [43.00073, -81.31361];
  const [map, setMap] = useState(null);
  const groupRef = useRef();
  const mapRef = useRef();

  // stop useEffect from running on first render
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    // update lat and long values
    if (start) {
      setStartLatLong([start.lat, start.lng]);
  
    }

    // update lat and long values
    if (end) {
      setEndLatLong([end.lat, end.lng]);
  
    }

    
  }, [start, end])


  return (
    <MapContainer
      center={(startLatLong && endLatLong) ? [(startLatLong.lat + startLatLong.lng)/2, (endLatLong.lat + endLatLong.lng)/2] : position}
      zoom={100}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%", padding: 0, zIndex: 0 }}
      className="right-align"
      ref={mapRef}
    >
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup ref={groupRef}>
        {startLatLong && <Marker
          position={[startLatLong[0], startLatLong[1]]}
          icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 40] })}
        >

        </Marker>}
        {endLatLong && <Marker
          position={[endLatLong[0], endLatLong[1]]}
          icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 40] })}
        >
      
        </Marker>}
      </FeatureGroup>
      <ZoomControl position="topright" />
      
      
      
    </MapContainer>
  );
};