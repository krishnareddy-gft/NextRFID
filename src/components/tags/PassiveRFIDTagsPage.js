import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import '../../styles/TagsDetail.css';

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
            Passive RFID tags represent the most widely deployed RFID technology, operating without 
            an internal power source. These tags harvest energy from the reader's electromagnetic field, 
            making them cost-effective and maintenance-free. Their simplicity and reliability make them 
            the preferred choice for inventory management, retail, and supply chain applications.
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
                <td>RF energy from reader</td>
              </tr>
              <tr>
                <td>Read Range</td>
                <td>Near Field: 1-10cm<br/>Far Field: Up to 10m</td>
              </tr>
              <tr>
                <td>Memory Capacity</td>
                <td>96-512 bits EPC<br/>Up to 64KB User Memory</td>
              </tr>
              <tr>
                <td>Data Transfer Rate</td>
                <td>40-640 Kbps</td>
              </tr>
              <tr>
                <td>Operating Frequency</td>
                <td>LF: 125-134 KHz<br/>HF: 13.56 MHz<br/>UHF: 860-960 MHz</td>
              </tr>
              <tr>
                <td>Operating Temperature</td>
                <td>-40°C to +65°C (standard)<br/>Up to +225°C (special versions)</td>
              </tr>
              <tr>
                <td>Lifespan</td>
                <td>Virtually unlimited</td>
              </tr>
              <tr>
                <td>Form Factors</td>
                <td>Labels, cards, hard tags, metal mount</td>
              </tr>
              <tr>
                <td>Standards</td>
                <td>ISO 18000-6C (UHF)<br/>ISO 14443 (HF)<br/>ISO 15693 (HF)</td>
              </tr>
              <tr>
                <td>Cost Range</td>
                <td>$0.05 - $5.00 depending on specifications</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="detailed-info">
          <h2>Technology Overview</h2>
          <p>
            Passive RFID technology operates on the principle of electromagnetic induction or 
            backscatter coupling. When within range of a reader, these tags convert the incoming 
            RF energy into DC power, enabling them to activate their internal circuitry and 
            respond with their stored data. This elegant solution eliminates the need for 
            maintenance while providing reliable identification capabilities.
          </p>

          <h2>Frequency Bands and Applications</h2>
          <p>
            • Low Frequency (LF): Ideal for access control and animal identification
            • High Frequency (HF): Commonly used in payment cards and library systems
            • Ultra-High Frequency (UHF): Preferred for supply chain and retail inventory
            Each frequency band offers specific advantages in terms of read range, material 
            penetration, and data transfer rates.
          </p>

          <h2>Implementation Considerations</h2>
          <p>
            When deploying passive RFID systems, consider:
            • Environmental factors affecting read range
            • Tag placement and orientation
            • Reader infrastructure requirements
            • Material interference and mounting surfaces
            • Data security and privacy requirements
            • Integration with existing systems
          </p>
        </div>
      </div>
    </div>
  );
}

export default PassiveRFIDTagsPage; 