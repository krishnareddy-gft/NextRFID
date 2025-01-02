import React, { useEffect } from 'react';
import '../../styles/ServicePage.css';

function AssetTrackingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <div className="service-content">
        <div className="service-info">
          <h1 className="service-title">Asset Tracking Solutions</h1>
          <div className="service-description">
            <p>
              Our RFID-based asset tracking solutions provide real-time visibility 
              and control over your valuable assets. Track location, monitor usage, 
              and maintain accurate inventory records with our advanced tracking system.
            </p>
            <div className="features-benefits-container">
              <div className="service-features">
                <h2>Key Features</h2>
                <ul>
                  <li>Real-time asset location tracking</li>
                  <li>Automated inventory management</li>
                  <li>Maintenance scheduling and alerts</li>
                  <li>Custom reporting and analytics</li>
                  <li>Mobile accessibility</li>
                </ul>
              </div>
              <div className="service-benefits">
                <h2>Benefits</h2>
                <ul>
                  <li>Reduce asset loss and theft</li>
                  <li>Improve operational efficiency</li>
                  <li>Optimize asset utilization</li>
                  <li>Lower operational costs</li>
                  <li>Enhanced security and compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="service-image">
          <div className="placeholder-image">Asset Tracking</div>
        </div>
      </div>
    </div>
  );
}

export default AssetTrackingPage; 