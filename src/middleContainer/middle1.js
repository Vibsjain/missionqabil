import React from "react";
import "./middle1.css";

const definition = () => {
  return (
    <div className="definition">
      <div className="container">
        <h1 className="text-white head">What is Mission Qabil?</h1>
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
