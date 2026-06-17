import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, Crown, Star, Users, Heart } from 'lucide-react';

/* ── DATA ── */
const CLUB_HEAD = {
  name: 'Anurag Singh', role: 'Club Head', dept: 'ME, 2026',
  email: 'me240003006@iiti.ac.in',
  linkedin: 'https://www.linkedin.com/in/anurag-singh',
  instagram: 'https://instagram.com/anurag_singh',
  initials: 'AS', tier: 'head',
  quote: '"Leading with compassion, serving with purpose."',
};

const CO_HEADS = [
  { name:'Udaisri Yalavarhti', role:'Co-Head',          dept:'CSE, 2026', email:'avana@iiti.ac.in', linkedin:'#', instagram:'#', initials:'UY', tier:'cohead' },
  { name:'Ayush Sharma',       role:'Margdarshan Head',  dept:'ME, 2026',  email:'avana@iiti.ac.in', linkedin:'#', instagram:'#', initials:'AY', tier:'cohead' },
];

const CORE = [
  { name:'Anand Vivek',  role:'Tech & Web Lead',  dept:'ME, 2026',  email:'me240003006@iiti.ac.in', linkedin:'https://www.linkedin.com/in/anand-vivek', instagram:'#', initials:'AV' },
  { name:'Core Member',  role:'Events Coordinator',dept:'CSE, 2026', email:'avana@iiti.ac.in', linkedin:'#', instagram:'#', initials:'CM' },
  { name:'Core Member',  role:'Outreach Lead',     dept:'EE, 2026',  email:'avana@iiti.ac.in', linkedin:'#', instagram:'#', initials:'CM' },
  { name:'Core Member',  role:'Design Lead',       dept:'ME, 2027',  email:'avana@iiti.ac.in', linkedin:'#', instagram:'#', initials:'DL' },
];

const VOLUNTEERS = [
  { name:'Volunteer', role:'Member & Volunteer', dept:'ME, 2027',  initials:'V1' },
  { name:'Volunteer', role:'Member & Volunteer', dept:'CSE, 2027', initials:'V2' },
  { name:'Volunteer', role:'Member & Volunteer', dept:'EE, 2028',  initials:'V3' },
  { name:'Volunteer', role:'Member & Volunteer', dept:'CE, 2027',  initials:'V4' },
  { name:'Volunteer', role:'Member & Volunteer', dept:'PH, 2028',  initials:'V5' },
  { name:'Volunteer', role:'Member & Volunteer', dept:'ME, 2028',  initials:'V6' },
];

/* ── SOCIALS ── */
function Socials({ m, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      {m.email && (
        <a href={`mailto:${m.email}`} className="p-2 rounded-lg transition-all hover:-translate-y-0.5"
           style={{ background:'rgba(26,92,46,0.1)', color:'var(--green-mid)' }}>
          <Mail size={size} />
        </a>
      )}
      {m.linkedin && m.linkedin !== '#' && (
        <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
           className="p-2 rounded-lg transition-all hover:-translate-y-0.5"
           style={{ background:'rgba(59,130,246,0.1)', color:'#3b82f6' }}>
          <Linkedin size={size} />
        </a>
      )}
      {m.instagram && m.instagram !== '#' && (
        <a href={m.instagram} target="_blank" rel="noopener noreferrer"
           className="p-2 rounded-lg transition-all hover:-translate-y-0.5"
           style={{ background:'rgba(236,72,153,0.1)', color:'#ec4899' }}>
          <Instagram size={size} />
        </a>
      )}
    </div>
  );
}

/* ── TIER BADGE ── */
function TierBadge({ label, icon: Icon, color, bg }) {
  return (
    <div className="flex items-center justify-center gap-1.5 mb-8">
      <div className="flex-1 h-px" style={{ background:`linear-gradient(to right, transparent, ${color}40)` }} />
      <div
        className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
        style={{ background:bg, color, border:`1px solid ${color}40` }}
      >
        <Icon size={12} />
        {label}
      </div>
      <div className="flex-1 h-px" style={{ background:`linear-gradient(to left, transparent, ${color}40)` }} />
    </div>
  );
}

