import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/e-high-resolution-logo-transparent (1).png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" width="50px" />
      <div className="">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="desktopButton"
        onClick={() => {
          document
            .getElementById('contact')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <img src={contactImg} alt="contactImg" className="desktopImg" />
        Contact Me
      </button>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
