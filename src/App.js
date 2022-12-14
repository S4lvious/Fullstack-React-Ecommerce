import React, { useState } from 'react';
import './Components/Styles/App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './Components/data';
import Cart from './Components/Cart';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? {...exist, qty: exist.qty + 1 } : x
        )
      );
    } 
    
    else {
      setCartItems ([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(exist.qty === 1 ) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty - 1 } : x
          )
        );
      }
  }

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
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Routes>
      <Route path="/Shop" element={<Shop onAdd = {onAdd} products={products} cartItems={cartItems}/>} />
      </Routes>
      <Routes>
      <Route path="/cart" element={<Cart onAdd = {onAdd} cartItems={cartItems} onRemove = {onRemove} />} />
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}



export default App;
