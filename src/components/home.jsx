import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import reactLogo from '../assets/react.svg'

function Home () {
  const msg = 'IBSheetLoader for React!';

  useEffect(() => {
    loader.unload();
  }, [])

  return (
    <>
      <div className="home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{ msg }</h1>
        <br/>
        <img src={reactLogo} className="App-logo" alt="logo" width="150" height="150" />
      </div>
    </>
  )
}

export default Home