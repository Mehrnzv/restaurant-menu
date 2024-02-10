import "./navbar.css";
import logo from "../../assets/gericht.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar container-nav">
      <div className="nav_logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav_links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#awards">Awards</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav_btn">
        <a href="#login">Log in / Registration</a>
        <div />
        <a href="#book">Book Table</a>
      </div>

      <div className="nav_menu">
        <GiHamburgerMenu
          className="nav-icon"
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="nav_menu-container slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color="#fff"
              className="nav-icon close-icon"
              onClick={() => setToggleMenu(false)}
            />
            <div className="nav_menu-con">
              <div className="nav_menu-container-links">
                <a href="#" onClick={() => setToggleMenu(false)}>Home</a>
                <a href="#pages" onClick={() => setToggleMenu(false)}>Pages</a>
                <a href="#contact" onClick={() => setToggleMenu(false)}>Contact Us</a>
                <a href="#blog" onClick={() => setToggleMenu(false)}>Blog</a>
                <a href="#landing" onClick={() => setToggleMenu(false)}>Landing</a>
              </div>

             <div className="nav_menu-container-btn">
                <a href="#login" onClick={() => setToggleMenu(false)}>Log in / Registration</a>
                <a href="#book" onClick={() => setToggleMenu(false)}>Book Table</a>
             </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
