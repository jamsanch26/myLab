import React from 'react';
import logoImage from './logo.png'; // Import your logo image file

export default function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo" style={{ width: '400px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)' }}/>
    </div>
  );
}