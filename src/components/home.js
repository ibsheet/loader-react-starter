import React, { Component } from 'react';
import loader from '@ibsheet/loader'
import logo from '../logo.svg';

export class Home extends Component {
  componentDidMount() {
    loader.unload()
  }
  render() {
    return (
      <div className="home">
        <img src={logo} className="App-logo" alt="logo" />
        <p>IBSheetLoader for React!</p>
      </div>
    );
  }
}
