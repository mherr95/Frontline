/** @format */

import React from "react";
import "./Home.css";
import { Button } from "./Button";

function Home() {
 return (
  <div className='main-container'>
   <div className='home-container'>
    <h1>FRONTLINE CHURCH</h1>
    <p>"We loved him, because he first loved us"</p>
    <p className='verse'>1 John 4:19</p>
    <div className='home-btns'>
     <Button className='btn-large' buttonSize='btn-large'>Visit Us</Button>
    </div>
   </div>
  </div>
 );
}

export default Home;
