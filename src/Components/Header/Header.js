import "./Header.css";
import { useState } from 'react';

import logo from "../../Assets/images/starfox-logo.png";
import search_icon from "../../Assets/images/search-icon.png";
import wishlist_icon from "../../Assets/images/wishlist-icon.png";
import cart_icon from "../../Assets/images/cart-icon.png";
import user_icon from "../../Assets/images/user-icon.png";
import menu_icon from "../../Assets/images/menu-white.png";
import arrow_left from "../../Assets/images/arrow-left.svg";
import arrow_right from "../../Assets/images/arrow-right.svg";

function Header() {
  const announcementTexts = [
    "FREE shipping for orders 100€ and over", 
    "FREE gift bundle for order over 100€", 
    "Sign up to the newsletter and get 10% off!"
  ];

  const [announcementTextIndex, setannouncementTextIndex] = useState(0);

  function incrementAnnouncementTextIndex() {
    if (announcementTextIndex < (announcementTexts.length - 1)) {
      setannouncementTextIndex(announcementTextIndex + 1)
    } else {
      setannouncementTextIndex(0)
    }
  };

  function decrementAnnouncementTextIndex() {
    if (announcementTextIndex > 0) {
      setannouncementTextIndex(announcementTextIndex - 1)
    } else {
      setannouncementTextIndex(announcementTexts.length - 1)
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="announcements-container">
          <img onClick={decrementAnnouncementTextIndex} className="arrowLeft" src={arrow_left} alt="arrow-left-icon" />
          <div className="announcements-texts">
            <p> {announcementTexts[announcementTextIndex]} </p>
          </div>
          <img onClick={incrementAnnouncementTextIndex} className="arrowRight" src={arrow_right} alt="arrow-right-icon" />  
        </div>
        <div className="logo-icons-container">
          <div className="menu-search-container">
            <img className="menuIcon" src={menu_icon} alt="menu-icon" />
            <img className="searchIcon" src={search_icon} alt="search-icon" />
          </div>
          <div className="logo-container">
            <img className="starfoxLogo" src={logo} alt="logo" />
            <h1 className="heading">Starfox</h1>
          </div>
          <div className="wishlist-cart-user-container">
            <img className="searchIconRight" src={search_icon} alt="search-icon" />
            <img className="wishlistIcon" src={wishlist_icon} alt="wishlist-icon" />
            <img className="cartIcon" src={cart_icon} alt="cart-icon" />
            <img className="userIcon" src={user_icon} alt="user-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
