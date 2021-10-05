import React, { useEffect } from 'react';
import loader from '@ibsheet/loader'
import logo from '../logo.svg';

const Home = () => {
  useEffect(() => {
    loader.unload();
  }, []);
  return (
    <div className="home">
      <img src={logo} className="App-logo" alt="logo" />
      <p>IBSheetLoader for React!</p>
    </div>
  );
}

export default Home;