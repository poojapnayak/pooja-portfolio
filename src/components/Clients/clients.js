import React from "react";
import "./clients.css";

//Images
import ashokleyland from "../../assets/ashokleyland.png";
import ABBlogo from "../../assets/ABBlogo.png";
import workboardlogo from "../../assets/workboardlogo.png";

const Clients = () => {
  return (
    <section id="clientsPage">
      <div id="clients">
        <h2 className="clientsPageTitle">My Clients</h2>
        <p className="clientsDesc">
          I have had the opportunities to work with diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientsImgs">
          <img
            src={ashokleyland}
            alt="ashok leyland logo"
            className="clientsImg"
          ></img>
          <img
            src={workboardlogo}
            alt="workboard logo"
            className="clientsImg"
          ></img>
          <img src={ABBlogo} alt="abb logo" className="clientsImg"></img>
        </div>
      </div>
    </section>
  );
};

export default Clients;
