import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import '../../styles/TagsDetail.css';

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
            Active RFID tags are battery-powered tags that continuously broadcast their own signal. 
            These sophisticated devices offer extended read ranges and enhanced data transmission capabilities, 
            making them ideal for real-time tracking applications in large-scale environments. 
            Their ability to initiate communication and store larger amounts of data makes them 
            perfect for complex asset management systems and applications requiring real-time visibility.
          </p>
        </div>

        <div className="specs-table">
          <table>
            <thead>
              <tr>
                <th>Specification</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Power Source</td>
                <td>Internal battery (3-5 years typical lifespan)</td>
              </tr>
              <tr>
                <td>Read Range</td>
                <td>30-100+ meters (depending on environment)</td>
              </tr>
              <tr>
                <td>Memory Capacity</td>
                <td>32KB - 128KB</td>
              </tr>
              <tr>
                <td>Data Transfer Rate</td>
                <td>Up to 128 Kbps</td>
              </tr>
              <tr>
                <td>Operating Frequency</td>
                <td>433 MHz, 915 MHz, 2.4 GHz</td>
              </tr>
              <tr>
                <td>Operating Temperature</td>
                <td>-40°C to +85°C</td>
              </tr>
              <tr>
                <td>Communication Type</td>
                <td>Autonomous signal transmission</td>
              </tr>
              <tr>
                <td>Sensor Integration</td>
                <td>Temperature, humidity, motion, GPS</td>
              </tr>
              <tr>
                <td>Data Collection</td>
                <td>Real-time, continuous</td>
              </tr>
              <tr>
                <td>Environmental Rating</td>
                <td>IP67/IP68 available</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="detailed-info">
          <h2>Key Advantages</h2>
          <p>
            Active RFID tags excel in applications requiring real-time location tracking and 
            monitoring. Their autonomous broadcasting capability enables continuous asset visibility, 
            while their extended memory capacity supports rich data storage for complex tracking needs. 
            The integration of sensors allows for environmental monitoring, making them invaluable in 
            cold chain logistics and sensitive asset management.
          </p>

          <h2>Common Applications</h2>
          <p>
            These tags are extensively used in:
            • Container tracking in ports and logistics
            • Vehicle tracking in large manufacturing facilities
            • Personnel safety monitoring in hazardous environments
            • High-value asset tracking in healthcare
            • Temperature-sensitive cargo monitoring
            • Access control in secure facilities
          </p>

          <h2>Implementation Considerations</h2>
          <p>
            When implementing active RFID systems, consider:
            • Battery life management and replacement strategy
            • Total cost of ownership including maintenance
            • Infrastructure requirements for readers
            • Data management and system integration
            • Environmental factors affecting signal propagation
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActiveRFIDTagsPage; 