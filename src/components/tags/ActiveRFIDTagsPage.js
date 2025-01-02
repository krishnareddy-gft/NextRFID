import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TagsDetail.css';
import Breadcrumb from '../Breadcrumb';

function ActiveRFIDTagsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { label: 'RFID Tags', link: '/rfid-tags/overview' },
    { label: 'Active RFID Tags' }
  ];

  return (
    <div className="tags-detail-page">
      <Breadcrumb paths={breadcrumbPaths} />
      <div className="tags-detail-content">
        <h1 className="detail-title">Active RFID Tags</h1>
        
        <div className="tag-description">
          <p>
            Active RFID tags are battery-powered devices that continuously broadcast their own signal. 
            These sophisticated tags offer extended read ranges and enhanced capabilities for complex 
            tracking applications.
          </p>
        </div>

        <div className="specifications-grid">
          <div className="spec-card">
            <h3>Power Source</h3>
            <p>Internal battery with 3-5 years lifespan</p>
          </div>
          <div className="spec-card">
            <h3>Read Range</h3>
            <p>30-100 meters (100-300 feet)</p>
          </div>
          <div className="spec-card">
            <h3>Memory Capacity</h3>
            <p>Up to 128KB of read/write memory</p>
          </div>
          <div className="spec-card">
            <h3>Data Transfer Rate</h3>
            <p>16-128 Kbps</p>
          </div>
        </div>

        <div className="features-section">
          <h2>Advanced Capabilities</h2>
          <ul className="features-list">
            <li>Real-time location tracking</li>
            <li>Environmental monitoring (temperature, humidity)</li>
            <li>Sensor integration capabilities</li>
            <li>Continuous data transmission</li>
            <li>Complex data processing</li>
          </ul>
        </div>

        <div className="applications-section">
          <h2>Ideal Applications</h2>
          <ul className="applications-list">
            <li>Personnel tracking in large facilities</li>
            <li>High-value asset monitoring</li>
            <li>Container tracking in ports</li>
            <li>Vehicle fleet management</li>
            <li>Industrial automation systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActiveRFIDTagsPage; 