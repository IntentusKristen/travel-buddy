import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, FeatureGroup, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import L, { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useState } from "react";

export const MapComponent = ({ start, end }) => {
  const [startLatLong, setStartLatLong] = useState('');
  const [endLatLong, setEndLatLong] = useState('');
  const position = [43.00073, -81.31361];
  const mapRef = useRef();
  const groupRef = useRef();
  const routingMachineRef = useRef();

  // update marker position when start or end changes
  useEffect(() => {
    if (start) {
      setStartLatLong({ lat: start.lat, lng: start.lng });
    }

    if (end) {
      setEndLatLong({ lat: end.lat, lng: end.lng });
    }
  }, [start, end]);

  // create the routing-machine instance
  useEffect(() => {
    if (!mapRef.current || !startLatLong || !endLatLong) return;

    if (routingMachineRef.current) {
      // if the routing-machine instance already exists, just update the waypoints
      routingMachineRef.current.setWaypoints([
        L.latLng(startLatLong.lat, startLatLong.lng),
        L.latLng(endLatLong.lat, endLatLong.lng),
      ]);
      return;
    }

    const waypoints = [
      L.latLng(startLatLong.lat, startLatLong.lng),
      L.latLng(endLatLong.lat, endLatLong.lng),
    ];

    const routingMachine = L.Routing.control({
      position: 'topright',
      lineOptions: {
        styles: [{ color: '#757de8' }],
      },
      waypoints: waypoints,
      createMarker: () => null
    });

    // save the routing-machine instance to the ref
    routingMachineRef.current = routingMachine;

    // add the routing machine to the map
    routingMachine.addTo(mapRef.current);

   // listen for the routesfound event
   routingMachine.on('routesfound', (event) => {
    // get the route instructions
    const instructions = event.routes[0].instructions;
    //console.log(event.routes[0])

    // log each instruction to the console
    instructions.forEach(instruction => {
      console.log(instruction.road); // this contains the road or street names
    });
  });
  }, [mapRef.current, startLatLong, endLatLong]);

  return (
    <MapContainer
      center={(startLatLong && endLatLong) ? [(startLatLong.lat + endLatLong.lat) / 2, (startLatLong.lng + endLatLong.lng) / 2] : position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%", padding: 0, zIndex: 0 }}
      className="right-align"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
        {startLatLong && <Marker
          position={[startLatLong.lat, startLatLong.lng]}
          icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 40] })}
        />}
        {endLatLong && <Marker
          position={[endLatLong.lat, endLatLong.lng]}
          icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 40] })}
        />}
   
      <ZoomControl position="topright" />
    </MapContainer>
  );
};
