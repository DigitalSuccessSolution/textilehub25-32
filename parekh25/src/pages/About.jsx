import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  cream: '#FDF9F2',
  border: '#EBE4D4',
  stone: '#6B5B45',
};

const highlights = [
  { icon: Award, value: '25+', label: 'Years of Heritage' },
  { icon: Users, value: '25L+', label: 'Happy Customers' },
  { icon: Globe, value: '5000+', label: 'Retail Outlets' },
  { icon: CheckCircle, value: '100%', label: 'Quality Assured' },
];

const values = [
  'Sustainably sourced raw materials & eco-friendly dyes',
  'Direct partnerships with skilled artisan weaver clusters',
  'Rigorous quality checks at every production stage',
  'Fair trade practices ensuring artisan well-being',
  'Nationwide distribution across 5000+ retail outlets',
];

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }}>

      {/* Hero */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            About Textile Paradise
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute', top: -12, left: -12,
              width: '85%', height: '95%',
              borderRadius: 28,
              border: `1.5px solid ${C.primaryLight}`,
              opacity: 0.35, zIndex: 0,
            }} />
            <div style={{
              borderRadius: '28px 28px 100px 28px',
              overflow: 'hidden',
              border: `1px solid ${C.border}`,
              position: 'relative', zIndex: 1,
              aspectRatio: '4/5',
              boxShadow: '0 20px 60px rgba(74,55,40,0.12)',
            }}>
              <img
                src="/images/about.png"
                alt="Textile Paradise Artisans"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(74,55,40,0.3) 0%, transparent 60%)',
              }} />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ textAlign: 'left' }}
          >
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 500, color: C.soil, marginBottom: 14, lineHeight: 1.3 }}>
              Honoring Heritage Through Sustainable Threadcraft
            </h2>
            <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, marginBottom: 20 }} />

            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: C.stone, marginBottom: 18, fontWeight: 400 }}>
              Established in 1999, <strong style={{ color: C.soil, fontWeight: 500 }}>Textile Paradise</strong> has grown to become India's premier fabric and apparel destination. We curate a vast collection of high-quality fabrics, heritage sarees, fine dress materials, premium suiting and shirting, and luxury home linen, catering to both retail shoppers and commercial B2B clients nationwide.
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: C.stone, marginBottom: 28, fontWeight: 400 }}>
              Our mission is to celebrate India's rich handloom weaving traditions while adopting modern, eco-friendly manufacturing technologies. By collaborating directly with master weavers and artisan cooperatives across key clusters, we ensure authentic craftsmanship, direct fair trade wages, and unmatched material standards delivered across our extensive network of over 5000 retail outlets.
            </p>

            {/* Values list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {values.map((v, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(139,105,20,0.12)', border: `1px solid ${C.primaryLight}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.primary }} />
                  </div>
                  <span style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.6, fontWeight: 400 }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
