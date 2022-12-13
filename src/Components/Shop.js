import React from 'react'
import './Styles/Shop.css';
import Items from './Items';
import Footer from './Footer';



 function Shop (props) {
      const {cartItems, products, onAdd} = props;
  return (    
      <>
        <div className='Card-Shop-Container'>
        {products.map((product) =>(
            <Items key={product.id} product={product} onAdd={onAdd} cartItems={cartItems}/>
  
        ))}  
        </div>
        
        <Footer />
        </>
  )
}


export default Shop;