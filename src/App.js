import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TagsDetail from './components/TagsDetail';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={
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
                <img 
                  src={`${process.env.PUBLIC_URL}/rfidimage.png`}
                  alt="RFID Technology Illustration" 
                />
              </div>
            </main>
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
                  <button 
                    className="read-more-btn"
                    onClick={() => {
                      const element = document.getElementById('tags-detail');
                      element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn More
                  </button>
                </div>
                
                <div className="product-card">
                  <h3 className="product-title">RFID Printer</h3>
                  <p className="product-description">
                    Industrial-grade RFID printers combining high-speed encoding with 
                    precise printing. Perfect for producing tagged labels and cards 
                    with exceptional accuracy.
                  </p>
                  <button className="read-more-btn">Learn More</button>
                </div>
              </div>
            </section>
            
            <section id="tags-detail" className="tags-detail-container">
              <div className="divider-line"></div>
              <div className="tags-split-screen">
                <TagsDetail />
              </div>
            </section>
          </div>
        } />
        <Route path="/tags-detail" element={<TagsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;