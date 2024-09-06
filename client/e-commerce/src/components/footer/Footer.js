import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer">
          <div className="text-info-div">
            <h1>Visit Our Website Enjoy Shopping</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="input-div">
            <input type="text" placeholder="Enter Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
