import React, { useState, useEffect } from "react";
import classes from "./header.module.css";

import icon from "./menu.png";
import search from "./search.png";
import logo from "./logo.png";

function Header() {

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      };
    
      const handleMenuClick = () => {
        // Logic to toggle menu visibility
      };

    return (
<div
className={classes.header}
style={{
  transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
  height: "100px",
}}
>
<div className={classes.logoContainer}>
  <img src={logo} alt="Logo" className={classes.logo} />
</div>
<div className={classes.iconsContainer}>
  <button className={classes.searchButton}>
    <img
      src={search}
      alt="Search Icon"
      className={classes.searchIcon}
    />
  </button>
  <button className={classes.menuButton} onClick={handleMenuClick}>
    <img src={icon} alt="Menu Icon" className={classes.menuIcon} />
  </button>
</div>
</div>


);
}

export default Header;