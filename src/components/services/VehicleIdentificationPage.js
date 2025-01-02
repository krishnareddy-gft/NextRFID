import React, { useEffect } from 'react';
import '../../styles/ServicePage.css';
import Breadcrumb from '../Breadcrumb';
import vehicleIdImg from '../../assets/images/vehicle-identification.png';

function VehicleIdentificationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { label: 'Products', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Vehicle Identification' }
  ];

  return (
    <div className="service-page">
      <Breadcrumb paths={breadcrumbPaths} />
      <div className="service-content">
        <div className="service-info">
          <h1 className="service-title">Automated Vehicle Identification</h1>
          <div className="service-description">
            <p>
              Streamline vehicle access control and monitoring with our advanced RFID 
              identification systems. Perfect for parking facilities, fleet management, 
              and toll collection, our solutions offer seamless vehicle tracking and authentication.
            </p>
            <div className="features-benefits-container">
              <div className="service-features">
                <h2>Key Features</h2>
                <ul>
                  <li>Long-range vehicle detection</li>
                  <li>Multi-lane reading capability</li>
                  <li>High-speed identification</li>
                  <li>Weather-resistant equipment</li>
                  <li>Integration with access control</li>
                </ul>
              </div>
              <div className="service-benefits">
                <h2>Benefits</h2>
                <ul>
                  <li>Automated access control</li>
                  <li>Reduced traffic congestion</li>
                  <li>Enhanced security</li>
                  <li>Efficient fleet management</li>
                  <li>Contactless toll collection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="service-image">
          <img 
            src={vehicleIdImg}
            alt="Vehicle Identification System"
            className="service-img"
          />
        </div>
      </div>
    </div>
  );
}

export default VehicleIdentificationPage; 