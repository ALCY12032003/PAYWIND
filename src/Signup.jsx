import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Otp from './Otp';
import Signin from './Signin';

const Signup = () => {
  return (
    <div className="mac-book-air-51">
      <div className="image-70">
        <div className="tangle-122">
          <span className="we-help-you-to-manag">
            We help you to manage you account efficiently and effectively in
            order to keep track of your spending and achieve your money goals.
          </span>
        </div>
      </div>
      <div className="pichu">
        <span className="sign">Sign-up</span>
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
        <input className="pop" placeholder="*****" type="password" />
        <span className="forget-password">Forget Password?</span>
        <Link to="/Signin" className="a">Already have an account? Sign in</Link>
        <Link to="/Otp" className="rectangle-94">LOGIN</Link>
      </div>
    </div>
  );
};
export default Signup;