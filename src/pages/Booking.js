import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logoImage from "../assets/logo.svg";
import { Helmet } from "react-helmet-async";
import "../components/HeaderBooking.css";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -10, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 10, x: 0 },
};

const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scroll");
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
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
      {isModalOpen && <Modal name={name} />}
      <Form setIsModalOpen={setIsModalOpen} name={name} setName={setName} />
      <Footer />
    </motion.div>
  );
};

export default Booking;
