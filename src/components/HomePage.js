import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  const technologies = [
    {
      name: 'Java',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82" />
        </svg>
      )
    },
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon">
          <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467z"/>
        </svg>
      )
    },
    {
      name: 'Android Studio',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon">
          <path d="M19.2 8.42l-1.27-2.19a.1.1 0 0 1 0-.1l1.27-2.19A.1.1 0 0 0 19.13 4l-1.27.89a.1.1 0 0 1-.14 0l-1.27-.89a.1.1 0 0 0-.13.04l1.27 2.19a.1.1 0 0 1 0 .1l-1.27 2.19a.1.1 0 0 0 .13.04l1.27-.89a.1.1 0 0 1 .14 0l1.27.89a.1.1 0 0 0 .13-.04zM16.12 17.82h-7.24a.1.1 0 0 1-.1-.1v-1.6a.1.1 0 0 1 .1-.1h7.24a.1.1 0 0 1 .1.1v1.6a.1.1 0 0 1-.1.1z"/>
        </svg>
      )
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon">
          <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
        </svg>
      )
    },
    {
      name: 'SQL',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14h-9v-1.5h9V16zm0-2.5h-9v-1.5h9V13.5zm0-2.5h-9V9.5h9V11z"/>
        </svg>
      )
    },
    {
      name: 'Flutter',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-logo">RFID Solutions</h1>
          <h2 className="subheading">Transforming Asset Management</h2>
          <p className="company-description">
            Leading provider of innovative RFID technology solutions for efficient asset tracking and management.
          </p>
        </div>
      </div>

      <section className="tech-section">
        <h2 className="tech-title">Technologies</h2>
        <p className="tech-subtitle">Empowering Innovation Through Advanced Technologies</p>
        <div className="tech-container">
          <div className="tech-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="tech-item">
                {tech.icon}
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <h2 className="products-title">Products</h2>
        <p className="products-subtitle">
          Discover Our Cutting-Edge RFID Solutions
        </p>
        <div className="products-container">
          <div className="product-card">
            <h3 className="product-title">RFID Reader</h3>
            <p className="product-description">
              High-performance RFID readers designed for seamless asset tracking. 
              Our readers offer superior read ranges, multi-tag processing, and 
              real-time data capture capabilities.
            </p>
            <button className="read-more-btn">Learn More</button>
          </div>
          
          <div className="product-card">
            <h3 className="product-title">RFID Tags</h3>
            <p className="product-description">
              Advanced RFID tags engineered for durability and reliability. 
              Available in various form factors, our tags ensure consistent 
              performance across diverse environmental conditions.
            </p>
            <Link to="/rfid-tags/overview" className="read-more-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage; 