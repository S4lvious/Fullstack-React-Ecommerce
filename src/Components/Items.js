import './Styles/Shop-card.css';
import React from 'react';



function Items(props) {
    return (
        <div className="shop-card-container">
        <div className="shop-card">
        <img className="shop-card-image" src={props.image} alt={props.name}/>
        <div className="shop-card-text">
        <h3>{props.name}</h3>
        <p>€{props.price}</p>
        </div>
        </div>
        </div>
        
    )
}


export default Items;