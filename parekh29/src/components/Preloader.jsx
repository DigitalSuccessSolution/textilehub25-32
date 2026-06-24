import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'expanding' | 'exiting'

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    if (phase === 'loading') {
      const duration = 2200;
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
          setPhase('expanding');
        }
      };

      animFrameId = requestAnimationFrame(animate);
      return () => { if (animFrameId) cancelAnimationFrame(animFrameId); };
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'expanding') {
      const timer = setTimeout(() => setPhase('exiting'), 700);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <motion.div
      animate={phase === 'exiting' ? { y: '-100%' } : { y: '0%' }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === 'exiting' && onComplete) onComplete();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#1a2118',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* ── Decorative Background Layer ── */}

      {/* Large blurred green blob — top left */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-120px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(71,86,67,0.55) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Large blurred terracotta blob — bottom right */}
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-100px',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(176,87,66,0.45) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none',
      }} />

      {/* Medium blurred gold blob — center right */}
      <div style={{
        position: 'absolute', top: '30%', right: '10%',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(176,87,66,0.2) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      {/* Small accent blob — center left */}
      <div style={{
        position: 'absolute', top: '55%', left: '8%',
        width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(88,106,83,0.35) 0%, transparent 70%)',
        filter: 'blur(35px)', pointerEvents: 'none',
      }} />

      {/* Diagonal grid lines overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.015) 0px,
            rgba(255,255,255,0.015) 1px,
            transparent 1px,
            transparent 40px
          )
        `,
        pointerEvents: 'none',
      }} />

      {/* Decorative floating circles */}
      {[
        { size: 180, top: '12%', left: '15%', opacity: 0.06 },
        { size: 120, top: '70%', left: '75%', opacity: 0.05 },
        { size: 80,  top: '45%', left: '88%', opacity: 0.07 },
        { size: 60,  top: '80%', left: '20%', opacity: 0.06 },
        { size: 300, top: '20%', right: '5%', opacity: 0.03 },
      ].map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: c.top, left: c.left, right: c.right,
            width: c.size, height: c.size,
            borderRadius: '50%',
            border: `1px solid rgba(255,255,255,${c.opacity})`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Corner decorative brackets */}
      {[
        { top: 24, left: 24 },
        { top: 24, right: 24 },
        { bottom: 24, left: 24 },
        { bottom: 24, right: 24 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...pos,
            width: 32, height: 32,
            borderTop: i < 2 ? '1px solid rgba(176,87,66,0.35)' : 'none',
            borderBottom: i >= 2 ? '1px solid rgba(176,87,66,0.35)' : 'none',
            borderLeft: (i === 0 || i === 2) ? '1px solid rgba(176,87,66,0.35)' : 'none',
            borderRight: (i === 1 || i === 3) ? '1px solid rgba(176,87,66,0.35)' : 'none',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ── Main Content ── */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>

        {/* Emblem mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            width: 52, height: 52,
            borderRadius: '8px 20px 8px 20px',
            background: 'rgba(71,86,67,0.3)',
            border: '1.5px solid rgba(176,87,66,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: '#ffffff' }}>I</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: '#e8b49a' }}>F</span>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 6vw, 44px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            display: 'flex',
            gap: '10px',
            whiteSpace: 'nowrap',
          }}
        >
          <span>Indian Fabric</span>
          <span style={{ fontStyle: 'italic', color: '#e8b49a', fontWeight: 500 }}>House</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginTop: 10,
            fontWeight: 500,
          }}
        >
          Premium Textile &amp; Retail Mall
        </motion.p>

        {/* Progress percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.6)',
            fontFamily: "'Outfit', sans-serif",
            marginTop: 36,
            letterSpacing: '0.1em',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ color: '#e8b49a', fontSize: 18, fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            {progress}
          </span>
          <span style={{ fontSize: 11, opacity: 0.6 }}>%</span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          style={{
            width: 'clamp(240px, 40vw, 340px)',
            height: '3px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '4px',
            overflow: 'hidden',
            marginTop: 12,
            position: 'relative',
          }}
        >
          {/* Filled track */}
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #475643, #b05742, #e8b49a)',
            borderRadius: '4px',
            transition: 'width 0.07s ease-out',
            position: 'relative',
          }}>
            {/* Glow tip */}
            <div style={{
              position: 'absolute',
              right: 0, top: '50%',
              transform: 'translateY(-50%)',
              width: 6, height: 6,
              borderRadius: '50%',
              background: '#e8b49a',
              boxShadow: '0 0 8px 2px rgba(232,180,154,0.7)',
            }} />
          </div>
        </motion.div>

        {/* Loading label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'expanding' || phase === 'exiting' ? 0 : 0.4 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginTop: 14,
          }}
        >
          Loading
        </motion.p>
      </div>

      {/* Bottom expanding line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={phase === 'expanding' || phase === 'exiting' ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: '0px', left: 0,
          width: '100vw', height: '2.5px',
          background: 'linear-gradient(90deg, transparent, #b05742, #e8b49a, #b05742, transparent)',
          transformOrigin: 'center',
          zIndex: 15,
        }}
      />
    </motion.div>
  );
}
