import React from 'react';
import ecommerceImage from '../Images/ecommerce website.jpg';
import codeEditorImage from '../Images/code editor.jpg';
import dogApiImage from '../Images/dog api.jpg';
import weatherAppImage from '../Images/W.jpg';

const projectsData = [
  {
    imgSrc: ecommerceImage,
    projectName: "Ecommerce Website",
    projectDescription: "This is an ecommerce website. It is built using HTML, CSS and JavaScript.",
    githubLink: "https://github.com/Rishabh-prime/Ecommerce-Website"
  },
  {
    imgSrc: codeEditorImage,
    projectName: "Code Editor",
    projectDescription: "This is a code editor. It is built using HTML, CSS, JavaScript and React.js.",
    githubLink: "https://github.com/your-username/code-editor"
  },
  {
    imgSrc: dogApiImage,
    projectName: "Dog Breed Search",
    projectDescription: "This is a Dog Search website. It is built using HTML, CSS, JavaScript and using API.",
    githubLink: "https://github.com/Rishabh-prime/Dog-Breed-Image-Viewer"
  },
  {
    imgSrc: weatherAppImage,
    projectName: "Weather App",
    projectDescription: "This is a weather app. It is built using HTML, CSS, JavaScript and using API.",
    githubLink: "https://github.com/Rishabh-prime/Weather-APP"
  }
];

function Projects() {
  return (
    <>
    <h1 id="ph1"> Projects</h1>
    <section id="projects-section">
      {projectsData.map((project, index) => (
        <div key={index} className="project-container" onClick={() => window.location.href = project.githubLink}>
          <div className="project-image">
            <img src={project.imgSrc} alt={project.projectName} />
          </div>
          <div className="project-info">
            <h2 className="project-name">{project.projectName}</h2>
            <p className="project-description">{project.projectDescription}</p>
          </div>
        </div>
      ))}
    </section>
    </>
  );
}

export default Projects;
