import React from 'react';
import img4 from '../../assets/img5.jpeg'; // Correctly import the image

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Successfully submitted!');
  };

  return (
    <section id="contact" className="contact-section">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-left">
          <img src={img4} alt="Contact Us" />
        </div>
        <div className="contact-right">
          <form className="shadow" onSubmit={handleSubmit}>
            <h4>Fill Up The Form</h4>
            <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
