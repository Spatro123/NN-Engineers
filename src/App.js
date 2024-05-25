import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import "./App.css";
import Footer from "./Footer";
import Menu from "./Menu"; // Import the Menu component

import icon from "./menu.png";
import search from "./search.png";
import logo from "./logo.png";
import backgroundVideo from "./3D House Animation_1.mp4";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpeg";
import image6 from "./6.jpg";
import p1 from "./P3.jpg";
import p2 from "./p4.jpeg";
import p3 from "./architect.png";
import p4 from './tag.png';

import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import s5 from "./s5.png";
import s6 from "./s6.png";
import s7 from "./s7.png";
import s8 from "./s8.png";
import s9 from "./s9.png";
import s10 from "./s10.png";
import s11 from "./s11.png";
import s12 from "./s12.png";
import s13 from "./s13.png";
import s14 from "./s14.png";
import b4 from "./b5.jpg";
import b5 from "./b6.jpeg";

import t1 from "./twitter.png";
import t2 from "./whatsapp.png";
import t3 from "./youtube.png";
import t4 from "./instagram.png";
import t5 from "./facbook(1).png";
import t6 from "./linkedin.png";

function App() {
  const images = [image1, image3, image4, image5, image6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFirstBlock, setIsFirstBlock] = useState(true); // Flag to identify the first block

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setError("");
    } else {
      setError("Please add Email");
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className={classes.container}>
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
      <div className={classes.firstBlock}>
        {isFirstBlock && (
          <>
           
            <div className={`${classes.stripedBackground} ${classes.middle}`}></div>
            <div className={`${classes.stripedBackground} ${classes.bottom}`}></div>
          </>
        )}

        <div className={classes.textContainer}>
          <div className={classes.boldText}>Committed</div>
          <span>To Excellence</span>
          <div className={classes.sequenceContainer}>
            <img src={p4} alt="Tag" className={classes.tagImage} />
            <div className={classes.textSequence}>Pre Engineered Building</div>
            
          </div>
        </div>
        <div className={classes.tagline}>
          OUR GOAL THEN AND NOW IS TO PROVIDE QUALITY ON TIME PROJECT
        </div>
        <div className={classes.block}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`${classes.image} ${
                index === currentImageIndex ? classes.active : ""
              }`}
            />
          ))}
        </div>
      </div>

      <div className={classes.secondBlock}>
        <video autoPlay muted loop className={classes.backgroundVideo}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={classes.overlay}></div>
      
        <div className={classes.block}>
          <h1 className={classes.secondBlockHeader}>Company</h1>
          <h2 className={classes.secondBlockSubheader}>NN ENGINEERS</h2>
          <button className={classes.knowMoreButton}>KNOW MORE</button>
          <h2 className={classes.subheader}>
            Building Tomorrow's Infrastructure Today , Your Trusted Partner for
            Innovative Solutions and Sustainable Development
          </h2>
          <img
            src={image2}
            alt="Second Block Image"
            className={classes.image}
          />
        </div>
      </div>

      <div className={classes.thirdBlock}>
        <p className={classes.visionText}>WE MAKE YOUR VISION REALITY</p>
        <img src={p2} alt="Third Block Image" className={classes.image} />
      </div>
      <div className={classes.fourthBlock}>
        <h1>Our Service And Product</h1>
        <div className={classes.serviceList}>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s1} alt="Icon" className={classes.icon} />
              PEB-PRE-Engineered Steel Building
            </div>
            <div className={classes.serviceItem}>
              <img src={s2} alt="Icon" className={classes.icon} />
              Structural Steel
            </div>
            <div className={classes.serviceItem}>
              <img src={s4} alt="Icon" className={classes.icon} />
              Rooftop Installation Service
            </div>
            <div className={classes.serviceItem}>
              <img src={s3} alt="Icon" className={classes.icon} />
              Industrial Structural Painting
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s6} alt="Icon" className={classes.icon} />
              Warehouse Shed Fabrication Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s7} alt="Icon" className={classes.icon} />
              Factory Shed Fabrication Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s8} alt="Icon" className={classes.icon} />
              Pipeline Fabrication Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s9} alt="Icon" className={classes.icon} />
              Chemical Anchor Installation
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s10} alt="Icon" className={classes.icon} />
              HILTi Anchoring Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s13} alt="Icon" className={classes.icon} />
              Core Cutting Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s11} alt="Icon" className={classes.icon} />
              HILTi Firestop
            </div>
            <div className={classes.serviceItem}>
              <img src={s12} alt="Icon" className={classes.icon} />
              Storage Solutions
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s14} alt="Icon" className={classes.icon} />
              Technical Advisory Service
            </div>
          </div>
        </div>
      </div>

      <div className={classes.fifthBlock}>
        <h1>People</h1>
        <p>
          Health and safety take precedence over everything else— a belief we
          uphold and an ecosystem we nurture at NN Engineers.
        </p>
        <img src={b4} className={classes.image} alt="People Background" />
      </div>

      <div className={classes.sixthBlock}>
        <div className={classes.imageTextContainer}>
          <h1>Our Projects</h1>
          <img src={b5} className={classes.image1} alt="Commitment" />
          <div className={classes.overlayText}>
            <p>
              Our Commitment to Excellence Provides unmatched product quality,
              coupled with speed, safety, and superior sales services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
