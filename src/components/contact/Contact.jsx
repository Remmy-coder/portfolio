import React, { useState, useRef } from 'react';
import './contact.scss'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_nm06njg', 'template_v2sfgqb', e.target, 'XfaWenow0UTVzf745')
      .then((result) => {
          console.log(result.text);
          setMessage(true)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name='name'/>
          <input type="email" placeholder="Email" name='email' required/>
          <textarea placeholder="Message"  name='message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
 