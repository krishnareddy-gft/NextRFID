import React from 'react';
import '../styles/TagsDetail.css';

function TagsDetail() {
  return (
    <div className="tags-detail-container">
      <div className="divider-line"></div>
      
      <div className="tags-split-screen">
        <div className="tags-left">
          <h2 className="tags-title">RFID Active Tags</h2>
          <div className="tags-table-container">
            <table className="tags-table">
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Read Range</td>
                  <td>30-100+ meters</td>
                </tr>
                <tr>
                  <td>Power Source</td>
                  <td>Internal Battery</td>
                </tr>
                <tr>
                  <td>Battery Life</td>
                  <td>3-5 years</td>
                </tr>
                <tr>
                  <td>Data Storage</td>
                  <td>128KB - 1MB</td>
                </tr>
                <tr>
                  <td>Signal Strength</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td>$20 - $100+</td>
                </tr>
                <tr>
                  <td>Best Use Cases</td>
                  <td>Vehicle tracking, Asset monitoring, Personnel tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="tags-right">
          <h2 className="tags-title">RFID Passive Tags</h2>
          <div className="tags-table-container">
            <table className="tags-table">
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Read Range</td>
                  <td>10cm - 10 meters</td>
                </tr>
                <tr>
                  <td>Power Source</td>
                  <td>RF Energy from Reader</td>
                </tr>
                <tr>
                  <td>Lifespan</td>
                  <td>10+ years</td>
                </tr>
                <tr>
                  <td>Data Storage</td>
                  <td>128 bytes - 8KB</td>
                </tr>
                <tr>
                  <td>Signal Strength</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td>$0.10 - $3</td>
                </tr>
                <tr>
                  <td>Best Use Cases</td>
                  <td>Inventory tracking, Access control, Supply chain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagsDetail; 