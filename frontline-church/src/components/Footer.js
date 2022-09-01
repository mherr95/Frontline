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
     <h2 className='contact'>Contact</h2>
     <p className='phone-number'>Phone: (678)-382-7627</p>
     <p className="email-address">Email: Frontline@gmail.com</p>
     <h3 className='address'>Address</h3>
     <p>1648 Atlanta Hwy Suite 107 & 108 Auburn, Ga 30011</p>
    </div>
    <div className='footer-link-items'>
     <h2>Service Times</h2>
     <p className='sundayschoool-times'>Sunday School: 9:00am - 10:00am</p>
     <p className='service-time'>Service: 10:00am - 12:00pm</p>
     <p className='live-stream'>Live Stream: 10:00am-12:00pm</p>
    </div>
    {/* <div className="logo">
        <img src="/images/Footer-logo.jpg" alt="logo" className="front-line-img"/>
    </div> */}
   </div>
   <div class='website-rights'>© Copyright 2022 |   FRONTLINE CHURCH   |   All Rights Reserved   |   Developed by Michael Herr</div>
   <section className='social-links'>
     <div className='social-icons'>
      <a
       className='social-icon-link facebook'
       href='https://www.facebook.com/FrontlineChurchGA/'>
       <i class='fab fa-facebook-f' />
      </a>
      <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
     </div>
    </section>
  </div>
 );
}

export default Footer;
