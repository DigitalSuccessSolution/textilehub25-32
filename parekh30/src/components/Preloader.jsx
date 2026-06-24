import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exiting'

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    if (phase === 'loading') {
      const duration = 2000;
      let startTime = null;
      let animFrameId = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progressRatio = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progressRatio);
        const currentProgress = Math.floor(easedProgress * 100);
        setProgress(currentProgress);

        if (progressRatio < 1) {
          animFrameId = requestAnimationFrame(animate);
        } else {
          setPhase('complete');
        }
      };

      animFrameId = requestAnimationFrame(animate);
      return () => { if (animFrameId) cancelAnimationFrame(animFrameId); };
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'complete') {
      const timer = setTimeout(() => setPhase('exiting'), 600);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <motion.div
      animate={phase === 'exiting' ? { clipPath: 'inset(0 0 100% 0)' } : { clipPath: 'inset(0 0 0% 0)' }}
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === 'exiting' && onComplete) onComplete();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #061818 0%, #0a2828 40%, #0d3333 100%)',
      }} />

      {/* Teal glow blobs */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,107,107,0.55) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,146,42,0.35) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '35%', right: '12%',
        width: '250px', height: '250px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,107,107,0.2) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px,
            transparent 1px, transparent 48px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px,
            transparent 1px, transparent 48px
          )
        `,
        pointerEvents: 'none',
      }} />

      {/* Floating decorative circles */}
      {[
        { size: 200, top: '8%', left: '10%', opacity: 0.05 },
        { size: 140, top: '72%', left: '78%', opacity: 0.04 },
        { size: 90,  top: '48%', left: '90%', opacity: 0.06 },
        { size: 70,  top: '82%', left: '18%', opacity: 0.05 },
      ].map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: c.top, left: c.left,
            width: c.size, height: c.size,
            borderRadius: '50%',
            border: `1px solid rgba(14,107,107,${c.opacity * 5})`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Corner brackets */}
      {[
        { top: 28, left: 28 },
        { top: 28, right: 28 },
        { bottom: 28, left: 28 },
        { bottom: 28, right: 28 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', ...pos,
            width: 36, height: 36,
            borderTop: i < 2 ? '1.5px solid rgba(200,146,42,0.4)' : 'none',
            borderBottom: i >= 2 ? '1.5px solid rgba(200,146,42,0.4)' : 'none',
            borderLeft: (i === 0 || i === 2) ? '1.5px solid rgba(200,146,42,0.4)' : 'none',
            borderRight: (i === 1 || i === 3) ? '1.5px solid rgba(200,146,42,0.4)' : 'none',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ── Main Content ── */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>

        {/* Gem icon emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            width: 64, height: 64,
            borderRadius: '14px 28px 14px 28px',
            background: 'rgba(14,107,107,0.3)',
            border: '1.5px solid rgba(200,146,42,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 22,
            boxShadow: '0 0 40px rgba(14,107,107,0.3)',
          }}
        >
          <Gem size={28} color="#c8922a" />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 6vw, 46px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          <span>Textile </span>
          <span style={{ fontStyle: 'italic', color: '#c8922a', fontWeight: 500 }}>Treasure</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginTop: 10,
            fontWeight: 500,
          }}
        >
          Premium Textile Mall
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            width: 80, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(200,146,42,0.7), transparent)',
            marginTop: 20, marginBottom: 4,
          }}
        />

        {/* Progress percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.55)',
            fontFamily: "'DM Sans', sans-serif",
            marginTop: 28,
            letterSpacing: '0.12em',
            display: 'flex',
            alignItems: 'baseline',
            gap: 4,
          }}
        >
          <span style={{ color: '#c8922a', fontSize: 22, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            {progress}
          </span>
          <span style={{ fontSize: 12, opacity: 0.6 }}>%</span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            width: 'clamp(220px, 38vw, 320px)',
            height: '3px',
            background: 'rgba(255,255,255,0.07)',
            borderRadius: '4px',
            overflow: 'hidden',
            marginTop: 10,
            position: 'relative',
          }}
        >
          {/* Track */}
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #0e6b6b, #c8922a, #e0b84a)',
            borderRadius: '4px',
            transition: 'width 0.07s ease-out',
            position: 'relative',
          }}>
            {/* Glow tip */}
            <div style={{
              position: 'absolute',
              right: 0, top: '50%',
              transform: 'translateY(-50%)',
              width: 7, height: 7,
              borderRadius: '50%',
              background: '#c8922a',
              boxShadow: '0 0 10px 3px rgba(200,146,42,0.8)',
            }} />
          </div>
        </motion.div>

        {/* Loading label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'complete' || phase === 'exiting' ? 0 : 0.38 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.38)',
            marginTop: 14,
          }}
        >
          Loading
        </motion.p>
      </div>

      {/* Gold sweep line on complete */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={phase === 'complete' || phase === 'exiting' ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: '0px', left: 0,
          width: '100vw', height: '3px',
          background: 'linear-gradient(90deg, transparent, #0e6b6b, #c8922a, #0e6b6b, transparent)',
          transformOrigin: 'center',
          zIndex: 15,
        }}
      />
    </motion.div>
  );
}
