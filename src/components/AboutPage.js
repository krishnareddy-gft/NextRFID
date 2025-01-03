import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutPage.css';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About NextRFID</h1>
          <p className="about-subtitle">
            Innovating the Future of Asset Management
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <div className="mission-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L19.5 12H18v7h-4v-6H8v6H4v-7H2.5L12 4.84z"/>
            </svg>
          </div>
          <h2>Our Mission</h2>
          <p>
            At NextRFID, we're committed to revolutionizing how businesses manage their assets 
            through innovative RFID solutions. Our mission is to make complex asset tracking 
            simple, efficient, and accessible to businesses of all sizes.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z"/>
              </svg>
            </div>
            <h3>Innovation</h3>
            <p>Continuously pushing boundaries to deliver cutting-edge RFID solutions</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3>Collaboration</h3>
            <p>Working together with clients to create tailored solutions</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <h3>Reliability</h3>
            <p>Delivering dependable solutions that businesses can count on</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Our Team</h2>
        <p className="team-intro">
          Our diverse team of experts brings together decades of experience in RFID technology, 
          software development, and business solutions. We're united by our passion for innovation 
          and commitment to excellence.
        </p>

        <div className="team-content">
          <div className="team-story">
            <h3>Our Journey</h3>
            <p>
              Founded in 2008 by a group of RFID technology pioneers, NextRFID began with a vision 
              to revolutionize asset management. Our founding team combined expertise from leading 
              technology companies and research institutions across Australia.
            </p>
            <p>
              Starting with a small team of five specialists, we've grown to over 50 professionals 
              across engineering, software development, customer success, and business development. 
              Our team members have backgrounds from companies like Cisco, IBM, and leading 
              Australian universities.
            </p>
          </div>

          <div className="team-expertise">
            <h3>Core Expertise</h3>
            <div className="expertise-grid">
              <div className="expertise-card">
                <h4>Engineering Team</h4>
                <p>
                  Led by Dr. Sarah Chen, our engineering team brings 15+ years of experience in 
                  RFID hardware design and optimization. The team has contributed to multiple 
                  patents in RFID technology.
                </p>
              </div>
              <div className="expertise-card">
                <h4>Software Development</h4>
                <p>
                  Our software team, headed by James O'Connor, specializes in creating 
                  user-friendly interfaces and robust backend systems that handle millions 
                  of RFID transactions daily.
                </p>
              </div>
              <div className="expertise-card">
                <h4>Solutions Architecture</h4>
                <p>
                  Michael Thompson leads our solutions team, bringing experience from 
                  implementing RFID systems across various industries including healthcare, 
                  logistics, and manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="team-stats">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Team Members</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Projects Delivered</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Join Us in Shaping the Future</h2>
        <p>
          Ready to experience the NextRFID difference? Let's work together to transform 
          your asset management with our innovative RFID solutions.
        </p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </section>
    </div>
  );
}

export default AboutPage; 