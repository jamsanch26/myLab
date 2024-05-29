/*
  File: project.jsx
  Student Name: Jamela Sanchez
  Student ID: 301340831
  Date: May 29, 2024
*/

export default function Project() {

  const projects = [
    {
      title: "Planner Apps",
      subTitle: "Project 1",
      description: "A straightforward to-do list app available on various platforms. It’s ideal for basic task management and collaboration.",
      image: "img3.jpg"
    },
    {
      title: "Time Management Apps",
      subTitle: "Project 2",
      description: "A versatile task manager with reminders and collaboration features.",
      image: "img4.jpg"
    },
    {
      title: "Project Management Tools",
      subTitle: "Project 3",
      description: "A versatile workspace for notes, tasks, and databases.",
      image: "img5.jpg"
    }
  ];

  return (
    <div>
      {projects.map(project => (
        <div key={project.title} style={{ width: '100%', textAlign: 'center', borderRadius: '5px', margin: '5px 0', padding: '20px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px',  padding: '20px'}}>
          <h3>{project.title}</h3>
          <h4>{project.subTitle}</h4>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} style={{ maxWidth: '50%', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
}
