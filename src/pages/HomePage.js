// src/pages/HomePage.js
import React from "react";
import "./HomePage.css";
import backgroundImage from "../img/background.jpg"; // Image de fond pour la première section
import sectionImage from "../img/section.jpg"; // Image pour la deuxième section

const HomePage = () => {
  const scrollToSection = () => {
    document
      .getElementById("second-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="content">
          <h1>
            Système de réservation de salles de cours, spécialisées et salles de
            réunion
          </h1>
          <p>MakeYourWorkplaceBetter</p>
          <p>Solution flexible pour optimiser son quotidien</p>
          <button className="learn-more-btn" onClick={scrollToSection}>
            En savoir plus
          </button>
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
          <h2>Réservation d'une salle de n'importe où</h2>
          <p>Fonctionnalités intelligentes et réservation facile</p>
          <p>
            Réservations ad hoc directement sur une borne tactile devant la
            salle de réunion et de nombreuses fonctionnalités uniques aidant à
            planifier et organiser des réunions de manière efficace.
          </p>
          <h2>Avez-vous besoin d'aide ? Facilement et rapidement</h2>
          <p>
            Grâce au service Assistance à la clientèle ou Assistance à la
            clientèle+, nous sommes toujours à disposition des clients au moment
            le plus important.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
