import React from 'react'
import "./Styles/banner.css"


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
        <a href="shop" class="banner-button">Scopri di più</a>
    </div>
    </div>
  )
}


export default banner;