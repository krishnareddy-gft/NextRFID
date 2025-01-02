import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RFIDTagsPage from './components/RFIDTagsPage';
import ServicesDropdown from './components/ServicesDropdown';
import AssetTrackingPage from './components/services/AssetTrackingPage';
import InventoryTrackingPage from './components/services/InventoryTrackingPage';
import VehicleIdentificationPage from './components/services/VehicleIdentificationPage';
import ActiveRFIDTagsPage from './components/tags/ActiveRFIDTagsPage';
import PassiveRFIDTagsPage from './components/tags/PassiveRFIDTagsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="main-nav">
            <div className="logo">
              <Link to="/">NextRFID</Link>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><ServicesDropdown /></li>
              <li><Link to="/technologies">Technologies</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <>
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
                    <Link to="/rfid-tags/overview" className="read-more-btn">
                      Learn More
                    </Link>
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
            </>
          } />
          <Route path="/rfid-tags/overview" element={<RFIDTagsPage />} />
          <Route path="/services/asset-tracking" element={<AssetTrackingPage />} />
          <Route path="/services/inventory-tracking" element={<InventoryTrackingPage />} />
          <Route path="/services/vehicle-identification" element={<VehicleIdentificationPage />} />
          <Route path="/technologies" element={<div>Technologies Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/rfid-tags/active" element={<ActiveRFIDTagsPage />} />
          <Route path="/rfid-tags/passive" element={<PassiveRFIDTagsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;