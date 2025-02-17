import React from 'react';
import { Card } from 'primereact/card';

const HeaderAd = ({ adImage, adLink }) => {
  return (
    <div className="header-ad" style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f4f4f4' }}>
      <a href={adLink} target="_blank" rel="noopener noreferrer">
        <img src={adImage} alt="Advertisement" style={{ textAlign: 'center', height: 'auto' }} />
      </a>
    </div>
  );
};

export default HeaderAd;