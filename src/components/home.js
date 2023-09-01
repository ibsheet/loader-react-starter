import React, { useEffect } from 'react'
import loader from '@ibsheet/loader'
import logo from '../logo.svg'

const Home = () => {
  const msg = 'IBSheetLoader for React!'

  useEffect(() => {
    loader.unload()
  }, [])

  return (
    <div className="home">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{ msg }</p>
    </div>
  )
}

export default Home