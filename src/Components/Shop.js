import React from 'react'
import './Styles/Shop.css';
import Items from './Items';
import Footer from './Footer';



 function Shop (props) {
      const {products} = props;
  return (    
      <>
        <div className='Card-Shop-Container'>
        {products.map((product) =>(
            <Items key={product.id} image={product.image} name={product.name} price={product.price}/>
  
        ))}  
        </div>
        <Footer />
        </>
  )
}


export default Shop;