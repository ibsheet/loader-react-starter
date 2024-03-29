import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import loader from '@ibsheet/loader';
import Home from './components/home';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import './App.css';

loader.config({
  registry: [{
    name: 'ibsheet',
    baseUrl: '/ibsheet',
    plugins: ['common', 'dialog', 'excel']
  }]
});

loader.once('loaded', evt => {
  console.log('loaded start:', evt)
})

const App = () => {
  const loaderVersion = loader.version;

  return (
    <div className="App">
      <p>@ibsheet/loader v{ loaderVersion }</p>
      <BrowserRouter className="main">
        <div className="top-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
            <li><Link to="/page2">Page2</Link></li>
            <li><Link to="/page3">Page3</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/page1" component={ Page1 }/>
        <Route exact path="/page2" component={ Page2 }/>
        <Route exact path="/page3" component={ Page3 }/>
      </BrowserRouter>
    </div>
  );
}

export default App
