import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const GALLERY_ITEMS = [
  { caption: 'Blood Donation Camp', tag: 'Health', color: '#f43f5e', emoji: '🩸' },
  { caption: 'Blood Donation Camp', tag: 'Health', color: '#f43f5e', emoji: '🩸' },
  { caption: 'Blood Donation Camp', tag: 'Health', color: '#f43f5e', emoji: '🩸' },
  { caption: 'Margdarshan Session', tag: 'Education', color: '#3b82f6', emoji: '🧭' },
  { caption: 'Margdarshan Session', tag: 'Education', color: '#3b82f6', emoji: '🧭' },
  { caption: 'Margdarshan Session', tag: 'Education', color: '#3b82f6', emoji: '🧭' },
  { caption: 'Cloth Donation Drive', tag: 'Welfare', color: '#10b981', emoji: '👕' },
  { caption: 'Diwali Celebration', tag: 'Culture', color: '#f59e0b', emoji: '✨' },
  { caption: 'Old Age Home Visit', tag: 'Community', color: '#8b5cf6', emoji: '🏠' },
];

const FILTERS = ['All', 'Health', 'Education', 'Welfare', 'Culture', 'Community'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.tag === filter);

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--green-mid)' }}>
            Memories
          </span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>
            Gallery
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Moments captured from our events and initiatives.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
              style={
                filter === f
                  ? {
                      background: 'rgba(16,185,129,0.2)',
                      border: '1px solid rgba(16,185,129,0.4)',
                      color: 'var(--green-mid)',
                    }
                  : {
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }
              }
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.caption}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelected(item)}
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
                  border: '1px solid var(--border)',
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-7xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${item.color}40, transparent)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-bold" style={{ color: 'var(--text-primary)' }}>
                    {item.caption}
                  </p>
                  <span
                    className="inline-block mt-1 px-2 py-0.5 rounded-md text-xs font-semibold"
                    style={{ background: `${item.color}30`, color: item.color }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={14} style={{ color: 'var(--text-primary)' }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: 'var(--text-muted)' }}>
            No items in this category.
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ background: 'rgba(0,0,0,0.8)' }}
          >
            <motion.div
              className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: `linear-gradient(135deg, ${selected.color}25, ${selected.color}10)`,
                border: `1px solid ${selected.color}30`,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-9xl mb-4">{selected.emoji}</span>
                <p className="text-xl font-bold text-white">{selected.caption}</p>
                <span
                  className="mt-2 px-3 py-1 rounded-full text-sm"
                  style={{ background: `${selected.color}25`, color: selected.color }}
                >
                  {selected.tag}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}