// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// Elimina las siguientes líneas que causan el error:
// import ProjectsPage from "./pages/ProjectsPage";
// import SkillsPage from "./pages/SkillsPage";
// import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL} 
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Si quieres que las secciones tengan sus propias páginas, asegúrate de que existan */}
        {/* <Route path="/proyectos" element={<ProjectsPage />} /> */}
        {/* <Route path="/habilidades" element={<SkillsPage />} /> */}
        {/* <Route path="/contacto" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;