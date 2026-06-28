import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, BookOpen, Leaf, Users, Star, Zap, ChevronDown } from 'lucide-react';

function AuroraHeading() {
  return (
    <svg viewBox="0 0 720 180" className="avana-svg-title" aria-label="AVANA">
      <defs>
        <filter id="inkglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="letterClip">
          <path
            d="M100,160 L140,20 L180,160 M200,20 L240,160 L280,20 M300,160 L340,20 L380,160 M420,160 L420,20 L500,160 L500,20 M550,160 L590,20 L630,160"
            fill="none" stroke="#000" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"
          />
        </clipPath>
      </defs>

      <g className="avana-settle">
        <path
          className="avana-stroke"
          d="M100,160 L140,20 L180,160 M116,110 L164,110 M200,20 L240,160 L280,20 M300,160 L340,20 L380,160 M316,110 L364,110 M420,160 L420,20 L500,160 L500,20 M550,160 L590,20 L630,160 M566,110 L614,110"
          fill="none" stroke="#1a5c2e" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"
          filter="url(#inkglow)"
        />

        <g className="avana-flash-layer" clipPath="url(#letterClip)">
          <rect className="avana-flash-rect" x="-200" y="0" width="200" height="180" fill="url(#sweepGrad)" />
        </g>
      </g>
    </svg>
  );
}

/* ── Typewriter ── */
const WORDS = ['Change.', 'Impact.', 'Hope.', 'Communities.'];
function Typewriter() {
  const [wIdx, setWIdx] = useState(0);
  const [chars, setChars] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = WORDS[wIdx];
    let t;
    if (!del && chars.length < w.length) t = setTimeout(() => setChars(w.slice(0, chars.length + 1)), 75);
    else if (!del && chars.length === w.length) t = setTimeout(() => setDel(true), 1800);
    else if (del && chars.length > 0) t = setTimeout(() => setChars(chars.slice(0, -1)), 42);
    else { setDel(false); setWIdx(i => (i + 1) % WORDS.length); }
    return () => clearTimeout(t);
  }, [chars, del, wIdx]);
  return (
    <span style={{ color: 'var(--flame-orange)' }}>
      {chars}<span className="animate-pulse">|</span>
    </span>
  );
}

/* ── CountUp ── */
function CountUp({ target }) {
  const [n, setN] = useState(0);
  const [on, setOn] = useState(false);
  const ref = useRef();
  const num = parseInt(target.replace(/\D/g, ''));
  const suf = target.replace(/\d/g, '');
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!on) return;
    let v = 0; const step = Math.ceil(num / 55);
    const iv = setInterval(() => { v += step; if (v >= num) { setN(num); clearInterval(iv); } else setN(v); }, 22);
    return () => clearInterval(iv);
  }, [on, num]);
  return <span ref={ref}>{n}{suf}</span>;
}

const PILLARS = [
  { icon: Heart, label: 'Social Service', desc: 'Uplifting underprivileged communities through empathy.', ac: '#e8710a' },
  { icon: BookOpen, label: 'Education', desc: 'Bridging gaps with mentorship and tutoring programs.', ac: '#1a5c2e' },
  { icon: Leaf, label: 'Sustainability', desc: 'Green initiatives for a resilient campus and beyond.', ac: '#2d7a45' },
  { icon: Users, label: 'Community Dev', desc: 'Building solidarity across diverse sections of society.', ac: '#7a4a1e' },
  { icon: Star, label: 'Leadership', desc: "Cultivating tomorrow's changemakers today.", ac: '#f5c842' },
  { icon: Zap, label: 'Volunteering', desc: 'Channeling student energy into meaningful action.', ac: '#3ea05a' },
];

const STATS = [
  { value: '50+', label: 'Volunteers' },
  { value: '12+', label: 'Events / Year' },
  { value: '500+', label: 'Lives Touched' },
  { value: '7+', label: 'Years Active' },
];

