import React, { useEffect } from "react";
import motu from "../images/motu.jpg";
import "./team.css";
import AOS from "aos";

const ourTeam = () => {
  AOS.init({
    duration: 1000,
  });

  const hover = (id) => {
    document.getElementById(id).style.display = "block";
  };

  return (
    <div className="team">
      <div data-aos="fade-up">
        <h1>Our Team</h1>
        <div className="team-display">
          <div className="card" style={{ width: "17rem" }}>
            <img src={motu} className="card-img-top" />
            <div>
              <h4>Name</h4>
              <p>Description</p>
            </div>
          </div>
          <div className="card" style={{ width: "17rem" }}>
            <img src={motu} className="card-img-top" />
            <div>
              <h4>Motu Bhaiya</h4>
              <p style={{ textAlign: "center" }}>
                Motu Bhaiya is very intelligent. His weakness is samosa. He can
                not live without patlu as well.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "17rem" }}>
            <img src={motu} className="card-img-top" />
            <div>
              <h4>Name</h4>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourTeam;
