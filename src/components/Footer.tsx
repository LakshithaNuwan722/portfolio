import { Github, Linkedin, Twitter, Mail, Cpu, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:lakshithanuwan722@gmail.com', label: 'Email' },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDark ? 'border-white/5 bg-[#060912]' : 'border-slate-200 bg-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center">
              <Cpu size={15} className="text-white" />
            </div>
            <div>
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Lakshitha<span className="gradient-text">Wijekoon</span>
              </span>
              <p className={`text-[10px] mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>AI & Software Developer</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 ${
                  isDark
                    ? 'bg-white/5 border-white/8 text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm'
                }`}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className={`text-sm flex items-center gap-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Built with <Heart size={12} className="text-red-400 inline" /> © {new Date().getFullYear()} Lakshitha Wijekoon
          </p>
        </div>
      </div>
    </footer>
  );
}
