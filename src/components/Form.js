import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  const [numberPeople, setNumberPeople] = useState(4);
  return (
    <section className="section-center">
      <div className="form">
        <form>
          <input type="text" className="name-input" placeholder="Name" />
          <input type="text" className="email-input" placeholder="Email" />
          <div className="data">
            <label>Pick a date</label>
            <div className="inputs">
              <input type="text" placeholder="MM" maxLength="2" />
              <input type="text" placeholder="DD" maxLength="2" />
              <input type="text" placeholder="YYY" maxLength="4" />
            </div>
          </div>
          <div className="time">
            <label>Pick a time</label>
            <div className="inputs">
              <input type="text" placeholder="09" />
              <input type="text" placeholder="00" />
              <select>
                <option value="volvo">AM</option>
                <option value="saab">PM</option>
              </select>
            </div>
          </div>
          <div className="counter">
            <button
              onClick={(e) => {
                e.preventDefault();
                setNumberPeople((prevState) => prevState - 1);
              }}
            >
              -
            </button>
            <p>{numberPeople} peoples</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNumberPeople((prevState) => prevState + 1);
              }}
            >
              +
            </button>
          </div>
          <button className="btn btn-dark">MAKE RESERVATION</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
