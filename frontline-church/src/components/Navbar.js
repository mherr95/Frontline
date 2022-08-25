/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);

 return (
  <nav className='navbar'>
   <div className='navbar-container'>
    <Link to='/' className="nav-logo">Frontline Church</Link>
    <div className='menu-icon'>
     <i className={click ? "fas fa-times" : "fas fa-bars"} />
    </div>
   <ul className={click ? "nav-menu active" : "nav-menu"}>
    <li className='nav-item'>
     <Link to='/' className='nav-links'>
      Home
     </Link>
    </li>
    <li className='nav-item'>
     <Link to='/about' className='nav-links'>
      About
     </Link>
    </li>
    <li className='nav-item'>
     <Link to='/join-us' className='nav-links'>
      Join Us
     </Link>
    </li>
   </ul>
   </div>
  </nav>
 );
}

export default Navbar;