/* ── HEAD CARD ── */
function HeadCard({ m }) {
  return (
    <motion.div
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      whileHover={{ y:-8 }}
      className="glass-strong card-head rounded-3xl p-10 text-center relative overflow-hidden group max-w-sm mx-auto"
    >
      {/* Ambient glow top */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
           style={{ background:'radial-gradient(circle at 50% -10%, rgba(245,200,66,0.12) 0%, transparent 65%)' }} />
      {/* Gold ring avatar */}
      <div className="relative inline-flex mb-5">
        <div className="w-28 h-28 rounded-2xl flex items-center justify-center text-3xl font-black text-[#f8f6f0] relative z-10"
             style={{ background:'linear-gradient(135deg,#1a5c2e,#2d7a45)', boxShadow:'0 0 0 3px #f5c842, 0 0 0 6px rgba(245,200,66,0.2)' }}>
          {m.initials}
        </div>
        {/* pulse ring */}
        <div className="absolute inset-0 rounded-2xl border-2 border-[#f5c842] animate-ping opacity-20" />
      </div>

      <div
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
        style={{ background:'linear-gradient(135deg,rgba(245,200,66,0.2),rgba(232,113,10,0.15))', color:'#e8710a', border:'1px solid rgba(245,200,66,0.35)' }}
      >
        <Crown size={11} /> Club Head
      </div>

      <h3 className="text-2xl font-black mb-1" style={{ color:'var(--text-primary)' }}>{m.name}</h3>
      <p className="text-xs font-medium mb-1" style={{ color:'var(--text-muted)' }}>{m.dept}</p>
      {m.quote && (
        <p className="text-xs italic mb-5 mt-3 leading-relaxed px-2" style={{ color:'var(--text-secondary)' }}>{m.quote}</p>
      )}
      <div className="flex justify-center"><Socials m={m} size={15} /></div>
    </motion.div>
  );
}

/* ── CO-HEAD CARD ── */
function CoHeadCard({ m, i }) {
  return (
    <motion.div
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ delay:i*0.1 }}
      whileHover={{ y:-6 }}
      className="glass-strong card-cohead rounded-2xl p-7 text-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
           style={{ background:'radial-gradient(circle at 50% -10%, rgba(232,113,10,0.1) 0%, transparent 65%)' }} />
      <div className="relative inline-flex mb-4">
        <div className="w-20 h-20 rounded-xl flex items-center justify-center text-xl font-black text-[#f8f6f0]"
             style={{ background:'linear-gradient(135deg,#2d7a45,#3ea05a)', boxShadow:'0 0 0 2px #e8710a, 0 0 0 4px rgba(232,113,10,0.15)' }}>
          {m.initials}
        </div>
      </div>
      <div
        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-3"
        style={{ background:'rgba(232,113,10,0.12)', color:'#e8710a', border:'1px solid rgba(232,113,10,0.25)' }}
      >
        <Star size={10} /> {m.role}
      </div>
      <h3 className="text-lg font-black mb-0.5" style={{ color:'var(--text-primary)' }}>{m.name}</h3>
      <p className="text-xs mb-4" style={{ color:'var(--text-muted)' }}>{m.dept}</p>
      <div className="flex justify-center"><Socials m={m} /></div>
    </motion.div>
  );
}

/* ── CORE CARD ── */
function CoreCard({ m, i }) {
  return (
    <motion.div
      initial={{ opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ delay:i*0.08 }}
      whileHover={{ y:-4 }}
      className="glass card-core rounded-2xl p-6 text-center group relative overflow-hidden transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
           style={{ background:'radial-gradient(circle at 50% 0%, rgba(26,92,46,0.08) 0%, transparent 65%)' }} />
      <div className="w-16 h-16 rounded-xl flex items-center justify-center text-base font-black text-[#f8f6f0] mx-auto mb-4"
           style={{ background:'linear-gradient(135deg,#1a5c2e,#3ea05a)' }}>
        {m.initials}
      </div>
      <div
        className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-2"
        style={{ background:'rgba(26,92,46,0.1)', color:'var(--green-mid)', border:'1px solid rgba(26,92,46,0.2)' }}
      >
        Core Team
      </div>
      <h3 className="font-bold text-sm mb-0.5" style={{ color:'var(--text-primary)' }}>{m.name}</h3>
      <p className="text-[11px] mb-1" style={{ color:'var(--green-mid)' }}>{m.role}</p>
      <p className="text-[10px] mb-4" style={{ color:'var(--text-muted)' }}>{m.dept}</p>
      <div className="flex justify-center"><Socials m={m} size={13} /></div>
    </motion.div>
  );
}

