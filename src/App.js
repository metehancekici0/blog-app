import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Giris from './pages/Giris';
import Kayit from './pages/Kayit';
import SifremiUnuttum from './pages/SifremiUnuttum';
import Hakkimizda from './pages/Hakkimizda';
import Iletisim from './pages/Iletisim';

import BlogLayout from './pages/blog/index';
import Detay from './pages/blog/Detay';
import Blog from './pages/blog/Blog';
import Arama from './pages/Arama';
import Yazar from './pages/Yazar';
import Kategori from './pages/Kategori'


function App() {

  const location = useLocation();
  const [theme, setTheme] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [layoutStatus, setLayoutStatus] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (location.pathname === "/giris" || location.pathname === "/kayit" || location.pathname === "/sifremi-unuttum") {
      /*Bu adreslerde header ve footer yüklenmeyecek */
      setLayoutStatus(false);
    } else {
      setLayoutStatus(true);
    }
    window.scrollTo(0, 0);
  }, [location])


  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    const loginBox = document.getElementById("login_box")
    const loginBoxOverlay = document.querySelector(".login_box_overlay")

    if (loginModal) {
      loginBox.style.transform = "translate(-50%, -50%) scale(1)";
      loginBox.style.transition = "";
      loginBoxOverlay.style.opacity = "1";
      loginBoxOverlay.style.zIndex = "9999999";
    } else {
      if (loginBox != null) {
        loginBox.style.transform = "translate(-50%, -50%) scale(0)";
        loginBox.style.transition = "none";
        loginBoxOverlay.style.opacity = "0";
        loginBoxOverlay.style.zIndex = "-1";
      }
    }
  }, [loginModal]);

  return (
    <>
      {
        layoutStatus && (
          <Header theme={theme} setTheme={setTheme} location={location} setLoginModal={setLoginModal} searchModal={searchModal} setSearchModal={setSearchModal} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        )
      }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/giris' element={<Giris />} />
        <Route path='/kayit' element={<Kayit />} />
        <Route path='/sifremi-unuttum' element={<SifremiUnuttum />} />
        <Route path='/hakkimizda' element={<Hakkimizda />} />
        <Route path='/iletisim' element={<Iletisim />} />
        <Route path='/arama' element={<Arama searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchModal={setSearchModal} />} />
        <Route path='/yazar/:nickname' element={<Yazar />} />
        <Route path='/kategori/:cat' element={<Kategori />} />
        <Route path='/blog' element={<BlogLayout />} >
          <Route index={true} element={<Blog />} />
          <Route path=':url' element={<Detay setLoginModal={setLoginModal} />} />
        </Route>

      </Routes>

      {
        layoutStatus && (
          <Footer />
        )
      }
    </>
  );
}

export default App;
