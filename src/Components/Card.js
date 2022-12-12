import './App.css';
import React from 'react';



function Card(props) {
    const {products} = props;
    return (
        products.map((product) =>( 
        <div className="card" div key={product.id}>
        <img className="card-image" src={product.image} alt={product.name}/>
        <div className="card-text">
        <h3>{product.name}</h3>
        <p>€{product.price}</p>
        </div>
        </div>
    ))
        
    );
}


export default Card;