/* ── VOLUNTEER CARD ── */
function VolCard({ m, i }) {
  return (
    <motion.div
      initial={{ opacity:0, scale:0.95 }}
      whileInView={{ opacity:1, scale:1 }}
      viewport={{ once:true }}
      transition={{ delay:i*0.05 }}
      whileHover={{ scale:1.04, y:-2 }}
      className="glass card-member rounded-xl p-5 text-center transition-all duration-300"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-[#f8f6f0] mx-auto mb-3"
        style={{ background:'linear-gradient(135deg,#3ea05a,#7a4a1e33)', border:'1px solid rgba(26,92,46,0.2)' }}
      >
        {m.initials}
      </div>
      <p className="font-semibold text-xs" style={{ color:'var(--text-primary)' }}>{m.name}</p>
      <p className="text-[10px] mt-0.5" style={{ color:'var(--text-muted)' }}>{m.dept}</p>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="pt-24 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color:'var(--flame-orange)' }}>The People</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-4" style={{ color:'var(--text-primary)' }}>
            Our <span style={{ color:'var(--green-deep)' }}>Team</span>
          </h1>
          <p className="max-w-lg mx-auto leading-relaxed" style={{ color:'var(--text-secondary)' }}>
            Meet the changemakers driving AVANA's mission — from leadership to volunteers, every role matters.
          </p>
        </motion.div>

        {/* ── TIER 1: CLUB HEAD ── */}
        <TierBadge label="Club Head" icon={Crown} color="#f5c842" bg="rgba(245,200,66,0.1)" />
        <div className="flex justify-center mb-16">
          <HeadCard m={CLUB_HEAD} />
        </div>

        {/* Connector line */}
        <div className="flex justify-center mb-0">
          <div className="w-px h-10" style={{ background:'linear-gradient(to bottom,rgba(245,200,66,0.5),rgba(232,113,10,0.3))' }} />
        </div>
        <div className="w-full h-px mb-0" style={{ background:'linear-gradient(to right,transparent,rgba(232,113,10,0.3),transparent)' }} />
        <div className="flex justify-center">
          <div className="w-1/3 h-px" style={{ background:'rgba(232,113,10,0.2)' }} />
        </div>
        <div className="flex justify-center gap-[33.3%] mb-0">
          <div className="w-px h-6" style={{ background:'rgba(232,113,10,0.3)' }} />
          <div className="w-px h-6" style={{ background:'rgba(232,113,10,0.3)' }} />
        </div>

        {/* ── TIER 2: CO-HEADS ── */}
        <TierBadge label="Co-Heads & Leads" icon={Star} color="#e8710a" bg="rgba(232,113,10,0.1)" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {CO_HEADS.map((m,i) => <CoHeadCard key={m.name+i} m={m} i={i} />)}
        </div>

        {/* ── TIER 3: CORE TEAM ── */}
        <TierBadge label="Core Team" icon={Users} color="#1a5c2e" bg="rgba(26,92,46,0.1)" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {CORE.map((m,i) => <CoreCard key={m.name+i} m={m} i={i} />)}
        </div>

        {/* ── TIER 4: MEMBERS & VOLUNTEERS ── */}
        <TierBadge label="Members & Volunteers" icon={Heart} color="#3ea05a" bg="rgba(62,160,90,0.08)" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12">
          {VOLUNTEERS.map((m,i) => <VolCard key={i} m={m} i={i} />)}
        </div>


      </div>
    </div>
  );
}