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
      { name: 'HTML', level: 90, color: '#e34c26' },
      { name: 'CSS', level: 85, color: '#1572b6' },
      { name: 'JavaScript', level: 80, color: '#f7df1e' },
      { name: 'TypeScript', level: 75, color: '#3178c6' },
      { name: 'React', level: 70, color: '#61dafb' }
    ]
  },
  {
    title: 'Backend',
    icon: '☁️', // Ícono de Nube
    skills: [
      { name: 'Node.js', level: 65, color: '#339933' },
      { name: 'Express', level: 60, color: '#000000' },
      { name: 'MongoDB', level: 55, color: '#47a248' },
      { name: 'SQL', level: 50, color: '#4479a1' }
    ]
  },
  {
    title: 'Herramientas',
    icon: '🚀', // Ícono de Cohete
    skills: [
      { name: 'Git', level: 85, color: '#f05032' },
      { name: 'VS Code', level: 90, color: '#007acc' },
      { name: 'Webpack', level: 60, color: '#8dd6f9' },
      { name: 'Figma', level: 50, color: '#f24e1e' }
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