import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Cpu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const navBg = scrolled
    ? isDark
      ? 'bg-[#080b14]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl'
      : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                <Cpu size={18} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-sky-400 rounded-full pulse-dot" />
            </div>
            <div>
              <span className={`font-bold text-lg tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Alex<span className="gradient-text">Morgan</span>
              </span>
              <p className={`text-[10px] mono -mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                AI & Software Developer
              </p>
            </div>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-white bg-white/5'
                        : 'text-indigo-600 bg-indigo-50'
                      : isDark
                        ? 'text-slate-400 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`relative w-14 h-7 rounded-full border transition-all duration-300 flex items-center px-1 ${
                isDark
                  ? 'bg-indigo-500/20 border-indigo-500/40'
                  : 'bg-amber-100 border-amber-300'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                  isDark
                    ? 'translate-x-7 bg-indigo-500'
                    : 'translate-x-0 bg-amber-400'
                }`}
              >
                {isDark
                  ? <Moon size={11} className="text-white" />
                  : <Sun size={11} className="text-white" />
                }
              </span>
            </button>

            <a
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-sky-400 text-white rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200"
            >
              <Code2 size={14} />
              Hire Me
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 ${
                isDark
                  ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400'
                  : 'bg-amber-100 border-amber-300 text-amber-500'
              }`}
            >
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className={`p-2 transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`border-t px-6 py-4 flex flex-col gap-1 backdrop-blur-xl ${
          isDark
            ? 'bg-[#080b14]/95 border-white/5'
            : 'bg-white/95 border-slate-200'
        }`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? isDark
                      ? 'text-white bg-white/8 border border-indigo-500/30'
                      : 'text-indigo-600 bg-indigo-50 border border-indigo-200'
                    : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/contact"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-sky-400 text-white rounded-xl"
          >
            <Code2 size={14} />
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
