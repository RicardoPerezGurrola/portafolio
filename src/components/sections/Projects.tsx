import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  // Datos de ejemplo para proyectos
  const projects: Project[] = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1. Aquí puedes explicar de qué trata el proyecto y cuál fue tu contribución.',
      image: '/images/project1.svg',
      technologies: ['React', 'TypeScript', 'CSS'],
      githubUrl: 'https://github.com/username/project1',
      liveUrl: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2. Destaca las características principales y los desafíos que superaste.',
      image: '/images/project2.svg',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/username/project2'
    },
    {
      id: 3,
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3. Menciona las tecnologías utilizadas y el propósito del proyecto.',
      image: '/images/project3.svg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/username/project3',
      liveUrl: 'https://project3-demo.com'
    }
  ];

  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;