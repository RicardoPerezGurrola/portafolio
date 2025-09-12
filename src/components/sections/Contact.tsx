import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'tu.email@ejemplo.com' },
    { icon: '📱', label: 'Teléfono', value: '+34 123 456 789' },
    { icon: '📍', label: 'Ubicación', value: 'Tu Ciudad, País' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');
    
    // Simulación de envío de formulario
    try {
      // Aquí normalmente enviarías los datos a un backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulación de respuesta exitosa
      setSubmitStatus('success');
      setSubmitMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
      
      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>Estoy disponible para trabajar en proyectos freelance y oportunidades a tiempo completo. Contáctame y hablemos sobre cómo puedo ayudarte.</p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div className="contact-item" key={index}>
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-text">
                    <h4>{info.label}</h4>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              
              {submitMessage && (
                <div className={`form-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;