import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-nav">
          <li>
            <a
              href="#top-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("top-section");
              }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#second-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("second-section");
              }}
            >
              Produit
            </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <p className="footer-text">
          © 2024 - <span className="highlight">ESGI - B3 </span> - Eva, Jory,
          Adrien, Damien
        </p>
      </div>
    </footer>
  );
};

export default Footer;
