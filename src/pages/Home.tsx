import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Download, Github, Linkedin, Twitter,
  Sparkles, Brain, Code2, Layers, Zap, Star, ChevronDown
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import photo from '../assets/my-photo.png';

const roles = [
  'AI Engineer',
  'ML Researcher',
  'Full-Stack Developer',
  'LLM Specialist',
  'Software Architect',
];

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '2+', label: 'AI Models Built' },
  { value: '99%', label: 'Client Satisfaction' },
];

const techBadges = [
  { label: 'Python', color: 'dark:text-yellow-400 dark:bg-yellow-400/10 dark:border-yellow-400/20 text-yellow-600 bg-yellow-50 border-yellow-200' },
  { label: 'TypeScript', color: 'dark:text-sky-400 dark:bg-sky-400/10 dark:border-sky-400/20 text-sky-600 bg-sky-50 border-sky-200' },
  { label: 'PyTorch', color: 'dark:text-orange-400 dark:bg-orange-400/10 dark:border-orange-400/20 text-orange-600 bg-orange-50 border-orange-200' },
  { label: 'React', color: 'dark:text-cyan-400 dark:bg-cyan-400/10 dark:border-cyan-400/20 text-cyan-600 bg-cyan-50 border-cyan-200' },
  { label: 'LangChain', color: 'dark:text-green-400 dark:bg-green-400/10 dark:border-green-400/20 text-green-600 bg-green-50 border-green-200' },
  { label: 'Next.js', color: 'dark:text-white dark:bg-white/10 dark:border-white/20 text-slate-700 bg-slate-100 border-slate-200' },
];

