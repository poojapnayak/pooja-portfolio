import React from "react";
import "./works.css";

//images
import profileImg from "../../assets/profileImg.png";
import hireMe from "../../assets/hireMe.png";
import webDev from "../../assets/webDev.png";
import plogo from "../../assets/plogo.png";
import contactEmail from "../../assets/contactEmail.png";
import menu from "../../assets/menu.png";

const Works = () => {
  return (
    <section id="works">
      <span className="worksTitle">My Experiences</span>
      <span className="worksDesc">
        I take a pride in paying attention to the smallest details with 5 years
        of proficiency as a ReactJS Developer. Proven track record of delivering
        successful solutions across diverse technologies. Actively available for
        immediate hire in UAE, seeking a challenging role to apply my adaptable
        nature to new technologies and quick learning ability, and contribute to
        innovative projects within a collaborative team environment.
      </span>
      <div className="worksBox-container">
        <div className="works-box">
          <div className="works-info">
            <h3>Senior Software Engineer</h3>
            <span className="worksYear">Jul 2023 - Dec 2023</span>
            <ul className="worksParag">
              <li>
                I utilized ReactJS and TypeScript to develop a robust and
                responsive user interface.
              </li>
              <li>
                Collaborated closely with team members, including the Team Lead,
                to ensure the application met the required WCAG accessibility
                standards.
              </li>
              <li>
                Tracked project status and managed tasks using Jira, enabling
                effective collaboration within the team.
              </li>
            </ul>
          </div>
        </div>
        <div className="works-box">
          <div className="works-info">
            <h3>Senior Software Engineer</h3>
            <span className="worksYear">Jul 2023 - Dec 2023</span>
            <ul className="worksParag">
              <li>
                I utilized ReactJS and TypeScript to develop a robust and
                responsive user interface.
              </li>
              <li>
                Collaborated closely with team members, including the Team Lead,
                to ensure the application met the required WCAG accessibility
                standards.
              </li>
              <li>
                Tracked project status and managed tasks using Jira, enabling
                effective collaboration within the team.
              </li>
            </ul>
          </div>
        </div>
        <div className="works-box">
          <div className="works-info">
            <h3>Software Engineer</h3>
            <span className="worksYear">Jul 2023 - Dec 2023</span>
            <ul className="worksParag">
              <li>
                I utilized ReactJS and TypeScript to develop a robust and
                responsive user interface.
              </li>
              <li>
                Collaborated closely with team members, including the Team Lead,
                to ensure the application met the required WCAG accessibility
                standards.
              </li>
              <li>
                Tracked project status and managed tasks using Jira, enabling
                effective collaboration within the team.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="worksImgs">
        <img src={profileImg} alt="profile" className="worksImg"></img>
        <img src={hireMe} alt="hire me" className="worksImg"></img>
        <img src={webDev} alt="web dev" className="worksImg"></img>
        <img src={plogo} alt="p logo" className="worksImg"></img>
        <img src={contactEmail} alt="contact" className="worksImg"></img>
        <img src={menu} alt="menu" className="worksImg"></img>
      </div> */}
      {/* <button className="worksBtn">See more</button> */}
    </section>
  );
};

export default Works;