const EVENTS = [
  { name: 'Margdarshan', desc: 'Career guidance for underprivileged students', emoji: '🧭', tag: 'Education' },
  { name: 'Blood Donation', desc: 'Life-saving camps organized on campus', emoji: '🩸', tag: 'Health' },
  { name: 'Cloth Donation', desc: 'Dignity through warm clothing drives', emoji: '👕', tag: 'Welfare' },
  { name: 'Old Age Visit', desc: 'Spreading joy at care homes nearby', emoji: '🏠', tag: 'Community' },
  { name: 'Diwali Celebration', desc: 'Festivals of light for all families', emoji: '✨', tag: 'Culture' },
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 110]);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(26,92,46,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(232,113,10,0.07) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
            style={{
              backgroundImage: 'linear-gradient(rgba(26,92,46,1) 1px,transparent 1px),linear-gradient(90deg,rgba(26,92,46,1) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <motion.div style={{ y: heroY }} className="max-w-5xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wider mb-5"
            style={{ background: 'rgba(26,92,46,0.1)', border: '1px solid rgba(26,92,46,0.22)', color: 'var(--green-mid)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green-light)' }} />
            IIT Indore · Social Impact Club · Est. 2017
          </motion.div>



       

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4"
          >
            <AuroraHeading />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm tracking-[0.35em] uppercase mb-5 font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            — Striving For Change —
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-2xl md:text-3xl font-bold mb-6 min-h-[1.5em]"
            style={{ color: 'var(--text-primary)' }}
          >
            Striving For <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            A student-driven social welfare club at IIT Indore — rooted in empathy, powered by action. We uplift communities through education, health drives, and sustainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/about"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-[#f8f6f0] transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg,#1a5c2e,#2d7a45)', boxShadow: '0 8px 28px rgba(26,92,46,0.35)' }}
            >
              Discover Our Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/events"
              className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--bg-card)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)' }}
            >
              Our Events
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black mb-1" style={{ color: 'var(--green-deep)' }}>
                <CountUp target={s.value} />
              </div>
              <div className="text-xs tracking-wider uppercase font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--flame-orange)' }}>What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3" style={{ color: 'var(--text-primary)' }}>Pillars of Impact</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass p-7 rounded-2xl group relative overflow-hidden cursor-default transition-all duration-300 hover:border-[rgba(26,92,46,0.35)]"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 40% 0%, ${p.ac}10 0%, transparent 65%)` }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${p.ac}18`, border: `1px solid ${p.ac}30` }}
                >
                  <p.icon size={20} style={{ color: p.ac }} />
                </div>
                <h3 className="font-bold text-base mb-1.5" style={{ color: 'var(--text-primary)' }}>{p.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-layer)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-5"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--green-mid)' }}>On The Ground</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3" style={{ color: 'var(--text-primary)' }}>Our Events</h2>
            </div>
            <Link to="/events" className="flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3" style={{ color: 'var(--green-deep)' }}>
              View all <ArrowRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EVENTS.map((ev, i) => (
              <motion.div
                key={ev.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass p-7 rounded-2xl group relative overflow-hidden transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{ev.emoji}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(26,92,46,0.1)', color: 'var(--green-mid)', border: '1px solid rgba(26,92,46,0.2)' }}>
                    {ev.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-1.5 group-hover:text-[#1a5c2e] transition-colors" style={{ color: 'var(--text-primary)' }}>{ev.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{ev.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg,#1a5c2e 0%,#2d7a45 50%,#1a5c2e 100%)', backgroundSize: '200% 200%' }}
          />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(245,200,66,0.8) 0%, transparent 50%)' }} />
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 text-[120px] pointer-events-none select-none">🔥</div>
          <div className="relative z-10 px-10 py-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#f8f6f0] mb-4">Ready to Make a Difference?</h2>
            <p className="text-[#f8f6f0]/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Join AVANA and be part of a movement that's shaping communities at IIT Indore and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-3.5 rounded-2xl font-bold text-base transition-all hover:-translate-y-1" style={{ background: '#f8f6f0', color: '#1a5c2e', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
                Get Involved
              </Link>
              <Link to="/about" className="px-8 py-3.5 rounded-2xl font-bold text-base border-2 border-white/30 text-[#f8f6f0] hover:bg-white/10 hover:-translate-y-1 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
