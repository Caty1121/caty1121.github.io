import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get in Touch.</h2>
      <div className="form-box">
        <button type="submit">Send</button>
        <form action="submit_form.php" method="post">
          <div class="form-right">
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Name"/>
            <label for="email"></label>
            <input type="email" id="email" name="email" placeholder="email"/>
            <label for="phone"></label>
            <input type="phone" id="phone" name="phone" placeholder="Phone Number"/>
          </div>
          <div class="form-left"> 
          <label for="message"></label>
          <textarea id="message" name="message" placeholder="Message" Class="message"></textarea>
          </div>  
        </form>
      </div>
    </section>
  );
};

export default Contact;
