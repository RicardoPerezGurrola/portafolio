import React from 'react';
import TechBadge from '../ui/TechBadge';

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
      title: 'Integraciones API a SW Soft Restaurant',
      description: 'Se realizo una aplicacion que tuviera los detalles exactos de las ventas e insumos, ya sea por periodos o por mes, y que se pudiera ver en tiempo real, todo esto con una API Rest, realizada con node.js express, JS Vanilla y CSS Puro y la BD de Soft Restaurant, que esta con SQL Server',
      image: '/assets/images/Integraciones_API_SR.svg',
      technologies: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS', 'SQL Server'],
      githubUrl: 'https://github.com/username/project1',
      liveUrl: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: 'Control de botellas',
      description: 'Se realizo una aplicacion en la cual se pudiera llevar un control de el contenido y control de lotes de una variedad de botellas alcoholicas,sabiendo el numero de OZ, ML y % restantes de cada botela con un ID interno por cada botella para identifiarlas, asi como tambien el costo por OZ Y ML de cada una. Para el front se utilizo Java Script, HTML Y TAILWINDCSS en conjunto con la libteria Daisy UI para el diseño de la pagina Y para la parte de el bakend se utilizo Node.js con el framework de Express.js',
      image: '/images/project2.svg',
      technologies: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS', 'SQL Server', 'Tailwind CSS'],
      githubUrl: 'https://github.com/username/project2'
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
                  {/* AQUÍ ESTÁ EL CAMBIO PRINCIPAL */}
                  {project.technologies.map((tech, index) => (
                    <TechBadge key={index} technology={tech} />
                  ))}
                </div>
                <div className="project-links">
                  {/* ... (los enlaces se mantienen igual) ... */}
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