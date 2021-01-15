import React from "react";
import "./middle1.css";

const definition = () => {
  return (
    <div id="definition" className="definition">
      <div className="container" style={{margin: "30px 0px"}}>
        <h1 style={{fontFamily: 'Fraunces'}} className="text-white head">What is Missi<span className="o">o</span>n <span className="o">Q</span>abil?</h1>
        <p style={{fontSize: "20px"}} className="text-white def-para">
          Mission Qabil is an initiative of Delhi Technological University where
          we have planned to teach specially abled people so that they can stand
          along with other people and can get whichever job they want. Mission
          Qabil is an initiative of Delhi Technological University where we have
          planned to teach specially abled people so that they can stand along
          with other people and can get whichever job they want.
        </p>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        ></iframe>
      </div>
    </div>
  );
};

export default definition;
