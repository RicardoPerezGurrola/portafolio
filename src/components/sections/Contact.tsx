import React, { useState, useRef } from 'react'; // 1. Importa useRef
import emailjs from '@emailjs/browser';       // 2. Importa la librería EmailJS

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const form = useRef<HTMLFormElement>(null); // 3. Crea una referencia para el formulario

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'richygunz88@gmail.com' },
    { icon: '📱', label: 'Teléfono', value: '+52 464 175 6034' },
    { icon: '📍', label: 'Ubicación', value: 'Irapuato GTO, México' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    if (form.current) {
      // 4. Lógica de envío real con EmailJS
      emailjs.sendForm(
        'PortafolioContacto',      // Pega tu Service ID de EmailJS
        'portafolio',     // Pega tu Template ID
        form.current,
        'gKQx2P0A0cXrN3JxU'       // Pega tu Public Key
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setSubmitStatus('success');
          setSubmitMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
          setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
      }, (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
            {/* 5. Añade la referencia "ref" a tu etiqueta de formulario */}
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
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