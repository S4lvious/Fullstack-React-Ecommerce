import React, { useState } from "react";
import './Styles/Navbar.css'
import { Link } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'

function Navbar() {
    const [showNavlist, setNavlist] = useState(false);


    return (
    <header className="header">
    <div className="navbar">
        <div className="logo">
            <Link to = "/" style={{ textDecoration: 'none', color: 'white' }}>
           <FaReact />
           </Link>
        </div>
        
            <ul className={showNavlist ? "show" : "navlist"} style={{ textDecoration: 'none' }}>
            <Link to = "/" style={{ textDecoration: 'none' }}>
                <li className="navitem">Home</li>
            </Link>
            <Link to = "/shop" style={{ textDecoration: 'none' }}>
                <li className="navitem">Shop</li>
            </Link>
            <Link to = "/about" style={{ textDecoration: 'none' }}>
                <li className="navitem">Chi siamo</li>
            </Link>
            <Link to = "/contact" style={{ textDecoration: 'none' }}>
                <li className="navitem">Contatti</li>
            </Link>
            </ul>
            <Link to = "/Cart" style= {{textDecoration: 'none'}}>
                <li className="navitem"><FaShoppingCart /></li>
            </Link>
      
    </div>
    <div className={showNavlist ? "hamburger.active" : "hamburger"} onClick={() => setNavlist(!showNavlist)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
</header>
    );

}

  
export default Navbar;
