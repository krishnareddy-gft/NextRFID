import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TagsDetail.css';
import Breadcrumb from '../Breadcrumb';

function PassiveRFIDTagsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { label: 'RFID Tags', link: '/rfid-tags/overview' },
    { label: 'Passive RFID Tags' }
  ];

  return (
    <div className="tags-detail-page">
      <Breadcrumb paths={breadcrumbPaths} />
      <div className="tags-detail-content">
        <h1 className="detail-title">Passive RFID Tags</h1>
        
        <div className="tag-description">
          <p>
            Passive RFID tags operate without a battery, drawing power from the RFID reader's 
            electromagnetic field. These cost-effective tags are ideal for high-volume 
            tracking applications and inventory management.
          </p>
        </div>

        <div className="specifications-grid">
          <div className="spec-card">
            <h3>Power Source</h3>
            <p>Reader electromagnetic field</p>
          </div>
          <div className="spec-card">
            <h3>Read Range</h3>
            <p>10cm to 10 meters</p>
          </div>
          <div className="spec-card">
            <h3>Memory Capacity</h3>
            <p>96-512 bits of read/write memory</p>
          </div>
          <div className="spec-card">
            <h3>Data Transfer Rate</h3>
            <p>Up to 640 Kbps</p>
          </div>
        </div>

        <div className="features-section">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Maintenance-free operation</li>
            <li>Compact and lightweight design</li>
            <li>Long operational lifetime</li>
            <li>Cost-effective solution</li>
            <li>Various form factors available</li>
          </ul>
        </div>

        <div className="applications-section">
          <h2>Common Applications</h2>
          <ul className="applications-list">
            <li>Retail inventory management</li>
            <li>Supply chain tracking</li>
            <li>Access control cards</li>
            <li>Product authentication</li>
            <li>Library book management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PassiveRFIDTagsPage; 