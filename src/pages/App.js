import '../App.css';
import { MapComponent } from '../components/MapComponent';
import { SearchBar } from '../components/SearchBar';
import { SideBar } from '../components/SideBar';
import { useState } from 'react';


function App() {
  // use states for start and end lat and long
  const [startLatLong, setStartLatLong] = useState('');
  const [endLatLong, setEndLatLong] = useState('');


  const handleStartLatLong = newLatLong => {
    setStartLatLong(newLatLong);
    console.log("new LATLONG1" + newLatLong.lat);
  };

  const handleEndLatLong = newLatLong => {
    setEndLatLong(newLatLong);
    console.log("new LATLONG2" +newLatLong);
  };


  return (
    <div className="App">
      <SideBar onHandleStartLatLong={handleStartLatLong} onHandleEndLatLong={handleEndLatLong} />
      <MapComponent start={startLatLong} end={endLatLong}/>
    </div>
  );
}

export default App;
