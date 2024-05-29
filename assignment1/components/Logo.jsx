/*
  File: Logo.jsx
  Student Name: Jamela Sanchez
  Student ID: 301340831
  Date: May 29, 2024
*/

import React from 'react';
import logoImage from './logo.png'; 

export default function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo" style={{ width: '400px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)' }} />
    </div>
  );
}