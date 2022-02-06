import React from "react";
import logoImg from "../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <>
        <div className="footer-center">
          <div className="footer-logo">
            <img src={logoImg} alt="logo imag" />
          </div>
          <div className="footer-content">
            <div className="address">
              <p>Marthwaite, Sedbergh</p>
              <p>Cumbria</p>
              <p>+00 44 123 4567</p>
            </div>
            <div className="open-time">
              <p>OPEN TIMES </p>
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </>
    </footer>
  );
};

export default Footer;
