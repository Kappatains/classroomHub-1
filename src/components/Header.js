import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo_header from "../img/logo_header.png";

const Header = () => {
  const location = useLocation();

  const scrollTo = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="logo_header">
        <a href="#top-section" onClick={(e) => scrollTo(e, "top-section")}>
          <img
            src={logo_header}
            alt="Classroom Hub logo"
            className="logo-header"
          />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <a href="#top-section" onClick={(e) => scrollTo(e, "top-section")}>
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#second-section"
              onClick={(e) => scrollTo(e, "second-section")}
            >
              Produit
            </a>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="login-button">
        <Link to="/login">
          <FontAwesomeIcon icon={faSignInAlt} className="login-icon" /> Se
          connecter
        </Link>
      </div>
    </header>
  );
};

export default Header;
