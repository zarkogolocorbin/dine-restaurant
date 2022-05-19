import React from "react";
import "./Reservation.css";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <section className="reservation">
      <div className="section-center">
        <div className="reservation-content">
          <h1>Ready to make a reservation?</h1>
          <Link to={"/booking"}>
            <button className="btn">book a table</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
