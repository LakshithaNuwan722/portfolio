import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppShell() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen flex flex-col noise transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-[#080b14] text-slate-200'
        : 'bg-slate-50 text-slate-800'
    }`}>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </ThemeProvider>
  );
}
