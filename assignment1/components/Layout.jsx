import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Import your custom logo component

export default function Layout() {
  return (
    <>
      <header>
        <Logo />
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/project">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <hr />
    </>
  );
}