// src/data/technologyData.ts
import { SiReact, SiTypescript, SiCss3, SiJavascript, SiHtml5, SiNodedotjs, SiMongodb } from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface TechInfo {
  name: string;
  color: string;
  textColor: string;
  icon: IconType;
}

// Usamos un Map para un acceso rápido y eficiente.
// La clave debe ser el string exacto que usas en tu array de 'technologies', en minúsculas.
export const technologyMap = new Map<string, TechInfo>([
  ['react', {
    name: 'React',
    color: '#61DAFB',
    textColor: '#000000',
    icon: SiReact
  }],
  ['typescript', {
    name: 'TypeScript',
    color: '#3178C6',
    textColor: '#FFFFFF',
    icon: SiTypescript
  }],
  ['css', {
    name: 'CSS',
    color: '#1572B6',
    textColor: '#FFFFFF',
    icon: SiCss3
  }],
  ['javascript', {
    name: 'JavaScript',
    color: '#F7DF1E',
    textColor: '#000000',
    icon: SiJavascript
  }],
  ['html', {
    name: 'HTML',
    color: '#E34F26',
    textColor: '#FFFFFF',
    icon: SiHtml5
  }],
  ['node.js', {
    name: 'Node.js',
    color: '#339933',
    textColor: '#FFFFFF',
    icon: SiNodedotjs
  }],
  ['mongodb', {
    name: 'MongoDB',
    color: '#47A248',
    textColor: '#FFFFFF',
    icon: SiMongodb
  }]
]);