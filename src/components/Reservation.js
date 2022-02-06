import React from "react";
import "./Reservation.css";

const Reservation = () => {
  return (
    <section className="reservation">
      <div className="section-center">
        <div className="reservation-content">
          <h1>Ready to make a reservation?</h1>
          <button className="btn">book a table</button>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
