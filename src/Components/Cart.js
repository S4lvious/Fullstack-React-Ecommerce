import React from 'react'
import "./Styles/Cart.css"

 function Cart(props) {
  const {cartItems, onAdd, onRemove} = props;
  return (
    <section className='CartItemsContainer'>
      {cartItems.length === 0 && <div className='EmptyCart'>
      <h1>Il tuo carrello è vuoto!</h1>
      <img src="https://i.ibb.co/d5ZHHVM/102661.png" width={"100px"} alt='empty-cart'></img>
      </div>}
      {console.log (cartItems)}
      {cartItems.map((item) => (
        <div key={item.id} className="FullCart">
          <div><h1>{item.name}</h1> 
            <h2>x{item.qty}</h2>
          </div>
          <div className='QuantityButtons'>
            <button onClick={()=> onAdd(item)} className="add">+</button>
            <button onClick={()=> onRemove(item)} className="remove">-</button>
          </div>
        </div>
      ))}
    </section> 

      )
}

export default Cart;