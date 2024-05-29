/*
  File: contact.jsx
  Student Name: Jamela Sanchez
  Student ID: 301340831
  Date: May 29, 2024
*/

import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Contact Number:', contactNumber);
  };

  return (
    <section style={{ width: '100%', textAlign: 'center', borderRadius: '5px', margin: '5px 0', padding: '20px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px', padding: '20px' }}>
      <h2>Let's Talk!</h2>
      <br />

      <form onSubmit={handleSubmit}>
        <div>
          <h4>Name</h4>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <h4>Email</h4>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <h4>Contact Number</h4>
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <img src="img8.png" alt="facebook" style={{ width: '40px', marginRight: '10px' }} />
        <img src="img7.png" alt="instagram" style={{ width: '40px', marginRight: '10px' }} />
        <img src="img6.png" alt="youtube" style={{ width: '60px', marginRight: '10px' }} />
      </div>

    </section>
  );
}
