import React from "react";
import "./middle1.css";

const definition = () => {
  return (
    <div id="definition" className="definition">
      <div className="container" style={{ margin: "30px 0px" }}>
        <h1 style={{ fontFamily: 'Fraunces' }} className="text-white head">What is Missi<span className="o">o</span>n <span className="o">Q</span>abil?</h1>
        <p id="main-p" className="text-white def-para">
          Mission Qabil is an initiative to empower differently-abled college students. We will provide them with a competitive environment where they could grow. We aim to build a community for them, where they will strive to become their best version.
          <br />
          <br />
          These students will have easy access to the interview and placement preparation course. They will be allotted homework/tasks daily, and their performance will be regularly tracked. Our team will always be there to solve their doubts and help them improve their weak areas in coding. Their performance will be analyzed in detail to understand their strengths and weaknesses and prepare a subsequent planner for them accordingly. Mentors will also be focusing on the overall personality development of the student. Group discussions and mock interviews will be conducted. Various webinars and seminars will be organized with an established alumnus for students so they get insight from their experiences.
        </p>
        <iframe
          className="video"
          id = "video"
          src="https://www.youtube.com/embed/_aE-1oGvfNg?rel=0?version=3&autoplay=1&mute=1&loop=1" allowfullscreen="allowfullscreen"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default definition;
