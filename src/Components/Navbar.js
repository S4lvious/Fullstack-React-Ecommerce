import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <header className="header">
    <div className="navbar">
        <div className="logo">
            <a href="index.html" className="img">LOGO</a>
        </div>
        
            <ul className="navlist">
            <Link to = "/">
                <li className="navitem">Home</li>
            </Link>
            <Link to = "/shop">
                <li className="navitem">Shop</li>
            </Link>
            <Link to = "/about">
                <li className="navitem">Chi siamo</li>
            </Link>
            <Link to = "/Contacts">
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
