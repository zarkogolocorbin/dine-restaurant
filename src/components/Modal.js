import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="backdrop">
      <div className="modal-body">
        <h2>Thank you for booking a table in our restaurant</h2>
        <button className="btn btn-dark" onClick={() => navigate("/")}>
          back to home
        </button>
      </div>
    </div>
  );
};

export default Modal;
