import { useState } from 'react';
import {
  Mail, MapPin, Phone, Send, Github, Linkedin, Twitter,
  MessageSquare, Clock, CheckCircle2, Sparkles, ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'LakshithaDev',
    href: 'mailto:LakshithaDevv@outlook.com',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/25',
    lightBg: 'bg-indigo-50 border-indigo-200',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 (769) 369-728',
    href: 'tel:+94769369728',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/25',
    lightBg: 'bg-sky-50 border-sky-200',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Colombo, Sri Lanka (Remote OK)',
    href: '#',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/25',
    lightBg: 'bg-violet-50 border-violet-200',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: '#',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/25',
    lightBg: 'bg-green-50 border-green-200',
  },
];

const socials = [
  {
    icon: Github, href: 'https://github.com/LakshithaNuwan722', label: 'GitHub', handle: '@LakshithaDev'
  },
  { icon: Linkedin, href: 'www.linkedin.com/in/lakshitha-wijekoon-612b70357', label: 'LinkedIn', handle: 'in/Lakshitha Wijekoon' },
  { icon: Twitter, href: '#', label: 'Twitter / X', handle: '@LakshithaDev' },
];

const services = [
  'AI / LLM Integration',
  'Full-Stack Development',
  'ML Model Development',
  'Technical Consulting',
  'Code Review & Audit',
  'Team Training / Workshops',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  const cardClass = isDark
    ? 'bg-gradient-card border-white/8'
    : 'bg-white border-slate-200 shadow-sm';

  const inputClass = isDark
    ? 'bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:bg-white/8'
    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white';

  const labelClass = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="mono text-indigo-400 text-sm mb-3">// get_in_touch</p>
          <h1 className={`text-5xl lg:text-6xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Let's <span className="gradient-text">Work Together</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Have a project in mind? Looking for an AI expert to join your team? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div>
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg, lightBg }) => (
                <a
                  key={label}
                  href={href}
                  className={`card-hover flex items-center gap-4 rounded-2xl border p-5 group transition-colors duration-300 ${isDark ? bg : lightBg
                    }`}
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${isDark ? bg : lightBg
                    }`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <p className={`text-xs mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p>
                    <p className={`text-sm font-medium group-hover:text-indigo-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="mb-8">
              <h3 className={`text-sm font-medium mb-4 flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <MessageSquare size={14} className="text-indigo-400" />
                Connect on Social
              </h3>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, href, label, handle }) => (
                  <a
                    key={label}
                    href={href}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group ${isDark
                        ? 'bg-white/5 border-white/8 hover:bg-white/10 hover:border-indigo-500/30'
                        : 'bg-white border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm'
                      }`}
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${isDark
                        ? 'bg-white/8 border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30'
                        : 'bg-slate-100 border-slate-200 group-hover:bg-indigo-100 group-hover:border-indigo-200'
                      }`}>
                      <Icon size={16} className={`transition-colors ${isDark ? 'text-slate-400 group-hover:text-indigo-400' : 'text-slate-500 group-hover:text-indigo-500'}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{label}</p>
                      <p className={`text-xs mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{handle}</p>
                    </div>
                    <ArrowRight size={14} className={`transition-all group-hover:translate-x-1 ${isDark ? 'text-slate-600 group-hover:text-indigo-400' : 'text-slate-300 group-hover:text-indigo-500'}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className={`border rounded-2xl p-6 ${cardClass}`}>
              <h3 className={`font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Sparkles size={16} className="text-indigo-400" />
                Services I Offer
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <div key={s} className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className={`border rounded-2xl p-8 ${cardClass}`}>
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-400" />
                  </div>
                  <h3 className={`font-bold text-2xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Sent! 🎉</h3>
                  <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Thanks for reaching out! I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className={`px-6 py-3 border rounded-xl text-sm font-medium transition-all ${isDark
                        ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                      }`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className={`font-bold text-xl mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
                    <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>I read every message and respond personally.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-xs font-medium block mb-1.5 ${labelClass}`}>Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label className={`text-xs font-medium block mb-1.5 ${labelClass}`}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${inputClass}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`text-xs font-medium block mb-1.5 ${labelClass}`}>What can I help with? *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all appearance-none ${inputClass}`}
                      style={{ colorScheme: isDark ? 'dark' : 'light' }}
                    >
                      <option value="" className={isDark ? 'bg-[#0d1117]' : 'bg-white'}>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className={isDark ? 'bg-[#0d1117]' : 'bg-white'}>{s}</option>
                      ))}
                      <option value="Other" className={isDark ? 'bg-[#0d1117]' : 'bg-white'}>Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className={`text-xs font-medium block mb-1.5 ${labelClass}`}>Your Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, timeline, and budget..."
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all resize-none ${inputClass}`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-500 to-sky-400 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
