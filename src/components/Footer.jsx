import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--green-mid), var(--green-deep))',
                }}
              >
                <span className="text-white font-black text-sm">A</span>
              </div>
              <div>
                <span className="text-xl font-black tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  AVANA
                </span>
                <span
                  className="block text-[10px] tracking-[0.2em] uppercase font-medium -mt-0.5"
                  style={{ color: 'var(--green-mid)' }}
                >
                  IIT Indore
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>
              A Sanskrit word meaning favour and protection. Striving for change through social service,
              education, and community development.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: 'var(--text-muted)' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="transition-colors text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: 'var(--text-muted)' }}>
              Connect
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:avana@iiti.ac.in"
                className="flex items-center gap-3 transition-colors text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Mail size={14} /> avana@iiti.ac.in
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/avana_iit_indore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/avana-iiti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © 2026 AVANA IIT Indore. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            Made with <Heart size={11} className="text-rose-500/60" /> by Anand Vivek · Striving For Change
          </p>
        </div>
      </div>
    </footer>
  );
}