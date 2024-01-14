import '../App.css';
import { MapComponent } from '../components/MapComponent';
import { SideBar } from '../components/SideBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatbotPopover from '../components/ChatbotPopover';


function App() {
  const navigate = useNavigate();
  const goToHomePage = () => { navigate('/'); };

  // use states for start and end lat and long
  const [startLatLong, setStartLatLong] = useState('');
  const [endLatLong, setEndLatLong] = useState('');
  const [tags, setTags] = useState([]);
  const [openChatbot, setOpenChatbot] = useState(false);
  const [weather, setWeather] = useState();

  const handleTags = newTags => {
    setTags(newTags);
    console.log("new tags" + tags);
  };

  const handleStartLatLong = newLatLong => {
    setStartLatLong(newLatLong);
    console.log("new LATLONG1" + newLatLong.lat);
  };

  const handleEndLatLong = newLatLong => {
    setEndLatLong(newLatLong);
    console.log("new LATLONG2" + newLatLong.lng);
  };

  return (
    <div className="App">
      <SideBar 
        onHandleStartLatLong={handleStartLatLong} 
        onHandleEndLatLong={handleEndLatLong} 
        tags={tags} 
        setOpenChatbot={setOpenChatbot} 
        setWeather={setWeather} 
        weather={weather}
      />
      <div styles={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
        {openChatbot && weather &&
        <ChatbotPopover 
          weather={weather}
          onClose={() => { setOpenChatbot(false)}}
          />}
        </div>
      <MapComponent start={startLatLong} end={endLatLong} onHandleTags={handleTags}/>
    </div>
  );
}

export default App;
