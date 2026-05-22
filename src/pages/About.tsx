import { Link } from 'react-router-dom';
import {
  ArrowRight, Download, Brain, Code2, Cpu, GraduationCap,
  Briefcase, MapPin, Calendar, Award, Users, Globe
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const timeline = [
  {
    year: '2024 – Present',
    role: 'Senior AI Engineer',
    company: 'TechNova AI Labs',
    desc: 'Leading the development of enterprise LLM solutions, RAG pipelines, and multi-modal AI systems serving 500K+ users.',
    type: 'work',
  },
  {
    year: '2022 – 2024',
    role: 'ML Research Engineer',
    company: 'DeepMind Startup Studio',
    desc: 'Built and trained transformer models for NLP tasks. Published 3 papers on efficient fine-tuning techniques.',
    type: 'work',
  },
  {
    year: '2021 – 2022',
    role: 'Full-Stack Developer',
    company: 'Freelance & Startups',
    desc: 'Delivered 20+ web applications for startups using React, Node.js, and cloud infrastructure.',
    type: 'work',
  },
  {
    year: '2017 – 2021',
    role: 'BSc Computer Science (AI Specialisation)',
    company: 'MIT — Massachusetts Institute of Technology',
    desc: 'Graduated Summa Cum Laude. Thesis on "Efficient Transformer Architectures for Edge Deployment". GPA: 4.0/4.0',
    type: 'edu',
  },
];

const values = [
  { icon: Brain, title: 'AI-First Thinking', desc: 'Every problem is approached through the lens of what AI can do to solve it smarter and faster.' },
  { icon: Code2, title: 'Clean Code', desc: "Writing maintainable, well-documented code is not optional — it's a core part of every project." },
  { icon: Users, title: 'Human-Centered', desc: 'Technology should serve people. UX and empathy drive my product decisions.' },
  { icon: Globe, title: 'Open Source', desc: 'I contribute back to the community. Several of my tools are used by thousands of developers.' },
];

const awards = [
  { icon: Award, title: 'Best AI Innovation', org: 'TechCrunch Disrupt 2023' },
  { icon: Award, title: 'Top 1% Contributor', org: 'Hugging Face Community' },
  { icon: Award, title: 'Kaggle Competitions Master', org: 'Kaggle 2022' },
  { icon: Award, title: 'Open Source Award', org: 'GitHub Universe 2023' },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cardClass = isDark
    ? 'bg-gradient-card border border-white/8 rounded-2xl'
    : 'bg-white border border-slate-200 rounded-2xl shadow-sm';

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <p className="mono text-indigo-400 text-sm mb-3">// about_me</p>
            <h1 className={`text-5xl lg:text-6xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              The Story <span className="gradient-text">Behind</span> the Code
            </h1>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              I'm <strong className={isDark ? 'text-white' : 'text-slate-900'}>Lakshitha Wijekoon</strong>, an AI & Software Developer with 5+ years of experience
              building intelligent systems that solve real-world problems. My journey started with a deep curiosity
              for how machines learn, and it's evolved into a career at the intersection of cutting-edge AI research
              and production-grade software engineering.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Today, I specialize in Large Language Models, computer vision, and full-stack development —
              helping companies transform AI capabilities into tangible products.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <MapPin size={14} className="text-indigo-400" />
                San Francisco, CA
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Briefcase size={14} className="text-sky-400" />
                Open to Remote
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
                Available Now
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-sky-400 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200"
              >
                Let's Talk <ArrowRight size={16} />
              </Link>
              <a
                href="#"
                className={`flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl border transition-all duration-200 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </div>

          {/* Profile card */}
          <div className="flex justify-center">
            <div className="relative">
              <div className={`w-72 h-80 rounded-3xl overflow-hidden border shadow-2xl shadow-indigo-500/20 relative ${
                isDark ? 'border-indigo-500/30' : 'border-indigo-200'
              }`}>
                <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-slate-800 to-sky-900 flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute top-8 left-8 w-24 h-24 bg-indigo-500/30 rounded-full blur-3xl" />
                  <div className="absolute bottom-8 right-8 w-28 h-28 bg-sky-500/30 rounded-full blur-3xl" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-400/60 to-sky-400/60 border-2 border-white/20 mb-3 flex items-center justify-center">
                      <span className="text-5xl font-black text-white/80">AM</span>
                    </div>
                    <p className="text-white font-bold text-lg">Lakshitha Wijekoon</p>
                    <p className="text-indigo-400 text-sm mono">AI & Software Developer</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/40 to-transparent" />
                </div>
              </div>

              {/* Floating cards */}
              <div className={`absolute -left-12 top-8 border rounded-2xl p-4 backdrop-blur-sm shadow-xl ${
                isDark ? 'bg-[#0d1117]/90 border-white/10' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <GraduationCap size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>MIT Graduate</p>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Computer Science</p>
                  </div>
                </div>
              </div>

              <div className={`absolute -right-12 bottom-12 border rounded-2xl p-4 backdrop-blur-sm shadow-xl ${
                isDark ? 'bg-[#0d1117]/90 border-white/10' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
                    <Cpu size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>5+ Years</p>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>AI Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <p className="mono text-sky-400 text-sm mb-3">// core_values</p>
            <h2 className={`text-3xl lg:text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              What I <span className="gradient-text">Believe In</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={`card-hover p-6 group ${cardClass}`}>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center mb-4 group-hover:bg-indigo-500/25 transition-colors">
                  <Icon size={22} className="text-indigo-400" />
                </div>
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <p className="mono text-violet-400 text-sm mb-3">// experience_&_education</p>
            <h2 className={`text-3xl lg:text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              My <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-sky-500/30 to-transparent" />

            {timeline.map(({ year, role, company, desc, type }, i) => (
              <div key={i} className="relative pl-20 mb-10 last:mb-0 group">
                <div className={`absolute left-[26px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  type === 'work'
                    ? 'border-indigo-500 bg-indigo-500/20'
                    : 'border-sky-500 bg-sky-500/20'
                }`}>
                  {type === 'work'
                    ? <Briefcase size={9} className="text-indigo-400" />
                    : <GraduationCap size={9} className="text-sky-400" />
                  }
                </div>

                <div className={`card-hover p-6 ${cardClass}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`flex items-center gap-1.5 text-xs mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      <Calendar size={11} />
                      {year}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-lg border font-medium ${
                      type === 'work'
                        ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
                        : 'text-sky-400 bg-sky-500/10 border-sky-500/20'
                    }`}>
                      {type === 'work' ? 'Work' : 'Education'}
                    </span>
                  </div>
                  <h3 className={`font-bold text-lg mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{role}</h3>
                  <p className="text-indigo-400 text-sm font-medium mb-3">{company}</p>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <div className="text-center mb-12">
            <p className="mono text-green-400 text-sm mb-3">// recognition</p>
            <h2 className={`text-3xl lg:text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map(({ icon: Icon, title, org }) => (
              <div
                key={title}
                className={`card-hover p-5 flex items-center gap-4 rounded-2xl border ${
                  isDark
                    ? 'bg-gradient-card border-yellow-500/15'
                    : 'bg-white border-yellow-200 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-yellow-400" />
                </div>
                <div>
                  <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</p>
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
