import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'expanding' | 'exiting'

  // Cubic ease-out function for liquid smooth loading progress
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    if (phase === 'loading') {
      const duration = 2200; // 2.2 seconds for a premium, smooth experience
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
      return () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
      };
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'expanding') {
      // 800ms line expansion animation
      const timer = setTimeout(() => {
        setPhase('exiting');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <motion.div
      animate={phase === 'exiting' ? { y: '-100%' } : { y: '0%' }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === 'exiting' && onComplete) {
          onComplete();
        }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#faf8fc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(116, 91, 159, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main Container */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 8vw, 48px)',
            fontWeight: 600,
            color: '#2c1e43',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            display: 'flex',
            gap: '12px',
            whiteSpace: 'nowrap',
          }}
        >
          <span>Loom &</span>
          <span style={{ fontStyle: 'italic', color: '#e37a6b', fontWeight: 500 }}>
            Luxury
          </span>
        </motion.div>

        {/* Progress percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: '18px',
            fontWeight: 500,
            color: '#745b9f',
            fontFamily: "'Playfair Display', serif",
            marginTop: '24px',
            letterSpacing: '0.05em'
          }}
        >
          {progress}%
        </motion.div>

        {/* Progress Bar Line */}
        <div style={{
          width: '200px',
          height: '2px',
          background: '#ebdff2',
          borderRadius: '2px',
          overflow: 'hidden',
          marginTop: '10px'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #8e77b4, #745b9f)',
            transition: 'width 0.08s ease-out'
          }} />
        </div>
      </div>

      {/* Expanding line from center - Positioned absolutely at the BOTTOM */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={phase === 'expanding' || phase === 'exiting' ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: '0px', // Placed exactly at the bottom edge of the preloader container
          left: 0,
          width: '100vw',
          height: '2.5px',
          background: 'linear-gradient(90deg, transparent, #e37a6b, transparent)',
          transformOrigin: 'center',
          zIndex: 15,
        }}
      />
    </motion.div>
  );
}
