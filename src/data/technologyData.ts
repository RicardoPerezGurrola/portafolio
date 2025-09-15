// src/data/technologyData.ts
import { SiReact, SiTypescript, SiCss3, SiJavascript, SiHtml5, SiNodedotjs, SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiFigma, SiGit, SiWebpack } from 'react-icons/si';
import { DiMsqlServer, DiDatabase } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
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
  }],
  ['express', {
    name: 'Express.js',
    color: '#000000',      // Color oficial de Express
    textColor: '#FFFFFF',
    icon: SiExpress
  }],
  ['sql server', {
    name: 'SQL Server',
    color: '#CC2927',      // Color oficial de SQL Server
    textColor: '#FFFFFF',
    icon: DiMsqlServer
  }],
  ['mysql', {
    name: 'MySQL',
    color: '#4479A1',
    textColor: '#FFFFFF',
    icon: SiMysql
  }],
  ['tailwind css', {
    name: 'Tailwind CSS',
    color: '#06B6D4',      // Color oficial de Tailwind
    textColor: '#FFFFFF',
    icon: SiTailwindcss
  }],
  ['git', {
    name: 'Git',
    color: '#F05032',
    textColor: '#FFFFFF',
    icon: SiGit
  }],

  // --- ENTRADA CORREGIDA ---
  ['vs code', {
    name: 'VS Code',
    color: '#007ACC',
    textColor: '#FFFFFF',
    icon: VscCode // <-- 2. ICONO CORRECTO
  }],
  // -------------------------

  ['webpack', {
    name: 'Webpack',
    color: '#8DD6F9',
    textColor: '#000000',
    icon: SiWebpack
  }],
  ['figma', {
    name: 'Figma',
    color: '#F24E1E',
    textColor: '#FFFFFF',
    icon: SiFigma
  }],
  ['sql', {
    name: 'SQL',
    color: '#4479A1',
    textColor: '#FFFFFF',
    icon: DiDatabase
  }],
]);