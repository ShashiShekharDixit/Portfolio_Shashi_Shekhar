import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7ka1gsh', 
        'template_28zxw4a', 
        form.current, 
        'fMA4RqC-pECqkwCSgA42H'
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Email Sent Successfully!');
          form.current.reset(); 
        },
        (error) => {
          console.error('Email sending error:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          Here are some of the clients I have had the pleasure to work with.
          If you would like a custom quote, please feel free to contact me.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" required />
          <input type="email" className="email" placeholder="Email Address" name="your_email" required />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
