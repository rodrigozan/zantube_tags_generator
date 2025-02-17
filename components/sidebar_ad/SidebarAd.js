import React from 'react';
import { Card } from 'primereact/card';

const SidebarAd = ({ adImage, adLink }) => {
  return (
    <div className="sidebar-ad" style={{ width: '200px', margin: '10px', textAlign: 'center' }}>
      <a href={adLink} target="_blank" rel="noopener noreferrer">
        <img src={adImage} alt="Advertisement" style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
  );
};

export default SidebarAd;