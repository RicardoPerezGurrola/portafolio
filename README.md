# Mi Portafolio Personal - Ricardo Pérez Gurrola

[![React](https://skillicons.dev/icons?i=react)](https://es.react.dev/)
[![TypeScript](https://skillicons.dev/icons?i=ts)](https://www.typescriptlang.org/docs/)
[![Vite](https://skillicons.dev/icons?i=vite)](https://vitejs.dev/)
[![CSS3](https://skillicons.dev/icons?i=css)](https://developer.mozilla.org/es/docs/Web/CSS)
[![HTML5](https://skillicons.dev/icons?i=html)](https://developer.mozilla.org/es/docs/Web/HTML)

Este es el repositorio de mi portafolio personal, un proyecto construido desde cero para mostrar mis habilidades como Desarrollador Full-Stack, mis proyectos y mi experiencia en la creación de interfaces de usuario modernas y responsivas.



## 📜 Descripción

Este portafolio es una Single Page Application (SPA) desarrollada con React y TypeScript, diseñada para ofrecer una experiencia de usuario fluida y atractiva. La aplicación presenta una animación de escritura en la sección principal, tarjetas de proyecto dinámicas, y una visualización de habilidades con badges personalizadas que incluyen los logos y colores de cada tecnología.

## ✨ Características Principales

- **Animación de Escritura:** Efecto de tipeo dinámico en el título principal.
- **Componentes Reutilizables:** Creación de componentes modulares como `TechBadge` para una fácil escalabilidad.
- **Diseño Responsivo (Mobile-First):** La interfaz se adapta a cualquier tamaño de pantalla, desde móviles hasta escritorios.
- **Navegación Fluida:** Header fijo y scroll suave entre secciones.
- **Paleta de Colores Personalizada:** Un sistema de diseño basado en CSS Custom Properties (variables) para una fácil personalización y consistencia.
- **Iconos Dinámicos:** Integración con `react-icons` para mostrar logos de tecnologías de forma dinámica.

## 🛠️ Tech Stack (Tecnologías Utilizadas)

- **Frontend:** React, TypeScript, Vite
- **Enrutamiento:** React Router DOM v6
- **Estilos:** CSS puro con Custom Properties y enfoque Mobile-First.
- **Iconos:** React Icons

## 📂 Estructura de Carpetas

El proyecto sigue una estructura organizada para separar responsabilidades, facilitando el mantenimiento y la escalabilidad.

```
/
├── public/
│   └── images/           # Contiene todas las imágenes estáticas del proyecto
├── src/
│   ├── assets/
│   │   └── styles/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── pages/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## 🏛️ Arquitectura y Protocolos

### Arquitectura de Componentes
La aplicación está construida sobre una arquitectura de componentes basada en React. Se ha seguido un principio de separación de responsabilidades:
- **Componentes `Layout`:** Definen la estructura principal y persistente de la aplicación (Header, Footer).
- **Componentes `Page`:** Ensamblan diferentes componentes de sección para construir una vista completa.
- **Componentes `UI`:** Son los "ladrillos" más pequeños y reutilizables (`TechBadge`), diseñados para ser agnósticos a la lógica de negocio.

### Protocolo de Estilos (Styling)
- **Mobile-First:** Los estilos base están definidos para la experiencia móvil. Se utilizan `media queries` (`min-width`) para adaptar y mejorar la interfaz en pantallas más grandes (tablets y escritorio).
- **CSS Custom Properties:** Todo el sistema de colores se gestiona a través de variables CSS definidas en `:root`. Esto permite un theming rápido y asegura consistencia en todo el sitio.
- **Clases de Utilidad y Componentes:** Se utiliza un enfoque mixto, con clases de componentes específicas (`.project-card`) y clases de utilidad (`.container`).

## 🚀 Cómo Empezar

Para correr este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
   ```

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd tu-repositorio
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite indique).

---
Creado por **Ricardo Pérez Gurrola**.
