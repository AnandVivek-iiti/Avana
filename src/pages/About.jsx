import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb } from 'lucide-react';

const CARDS = [
  {
    icon: Target,
    title: 'Our Goal',
    accent: 'var(--green-mid)',
    body: 'Our primary objective at Avana is to lower poverty and promote social justice by providing vital support and resources to those in need. Through programs and initiatives, we empower people to overcome socio-economic barriers and achieve self-sufficiency.',
  },
  {
    icon: Shield,
    title: 'Our Principles',
    accent: 'var(--flame-orange)',
    body: 'At the heart of Avana lies the belief that inner healing happens through social healing. We operate on the fundamental principle of inclusivity — recognising every individual\'s inherent dignity and worth regardless of their background or circumstances.',
  },
  {
    icon: Lightbulb,
    title: 'Our Impact',
    accent: 'var(--flame-yellow)',
    body: 'Through concerted efforts, Avana catalyses positive change and makes a tangible difference in the lives of those we serve, striving towards a more compassionate, equitable, and inclusive society for all.',
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-24 px-6 min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--green-mid)' }}>
            Who We Are
          </span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8" style={{ color: 'var(--text-primary)' }}>
            About AVANA
          </h1>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-8"
            style={{ background: 'linear-gradient(to right, var(--green-mid), var(--flame-orange))' }}
          />
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Avana</span> — a Sanskrit word meaning <em>favour</em> and <em>protection</em> — is a compassionate social welfare club dedicated to uplifting the lives of underprivileged individuals. Founded on the principles of empathy and solidarity, we strive to create a more equitable society where everyone has access to essential resources and opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-10 mb-20 text-center overflow-hidden"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle at 50% 0%, var(--green-mid)10, transparent 70%)' }}
          />
          <span className="relative text-7xl font-black select-none" style={{ color: 'var(--green-mid)20' }}>
            "
          </span>
          <p className="relative text-2xl md:text-3xl font-bold -mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
            Striving For Change
          </p>
          <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            AVANA Club Motto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl group relative overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${c.accent}12 0%, transparent 70%)` }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `${c.accent}20`,
                  border: `1px solid ${c.accent}30`,
                }}
              >
                <c.icon size={22} style={{ color: c.accent }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 rounded-2xl"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-muted)' }}>
            Based At
          </p>
          <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Indian Institute of Technology Indore
          </h3>
          <p className="mt-2" style={{ color: 'var(--text-muted)' }}>
            Khandwa Road, Simrol, Indore — 453552, India
          </p>
        </motion.div>
      </div>
    </div>
  );
}