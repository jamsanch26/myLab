/*
  File: services.jsx
  Student Name: Jamela Sanchez
  Student ID: 301340831
  Date: May 29, 2024
*/

export default function Services() {
  const frontEndSkills = [
    { skillName: "HTML", percentage: 90 },
    { skillName: "CSS", percentage: 50 },
    { skillName: "JavaScript", percentage: 80 }
  ];

  const backEndSkills = [
    { skillName: "Java", percentage: 80 },
    { skillName: "Python", percentage: 30 },
    { skillName: "C#", percentage: 90 }
  ];

  const databaseSkills = [
    { skillName: "MySQL", percentage: 80 },
    { skillName: "MongoDB", percentage: 60 },
    { skillName: "Oracle", percentage: 50 }
  ];

  const renderProgressBar = (percentage) => {
    const maxWidth = 150; // Set your desired maximum width for the progress bars
    const width = Math.min((percentage / 100) * maxWidth, maxWidth); // Limit width to maxWidth
    return (
      <div style={{ width: '100%', backgroundColor: '#ddd', textAlign: 'center', borderRadius: '5px', margin: '5px 0' }}>
        <div
          style={{
            width: `${width}px`, // Set width in pixels
            backgroundColor: '#4CAF50',
            height: '30px',
            lineHeight: '30px',
            color: 'white',
            borderRadius: '5px'
          }}
        >
          {`${percentage}%`}
        </div>
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px', padding: '20px' }}>

      <div>
        <h2>Front End</h2>
        {frontEndSkills.map(skill => (
          <div key={skill.skillName} style={{ marginBottom: '10px' }}>
            <p style={{ display: 'inline', margin: '0' }}>{skill.skillName}: </p>
            {renderProgressBar(skill.percentage)}
          </div>
        ))}
      </div>

      <div>
        <h2>Back End</h2>
        {backEndSkills.map(skill => (
          <div key={skill.skillName}>
            <p style={{ textAlign: 'left', display: 'inline-block', width: '100px', margin: '0' }}>{skill.skillName}: </p>
            {renderProgressBar(skill.percentage)}
          </div>
        ))}
      </div>

      <div>
        <h2>Databases</h2>
        {databaseSkills.map(skill => (
          <div key={skill.skillName}>
            <p style={{ textAlign: 'left', display: 'inline-block', width: '100px', margin: '0' }}>{skill.skillName}: </p>
            {renderProgressBar(skill.percentage)}
          </div>
        ))}
      </div>
    </div>
  );
}