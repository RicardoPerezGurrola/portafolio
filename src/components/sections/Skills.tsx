import React from 'react';
import TechBadge from '../ui/TechBadge'; // <-- 1. IMPORTA EL COMPONENTE

interface Skill {
  name: string;
  level: number; 
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon?: string;
}

const Skills: React.FC = () => {
  // Tus datos de habilidades se mantienen exactamente igual
  const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '💻', // Ícono de Laptop
    skills: [
      { name: 'HTML', level: 80, color: '#e34c26' },
      { name: 'CSS', level: 60, color: '#1572b6' },
      { name: 'JavaScript', level: 70, color: '#f7df1e' },
      { name: 'TypeScript', level: 70, color: '#3178c6' },
      { name: 'React', level: 50, color: '#61dafb' }
    ]
  },
  {
    title: 'Backend',
    icon: '☁️', // Ícono de Nube
    skills: [
      { name: 'Node.js', level: 50, color: '#339933' },
      { name: 'Express', level: 50, color: '#000000' },
      { name: 'MongoDB', level: 50, color: '#47a248' },
      { name: 'SQL', level: 70, color: '#4479a1' }
    ]
  },
  {
    title: 'Herramientas',
    icon: '🚀', // Ícono de Cohete
    skills: [
      { name: 'Git', level: 60, color: '#f05032' },
      { name: 'VS Code', level: 70, color: '#007acc' },
      { name: 'Vite', level: 50, color: '#646CFF' },
      { name: 'Figma', level: 30, color: '#f24e1e' },
      { name: 'Supabase', level: 20, color: '#3FCF8E' }

    ]
  }
];

  return (
    <section className="skills" id="habilidades">
      <div className="container">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div className="skill-category" key={categoryIndex}>
              <h3>{category.icon && <span className="category-icon">{category.icon}</span>} {category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      
                      {/* --- 2. REEMPLAZA EL SPAN POR EL COMPONENTE BADGE --- */}
                      <TechBadge technology={skill.name} />
                      
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color || 'var(--primary-color)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;