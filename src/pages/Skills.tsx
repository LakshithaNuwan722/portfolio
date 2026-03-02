import { useEffect, useRef, useState } from 'react';
import { Brain, Code2, Cloud, Database, Wrench, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const skillGroups = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    color: 'indigo',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow / Keras', level: 88 },
      { name: 'Hugging Face Transformers', level: 92 },
      { name: 'LangChain / LlamaIndex', level: 90 },
      { name: 'Scikit-learn', level: 93 },
      { name: 'Computer Vision (OpenCV, YOLO)', level: 85 },
    ],
  },
  {
    icon: Code2,
    title: 'Languages & Frameworks',
    color: 'sky',
    skills: [
      { name: 'Python', level: 97 },
      { name: 'TypeScript / JavaScript', level: 92 },
      { name: 'React / Next.js', level: 90 },
      { name: 'FastAPI / Flask', level: 93 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'Rust (Basic)', level: 60 },
    ],
  },
  {
    icon: Database,
    title: 'Data & Databases',
    color: 'violet',
    skills: [
      { name: 'PostgreSQL / MySQL', level: 88 },
      { name: 'Vector DBs (Pinecone, Weaviate)', level: 87 },
      { name: 'Redis', level: 82 },
      { name: 'Apache Kafka', level: 78 },
      { name: 'dbt / Airflow', level: 80 },
      { name: 'Spark / PySpark', level: 75 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    color: 'cyan',
    skills: [
      { name: 'AWS (EC2, S3, SageMaker)', level: 88 },
      { name: 'Docker / Kubernetes', level: 85 },
      { name: 'GCP / Vertex AI', level: 80 },
      { name: 'CI/CD (GitHub Actions)', level: 87 },
      { name: 'Terraform', level: 72 },
      { name: 'Azure ML', level: 70 },
    ],
  },
];

const tools = [
  'Git', 'VS Code', 'Jupyter', 'Weights & Biases', 'MLflow', 'Postman',
  'Figma', 'Linear', 'Notion', 'Vercel', 'Netlify', 'ONNX Runtime',
  'Triton', 'CUDA', 'HuggingFace Hub', 'Gradio', 'Streamlit', 'Nx',
];

const certifications = [
  { name: 'AWS Certified ML Specialist', org: 'Amazon Web Services', year: '2023', color: 'orange' },
  { name: 'Deep Learning Specialization', org: 'DeepLearning.AI (Coursera)', year: '2022', color: 'indigo' },
  { name: 'Professional Data Engineer', org: 'Google Cloud Platform', year: '2023', color: 'sky' },
  { name: 'MLOps Engineering', org: 'DataTalks.Club', year: '2023', color: 'violet' },
];

const colorMap: Record<string, { bar: string; bg: string; border: string; text: string; lightBg: string; lightBorder: string }> = {
  indigo: { bar: 'from-indigo-500 to-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/25', text: 'text-indigo-400', lightBg: 'bg-indigo-50', lightBorder: 'border-indigo-200' },
  sky:    { bar: 'from-sky-500 to-sky-400',    bg: 'bg-sky-500/10',    border: 'border-sky-500/25',    text: 'text-sky-500',    lightBg: 'bg-sky-50',    lightBorder: 'border-sky-200' },
  violet: { bar: 'from-violet-500 to-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/25', text: 'text-violet-400', lightBg: 'bg-violet-50', lightBorder: 'border-violet-200' },
  cyan:   { bar: 'from-cyan-500 to-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/25',   text: 'text-cyan-500',   lightBg: 'bg-cyan-50',   lightBorder: 'border-cyan-200' },
  orange: { bar: 'from-orange-500 to-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/25', text: 'text-orange-400', lightBg: 'bg-orange-50', lightBorder: 'border-orange-200' },
};

function SkillBar({ name, level, color, isDark }: { name: string; level: number; color: string; isDark: boolean }) {
  const c = colorMap[color];
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-sm font-medium transition-colors ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{name}</span>
        <span className={`mono text-xs font-semibold ${c.text}`}>{level}%</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
        <div
          className={`h-full bg-gradient-to-r ${c.bar} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="mono text-indigo-400 text-sm mb-3">// technical_skills</p>
          <h1 className={`text-5xl lg:text-6xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My <span className="gradient-text">Toolkit</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Years of deep practice across AI, machine learning, and full-stack engineering.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillGroups.map(({ icon: Icon, title, color, skills }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`rounded-2xl border p-7 transition-colors duration-300 ${
                  isDark
                    ? `${c.border} bg-gradient-card`
                    : `${c.lightBorder} bg-white shadow-sm`
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                    isDark ? `${c.bg} ${c.border}` : `${c.lightBg} ${c.lightBorder}`
                  }`}>
                    <Icon size={20} className={c.text} />
                  </div>
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {skills.map(({ name, level }) => (
                    <SkillBar key={name} name={name} level={level} color={color} isDark={isDark} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Wrench size={16} className="text-sky-400" />
              <p className="mono text-sky-400 text-sm">// tools_&_tech</p>
            </div>
            <h2 className={`text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Tools I Work <span className="gradient-text">With</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 cursor-default ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-indigo-500/15 hover:border-indigo-500/30 hover:text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 shadow-sm'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <BookOpen size={16} className="text-violet-400" />
              <p className="mono text-violet-400 text-sm">// certifications</p>
            </div>
            <h2 className={`text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Certified <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map(({ name, org, year, color }) => {
              const c = colorMap[color];
              return (
                <div
                  key={name}
                  className={`card-hover rounded-2xl border p-5 relative overflow-hidden transition-colors duration-300 ${
                    isDark
                      ? `${c.border} ${c.bg}`
                      : `${c.lightBorder} ${c.lightBg} shadow-sm`
                  }`}
                >
                  <div className={`text-5xl font-black ${c.text} opacity-10 absolute right-3 top-2 select-none mono`}>
                    {year.slice(2)}
                  </div>
                  <div className="relative z-10">
                    <span className={`mono text-xs font-semibold ${c.text}`}>{year}</span>
                    <h3 className={`font-bold text-sm mt-1 mb-1 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>{name}</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{org}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
