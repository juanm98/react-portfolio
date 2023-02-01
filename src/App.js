import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'


function App() {
  return (
    <NavBar>
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </NavBar>
  );
}

export default App;
