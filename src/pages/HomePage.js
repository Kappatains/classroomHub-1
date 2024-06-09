import React from "react";
import "./HomePage.css";
import backgroundImage from "../img/background.jpg"; // Image de fond pour la première section
import sectionImage from "../img/section.jpg"; // Image pour la deuxième section
import iconLaptop from "../img/icon-laptop.png";
import iconCalendar from "../img/icon-calendar.png";
import iconCook from "../img/icon-cook.png";
import Footer from "../components/Footer";

const HomePage = () => {
  const scrollToSection = () => {
    document
      .getElementById("second-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div id="top-section" className="top-section">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="content">
            <h1>
              <span>Système de réservation de</span> <br /> salles de cours,
              spécialisées <br /> et salles de réunion
            </h1>
          </div>
        </div>
        <div className="slogan-section">
          <p className="slogan-bold">MakeYourWorkplaceBetter</p>
          <p className="slogan-fine">
            Solution flexible pour optimiser son quotidien
          </p>
          <button className="learn-more-btn" onClick={scrollToSection}>
            En savoir plus
          </button>
          <div className="scroll-indicator">
            <span className="chevron"></span>
            <span className="chevron"></span>
            <span className="chevron"></span>
          </div>
        </div>
      </div>
      <div id="second-section" className="second-section">
        <div className="left">
          <img
            src={sectionImage}
            alt="Fonctionnalités"
            className="section-image"
          />
        </div>
        <div className="right">
          <div className="block">
            <img src={iconLaptop} alt="Laptop" className="icon" />
            <h2 className="txt-one">
              Réservation d'une salle
              <br /> de n'importe où
            </h2>
          </div>
          <div className="separator"></div>
          <div className="block two">
            <div className="block-txt">
              <h2>Fonctionnalités intelligentes et réservation facile</h2>
              <p>
                Réservations ad hoc directement sur une borne tactile devant la
                salle de réunion et de nombreuses fonctionnalités uniques aidant
                à planifier et organiser des réunions de manière efficace.
              </p>
            </div>
            <img src={iconCalendar} alt="Calendar" className="icon" />
          </div>
          <div className="separator"></div>
          <div className="block">
            <img src={iconCook} alt="Cook" className="icon" />
            <div className="block-txt">
              <h2>Avez-vous besoin d'aide ? Facilement et rapidement</h2>
              <p>
                Grâce au service Assistance à la clientèle ou Assistance à la
                clientèle+, nous sommes toujours à disposition des clients au
                moment le plus important.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
