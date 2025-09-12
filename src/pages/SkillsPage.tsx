import React from 'react';
import Layout from '../components/layout/Layout';
import Skills from '../components/sections/Skills';

const SkillsPage: React.FC = () => {
  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <h1>Mis Habilidades</h1>
          <p>Conoce las tecnologías y herramientas con las que trabajo.</p>
        </div>
      </div>
      <Skills />
    </Layout>
  );
};

export default SkillsPage;