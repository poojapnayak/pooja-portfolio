import React from "react";
import "./intro.css";

//Images
import profileImg from "../../assets/profileImg.png";

const Intro = () => {
  return (
    <section id="home">
      <div className="home-content">
        <h3>Hi,</h3>
        <h1>
          I'm <span>Pooja</span>
        </h1>
        <h3>Frontend Developer</h3>
        <p>
          I'm a skilled and passionate web developer with over 5 years of
          experience in creating visually appealing and user-centric websites.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1cBeokzCOEPMwRoxVn1cZ_kQfE5H4rvQf"
          className="downloadCV-btn"
          download
        >
          Download CV
        </a>
      </div>

      <div className="home-img">
        <img src={profileImg} alt="home-img"></img>
      </div>
    </section>
  );
};

export default Intro;
