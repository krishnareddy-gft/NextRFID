import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesDropdown.css';

function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="services-dropdown" ref={dropdownRef}>
      <button className="dropdown-trigger" onClick={toggleDropdown}>
        Services <span style={{ marginLeft: '4px', fontSize: '0.8em' }}>{isOpen ? '▼' : '▶'}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/services/asset-tracking" onClick={closeDropdown}>
            Asset Tracking
          </Link>
          <Link to="/services/inventory-tracking" onClick={closeDropdown}>
            Inventory Tracking
          </Link>
          <Link to="/services/vehicle-identification" onClick={closeDropdown}>
            Automated Vehicle Identification
          </Link>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown; 