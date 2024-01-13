import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export const MapComponent = () => {
  const position = [43.00073, -81.31361];
  // hardcode latitude values for now
  const startLat = 43.0096;
  const startLong = 81.2737;
  const endLat = 43.00073;
  const endLong = -81.31361;
  const initialZoom = 2;

  return (
    <MapContainer
      center={position}
      zoom={100}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "70%", padding: 0 }}
      className="right-align"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 40] })}
      >
        <Popup>You are here.</Popup>
      </Marker>
    </MapContainer>
  );
};