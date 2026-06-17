import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const CONTACTS = [
  { title: 'Club Head', name: 'Anurag Singh', email: 'me240003006@iiti.ac.in', phone: '+91 9675109428', linkedin: 'https://www.linkedin.com/in/anurag-singh', instagram: 'https://instagram.com/anurag_singh', accent: 'var(--green-mid)', emoji: '🎯' },
  { title: 'Co-Head', name: 'Udaisri Yalavarhti', email: 'me240003006@iiti.ac.in', phone: '+91 9675109428', linkedin: '#', instagram: '#', accent: 'var(--flame-orange)', emoji: '🧭' },
  { title: 'Web Developer', name: 'Anand Vivek', email: 'me240003006@iiti.ac.in', phone: '+91 9675109428', linkedin: 'https://www.linkedin.com/in/anand-vivek', instagram: 'https://instagram.com/anand_vivek', accent: 'var(--flame-yellow)', emoji: '💻' },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-24 px-6 min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--green-mid)' }}>
            Reach Out
          </span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>
            Contact Us
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We'd love to hear from you. Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl space-y-6"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Get in Touch
            </h3>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.2)',
                }}
              >
                <Phone size={18} style={{ color: 'var(--green-mid)' }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                  Phone
                </p>
                <a href="tel:+919675109428" className="transition" style={{ color: 'var(--text-secondary)' }}>
                  +91 9675109428
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: 'rgba(236,72,153,0.15)',
                  border: '1px solid rgba(236,72,153,0.2)',
                }}
              >
                <Mail size={18} style={{ color: '#ec4899' }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                  Email
                </p>
                <a href="mailto:avana@iiti.ac.in" className="transition" style={{ color: 'var(--text-secondary)' }}>
                  avana@iiti.ac.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: 'rgba(245,158,11,0.15)',
                  border: '1px solid rgba(245,158,11,0.2)',
                }}
              >
                <MapPin size={18} style={{ color: 'var(--flame-orange)' }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                  Location
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  IIT Indore, Khandwa Road,<br />Simrol, Indore 453552
                </p>
              </div>
            </div>

            <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/avana_iit_indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all"
                  style={{
                    background: 'rgba(236,72,153,0.1)',
                    border: '1px solid rgba(236,72,153,0.2)',
                    color: '#ec4899',
                  }}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/avana-iiti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all"
                  style={{
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    color: '#3b82f6',
                  }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all"
                  style={{
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    color: '#22c55e',
                  }}
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden min-h-[300px]"
            style={{ border: '1px solid var(--border)' }}
          >
            <iframe
              title="IITI Location"
              width="100%"
              height="100%"
              style={{ minHeight: '300px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4544370613653!2d75.92056217515605!3d22.524643434726464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sus!4v1755412711281!5m2!1sen!2sus"
              className="w-full h-full border-0"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Direct Contacts
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONTACTS.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${c.accent}12 0%, transparent 70%)` }}
              />
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: `${c.accent}15`,
                    border: `1px solid ${c.accent}25`,
                  }}
                >
                  {c.emoji}
                </div>
                <div>
                  <p className="font-bold" style={{ color: 'var(--text-primary)' }}>
                    {c.name}
                  </p>
                  <p className="text-xs" style={{ color: c.accent }}>
                    {c.title}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={`mailto:${c.email}`}
                  className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg text-xs transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Mail size={13} /> Email
                </a>
                <a
                  href={c.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg text-xs transition-all"
                  style={{
                    background: 'rgba(59,130,246,0.1)',
                    color: '#3b82f6',
                  }}
                >
                  <Linkedin size={13} /> LinkedIn
                </a>
                <a
                  href={c.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg text-xs transition-all"
                  style={{
                    background: 'rgba(236,72,153,0.1)',
                    color: '#ec4899',
                  }}
                >
                  <Instagram size={13} /> IG
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            style={{ background: '#22c55e', color: 'white' }}
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/avana-iiti"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            style={{ background: '#0a66c2', color: 'white' }}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/avana_iit_indore"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
              color: 'white',
            }}
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}