import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exiting'

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
          setPhase('complete');
        }
      };

      animFrameId = requestAnimationFrame(animate);
      return () => { if (animFrameId) cancelAnimationFrame(animFrameId); };
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'complete') {
      const timer = setTimeout(() => setPhase('exiting'), 700);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <motion.div
      animate={phase === 'exiting' ? { y: '-100%' } : { y: '0%' }}
      initial={{ y: '0%' }}
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === 'exiting' && onComplete) onComplete();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background gradient - Cream to soft steel-blue */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #f7f4ed 0%, #e8eff6 100%)',
      }} />

      {/* Soft steel-blue & gold glow blobs */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(75, 115, 158, 0.15) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '8%',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(75, 115, 158, 0.08) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(75, 115, 158, 0.03) 0px, rgba(75, 115, 158, 0.03) 1px,
            transparent 1px, transparent 50px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(75, 115, 158, 0.03) 0px, rgba(75, 115, 158, 0.03) 1px,
            transparent 1px, transparent 50px
          )
        `,
        pointerEvents: 'none',
      }} />

      {/* Floating decorative circles */}
      {[
        { size: 220, top: '6%', left: '8%', opacity: 0.06 },
        { size: 150, top: '70%', left: '76%', opacity: 0.05 },
        { size: 100, top: '46%', left: '88%', opacity: 0.07 },
        { size: 80,  top: '80%', left: '16%', opacity: 0.05 },
      ].map((c, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: c.top, left: c.left,
            width: c.size, height: c.size,
            borderRadius: '50%',
            border: `1px solid rgba(75, 115, 158, ${c.opacity * 4})`,
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
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.08 }}
          style={{
            position: 'absolute', ...pos,
            width: 36, height: 36,
            borderTop: i < 2 ? '1.5px solid rgba(197, 160, 89, 0.45)' : 'none',
            borderBottom: i >= 2 ? '1.5px solid rgba(197, 160, 89, 0.45)' : 'none',
            borderLeft: (i === 0 || i === 2) ? '1.5px solid rgba(197, 160, 89, 0.45)' : 'none',
            borderRight: (i === 1 || i === 3) ? '1.5px solid rgba(197, 160, 89, 0.45)' : 'none',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ── Main Content ── */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>

        {/* Crown icon emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            width: 72, height: 72,
            borderRadius: '16px 32px 16px 32px',
            background: 'rgba(75, 115, 158, 0.15)',
            border: '1.5px solid rgba(197, 160, 89, 0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 24,
            boxShadow: '0 0 50px rgba(75, 115, 158, 0.2)',
          }}
        >
          <Crown size={32} color="#c5a059" />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px, 6vw, 50px)',
            fontWeight: 700,
            color: '#1a2a3a',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          <span>WEA</span>
          <span style={{ fontStyle: 'italic', color: '#c5a059', fontWeight: 500 }}>VION</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            fontSize: '10px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#536476',
            marginTop: 10,
            fontWeight: 500,
          }}
        >
          Premium Textile Retail
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          style={{
            width: 90, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.8), rgba(75, 115, 158, 0.6), transparent)',
            marginTop: 22, marginBottom: 4,
          }}
        />

        {/* Progress percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#536476',
            fontFamily: "'DM Sans', sans-serif",
            marginTop: 28,
            letterSpacing: '0.12em',
            display: 'flex',
            alignItems: 'baseline',
            gap: 4,
          }}
        >
          <span style={{ color: '#c5a059', fontSize: 26, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            {progress}
          </span>
          <span style={{ fontSize: 13, opacity: 0.6 }}>%</span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            width: 'clamp(220px, 40vw, 340px)',
            height: '3px',
            background: 'rgba(75, 115, 158, 0.1)',
            borderRadius: '4px',
            overflow: 'hidden',
            marginTop: 12,
            position: 'relative',
          }}
        >
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #4b739e, #6a8db5, #c5a059)',
            borderRadius: '4px',
            transition: 'width 0.07s ease-out',
            position: 'relative',
          }}>
            {/* Glow tip */}
            <div style={{
              position: 'absolute',
              right: 0, top: '50%',
              transform: 'translateY(-50%)',
              width: 8, height: 8,
              borderRadius: '50%',
              background: '#c5a059',
              boxShadow: '0 0 12px 4px rgba(197, 160, 89, 0.9)',
            }} />
          </div>
        </motion.div>

        {/* Loading label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'complete' || phase === 'exiting' ? 0 : 0.36 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          style={{
            fontSize: '10px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#536476',
            marginTop: 14,
          }}
        >
          Loading
        </motion.p>

        {/* Complete checkmark */}
        {(phase === 'complete' || phase === 'exiting') && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              marginTop: 18,
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(197,160,89,0.2)',
              border: '1.5px solid rgba(197,160,89,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        )}
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
          background: 'linear-gradient(90deg, transparent, #4b739e, #c5a059, #4b739e, transparent)',
          transformOrigin: 'center',
          zIndex: 15,
        }}
      />
    </motion.div>
  );
}
