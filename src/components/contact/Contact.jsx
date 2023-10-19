import React, { useRef } from 'react';
import './contact.css';
import Facebook from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n04banh', 'template_w2sievs', form.current, 'InaiXYEb5VSnUDB6q')

      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form bellow to discuss any work opportunities
        </span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Enter your email" name="from_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={Facebook} alt="Facebook" className="link" />
            <img src={Twitter} alt="Twitter" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
