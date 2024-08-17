import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ReservationPage from "./pages/ReservationPage";
import CalendarPage from "./pages/CalendarPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router className="App-page">
      <Header className='header-page'/>
      <Routes className='body-page'>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/reserve" element={<ReservationPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      <Footer className='footer-page'/>
    </Router>
  );
}

export default App;
