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
          I have had the opportunities to work with diverse group of companies
          such as
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
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk!</h1>
            <p>
              I'm currently available to take on new projects, so feel free to
              contact me for any new opportunities.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src="" alt=""></img>
                <p>poojapnayak9@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src="" alt=""></img>
                <p>+971 562405857</p>
              </div>
              <div className="contact-detail">
                <img src="" alt=""></img>
                <p>Dubai, UAE</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              {/* <label htmlFor="">Your Name</label> */}
              <input
                type="text"
                className="name"
                placeholder="Enter your name"
                name="your_name"
                required
              />
              {/* <label htmlFor="">Your Email</label> */}
              <input
                type="email"
                className="email"
                placeholder="Enter your email"
                name="your_email"
                required
              />
              {/* <label htmlFor="">Your Message</label> */}
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your message"
                className="msg"
                required
              />
              <button type="submit" className="submitBtn" value="Send">
                Submit
              </button>
            </form>
          </div>
        </div>
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
