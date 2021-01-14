import React from "react";
import "./middle3.css";
import AOS from "aos";

const mission = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <div className="mission">
      <div data-aos="fade-up">
        <h1>
          <span className="o">O</span>UR <span className="o">M</span>ISSION
        </h1>
        <div className="card-flex">
          <div className="card card-mission">
            <p className="card-text p-mission">
              To buid a community of differently-abled students from various
              colleges.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              To train students for internships and placements <br />{" "}
              preparation.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission" style={{ marginTop: "17%" }}>
              To create an environment of collaboration, experimentation,
              imagination, and creativity
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              To develop a <br /> student's potential <br /> with analytical{" "}
              <br /> and technical abilities.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission" style={{ marginTop: "10%" }}>
              To provide <br /> environment-friendly, reasonable and sustainable
              solutions for the development of differently-abled students.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              To enhance the personality of all these students and improve their
              coding skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mission;
