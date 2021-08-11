import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="Ritesh Singh | Student | Coder | Explorer | Trying to grow by learning new technologies everyday"
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">Student</h3>
          <p className="about-details">
            I am Ritesh a 9th grader and currently learning react{" "}
            <a
              className="about-link-element"
              href="https://github.com/ritesh423"
            >
              My Github
            </a>
          </p>

          {/* Sub section 2 */}
          <h3 className="about-sub-head">Coder</h3>
          <p className="about-details">
            I am coding since 1.5 years and i have a good understanding in front
            end dev and technologies like html css and js{" "}
            <a
              className="about-link-element"
              href="https://www.linkedin.com/in/ritesh-singh-01580620a/"
            >
              My LinkedIn
            </a>
          </p>

          {/* Sub section 3 */}
          <h3 className="about-sub-head">Web Dev</h3>
          <p className="about-details">
            Want a Frontend landing page with awesome designs and animation{" "}
            <a className="about-link-element" href="riteshsingh.py@gmail.com">
              Mail Me
            </a>
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
      />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
