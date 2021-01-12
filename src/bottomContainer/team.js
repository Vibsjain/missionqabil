import React from "react";
import motu from "../images/motu.jpg";
import "./team.css";

const ourTeam = () => {
  const hover = (id) => {
    document.getElementById(id).style.display = "block";
  };

  return (
    <div className="team">
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
            <h4>Name</h4>
            <p>Description</p>
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
  );
};

export default ourTeam;
