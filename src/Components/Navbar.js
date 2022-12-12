import React from "react";
import './App.css'

function Navbar() {
    return (
    <header className="header">
    <div className="navbar">
        <div className="logo">
            <a href="index.html" className="img">LOGO</a>
        </div>
            <ul className="navlist">
                <li><a href="index.html" className="navitem">Home</a></li>
                <li><a href="index.html" className="navitem">Shop</a></li>
                <li><a href="aboutus.html" className="navitem">Chi siamo</a></li>
                <li><a href="index.html" className="navitem">Contatti</a></li>
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
