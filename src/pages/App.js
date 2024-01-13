import '../App.css';
import { MapComponent } from '../components/MapComponent';
import { SearchBar } from '../components/SearchBar';
import { SideBar } from '../components/SideBar';


function App() {
  return (
    <div className="App">
      <SideBar/>
      <MapComponent/>
    </div>
  );
}

export default App;
