// src/components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo_header from "../img/logo_header.png";

const Header = () => {
  const location = useLocation();

  const scrollToSection = (e) => {
    e.preventDefault();
    document
      .getElementById("second-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="logo_header">
        <Link to="/">
          <img
            src={logo_header}
            alt="Classroom Hub logo"
            className="logo-header"
          />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link to="/">Accueil</Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/produit" ? "active" : ""
            }`}
          >
            <a href="#second-section" onClick={scrollToSection}>
              Produit
            </a>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
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
