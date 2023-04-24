import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '@pages/Login';
import Homepage from '@pages/Homepage';
import BannerCarousel from './components/BannerCarousel';

function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/banner" element={<BannerCarousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
