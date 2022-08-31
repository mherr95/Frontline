/** @format */

import React from "react";
import "./Body.css";
import { Button } from "./Button";

function Body() {
 return (
  <div className='body-container'>
   <h1>FRONTLINE CHURCH</h1>
   <p>"We loved him because he loved us first"</p>
   <div className='body-btns'>
    <Button className='btn-large'>Visit Us</Button>
   </div>
  </div>
 );
}

export default Body;
