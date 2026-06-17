import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/Themecontext';

const NAV = [
  { label: 'Home',    path: '/' },
  { label: 'About',   path: '/about' },
  { label: 'Events',  path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Team',    path: '/team' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { dark, toggle }          = useTheme();
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-3.5 flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Flame icon */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-35 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg,#1a5c2e,#f5c842)' }}
              />
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                {/* wreath hint */}
                <ellipse cx="11" cy="20" rx="9" ry="4" fill="#1a5c2e" opacity="0.25"/>
                {/* hands */}
                <path d="M7 16 C5 13 4 10 6 8 C7 11 9 12 11 14 C13 12 15 11 16 8 C18 10 17 13 15 16 C13 18 9 18 7 16Z" fill="#7a4a1e" opacity="0.85"/>
                {/* flame */}
                <path d="M11 2 C11 2 8 6 9 9 C9.5 11 11 12 11 12 C11 12 12.5 11 13 9 C14 6 11 2 11 2Z" fill="#f5c842"/>
                <path d="M11 4 C11 4 9.5 7 10 9 C10.3 10.2 11 11 11 11 C11 11 11.7 10.2 12 9 C12.5 7 11 4 11 4Z" fill="#e8710a"/>
              </svg>
            </div>
            {/* AVANA wordmark with light sweep */}
            <div>
              <span
                className="avana-title text-xl font-black tracking-widest"
                style={{ color: 'var(--green-deep)', fontFamily: "'Inter', sans-serif" }}
              >
                AVANA
              </span>
              <span
                className="block text-[9px] tracking-[0.22em] font-semibold uppercase -mt-0.5"
                style={{ color: 'var(--flame-orange)' }}
              >
                IIT Indore
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200"
                    style={{ color: active ? 'var(--green-deep)' : 'var(--text-secondary)' }}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'rgba(26,92,46,0.1)', border: '1px solid rgba(26,92,46,0.2)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── RIGHT ACTIONS ── */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className="relative w-14 h-7 rounded-full transition-all duration-400 flex items-center px-1"
              style={{
                background: dark
                  ? 'linear-gradient(135deg,#1a5c2e,#0f2d18)'
                  : 'linear-gradient(135deg,#f5c842,#e8710a)',
                border: '1.5px solid var(--border-strong)',
              }}
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ x: dark ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                style={{ background: dark ? '#f5c842' : '#1a5c2e' }}
              >
                {dark
                  ? <Moon size={11} color="#0f2d18" />
                  : <Sun  size={11} color="#f8f6f0" />
                }
              </motion.div>
            </button>

            {/* Yearbook CTA */}
            <a
              href="https://drive.google.com/file/d/1LBg4s-kI_vxR-h-yCmoDjpSVXkP-COrJ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg,#1a5c2e,#2d7a45)',
                color: '#f8f6f0',
                boxShadow: '0 4px 16px rgba(26,92,46,0.35)',
              }}
            >
              Yearbook <ExternalLink size={13} />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {menuOpen
                ? <X size={18} style={{ color: 'var(--text-primary)' }} />
                : <Menu size={18} style={{ color: 'var(--text-primary)' }} />
              }
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-20 px-5 pb-8"
            style={{ background: dark ? 'rgba(8,15,11,0.97)' : 'rgba(242,237,228,0.97)', backdropFilter: 'blur(24px)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-2 mt-4">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={item.path}
                    className="flex items-center px-5 py-4 rounded-2xl text-lg font-semibold transition-all"
                    style={
                      location.pathname === item.path
                        ? { background: 'rgba(26,92,46,0.12)', color: 'var(--green-deep)', border: '1px solid rgba(26,92,46,0.25)' }
                        : { color: 'var(--text-secondary)' }
                    }
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="https://drive.google.com/file/d/1LBg4s-kI_vxR-h-yCmoDjpSVXkP-COrJ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-[#f8f6f0]"
                style={{ background: 'linear-gradient(135deg,#1a5c2e,#2d7a45)', boxShadow: '0 4px 20px rgba(26,92,46,0.35)' }}
              >
                View Yearbook <ExternalLink size={16} />
              </a>
              <p className="text-center text-xs mt-4 tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>
                Striving For Change
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}