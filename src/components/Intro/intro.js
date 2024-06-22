import React from "react";
import "./intro.css";

//Images
import profileImg from "../../assets/profileImg.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="intoText">
          I'm <span className="introName">Pooja</span>
          <br />
          Frontend Developer
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
      <div className="bgImage">
        <img src={profileImg} alt="My Profile"></img>
      </div>
    </section>
  );
};

export default Intro;
