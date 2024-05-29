/*
  File: about.jsx
  Student Name: Jamela Sanchez
  Student ID: 301340831
  Date: May 29, 2024
*/

export default function About() {
  return (
    
    <div style={{ textAlign: 'center', color: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  textAlign: 'center', borderRadius: '5px', margin: '5px 0', padding: '20px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px',  padding: '20px' }}>
      <img src="src\img1.png" alt="Jamela Sanchez" style={{ width: '25%', borderRadius: '50%', marginRight: '20px', border: '3px solid #242424'}} />
      <div style={{ fontFamily: 'Verdana', textAlign: 'left', float: 'left', maxWidth: '50%', margin: '0 20px' }}>
        <h1>
          About Me
        </h1>
        <p>
          Howdydo. Welcome to my virtual space! Obsessed with exploring the world and meeting new people? Here's a
          photograph that gives you a glimpse of who I am as a person. This page will give you a different idea of
          my personality, favorites, hobbies, interests, and passions.
        </p><br/>
        <p>
          I'm Jamela Sanchez, an international student at Centennial College majoring in Software Engineering
          Technician. Join me on this virtual journey as we explore my favorite activities and get a glimpse of my
          different interests in life.
        </p>
      </div>
    </div>
  );
}