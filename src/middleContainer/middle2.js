import React from "react";
import AOS from "aos";
import "./middle2.css";

const work = () => {
  AOS.init({
    duration: 1200,
    // once: true,
  });

  return (
    <div id="middle2">
      <h1>OUR MISSION</h1>
      <ul>
        <li>
          <div data-aos="fade-right">
            <i class="fas fa-chevron-right"></i> &nbsp; &nbsp; <span>To b</span>
            uild a community of differently-abled students from various
            colleges.
          </div>
        </li>
        <li>
          <div data-aos="fade-right">
            <i class="fas fa-chevron-right"></i> &nbsp; &nbsp; <span>To t</span>
            rain students for the internships and placement preparation.
          </div>
        </li>
        <li>
          <div data-aos="fade-right">
            <i class="fas fa-chevron-right"></i> &nbsp; &nbsp; <span>To c</span>
            reate an environment of collaboration, experimentation, imagination,
            and creativity.
          </div>
        </li>
        <li>
          <div data-aos="fade-right">
            <i class="fas fa-chevron-right"></i> &nbsp; &nbsp; <span>To d</span>
            evelop a student's potential with analytical and technical
            abilities.
          </div>
        </li>
        <li>
          <div data-aos="fade-right">
            <i class="fas fa-chevron-right"></i> &nbsp; &nbsp; <span>To p</span>
            rovide environment-friendly, reasonable and sustainable solutions
            for the development of Differently-abled students.
          </div>
        </li>
        <li>
          <div data-aos="fade-right">
            <i class="fas fa-chevron-right"></i> &nbsp; &nbsp; <span>To e</span>
            nhance the personality of all these students and improve their
            coding skills.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default work;
