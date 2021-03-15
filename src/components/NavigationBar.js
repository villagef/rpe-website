import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

import whiteLogo from "../img/logos/rpe_white.png";
import usa from "../img/icons/usa.svg";
import pl from "../img/icons/pl.svg";

import { Consumer } from "../TranslationContext";
import T from "../T";

function NavigationBar() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  let sectionTwo = 0;

  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      let show = window.scrollY > 20;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      sectionTwo = document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0);
  };

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div
      className="nav-wrapper"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground
          ? "rgba(17, 40, 56, 0.9)"
          : "transparent",
      }}
    >
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            className="logo-nav"
            src={whiteLogo}
            alt="RPE Analytics logo"
          ></img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <T label={"nav1"} />
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="nav-links" style={{ cursor: "pointer" }}>
              <T label={"nav2"} /> <i className="fas fa-caret-down" />
            </div>
            {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              <T label={"nav3"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/career" className="nav-links" onClick={closeMobileMenu}>
              <T label={"nav4"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              <T label={"nav5"} />
            </Link>
          </li>
          <li className="nav-item">
            <Consumer>
              {({ setLanguage, language }) => {
                return (
                  <>
                    <div
                      id={language == "en" ? "active" : ""}
                      onClick={() => setLanguage("en")}
                      className="nav-links lang"
                    >
                      <img
                        src={usa}
                        style={{
                          width: language == "pl" ? "23px" : "20px",
                          marginLeft: "15px",
                        }}
                        alt="usa flag"
                      ></img>
                    </div>
                    <span style={{ color: "white" }}>|</span>
                    <div
                      id={language == "pl" ? "active" : ""}
                      onClick={() => setLanguage("pl")}
                      className="nav-links lang"
                    >
                      <img
                        src={pl}
                        style={{ width: language == "pl" ? "20px" : "23px" }}
                        alt="pl flag"
                      ></img>
                    </div>
                  </>
                );
              }}
            </Consumer>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
