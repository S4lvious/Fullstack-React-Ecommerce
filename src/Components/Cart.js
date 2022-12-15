import React from 'react'
import "./Styles/Cart.css"
import { Link } from 'react-router-dom';

 function Cart(props) {
  const {cartItems, onAdd, onRemove} = props;
  return (
    
    <section className='CartItemsContainer'>
      {cartItems.length === 0 && <div className='EmptyCart'>
      <h1>Il tuo carrello è vuoto!</h1>
      <Link to = "/shop" style={{ textDecoration: 'none' }}>
                   <button className="banner-button">Shop</button>
                  </Link>
      </div>}
      {console.log(cartItems)}
      {cartItems.map((item) => (
        <>
        <div key={item.id} className="FullCart">
                <div><img alt={item.name} src={item.image} height="100px"></img></div>
                    <div><h1>{item.name}</h1> 
                    <h2>x{item.qty} x €{item.price}</h2>
                </div>
                <div className='QuantityButtons'>
                      <button onClick={()=> onAdd(item)} className="add">+</button>
                      <button onClick={()=> onRemove(item)} className="remove">-</button>
               </div>
        </div>
                      
                    <hr className='itemseparator'></hr>
                    </>
      ))}
    </section> 

      )
}

export default Cart;