import React from "react";
import './Styles/Navbar.css'
import { Link } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'

function Navbar() {
    return (
    <header className="header">
    <div className="navbar">
        <div className="logo">
            <a href="index.html" className="img">LOGO</a>
        </div>
        
            <ul className="navlist" style={{ textDecoration: 'none' }}>
            <Link to = "/" style={{ textDecoration: 'none' }}>
                <li className="navitem">Home</li>
            </Link>
            <Link to = "/shop" style={{ textDecoration: 'none' }}>
                <li className="navitem">Shop</li>
            </Link>
            <Link to = "/about" style={{ textDecoration: 'none' }}>
                <li className="navitem">Chi siamo</li>
            </Link>
            <Link to = "/Contacts" style={{ textDecoration: 'none' }}>
                <li className="navitem">Contatti</li>
            </Link>
            </ul>
      
    </div>
    <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
</header>
    );

}

  
export default Navbar;
