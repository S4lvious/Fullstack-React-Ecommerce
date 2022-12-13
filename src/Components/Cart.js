import React from 'react'
import "./Styles/Cart.css"

 function Cart(props) {
  const {cartItems} = props;
  console.log(cartItems)
  return (
    <section className='CartItemsContainer'>
      {cartItems.length === 0 && <div className='EmptyCart'>
      <h1>Il tuo carrello è vuoto!</h1>
      <img src="https://i.ibb.co/d5ZHHVM/102661.png" width={"100px"} alt='empty-cart'></img>
      </div>}
    </section> 

      )
}

export default Cart;