import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, FILTERS } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter]   = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.tag === filter);

  const selectedIdx = selected ? filtered.findIndex((g) => g === selected) : -1;
  const goPrev = () => setSelected(filtered[(selectedIdx - 1 + filtered.length) % filtered.length]);
  const goNext = () => setSelected(filtered[(selectedIdx + 1) % filtered.length]);

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

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
              style={
                filter === f
                  ? { background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)', color: 'var(--green-mid)' }
                  : { background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: '1px solid var(--border)' }}
                onClick={() => setSelected(item)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${item.color}99, transparent 60%)` }}
                />

                {/* caption slide-up */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-bold text-white">{item.caption}</p>
                  <span
                    className="inline-block mt-1 px-2 py-0.5 rounded-md text-xs font-semibold"
                    style={{ background: `${item.color}40`, color: '#fff' }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* zoom icon */}
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg backdrop-blur-sm flex items-center justify-center
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.4)' }}
                >
                  <ZoomIn size={14} className="text-white" />
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

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ background: 'rgba(0,0,0,0.85)' }}
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              style={{ border: `1px solid ${selected.color}40` }}
            >
              <img
                src={selected.src}
                alt={selected.caption}
                className="w-full max-h-[80vh] object-contain"
                style={{ background: '#000' }}
              />

              {/* caption bar */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center gap-3"
                style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)' }}
              >
                <span className="text-2xl">{selected.emoji}</span>
                <div>
                  <p className="font-bold text-white">{selected.caption}</p>
                  <span
                    className="inline-block mt-0.5 px-2 py-0.5 rounded-md text-xs font-semibold"
                    style={{ background: `${selected.color}30`, color: selected.color }}
                  >
                    {selected.tag}
                  </span>
                </div>
                <p className="ml-auto text-xs text-white/50">{selectedIdx + 1} / {filtered.length}</p>
              </div>

              {/* close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition"
              >
                <X size={18} />
              </button>

              {/* prev / next */}
              {filtered.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}