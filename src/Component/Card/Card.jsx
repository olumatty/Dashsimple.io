import React from "react";
import "./Card.css";
import { LuMoreVertical } from "react-icons/lu";
import { PiContactlessPaymentLight } from "react-icons/pi";
const Card = () => {
  return (
    <div className="Main-grid grid-common1 c6">
      <div className="title">
        <h4>Kartu Anda</h4>
        <LuMoreVertical className="icons" />
      </div>
      <div className="Cards">
        <div>
          <div className="Card-one">
            <div className="grid-c-title">
              <h4>BCA</h4>
              <button className="grid-c-icon">
                <PiContactlessPaymentLight className="grid-icon" />
              </button>
            </div>
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
          <div className="grid-progress-bar">
            <div className="progress-title">
              <span className="header">Pengeluaran bulan ini</span>
              <span className="money">Rp2.000.000</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-one"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="Card-two">
            <div className="grid-c-title">
              <h4>DBS</h4>
              <button className="grid-c-icon">
                <PiContactlessPaymentLight className="grid-icon" />
              </button>
            </div>
            <div className="grid-details">
              <span>ZYA</span>
              <span> 11/24</span>
            </div>
            <div className="grid-account">
              <div>
                <span>7981 1234 1234 1234</span>
              </div>
              <div className="card-logo">
                <div className="logo-shape1"></div>
                <div className="logo-shape2"></div>
              </div>
            </div>
          </div>
          <div className="grid-progress-bar">
            <div className="progress-title">
              <span className="header">Pengeluaran bulan ini</span>
              <span className="money">Rp101.000.000</span>
            </div>
            <div className="Progress2-bar">
              <div className="progress2-bar-one"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
