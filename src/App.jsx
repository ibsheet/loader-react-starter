// import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import loader from '@ibsheet/loader';
import Home from './components/home';
import Page1 from './components/page1';
import Page2 from './components/page2';

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: 'https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/',
  locales: ['en', 'ko'],
  plugins: ['excel', 'common', 'dialog']
}

// 로더 config
loader.config({
  registry: [ibsheetLib]
});

function App() {
  const loaderVersion = loader.version;

  return (
    <>
      <div className="App">
        <p>@ibsheet/loader v{ loaderVersion }</p>
        <div className="top-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
            <li><Link to="/page2">Page2</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </>
  )
}

export default App
