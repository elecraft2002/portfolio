import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Scroll from './functions/Scroll';
function App() {
  //Parallax provider
  const [scroll, setScrollOffset] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Homepage scroll={scroll} />} />
      <Route path='/portfolio' element={<Homepage scroll={scroll} />} />
      <Route path='*' element={"Error"} />
    </Routes>
  );
}

export default App;
