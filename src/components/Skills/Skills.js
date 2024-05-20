import React from "react";
import "./skills.css";
import Marquee from "react-fast-marquee";

//images
import reactlogo from "../../assets/reactlogo.png";
import javascriptlogo from "../../assets/javascriptlogo.png";
import htmllogo from "../../assets/htmllogo.png";
import csslogo from "../../assets/cssslogo.png";
import reduxlogo from "../../assets/reduxlogo.png";
import gitlogo from "../../assets/gitlogo.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'm an experienced Developer with 5 years of proficiency as a ReactJS
        Developer. Proven track record of delivering successful solutions across
        diverse technologies. Actively available for immediate hire in UAE,
        seeking a challenging role to apply my adaptable nature to new
        technologies and quick learning ability, and contribute to innovative
        projects within a collaborative team environment.
      </span>
      <Marquee pauseOnHover="false">
        <div className="skillCards">
          <div className="skillCard">
            <img
              src={reactlogo}
              alt="react logo"
              className="skillCardImg"
            ></img>
            <div className="skillBarText">
              <p>React JS</p>
            </div>
          </div>
          <div className="skillCard">
            <img
              src={javascriptlogo}
              alt="react logo"
              className="skillCardImg"
            ></img>
            <div className="skillBarText">
              <p>JavaScript</p>
            </div>
          </div>
          <div className="skillCard">
            <img src={htmllogo} alt="react logo" className="skillCardImg"></img>
            <div className="skillBarText">
              <p>HTML 5</p>
            </div>
          </div>
          <div className="skillCard">
            <img src={csslogo} alt="react logo" className="skillCardImg"></img>
            <div className="skillBarText">
              <p>CSS 3</p>
            </div>
          </div>
          <div className="skillCard">
            <img
              src={reduxlogo}
              alt="react logo"
              className="skillCardImg"
            ></img>
            <div className="skillBarText">
              <p>Redux</p>
            </div>
          </div>
          <div className="skillCard">
            <img src={gitlogo} alt="react logo" className="skillCardImg"></img>
            <div className="skillBarText">
              <p>Git</p>
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Skills;
