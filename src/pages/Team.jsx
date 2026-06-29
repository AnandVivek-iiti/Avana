import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram, Mail, Crown, Star, Users, Heart, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import {
  CLUB_HEAD,
  CO_HEADS,
  HEADS,
  LEADS,
  MEMBERS
} from "../data/team";

/* ── AVATAR: photo or initials fallback ── */
function Avatar({ m, size = 'md' }) {
  const [imgError, setImgError] = useState(false);
  const sizeMap = {
    xl:  { box: 'w-28 h-28', text: 'text-3xl', radius: 'rounded-2xl' },
    lg:  { box: 'w-20 h-20', text: 'text-xl',  radius: 'rounded-xl'  },
    md:  { box: 'w-16 h-16', text: 'text-base', radius: 'rounded-xl' },
    sm:  { box: 'w-12 h-12', text: 'text-sm',  radius: 'rounded-xl'  },
  };
  const s = sizeMap[size] || sizeMap.md;

  if (m.photo && !imgError) {
    return (
      <div className={`${s.box} ${s.radius} overflow-hidden flex-shrink-0`}>
        <img
          src={m.photo}
          alt={m.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-fill"
        />
      </div>
    );
  }
  return (
    <div
      className={`${s.box} ${s.radius} flex items-center justify-center ${s.text} font-black text-[#f8f6f0] flex-shrink-0`}
      style={{ background: 'linear-gradient(135deg,#1a5c2e,#3ea05a)' }}
    >
      {m.initials}
    </div>
  );
}

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

/* ── META PILL ── */
function MetaPill({ label }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide"
      style={{ background:'rgba(26,92,46,0.08)', color:'var(--green-mid)', border:'1px solid rgba(26,92,46,0.15)' }}
    >
      {label}
    </span>
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
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
           style={{ background:'radial-gradient(circle at 50% -10%, rgba(245,200,66,0.12) 0%, transparent 65%)' }} />

      {/* Avatar with gold ring */}
      <div className="relative inline-flex mb-5">
        <div
          className="rounded-2xl overflow-hidden relative z-10"
          style={{ boxShadow:'0 0 0 3px #f5c842, 0 0 0 6px rgba(245,200,66,0.2)' }}
        >
          <Avatar m={m} size="xl" />
        </div>
        <div className="absolute inset-0 rounded-2xl border-2 border-[#f5c842] animate-ping opacity-20" />
      </div>
<br/>
      <div
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
        style={{ background:'linear-gradient(135deg,rgba(245,200,66,0.2),rgba(232,113,10,0.15))', color:'#e8710a', border:'1px solid rgba(245,200,66,0.35)' }}
      >
        <Crown size={11} /> Club Head
      </div>

      <h3 className="text-2xl font-black mb-1" style={{ color:'var(--text-primary)' }}>{m.name}</h3>
      {/* <p className="text-xs font-medium mb-1" style={{ color:'var(--text-muted)' }}>{m.category} · {m.dept} · Year {m.year}</p> */}
      {m.quote && (
        <p className="text-xs italic mb-4 mt-3 leading-relaxed px-2" style={{ color:'var(--text-secondary)' }}>{m.quote}</p>
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

      <div className="flex justify-center mb-4">
        <div
          className="rounded-xl overflow-hidden"
          style={{ boxShadow:'0 0 0 2px #e8710a, 0 0 0 4px rgba(232,113,10,0.15)' }}
        >
          <Avatar m={m} size="lg" />
        </div>
      </div>

      <h3 className="text-lg font-black mb-2" style={{ color:'var(--text-primary)' }}>{m.name}</h3>

      <div className="flex justify-center mb-2">
        <div
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
          style={{ background:'rgba(232,113,10,0.12)', color:'#e8710a', border:'1px solid rgba(232,113,10,0.25)' }}
        >
          <Star size={10} /> {m.role}
        </div>
      </div>

      {(m.dept || m.category) && (
        <p className="text-xs mb-1" style={{ color:'var(--text-muted)' }}>{m.category}{m.category && m.dept ? ' · ' : ''}{m.dept}</p>
      )}

      <div className="flex justify-center mt-2"><Socials m={m} /></div>
    </motion.div>
  );
}

/* ── LEAD CARD ── */
function LeadCard({ m, i }) {
  return (
    <motion.div
      initial={{ opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ delay:i*0.07 }}
      whileHover={{ y:-4 }}
      className="glass card-core rounded-2xl p-5 text-center group relative overflow-hidden transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
           style={{ background:'radial-gradient(circle at 50% 0%, rgba(26,92,46,0.08) 0%, transparent 65%)' }} />

      <div className="mx-auto mb-3 w-fit">
        <Avatar m={m} size="md" />
      </div>

      <div
        className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-2"
        style={{ background:'rgba(26,92,46,0.1)', color:'var(--green-mid)', border:'1px solid rgba(26,92,46,0.2)' }}
      >
        Lead
      </div>
      <h3 className="font-bold text-sm mb-0.5" style={{ color:'var(--text-primary)' }}>{m.name}</h3>
      <p className="text-[11px] mb-0.5" style={{ color:'var(--green-mid)' }}>{m.role}</p>
      {m.dept && <p className="text-[10px] mb-1" style={{ color:'var(--text-muted)' }}>{m.category} · {m.dept}</p>}

      <div className="flex justify-center"><Socials m={m} size={13} /></div>
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

      <div className="mx-auto mb-4 w-fit">
        <Avatar m={m} size="md" />
      </div>

      <div
        className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-2"
        style={{ background:'rgba(26,92,46,0.1)', color:'var(--green-mid)', border:'1px solid rgba(26,92,46,0.2)' }}
      >
        Core Team
      </div>
      <h3 className="font-bold text-sm mb-0.5" style={{ color:'var(--text-primary)' }}>{m.name}</h3>
      <p className="text-[11px] mb-0.5" style={{ color:'var(--green-mid)' }}>{m.role}</p>
      <p className="text-[10px] mb-1" style={{ color:'var(--text-muted)' }}>{m.category} · {m.dept}</p>
      {/* {m.year && <p className="text-[10px] mb-3" style={{ color:'var(--text-muted)' }}>Year {m.year}</p>} */}

      <div className="flex justify-center"><Socials m={m} size={13} /></div>
    </motion.div>
  );
}

/* ── MEMBERS CARD ── */
function VolCard({ m, i }) {
  return (
    <motion.div
      initial={{ opacity:0, scale:0.95 }}
      whileInView={{ opacity:1, scale:1 }}
      viewport={{ once:true }}
      transition={{ delay:i*0.05 }}
      whileHover={{ scale:1.04, y:-2 }}
      className="glass card-member rounded-xl p-4 text-center transition-all duration-300"
    >
      <div className="mx-auto mb-3 w-fit">
        <Avatar m={m} size="sm" />
      </div>
      <p className="font-semibold text-xs" style={{ color:'var(--text-primary)' }}>{m.name}</p>
      <p className="text-[10px] mt-0.5" style={{ color:'var(--text-muted)' }}>{m.dept}</p>
      <p className="text-[9px] mt-0.5" style={{ color:'var(--text-muted)' }}>{m.category} ·  {m.year}  year</p>
    </motion.div>
  );
}

/* ── MEMBER INSIGHTS SECTION ── */
function MemberInsights() {
  const withExp = [...CO_HEADS, ...HEADS, ...LEADS, ...MEMBERS].filter(m => m.experience);
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="mt-24">
      <TierBadge label="Member Insights" icon={Quote} color="#2d7a45" bg="rgba(45,122,69,0.1)" />
      <p className="text-center text-sm mb-10 max-w-lg mx-auto" style={{ color:'var(--text-muted)' }}>
        In their own words — what Avana means to those who built it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {withExp.map((m, i) => (
          <motion.div
            key={m.name + i}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay:i*0.06 }}
            className="glass card-core rounded-2xl p-5 cursor-pointer group transition-all duration-300 hover:shadow-lg"
            style={{ borderColor: expanded === i ? 'var(--border-strong)' : undefined }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Avatar m={m} size="sm" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate" style={{ color:'var(--text-primary)' }}>{m.name}</p>
                <p className="text-[10px]" style={{ color:'var(--text-muted)' }}>{m.role} · {m.dept}</p>
              </div>
              <div className="flex-shrink-0" style={{ color:'var(--green-mid)' }}>
                {expanded === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </div>

            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ opacity:0, height:0 }}
                  animate={{ opacity:1, height:'auto' }}
                  exit={{ opacity:0, height:0 }}
                  transition={{ duration:0.25 }}
                  className="overflow-hidden"
                >
                  <div
                    className="mt-4 pt-4 text-[15px] leading-relaxed "
                    style={{
                      color:'var(--text-secondary)',
                      borderTop:'1px solid var(--border)',
                    }}
                  >
                    <Quote size={12} className="inline mr-1.5 mb-0.5 opacity-50" style={{ color:'var(--green-light)' }} />
                    {m.experience}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {expanded !== i && (
              <p className="mt-3 text-[10px] leading-relaxed line-clamp-2 italic" style={{ color:'var(--text-secondary)' }}>
                {m.experience}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
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
            Meet the changemakers driving AVANA's mission — from leadership to members, every role matters.
          </p>
        </motion.div>

        {/* ── TIER 1: CLUB HEAD ── */}
        <TierBadge label="Club Head" icon={Crown} color="#f5c842" bg="rgba(245,200,66,0.1)" />
        <div className="flex justify-center mb-16">
          <HeadCard m={CLUB_HEAD} />
        </div>

        {/* Connector lines */}
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
        <TierBadge label="Co-Head" icon={Star} color="#e8710a" bg="rgba(232,113,10,0.1)" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {CO_HEADS.map((m,i) => <CoHeadCard key={m.name+i} m={m} i={i} />)}
        </div>

        {/* ── TIER 3: HEADS ── */}
        <TierBadge label="Heads" icon={Star} color="#e8710a" bg="rgba(232,113,10,0.1)" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {HEADS.map((m,i) => <CoHeadCard key={m.name+i} m={m} i={i} />)}
        </div>

        {/* ── TIER 4: LEADS ── */}
        <TierBadge label="Leads" icon={Users} color="#2d7a45" bg="rgba(45,122,69,0.1)" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
          {LEADS.map((m,i) => <LeadCard key={m.name+i} m={m} i={i} />)}
        </div>

        {/* ── TIER 5: MEMBERS ── */}
        <TierBadge label="Members" icon={Heart} color="#3ea05a" bg="rgba(62,160,90,0.08)" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12">
          {MEMBERS.map((m,i) => <VolCard key={i} m={m} i={i} />)}
        </div>

        {/* ── MEMBER INSIGHTS ── */}
        <MemberInsights />

      </div>
    </div>
  );
}
