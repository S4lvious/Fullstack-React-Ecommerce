import './Styles/Home-card.css';
import React from 'react';



function Card(props) {
    return (
        <div className="card">
        <img className="card-image" src={props.image} alt={props.name}/>
        <div className="card-text">
        <h3>{props.name}</h3>
        <p>{props.text}</p>
        </div>
        </div>
    )
}


export default Card;