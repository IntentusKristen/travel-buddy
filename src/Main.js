import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from './pages/App';
import SafetyPage from './pages/SafetyPage';
import UserInfoPage from './pages/UserInfoPage';

export default function Main() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<SafetyPage/>}/>
          <Route path="/app" element={<App/>}/>
          <Route path="/userInfo" element={<UserInfoPage/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    );
}