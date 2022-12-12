import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import data from './data';

function App() {
  const { products } = data;
  return (
    <>
    <header>
    <Navbar />
    </header>
    <section className="card-container">
      <Card products={products}/>
    </section>
    </>
  );
}



export default App;
