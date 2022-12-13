import React, { useState } from 'react';
import './Components/Styles/App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './Components/data';
import Cart from './Components/Cart';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x=> x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? {...exist, qty : exist.qty+1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

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
      <Route path="/Shop" element={<Shop onAdd = {onAdd} products={products}/>} />
      </Routes>
      <Routes>
      <Route path="/cart" element={<Cart onAdd = {onAdd} cartItems={cartItems}/>} />
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}



export default App;
