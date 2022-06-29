import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {useState} from 'react';
import Logo from "../../assets/logo.png";
import { NavDropdown } from "react-bootstrap";

function NavBar(props) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsMenuActive(current => !current);
  };

  return (
    <div className="navbar_section">
      <div className="container">
        <div className={isMenuActive ? 'showBar' : 'navBar_menu d-flex'}>
          <div className="logo">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="menuItems">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "none")}
              onClick={props.homePageScrollTop}
            >
              Home
            </NavLink>
            <NavDropdown title="Services" id="nav-dropdown">
              <NavDropdown.Item href="/affiliate-marketing">
                Affiliate Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="/digital-marketing">
                Digital Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="/it-solutions">
                IT Solutions
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "none")}
              onClick={props.aboutPageScrollTop}
            >
              About Us
            </NavLink>
            <div className="contact_navItem" onClick={props.executeScroll}>
              Contact Us
            </div>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "active last_navItem" : "last_navItem"
              }
              onClick={props.blogPageScrollTop}
            >
              Blog
            </NavLink>
          </div>
          <div className="showmenubar" onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