const featuredProjects = [
  {
    icon: Brain,
    title: 'QueryMind: Natural Language to SQL Engine',
    desc: 'Experimented with fine-tuning a LLaMA 3.2 3B model to explore Natural Language to SQL (NL2SQL) translation.',
    tags: ['Python', 'PyTorch', 'HuggingFace', 'FastAPI', 'Gradio'],
    gradient: 'from-indigo-500/20 to-violet-500/20',
    accent: 'border-indigo-500/30',
    lightAccent: 'border-indigo-200',
    lightGradient: 'from-indigo-50 to-violet-50',
  },
  {
    icon: Layers,
    title: 'VisionAI Studio',
    desc: 'Computer vision SaaS for automated image analysis, object detection, and medical imaging.',
    tags: ['PyTorch', 'YOLO', 'React', 'AWS'],
    gradient: 'from-sky-500/20 to-blue-500/20',
    accent: 'border-sky-500/30',
    lightAccent: 'border-sky-200',
    lightGradient: 'from-sky-50 to-blue-50',
  },
  {
    icon: Zap,
    title: 'AutoCode Agent',
    desc: 'AI-powered coding assistant that generates, reviews, and refactors code using multi-agent workflows.',
    tags: ['GPT-4', 'Agents', 'TypeScript', 'Node.js'],
    gradient: 'from-violet-500/20 to-pink-500/20',
    accent: 'border-violet-500/30',
    lightAccent: 'border-violet-200',
    lightGradient: 'from-violet-50 to-pink-50',
  },
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="cursor text-indigo-400">|</span>
    </span>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] blob pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-[100px] blob pointer-events-none" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-8">
                <Sparkles size={14} />
                Available for new opportunities
                <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4">
                <span className={isDark ? 'text-white' : 'text-slate-900'}>Hi, I'm{' '}</span>
                <span className="gradient-text glow-text">Lakshitha Wijekoon</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-bold mb-6 h-10">
                <TypingText />
              </h2>

              <p className={`text-lg leading-relaxed mb-8 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                I build intelligent systems and scalable software — from cutting-edge LLM applications
                and computer vision pipelines to beautiful full-stack products. Turning complex AI
                research into real-world solutions is my passion.
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {techBadges.map(({ label }) => (
                  <span
                    key={label}
                    className={`mono text-xs px-3 py-1.5 rounded-lg border font-medium transition-all duration-200 ${
                      isDark
                        ? 'text-slate-300 bg-white/5 border-white/10 hover:border-indigo-500/30 hover:text-white'
                        : 'text-slate-600 bg-white border-slate-200 hover:border-indigo-300 hover:text-indigo-600 shadow-sm'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-sky-400 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#"
                  className={`flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all duration-200 border ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 mt-8">
                <span className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Follow me:</span>
                {[
                  { icon: Github, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 border ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30'
                        : 'bg-white border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm'
                    }`}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Visual */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative">
                <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]">
                  {/* Orbit rings */}
                  <div className="absolute inset-0 rounded-full border border-indigo-500/20" />
                  <div className="absolute inset-[-30px] rounded-full border border-indigo-500/10" />
                  <div className="absolute inset-[-60px] rounded-full border border-indigo-500/5" />

                  {/* Orbiting icons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit">
                        <span className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
                          <Brain size={18} className="text-indigo-400" />
                        </span>
                      </span>
                      <span className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 orbit-2">
                        <span className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
                          <Code2 size={18} className="text-sky-400" />
                        </span>
                      </span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 orbit-3">
                        <span className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
                          <Zap size={18} className="text-violet-400" />
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Profile image */}
                  <div className={`absolute inset-[30px] rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-2xl shadow-indigo-500/20 float-anim`}>
                    <img 
                      src={photo} 
                      alt="my photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Status badge */}
                  <div className={`absolute bottom-4 right-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-green-500 font-medium backdrop-blur-sm shadow-lg border ${
                    isDark ? 'bg-[#080b14]/90 border-green-500/30' : 'bg-white/90 border-green-200'
                  }`}>
                    <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
                    Open to Work
                  </div>

                  {/* Rating badge */}
                  <div className={`absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-yellow-500 font-medium backdrop-blur-sm shadow-lg border ${
                    isDark ? 'bg-[#080b14]/90 border-yellow-500/30' : 'bg-white/90 border-yellow-200'
                  }`}>
                    <Star size={11} fill="currentColor" />
                    Top Rated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          <span className="text-xs">Scroll to explore</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* Stats */}
      <section className={`py-20 border-y transition-colors duration-300 ${isDark ? 'border-white/5' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center group">
                <p className="text-5xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {value}
                </p>
                <p className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mono text-indigo-400 text-sm mb-3">// featured_work</p>
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            A selection of AI and software projects I've built that solve real problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map(({ icon: Icon, title, desc, tags, gradient, accent, lightAccent, lightGradient }) => (
            <div
              key={title}
              className={`card-hover rounded-2xl border p-6 relative overflow-hidden group transition-all duration-300 ${
                isDark
                  ? `${accent} bg-gradient-to-br ${gradient} bg-[#0d1117]/60 backdrop-blur-sm`
                  : `${lightAccent} bg-gradient-to-br ${lightGradient} bg-white shadow-sm`
              }`}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${
                  isDark ? 'bg-white/8 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <Icon size={22} className="text-indigo-500" />
                </div>
                <h3 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className={`mono text-xs px-2 py-1 rounded-lg border ${
                      isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-white border-slate-200 text-slate-500 shadow-sm'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-200 ${
              isDark
                ? 'border-white/10 text-slate-300 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/10'
                : 'border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 shadow-sm'
            }`}
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className={`relative rounded-3xl overflow-hidden border p-12 text-center glow-indigo ${
          isDark
            ? 'bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-sky-500/20 border-indigo-500/20'
            : 'bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50 border-indigo-200 shadow-lg'
        }`}>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="relative z-10">
            <Sparkles size={32} className="text-indigo-500 mx-auto mb-4" />
            <h2 className={`text-3xl lg:text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Let's Build Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className={`text-lg mb-8 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Whether it's an AI-powered product, a scalable backend, or a beautiful interface — I'm here to make it happen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-sky-400 text-white font-bold rounded-xl hover:opacity-90 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
