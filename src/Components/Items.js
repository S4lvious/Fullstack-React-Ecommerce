import './Styles/Shop-card.css';
import React from 'react';



function Items(props) {
    const {product} = props;
    const {onAdd} = props;
    return (
        <div className="shop-card-container">
        <div className="shop-card">
        <img className="shop-card-image" src={product.image} alt={product.name}/>
        <span className='button-container'><button className='button' onClick={() => onAdd(product)}>Aggiungi al carrello</button></span>
        <div className="shop-card-text">
        <h3>{product.name}</h3>
        <p>€{product.price}</p>
        </div>
        </div>
        </div>
        
    )
}


export default Items;