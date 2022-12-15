import React from 'react'
import "./Styles/banner.css"
import { Link } from 'react-router-dom';

 function banner (props) {
  return (
    <div className='banner-container'>
    <div class="banner-img-container">
    <img className="banner-image" src={props.image} alt="banner-img"/>
    </div>
    <div class="banner-text">
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.text}</p>
        <Link to = "/shop" style={{ textDecoration: 'none' }}>
          <button className="banner-button">Shop</button>
        </Link>
    </div>
    </div>
  )
}


export default banner;