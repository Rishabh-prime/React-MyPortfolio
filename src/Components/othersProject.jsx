import React from 'react';


const otherProjectsData = [
  {
    ButtonName: "To Do List",
    description: "A simple to-do list application.",
    githubLink: "https://github.com/Rishabh-prime/Todo-Task"
  },
  {
    ButtonName: "Notes",
    description: "A web application for taking notes.",
    githubLink: "https://github.com/Rishabh-prime/Notes-Website-"
  },
  {
    ButtonName: "Movie Info",
    description: "A site to search for movie information.",
    githubLink: "https://github.com/Rishabh-prime/Movie-Information-Website"
  },
  {
    ButtonName: "To Do List (React)",
    description: "A to-do list application built with React.",
    githubLink: "https://github.com/Rishabh-prime/Todo-List-With-React-"
  },
  {
    ButtonName: "Keeper App (React)",
    description: "A note-taking application built with React.",
    githubLink: "https://github.com/Rishabh-prime/Keeper-APP"
  }
];

function OtherProjects() {
  return (
    <>
      <h1 id="oh1">Other Projects</h1>
      <section id="other-projects">
        <table id="other-projects-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {otherProjectsData.map((project, index) => (
              <tr key={index}>
                <td>{project.ButtonName}</td>
                <td>{project.description}</td>
                <td>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default OtherProjects;
