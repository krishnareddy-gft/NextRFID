import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Breadcrumb.css';

// SVG Icons as components
const AssetTrackingIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const InventoryTrackingIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5V8h14v10zm-2-8H7v2h10V10zm0 3H7v2h10v-2z"/>
  </svg>
);

const VehicleIdIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
    <circle cx="7.5" cy="14.5" r="1.5"/>
    <circle cx="16.5" cy="14.5" r="1.5"/>
  </svg>
);

function Breadcrumb({ paths }) {
  const serviceLinks = [
    { 
      label: 'Asset Tracking', 
      link: '/services/asset-tracking',
      icon: AssetTrackingIcon
    },
    { 
      label: 'Inventory Tracking', 
      link: '/services/inventory-tracking',
      icon: InventoryTrackingIcon
    },
    { 
      label: 'Vehicle Identification', 
      link: '/services/vehicle-identification',
      icon: VehicleIdIcon
    }
  ];

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {path.label === 'Services' ? (
            <>
              <span className="breadcrumb-item">
                <span className="separator">›</span>
                {path.label}
              </span>
              <div className="breadcrumb-services-list">
                {serviceLinks.map((service, idx) => (
                  <Link key={idx} to={service.link} className="service-link">
                    <service.icon />
                    <span className="separator">›</span>
                    {service.label}
                  </Link>
                ))}
              </div>
            </>
          ) : path.link ? (
            <Link to={path.link}>
              <span className="separator">›</span>
              {path.label}
            </Link>
          ) : (
            <span className="current">
              <span className="separator">›</span>
              {path.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Breadcrumb; 