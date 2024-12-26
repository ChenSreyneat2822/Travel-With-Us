import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import HeaderProfile from './components/HeaderProfile';
import Carousel from './components/Carousel';
import Search from './components/Search';
import BannerHotel from './components/BannerHotel';
import CardHotel from './components/Cardhotel';
import BannerTour from './components/BannerTour';
import CardTour from './components/CardTour';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Carousel /><Search /><BannerHotel /><CardHotel /><BannerTour /><CardTour /><Footer /></>} />
        <Route path="/profile" element={<><HeaderProfile /><Carousel /><Search /><BannerHotel /><CardHotel /><BannerTour /><CardTour /><Footer /></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
