import React from "react";
import { Link } from "react-router-dom";

import "./footerTemp.css";

const footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="row">
          <div className="col col-md-1">
          </div>
          <div className="col col-md-5">
            <h6 className="mb-4">Contact Us</h6>
            <form className="form-group">
              <input className="form-control mb-2" style={{width: "25vw"}} type="text" placeholder="Name" />
              <input className="form-control mb-2" style={{width: "25vw"}} type="email" placeholder="Email" />
              <input className="form-control mb-2" style={{width: "25vw"}} type="pupose" placeholder="Purpose" />
              <textarea className="form-control mb-2" style={{width: "25vw"}} type="text" placeholder="Message" />
              <button className="btn btn-outline-light">Send</button>
            </form>
          </div>

          <div className="col col-md-3">
            <h6>Our Chapters</h6>
            <ul className="footer-links">
              <li>
                <a href="http://dtu.ac.in/" target="_blank">Delhi Technological University</a>
                <p>Many more coming soon...</p>
              </li>
            </ul>
          </div>

          <div className="col col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#definition">About Us</a>
              </li>
              <li>
                <a href="https://www.instagram.com/missionqabil/" target="_blank">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/mission-qabil/" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtu.be/7LqrCzObDos" target="_blank">
                  YouTube
                </a>
              </li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <ul className="social-icons">
              <li>
                <a className="instagram" href="https://www.instagram.com/missionqabil/" target="_blank">
                  <i className="fab fa-instagram-square"></i>
                </a>
              </li>
              <li>
                <a className="linkedIn" href="https://www.linkedin.com/company/mission-qabil/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="youTube" href="https://youtu.be/7LqrCzObDos" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
