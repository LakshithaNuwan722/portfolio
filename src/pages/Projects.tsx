import { useState, useEffect } from 'react';
import { ExternalLink, Github, Brain, Code2, Layers, Zap, Database, Globe, Bot, BarChart2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const categories = ['All', 'AI / ML', 'Full-Stack', 'Mobile', 'Research', 'Open Source'];

const projects = [
  {
    icon: Brain,
    title: 'QueryMind',
    category: 'AI / ML',
    desc: 'Experimented with fine-tuning a LLaMA 3.2 3B model to explore Natural Language to SQL (NL2SQL) translation.',
    tags: ['Python', 'PyTorch', 'HuggingFace', 'FastAPI', 'Gradio'],
    gradient: 'from-indigo-500/20 to-violet-500/10',
    lightGradient: 'from-indigo-50 to-violet-50',
    accent: 'border-indigo-500/30',
    lightAccent: 'border-indigo-200',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-500/15 border-indigo-500/25',
    lightIconBg: 'bg-indigo-100 border-indigo-200',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/LakshithaNuwan722/querymind-nl2sql.git',
    stats: ['500K+ Users', '99.9% Uptime', '3s Avg Response'],
  },
  {
    icon: Layers,
    title: 'VisionAI Studio',
    category: 'AI / ML',
    desc: 'Computer vision SaaS for automated image analysis, object detection, semantic segmentation, and medical imaging diagnostics.',
    tags: ['PyTorch', 'YOLO v8', 'React', 'AWS S3', 'FastAPI'],
    gradient: 'from-sky-500/20 to-blue-500/10',
    lightGradient: 'from-sky-50 to-blue-50',
    accent: 'border-sky-500/30',
    lightAccent: 'border-sky-200',
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-500/15 border-sky-500/25',
    lightIconBg: 'bg-sky-100 border-sky-200',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    stats: ['2M+ Images', '95% Accuracy', '12 Models'],
  },
  {
    icon: Bot,
    title: 'Sri Lankan Legal AI Assistant',
    category: 'AI / ML',
    desc: 'Developing a domain-specific AI assistant by exploring how to apply the Mistral 7B Large Language Model to Sri Lankan legal texts.',
    tags: ['Python', 'PyTorch', 'HuggingFace', 'FastAPI', 'Gradio'],
    gradient: 'from-violet-500/20 to-pink-500/10',
    lightGradient: 'from-violet-50 to-pink-50',
    accent: 'border-violet-500/30',
    lightAccent: 'border-violet-200',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/15 border-violet-500/25',
    lightIconBg: 'bg-violet-100 border-violet-200',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/LakshithaNuwan722/sl-legal-ai-assistant.git',
    stats: ['10K+ Devs', '85% Time Save', '20+ Languages'],
  },
  {
    icon: BarChart2,
    title: 'PredictIQ',
    category: 'AI / ML',
    desc: 'Time-series forecasting platform for financial markets using LSTM, Transformer, and ensemble methods with explainable AI.',
    tags: ['Python', 'TensorFlow', 'SHAP', 'React', 'Plotly'],
    gradient: 'from-green-500/20 to-emerald-500/10',
    lightGradient: 'from-green-50 to-emerald-50',
    accent: 'border-green-500/30',
    lightAccent: 'border-green-200',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-500/15 border-green-500/25',
    lightIconBg: 'bg-green-100 border-green-200',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    stats: ['87% Accuracy', '$2M Managed', 'Live Markets'],
  },
  {
    icon: Globe,
    title: 'Touraa',
    category: 'Full-Stack',
    desc: 'Developed a full-stack vehicle rental management system using React for the frontend and FastAPI for the backend',
    tags: ['React','React Router', 'FastAPI', 'TailwindCSS','Google API'],
    gradient: 'from-orange-500/20 to-amber-500/10',
    lightGradient: 'from-orange-50 to-amber-50',
    accent: 'border-orange-500/30',
    lightAccent: 'border-orange-200',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/15 border-orange-500/25',
    lightIconBg: 'bg-orange-100 border-orange-200',
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/LakshithaNuwan722/Touraa.git',
    stats: ['500+ Stars', '50+ Forks', 'MIT License'],
    imageUrls: [
      '/touraa-ui/Screenshot 2026-05-07 183850.png',
      '/touraa-ui/Screenshot 2026-05-07 190435.png',
      '/touraa-ui/Screenshot 2026-05-07 214558.png',
      '/touraa-ui/Screenshot 2026-05-07 224442.png',
      '/touraa-ui/Screenshot 2026-05-07 230736.png',
      '/touraa-ui/Screenshot 2026-05-07 231523.png',
    ],
  },
  {
    icon: Layers,
    title: 'e-Passport Issuing System',
    category: 'Full-Stack',
    desc: 'A comprehensive Java-based application designed to automate and streamline the process of passport issuance, management, and tracking. ',
    tags: ['Java', 'HTML', 'mysql', 'CSS'],
    gradient: 'from-blue-500/20 to-cyan-500/10',
    lightGradient: 'from-blue-50 to-cyan-50',
    accent: 'border-blue-500/30',
    lightAccent: 'border-blue-200',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/15 border-blue-500/25',
    lightIconBg: 'bg-blue-100 border-blue-200',
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/LakshithaNuwan722/Passport-Issuing-System.git',
    stats: ['Secure', 'Fast', 'Scalable'],
    imageUrls: [
      '/e-passport-ui/Screenshot 2026-01-11 002836.png',
      '/e-passport-ui/Screenshot 2026-01-20 084225.png',
      '/e-passport-ui/Screenshot 2026-01-20 091755.png',
      '/e-passport-ui/Screenshot 2026-01-20 091820.png',
      '/e-passport-ui/Screenshot 2026-01-20 091837.png',
      '/e-passport-ui/Screenshot 2026-01-20 092533.png',
    ],
  },
  {
    icon: Database,
    title: 'DataPipeline OS',
    category: 'Open Source',
    desc: 'Open-source ETL framework for ML data pipelines — schema validation, versioning, lineage tracking, and monitoring.',
    tags: ['Python', 'Apache Airflow', 'dbt', 'Kafka', 'Great Expectations'],
    gradient: 'from-cyan-500/20 to-teal-500/10',
    lightGradient: 'from-cyan-50 to-teal-50',
    accent: 'border-cyan-500/30',
    lightAccent: 'border-cyan-200',
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-500/15 border-cyan-500/25',
    lightIconBg: 'bg-cyan-100 border-cyan-200',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    stats: ['1.2K Stars', '120+ Contributors', 'PyPI Package'],
  },
  {
    icon: Code2,
    title: 'Transformer Efficiency',
    category: 'Research',
    desc: 'Research paper implementation — novel attention mechanism reducing transformer compute by 40% with minimal accuracy loss.',
    tags: ['PyTorch', 'CUDA', 'Triton', 'W&B', 'HuggingFace'],
    gradient: 'from-pink-500/20 to-rose-500/10',
    lightGradient: 'from-pink-50 to-rose-50',
    accent: 'border-pink-500/30',
    lightAccent: 'border-pink-200',
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-500/15 border-pink-500/25',
    lightIconBg: 'bg-pink-100 border-pink-200',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    stats: ['ICLR 2024', '40% Faster', 'Cited 80+'],
  },
  {
    icon: Zap,
    title: 'EdgeDeploy ML',
    category: 'Open Source',
    desc: 'Toolkit for deploying ML models to edge devices — quantization, pruning, ONNX export, and WebAssembly targets.',
    tags: ['Python', 'ONNX', 'TensorRT', 'Rust', 'WASM'],
    gradient: 'from-yellow-500/20 to-amber-500/10',
    lightGradient: 'from-yellow-50 to-amber-50',
    accent: 'border-yellow-500/30',
    lightAccent: 'border-yellow-200',
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-500/15 border-yellow-500/25',
    lightIconBg: 'bg-yellow-100 border-yellow-200',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    stats: ['800+ Stars', '10x Faster', 'Edge Ready'],
  },
];

function ProjectImageSlider({ imageUrls, title }: { imageUrls: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageUrls.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div className="w-full h-full relative group overflow-hidden">
      {imageUrls.map((url, index) => (
        <img
          key={url}
          src={url}
          alt={`${title} screenshot ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="mono text-indigo-400 text-sm mb-3">// my_projects</p>
          <h1 className={`text-5xl lg:text-6xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Things I've <span className="gradient-text">Built</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            From AI research to production software — here's a showcase of my most impactful work.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-sky-400 text-white border-transparent shadow-lg shadow-indigo-500/30'
                  : isDark
                    ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <div className="mb-12">
            <p className={`mono text-xs mb-6 uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>⭐ Featured</p>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className={`card-hover rounded-2xl border p-6 relative overflow-hidden group flex flex-col transition-colors duration-300 ${
                      isDark
                        ? `${project.accent} bg-gradient-to-br ${project.gradient} backdrop-blur-sm`
                        : `${project.lightAccent} bg-gradient-to-br ${project.lightGradient} shadow-sm`
                    }`}
                  >
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-500/15 border border-yellow-400/30 rounded-full px-2 py-0.5">
                      <span className="text-yellow-500 text-xs font-medium">Featured</span>
                    </div>

                    {/* @ts-ignore - allow dynamic imageUrl property */}
                    {project.imageUrls ? (
                      <div className="w-full h-48 mb-4 rounded-xl overflow-hidden border border-white/10">
                        {/* @ts-ignore */}
                        <ProjectImageSlider imageUrls={project.imageUrls} title={project.title} />
                      </div>
                    ) : (project as any).imageUrl ? (
                      <div className="w-full h-48 mb-4 rounded-xl overflow-hidden border border-white/10">
                        {/* @ts-ignore */}
                        <img src={(project as any).imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${
                        isDark ? project.iconBg : project.lightIconBg
                      }`}>
                        <Icon size={22} className={project.iconColor} />
                      </div>
                    )}

                    <div className="mb-1">
                      <span className={`text-xs mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{project.category}</span>
                    </div>
                    <h3 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                    <p className={`text-sm leading-relaxed mb-4 flex-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{project.desc}</p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stats.map((s) => (
                        <span key={s} className={`text-xs rounded-lg px-2 py-1 border ${
                          isDark ? 'text-slate-400 bg-white/5 border-white/8' : 'text-slate-500 bg-white/80 border-slate-200'
                        }`}>
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`mono text-xs px-2 py-1 rounded-lg border ${
                          isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-500 to-sky-400 text-white text-xs font-semibold rounded-xl hover:opacity-90 transition-all"
                      >
                        <ExternalLink size={12} /> Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl border transition-all ${
                          isDark
                            ? 'bg-white/8 border-white/10 text-slate-300 hover:bg-white/15'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'
                        }`}
                      >
                        <Github size={12} /> Code
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {rest.length > 0 && (
          <div>
            {featured.length > 0 && (
              <p className={`mono text-xs mb-6 uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>More Projects</p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {rest.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className={`card-hover rounded-2xl border p-5 relative group flex flex-col transition-colors duration-300 ${
                      isDark
                        ? `${project.accent} bg-gradient-card backdrop-blur-sm`
                        : `${project.lightAccent} bg-white shadow-sm`
                    }`}
                  >
                    {/* @ts-ignore - allow dynamic imageUrl property */}
                    {project.imageUrls ? (
                      <div className="w-full h-32 mb-3 rounded-xl overflow-hidden border border-white/10">
                        {/* @ts-ignore */}
                        <ProjectImageSlider imageUrls={project.imageUrls} title={project.title} />
                      </div>
                    ) : (project as any).imageUrl ? (
                      <div className="w-full h-32 mb-3 rounded-xl overflow-hidden border border-white/10">
                        {/* @ts-ignore */}
                        <img src={(project as any).imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${
                        isDark ? project.iconBg : project.lightIconBg
                      }`}>
                        <Icon size={18} className={project.iconColor} />
                      </div>
                    )}
                    <span className={`text-xs mono mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{project.category}</span>
                    <h3 className={`font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                    <p className={`text-xs leading-relaxed mb-3 flex-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{project.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={`mono text-xs px-2 py-0.5 rounded-lg border ${
                          isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <a href={project.liveUrl} className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border transition-all ${
                        isDark
                          ? 'bg-white/8 border-white/10 text-slate-300 hover:bg-indigo-500/20 hover:border-indigo-500/30'
                          : 'bg-white border-slate-200 text-slate-500 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600'
                      }`}>
                        <ExternalLink size={11} /> Demo
                      </a>
                      <a href={project.githubUrl} className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border transition-all ${
                        isDark
                          ? 'bg-white/8 border-white/10 text-slate-300 hover:bg-white/15'
                          : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                      }`}>
                        <Github size={11} /> Code
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
