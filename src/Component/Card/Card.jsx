import React from "react";
import "./Card.css";
import { LuMoreVertical } from "react-icons/lu";
const Card = () => {
  return (
    <div className="Main-grid grid-common1 c6">
      <div className="title">
        <h4>Kartu Anda</h4>
        <LuMoreVertical className="icons" />
      </div>
      <div className="Card-one">
        <div className="grid-c-title">
          <h4>BCA</h4>
          <button className="grid-c-icon">
            <img
              src="https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_contactless-512.png"
              alt="contactless icon"
            />
          </button>
          <div className="grid-details">
            <span>ANI</span>
            <span> 04/25</span>
          </div>
          <div className="grid-account">
            <div>
              <span>4821 1234 1234 1234</span>
            </div>
            <div className="card-logo">
              <div className="logo-shape1"></div>
              <div className="logo-shape2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
