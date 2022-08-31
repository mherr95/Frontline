/** @format */

import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
 return (
  <div className='footer-container'>
   <div className='footer-wrapper'>
   <div className='footer-link-items'>
     <h2 className="contact">Contact</h2>
     <p className="phone-number">(678)-382-7627</p>
     <h3 className="address">Address</h3>
     <p>1648 Atlanta Hwy Suite 107 & 108 Auburn, Ga 30011</p>
    </div>
    <div className='footer-link-items'>
        <h2>Service Times</h2>
     <p className="sundayschoool-times">Sunday School: 9:00am - 10:00am</p>
     <p className="service-time">Service: 10:00am - 12:00pm</p>
     <p className="live-stream">LiveStream: 10:00am-12:00pm</p>
    </div>
    <section className='social-links'>
    <div className="social-icons">
    <h2 className="follow-us">Follow Us</h2>
        <a className="social-icon-link facebook"
        href='https://www.facebook.com/FrontlineChurchGA/'><i class='fab fa-facebook-f' /></a>
    </div>
    </section>
   </div>
  </div>
 );
}

export default Footer;
