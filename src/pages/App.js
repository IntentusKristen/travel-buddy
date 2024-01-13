import '../App.css';
import { MapComponent } from '../components/MapComponent';
import { SearchBar } from '../components/SearchBar';



function App() {
  return (
    <div className="App" id='root'>
      <header className="App-header">
        <MapComponent/>
      </header>
    </div>
  );
}

export default App;
