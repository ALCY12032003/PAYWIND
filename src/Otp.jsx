import "./Otp.css";
import React from "react";
import { Link } from "react-router-dom";
import "./Verification.css";
const Otp = () => {
  return (
    <div className="mac-book-air-46">
      <div className="image-29">
        <div className="rect">
          <span className="otp-verification">OTP Verification</span>
          <img className="image-87" />
          <span className="we-will-send-you-a-o">
            We will send you a one-time password to this phone number
          </span>
          <span className="phone-number">Phone Number</span>
          <input className="rec" placeholder="**********" type="tel" />
          <button className="rectang">
            <Link to="/Verification" className="confirm">CONFIRM</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Otp;