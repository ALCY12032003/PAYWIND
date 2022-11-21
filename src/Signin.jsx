import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import Profile from './Profile';
import Signup from './Signup';


const Signin = () => {
  return (
    <div className="mac-book-air-44">
      <div className="image-63">
        <div className="r122">
          <span className="we-will-review-your">
            We will review your financial data on a
            daily/weekly/monthly basis and manage your assets from
            your UPI to PAYWIND
          </span>
        </div>
      </div>
      <div className="stfu">
        <span className="sign">Sign-in</span>
        <span className="start-managing-confi">
          Start managing confidently{" "}
        </span>
        <span className="e-mail-id">E-Mail Id</span>
        <input
          className="rectangle-93"
          placeholder="xxx@gmail.com"
          type="email"
        />
        <span className="password">Password</span>
        <input className="box" placeholder="*****" type="password" />
        <span className='f'>Forget Password?</span>
        <Link to="/Signup" className="dont-have-an-account">
          Don't have an account?Create Account
        </Link>
        <Link to="/Profile" className="rectangle-94">LOGIN</Link>
      </div>
    </div>
  );
};
export default Signin;