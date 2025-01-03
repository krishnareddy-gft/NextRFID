import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactPage.css';

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Let's Discuss Your RFID Solutions
          </p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>Level 32, 200 George St<br/>Sydney NSW 2000</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>info@nextrfid.com.au</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7z"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <p>1300 NEXTRFID</p>
          </div>
        </div>
      </section>

      <section className="locations-section">
        <h2>Our Locations</h2>
        <div className="locations-grid">
          <div className="location-card">
            <h3>New South Wales</h3>
            <p>Sydney CBD<br/>North Sydney<br/>Parramatta</p>
          </div>
          <div className="location-card">
            <h3>Victoria</h3>
            <p>Melbourne CBD<br/>South Melbourne</p>
          </div>
          <div className="location-card">
            <h3>Queensland</h3>
            <p>Brisbane CBD<br/>Gold Coast</p>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <h2>Ready to Transform Your Asset Management?</h2>
        <p>Let's work together to create the perfect RFID solution for your business.</p>
        <div className="company-details">
          <p>ABN: 12 345 678 901</p>
          <p>NextRFID - Innovating Asset Management</p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage; 