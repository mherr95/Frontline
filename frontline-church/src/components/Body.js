/** @format */

import React from "react";
import "./Body.css";
import { Button } from "./Button";

function Body() {
 return (
  <div className='main-container'>
   <div className='home-container'>
    <h1>FRONTLINE CHURCH</h1>
    <p>"We loved him, because he first loved us"</p>
    <p className='verse'>1 John 4:19</p>
    <div className='home-btns'>
     <Button className='btn-large'>Visit Us</Button>
    </div>
   </div>
   <div>
    <div className='about-container'>
     <h1>About Us</h1>
     <p>FRONTLINE Church was established in 2015 with a small gathering of 10 families.</p>
    </div>
   </div>
  </div>
 );
}

export default Body;
