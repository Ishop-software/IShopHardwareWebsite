// src/AboutPage.js
import React from 'react';
import img2 from '../../assets/img2.jpeg'; // Corrected the image import

const AboutPage = () => {
  return (
    <section id="about" className="section">
      <div className="left-about">
        <h1>About Us</h1>
        <p>Welcome to ISHOP HARDWARE</p>
        <p>
          Your premier destination for top-quality Computer Hardware and Technology Solutions.
          Founded in 2000, we have dedicated ourselves to providing cutting-edge components
          and unmatched customer service to tech enthusiasts, professionals, and businesses alike.
        </p>
        <p>
          At ISHOP HARDWARE, our mission is to empower our customers with the best computer hardware available,
          ensuring they have the tools they need to innovate, create, and achieve their goals. We are passionate
          about delivering products that enhance performance, reliability, and value.
        </p>
      </div>
      <div className="right-about">
        <img src={img2} alt="About Us" />
      </div>
    </section>
  );
};

export default AboutPage;
