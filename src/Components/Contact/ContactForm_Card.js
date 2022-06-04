import React, { useState } from "react";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function ContactForm_Card(props) {
  const [err, setErr] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9858sfi",
        "template_muhmhc5",
        e.target,
        "025igslEoea3U8QvE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contactForm_card_sec">
      <form onSubmit={sendEmail}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
            pattern="[a-zA-Z0-9\s]+"
            title="Enter a valid name"
            required
          />
          <label htmlFor="name">
            Name <span className="text-danger">*</span>
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <label htmlFor="email">
            Email <span className="text-danger">*</span>
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
          />
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Enter message"
            name="message"
            id="message"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <input type="submit" value="SEND" className="form_send_btn" />
        <p className="text-danger fw-bold my-3">{err}</p>
      </form>
    </div>
  );
}

export default ContactForm_Card;
