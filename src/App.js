import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faThList, faBox, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage';
import CategoriesPage from './Pages/Categories/CategoriesPage';
import ProductsPage from './Pages/ProductPage/ProductsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import logo from './assets/logo.jpg'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About</a></li>
          <li><a href="#categories"><FontAwesomeIcon icon={faThList} /> Shop by Categories</a></li>
          <li><a href="#products"><FontAwesomeIcon icon={faBox} /> Products</a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</a></li>
          <li><a href="#login"><FontAwesomeIcon icon={faSignInAlt} /> Login</a></li>
          <li><a href="#more">More</a></li>
        </ul>
      </nav>
      <HomePage />
      <AboutPage />
      <CategoriesPage />
      <ProductsPage />
      <ContactPage />
      <LoginPage />
      <footer className="App-footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;







