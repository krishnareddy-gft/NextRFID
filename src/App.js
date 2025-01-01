import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="main-nav">
          <div className="logo">
            <a href="/">NextRFID</a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/technologies">Technologies</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="home-content">
        <div className="content-left">
          <h1 className="main-logo">NextRFID</h1>
          <h2 className="subheading">Revolutionizing Asset Tracking with Advanced RFID Solutions</h2>
          <p className="company-description">
            Pioneering the future of asset management through cutting-edge RFID technology. 
            We deliver innovative solutions that transform how businesses track, manage, and 
            optimize their resources in real-time, ensuring efficiency and precision in every operation.
          </p>
        </div>
        <div className="content-right">
          <img src="/rfid-illustration.png" alt="RFID Technology Illustration" />
        </div>
      </main>
    </div>
  );
}

export default App;