import React, { useRef }from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import LinkedinIcon from '../../assets/linkedin.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
     e.preventDefault();

     emailjs.sendForm('service_7ka1gsh', 'template_28zxw4a', form.current, 's2WPTF3o_ZZ6PwVXgEaUW')
         .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent! ');
        }, (error) => {
          console.log(error.text);
      });
    };
  return (
   <section id='contactPage'>
    <div id='clients'>
      <h1 className='contactPageTitle'>My Clients</h1>
      <p className='clientDesc'>
        Here are some of the clients I have had the pleasure to work with.
        If you would like a custom quote, please feel free to contact me.
      </p>
    <div className='clientImgs'>
       <img src={Walmart} alt='Client' className='clientImg' />
       <img src={Adobe} alt='Client' className='clientImg' />
       <img src={Microsoft} alt='Client' className='clientImg' />
       <img src={Facebook} alt='Client' className='clientImg' />
    </div>
    </div>
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='your_name' />
            <input type='email' className='email' placeholder='Email Address' name='your_email'/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type="submit" value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={FacebookIcon} alt='Facebook' className='https://www.facebook.com/profile.php?id=100045383851127' />
                <img src={TwitterIcon} alt='Twitter' className='https://twitter.com/shash90591?t=CgbYPdOoeTr46Nn2c7dUiw&s=08' />
                <img src={LinkedinIcon} alt='Linkedin' className='https://www.linkedin.com/in/shashi-shekhar-dixit-266aa825a/' />
                <img src={InstagramIcon} alt='Instagram' className='https://www.instagram.com/saurabh_dixit_80_/' />
            </div>
        </form>
    </div>
   </section>
  )
}

export default Contact;
