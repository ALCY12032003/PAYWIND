import React from "react";
import { Link } from "react-router-dom";
import "./Tpage.css";
import "./Success.css";
const Success = () => {
  return (
    <div className="mac-book-air-49">
      <div className="image-26">
        <span className="profile-created-succ">
          Profile Created Successfully
        </span>
        <img className="preview-2"/>
        <Link to="/Tpage" className="rectangle-120">PROCEED</Link>
      </div>
    </div>
  );
};
export default Success;