import React from 'react';
import Layout from '../components/layout/Layout';
import Projects from '../components/sections/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <h1>Mis Proyectos</h1>
          <p>Explora algunos de los proyectos en los que he trabajado.</p>
        </div>
      </div>
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;