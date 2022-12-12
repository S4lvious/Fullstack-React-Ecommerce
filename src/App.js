import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './Components/data';

function App() {
  return (
  <BrowserRouter>
    <div className='App'>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
      <Route path="/about" element={<About/>} />
      </Routes>
      <Routes>
      <Route path="/Shop" element={<Shop products={data}/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}



export default App;
