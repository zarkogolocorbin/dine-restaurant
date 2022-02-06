import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logoImage from "../assets/logo.svg";
import { Helmet } from "react-helmet-async";
import "../components/HeaderBooking.css";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <>
      <Helmet>
        <title>Dine Restaurant | Booking table</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <Header>
        <header className="header-booking-container">
          <div className="section-center">
            <div className="header-booking-content">
              <div className="logo-booking">
                <Link to="/">
                  <img src={logoImage} alt="" />
                </Link>
              </div>
              <h1 className="header-booking-title">Reservations</h1>
              <p className="header-booking-paragraph">
                We can’t wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We’ll be
                happy to accommodate you.
              </p>
            </div>
          </div>
        </header>
      </Header>
      <Form />
      <Footer />
    </>
  );
};

export default Booking;
