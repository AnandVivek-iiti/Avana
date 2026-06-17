import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { EVENTS } from '../data/events';

function EventImageCarousel({ images, accent, emoji }) {
  const [idx, setIdx] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-xl"
        style={{ background: `${accent}10`, border: `1px dashed ${accent}30` }}
      >
        <span className="text-4xl">{emoji}</span>
        <span className="text-[10px] font-medium" style={{ color: `${accent}80` }}>Photos coming soon</span>
      </div>
    );
  }

  const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length) ; };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group/carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`event-${idx}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center
                       opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}
          >
            <ChevronLeft size={14} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center
                       opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}
          >
            <ChevronRight size={14} className="text-white" />
          </button>

          {/* dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === idx ? 16 : 5,
                  height: 5,
                  background: i === idx ? accent : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* image count badge */}
      <div
        className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-semibold"
        style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', color: '#fff' }}
      >
        {idx + 1}/{images.length}
      </div>
    </div>
  );
}

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
              {/* left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: ev.accent }}
              />
              {/* hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 0% 50%, ${ev.accent}08 0%, transparent 60%)` }}
              />

              <div className="relative flex flex-col lg:flex-row gap-6">
                {/* Left: meta + desc + highlights */}
                <div className="flex-1 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{ev.emoji}</span>
                    <div>
                      <span
                        className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-2"
                        style={{ background: `${ev.accent}20`, color: ev.accent, border: `1px solid ${ev.accent}30` }}
                      >
                        {ev.tag}
                      </span>
                      <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {ev.name}
                      </h3>
                    </div>
                  </div>

                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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

                {/* Right: image carousel */}
                <div className="lg:w-72 xl:w-80 h-48 lg:h-auto flex-shrink-0">
                  <EventImageCarousel images={ev.images} accent={ev.accent} emoji={ev.emoji} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}