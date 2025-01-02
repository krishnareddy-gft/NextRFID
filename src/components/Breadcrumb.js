import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Breadcrumb.css';

function Breadcrumb({ paths }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {path.link ? (
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