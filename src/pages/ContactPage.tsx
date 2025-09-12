import React from 'react';
import Layout from '../components/layout/Layout';
import Contact from '../components/sections/Contact';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <h1>Contacto</h1>
          <p>¿Tienes alguna pregunta o propuesta? ¡Contáctame!</p>
        </div>
      </div>
      <Contact />
    </Layout>
  );
};

export default ContactPage;