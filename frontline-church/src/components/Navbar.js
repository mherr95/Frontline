/** @format */

import React, { useState, useEffect } from "react";
import { Link } from 
"react-router-dom";
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);

 const handleClick = () => {
    setClick(!click)
 };

 const closeMobileMenu = () => {
    setClick(false)
 };

 const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false)
    } else {
        setButton(true)
    }
 }

 useEffect(() => {
    showButton()
 }, []);

 window.addEventListener('resize', showButton)


 return (
  <nav className='navbar'>
   <div className='navbar-container'>
    <Link to='/' className="nav-logo"
    onClick={closeMobileMenu}
    ><img src='/images/Frontline.jpeg' alt='front-line logo' className="front-logo"/></Link>
    <div className='menu-icon' onClick={handleClick}>
     <i className={click ? "fas fa-times" : "fas fa-bars"} />
    </div>
   <ul className={click ? "nav-menu active" : "nav-menu"}>
    <li className='nav-item'>
     <Link to='/' className='nav-links'
     onClick={closeMobileMenu}
     >
      Home
     </Link>
    </li>
    <li className='nav-item'>
     <Link to='/about' className='nav-links'
     onClick={closeMobileMenu}
     >
      About
     </Link>
    </li>
    <li className='nav-item'>
     <Link to='/location' className='nav-links'
     onClick={closeMobileMenu}
     >
      Location
     </Link>
    </li>
   </ul>
   {button && <Button buttonStyle='btn-outline'>Join Us</Button>}
   </div>
  </nav>
 );
}

export default Navbar;
