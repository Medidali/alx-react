// src/Notifications.js

import React from 'react';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications" style={{ border: '1px solid #ccc', padding: '10px', position: 'relative' }}>
      <button 
        style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none' }} 
        aria-label="Close" 
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="close icon" style={{ width: '20px', height: '20px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
