import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form action="submit_form.php" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
