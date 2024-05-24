// Menu.js
import React from 'react';
import classes from './Menu.module.css';
import logo from './logo.png';
import t1 from "./twitter.png";
import t2 from "./whatsapp.png";
import t3 from "./youtube.png";
import t4 from "./instagram.png";
import t5 from "./facbook(1).png";
import t6 from "./linkedin.png";

import About from './About.png';
import home from './home.png';
import project from './client.png'
import team from './team.png';
import services from './services.png';
import contact from './contact.png';

function Menu() {
  return (
    <div className={classes.pageContainer}>
        <img src={logo} alt="Logo" className={classes.logo} />
      <div className={classes.menuContainer}>
      
      <ul className={classes.menuItems}>
  <li>
    <span className={classes.number}>01.</span>
    <span className={classes.text}>Home</span>
  </li>
  <li>
    <span className={classes.number}>02.</span>
    <span className={classes.text}>About</span>
  </li>
  <li>
    <span className={classes.number}>03.</span>
    <span className={classes.text}>Services</span>
  </li>
  <li>
    <span className={classes.number}>04.</span>
    <span className={classes.text}>Projects/Clients</span>
  </li>
  <li>
    <span className={classes.number}>05.</span>
    <span className={classes.text}>Team</span>
  </li>
  
</ul>

        <div className={classes.additionalSections}>

         <div className={classes.sect}>
        <div className={classes.sectionNumbers}>
            <h2>06.</h2>
            <h2>07.</h2>
            <h2>08.</h2>
            <h2>09.</h2>
            <h2>10.</h2>
            </div>
          <div className={classes.sectionText}>
            <h2>Press Releases</h2>
            <h2>Blogs</h2>
            <h2>Locations</h2>
            <h2>Careers</h2>
            <h2>Contact Us</h2>
          </div>
          
          </div> 
   
        <div className={classes.socialIcons}>
          <img src={t1} alt="Twitter" className={classes.socialIcon} />
          <img src={t2} alt="WhatsApp" className={classes.socialIcon} />
          <img src={t3} alt="YouTube" className={classes.socialIcon} />
          <img src={t4} alt="Instagram" className={classes.socialIcon} />
          <img src={t5} alt="Facebook" className={classes.socialIcon} />
          <img src={t6} alt="LinkedIn" className={classes.socialIcon} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
