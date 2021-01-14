import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div id="footer" className="bg-dark">
      <div className="contact-upper">
        <div className="left">
          <ul>
            <h3>Mission Qabil</h3>
            <li className="mb-2">abc@gmail.com</li>
            <li>+91-1234-5678</li>
          </ul>
        </div>
        <div className="left">
          <ul>
            <h3>Our Community</h3>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>
        <div className="left">
            <h3>Our Chapters</h3>
            <li className="mb-2">Delhi Technological University</li>
        </div>
      </div>
      <div className="contact-lower">
      <hr />
        <h4>Connect With Us</h4>
        <p>Logos</p>
      </div>
    </div>
  );
};

export default footer;
