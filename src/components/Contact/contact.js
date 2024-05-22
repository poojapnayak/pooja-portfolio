import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

//Images
import ashokleyland from "../../assets/ashokleyland.png";
import ABBlogo from "../../assets/ABBlogo.png";
import workboardlogo from "../../assets/workboardlogo.png";
import linkedInlogo from "../../assets/linkedInlogo.png";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const email = formData.get("your_email");

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Invalid email address");
      setTimeout(() => setMessage(""), 5000);
      return;
    }
    form.current.reset();

    emailjs
      .sendForm("service_5za77dj", "template_nv5d3qg", form.current, {
        publicKey: "1C16mvsAnnlD3l3XT",
      })
      .then(
        () => {
          setMessage("Message sent successfully!");
          setTimeout(() => setMessage(""), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
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

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            className="msg"
            required
          />
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
        </form>
        <span className="message-container">
          {message && <p className="messageBox">{message}</p>}
        </span>

        <div className="links">
          <a
            href="https://www.linkedin.com/in/pooja-p-nayak-b319031b8/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInlogo} alt="linkedIn" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
