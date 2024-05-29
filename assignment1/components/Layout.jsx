/*
  File: Layout.jsx
  Student Name: Jamela Sanchez
  Student ID: 301340831
  Date: May 29, 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Import your custom logo component

export default function Layout() {
  return (
    <header style={{ textAlign: 'center', marginTop: '200px' }}>
      <Logo />
      <nav className="navbar">
        <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/project">Projects</Link> <Link to="/services">Services</Link> <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <hr />
    </header>
  );
}