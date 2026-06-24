import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#faf8f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(28, 68, 66,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Weave pattern top-left */}
      <svg style={{ position: 'absolute', top: 0, left: 0, opacity: 0.05, width: 220, height: 220 }} viewBox="0 0 220 220">
        {[0,1,2,3,4,5,6].map(i => (
          <g key={i}>
            <line x1={i * 32} y1="0" x2={i * 32} y2="220" stroke="#1c4442" strokeWidth="1" />
            <line x1="0" y1={i * 32} x2="220" y2={i * 32} stroke="#1c4442" strokeWidth="1" />
          </g>
        ))}
      </svg>

      {/* Weave pattern bottom-right */}
      <svg style={{ position: 'absolute', bottom: 0, right: 0, opacity: 0.05, width: 220, height: 220 }} viewBox="0 0 220 220">
        {[0,1,2,3,4,5,6].map(i => (
          <g key={i}>
            <line x1={i * 32} y1="0" x2={i * 32} y2="220" stroke="#1c4442" strokeWidth="1" />
            <line x1="0" y1={i * 32} x2="220" y2={i * 32} stroke="#1c4442" strokeWidth="1" />
          </g>
        ))}
      </svg>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0 }}>

        {/* Brand Name */}
        <div style={{ display: 'flex', alignItems: 'center', justify: 'center', marginBottom: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 6vw, 44px)',
              fontWeight: 600,
              color: '#133835',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              display: 'flex',
              gap: '12px',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Fashion</span>
            <span style={{ fontStyle: 'italic', color: '#b56b46', fontWeight: 500 }}>
              Heritage
            </span>
          </motion.div>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #3d6966, #b56b46)', borderRadius: 2, marginBottom: 14, marginTop: 10 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          style={{
            fontSize: 10,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#b56b46',
            fontWeight: 500,
            marginBottom: 36,
          }}
        >
          Weaving Artistry & Heritage
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ width: 180, height: 3, background: '#eae2d3', borderRadius: 10, overflow: 'hidden' }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.0, delay: 1.2, ease: 'easeOut' }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #3d6966, #1c4442)', borderRadius: 10 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{ fontSize: 9, color: '#b56b46', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 10, fontWeight: 500 }}
        >
          Creating your experience…
        </motion.p>
      </div>

      {/* Smooth cream swipe-up exit — no dark flash */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ delay: 3.2, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#faf8f5',
          zIndex: 20,
        }}
      />
    </motion.div>
  );
}
