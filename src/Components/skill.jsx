import React from 'react';


const skillsData = [
  {
    name: "HTML",
    description: "Hypertext Markup Language",
  },
  {
    name: "CSS",
    description: "Cascading Style Sheets",
  },
  {
    name: "JavaScript",
    description: "High-level programming language",
  },
  {
    name: "jQuery",
    description: "JavaScript library for DOM manipulation",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    name: "Express.js",
    description: "Web application framework for Node.js",
  },
  {
    name: "React.js",
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "Bootstrap",
    description: "Front-end framework for developing responsive projects",
  }
];

function Skills() {
  return (
    <>
     <h1 id="sh1">Skills</h1>
      <section id="skills-section">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-container">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-description">{skill.description}</div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Skills;
