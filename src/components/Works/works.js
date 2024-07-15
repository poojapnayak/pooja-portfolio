import React from "react";
import "./works.css";

const Works = () => {
  return (
    <section id="works">
      <span className="worksTitle">My Experiences</span>
      <span className="worksDesc">
        Highly skilled and adaptable Developer with 5 years of experience in
        frontend technologies such as ReactJS, JavaScript, TypeScript, CSS, and
        HTML. Specialized in creating engaging and user-friendly interfaces to
        deliver exceptional user experiences.
      </span>
      <div className="worksBox-container">
        <div className="works-box">
          <div className="works-info">
            <h3>Senior Frontend Developer</h3>
            <span className="worksYear">WorkBoard (Aug 2022 - Sep 2023)</span>
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
            <h3>Senior Frontend Developer</h3>
            <span className="worksYear">ABB LCAP (Jul 2021 - Aug 2022)</span>
            <ul className="worksParag">
              <li>
                Researched and implemented multi-language support to the
                application, leveraging my expertise in ReactJS for seamless
                integration.
              </li>
              <li>
                Implemented the necessary features and ensured their
                functionality through the development of proof-of-concepts
                (POCs).
              </li>
              <li>
                Created .jar files for the QA team to validate, ensuring the
                application's readiness for production and seamless deployment.
              </li>
            </ul>
          </div>
        </div>
        <div className="works-box">
          <div className="works-info">
            <h3>Frontend Developer</h3>
            <span className="worksYear">iAlert (Jul 2018 - Jul 2021)</span>
            <ul className="worksParag">
              <li>
                Collaborated with team members, including Project Manager to
                minimize the work delays and to provide the efficient and
                responsive application.
              </li>
              <li>
                Researched and leveraged my expertise in ReactJS and JavaScript
                to design and implement a scalable application, significantly
                enhancing performance.
              </li>
              <li>
                To facilitate scalability and customization, the application was
                deployed in AWS Elastic Beanstalk.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
