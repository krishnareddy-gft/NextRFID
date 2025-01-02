import React, { useEffect } from 'react';
import '../../styles/ServicePage.css';
import Breadcrumb from '../Breadcrumb';
import inventoryTrackingImg from '../../assets/images/inventory-tracking.png';

function InventoryTrackingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { label: 'Products', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Inventory Tracking' }
  ];

  return (
    <div className="service-page">
      <Breadcrumb paths={breadcrumbPaths} />
      <div className="service-content">
        <div className="service-info">
          <h1 className="service-title">Inventory Tracking Solutions</h1>
          <div className="service-description">
            <p>
              Transform your inventory management with our RFID-powered tracking solutions. 
              Get real-time visibility into your stock levels, automate counting processes, 
              and optimize your supply chain with precision and efficiency.
            </p>
            <div className="features-benefits-container">
              <div className="service-features">
                <h2>Key Features</h2>
                <ul>
                  <li>Real-time inventory visibility</li>
                  <li>Automated stock counting</li>
                  <li>Low stock alerts</li>
                  <li>Supply chain integration</li>
                  <li>Inventory optimization analytics</li>
                </ul>
              </div>
              <div className="service-benefits">
                <h2>Benefits</h2>
                <ul>
                  <li>Reduce stockouts and overstock</li>
                  <li>Minimize inventory shrinkage</li>
                  <li>Improve order accuracy</li>
                  <li>Streamline receiving process</li>
                  <li>Enhanced inventory turnover</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="service-image">
          <img 
            src={inventoryTrackingImg}
            alt="Inventory Tracking Solution"
            className="service-img"
          />
        </div>
      </div>
    </div>
  );
}

export default InventoryTrackingPage; 