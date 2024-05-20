import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
//Images
import profileImg from "../../assets/profileImg.png";
import hireMe from "../../assets/hireMe.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="intoText">
          I'm <span className="introName">Pooja</span>
          <br />
          Website Developer
        </span>
        <p className="introParag">
          I'm a skilled and passionate web developer with experience in creating
          <br />
          visually appealing and user-centric websites.
        </p>
        {/* <Link>
            <button className="btn">
              <img src={hireMe} alt="Hire me" className="hireBtnImg" />
              Hire me
            </button>
          </Link> */}
        <a
          href="https://drive.google.com/uc?export=download&id=1YU-qxlVC-XW6uMsjH7ZjP6lYxTMA4xXj"
          download
          className="downloadCvBtn"
        >
          Download CV
        </a>
      </div>
      <img src={profileImg} alt="My Profile" className="bgImage"></img>
    </section>
  );
};

export default Intro;
