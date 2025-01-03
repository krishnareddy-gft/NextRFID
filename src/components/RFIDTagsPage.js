import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RFIDTagsPage.css';

function RFIDTagsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rfid-tags-page">
      <div className="tags-content">
        <h1 className="page-title">RFID Tags Overview</h1>
        
        <div className="tags-intro">
          <p className="intro-text">
            RFID (Radio-Frequency Identification) tags are smart labels that revolutionize 
            how we track and manage assets. These sophisticated devices combine wireless 
            technology with data storage to enable contactless identification and monitoring.
          </p>
        </div>

        <div className="tags-features">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Wireless Communication</h3>
              <p>Enables contactless data transmission using radio frequency technology</p>
            </div>
            <div className="feature-card">
              <h3>Data Storage</h3>
              <p>Store and update information directly on the tag</p>
            </div>
            <div className="feature-card">
              <h3>Durability</h3>
              <p>Designed to withstand various environmental conditions</p>
            </div>
            <div className="feature-card">
              <h3>Versatility</h3>
              <p>Available in multiple form factors for different applications</p>
            </div>
          </div>
        </div>

        <div className="tags-types">
          <h2 className="section-title">Types of RFID Tags</h2>
          <div className="types-container">
            <Link to="/rfid-tags/active" className="type-card">
              <h3>Active RFID Tags</h3>
              <p>Battery-powered tags with extended range and advanced capabilities</p>
              <span className="learn-more">View Specifications →</span>
            </Link>
            <Link to="/rfid-tags/passive" className="type-card">
              <h3>Passive RFID Tags</h3>
              <p>Cost-effective tags powered by reader energy</p>
              <span className="learn-more">View Specifications →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RFIDTagsPage; 