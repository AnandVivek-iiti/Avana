import { motion } from 'framer-motion';

const EVENTS = [
  {
    name: 'Margdarshan',
    tag: 'Education',
    emoji: '🧭',
    accent: '#3b82f6',
    desc: 'A flagship career guidance program connecting underprivileged students with IIT Indore mentors for academic and professional direction.',
    highlights: ['Mock interviews', 'Career counselling', 'Subject mentorship', '100+ students guided'],
  },
  {
    name: 'Blood Donation Camp',
    tag: 'Health',
    emoji: '🩸',
    accent: '#f43f5e',
    desc: 'Life-saving blood donation drives organized on campus in collaboration with regional hospitals and blood banks.',
    highlights: ['On-campus drives', 'Hospital partnerships', 'Awareness sessions', 'Emergency response'],
  },
  {
    name: 'Cloth Donation Drive',
    tag: 'Welfare',
    emoji: '👕',
    accent: '#10b981',
    desc: 'Collecting and distributing warm clothing to families in need, especially before winter months.',
    highlights: ['Campus collections', 'Community distribution', 'Winter relief', 'All-year active'],
  },
  {
    name: 'Old Age Home Visit',
    tag: 'Community',
    emoji: '🏠',
    accent: '#f59e0b',
    desc: 'Regular visits to care homes in Indore to spend quality time with elderly residents, bringing joy and companionship.',
    highlights: ['Monthly visits', 'Cultural programs', 'Gift distributions', 'Personal bonding'],
  },
  {
    name: 'Diwali Celebration',
    tag: 'Culture',
    emoji: '✨',
    accent: '#8b5cf6',
    desc: 'Spreading the festival of lights to underprivileged communities — with sweets, gifts, and celebrations for all.',
    highlights: ['Community celebrations', 'Children\'s programs', 'Gift distributions', 'Festival events'],
  },
];

export default function Events() {
  return (
    <div className="pt-24 pb-24 px-6 min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--green-mid)' }}>
            What We Do
          </span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>
            Our Events
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Every event is a step towards a more compassionate society.
          </p>
        </motion.div>

        <div className="space-y-6">
          {EVENTS.map((ev, i) => (
            <motion.div
              key={ev.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: ev.accent }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 0% 50%, ${ev.accent}08 0%, transparent 60%)` }}
              />

              <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-4 md:w-64 shrink-0">
                  <span className="text-5xl">{ev.emoji}</span>
                  <div>
                    <span
                      className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-2"
                      style={{
                        background: `${ev.accent}20`,
                        color: ev.accent,
                        border: `1px solid ${ev.accent}30`,
                      }}
                    >
                      {ev.tag}
                    </span>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {ev.name}
                    </h3>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {ev.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ev.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: 'var(--bg-layer)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}