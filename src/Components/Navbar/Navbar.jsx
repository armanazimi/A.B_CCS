import React, { useState } from "react";
import "./Navbar.css";

// Icons
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

// Image
import logo from "../../Assets/logo.png";

const Navbar = () => {
  // Statement to hold the navbar state
  const [navbar, setNavbar] = useState("navbar");

  // function to show navbar on smaller width screens
  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  // function to Remove navbar on smaller width screens
  const removeNavbar = () => {
    setNavbar("navbar removeNavbar");
  };

  // Function to add a background to the Navbar when we scroll a certain height on the window
  const [header, setHeader] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 20) {
      setHeader("header addBg");
    }
  };

  const removeBg = () => {
    if (window.scrollY < 20) {
      setHeader("header removeBg");
    }
  };

  window.addEventListener("scroll", addBg);
  window.addEventListener("scroll", removeBg);
  window.addEventListener("scroll", removeNavbar);

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="NavImg" className="logo" />
      </div>

      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="#" className="link">
              Used Cars
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="#" className="link">
              New Cars
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="#" className="link">
              Auctions
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="#" className="link">
              Sell
            </a>
          </li>
        </ul>

        {/* Lets get an icon that will close the navbar on small screen */}
        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>

      <div className="signUp flex">
        <div className="text">Sign Up</div>
        {/* Lets get an icon that will open the navbar on small screen */}
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
