import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Páginas
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/habilidades" element={<SkillsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
