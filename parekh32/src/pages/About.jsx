import { motion } from 'framer-motion';

const C = {
  primary: '#4b739e',        // Steel Blue
  primaryLight: '#6a8db5',  // Light Steel Blue
  accent: '#c5a059',         // Warm Gold/Beige
  bg: '#ffffff',
  sand: '#f7f4ed',           // Soft Warm Sand
  border: '#d2dfed',         // Soft Blue-Grey Border
  soil: '#1a2a3a',           // Deep Slate Blue (Main Text)
  stone: '#536476',          // Muted Slate Text
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-left pt-14 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
            About Us
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.accent})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Cohesive Premium Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #f7f4ed 0%, #ffffff 100%)',
            borderRadius: '24px',
            border: `1.5px solid ${C.border}`,
            boxShadow: '0 20px 50px rgba(75, 115, 158, 0.08)',
            overflow: 'hidden',
          }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 p-6 sm:p-10 lg:p-14"
        >
          {/* Left Column (Large Image - Arched Top) */}
          <div className="lg:w-1/2 w-full flex-shrink-0">
            <div 
              style={{
                width: '100%',
                borderRadius: '160px 160px 24px 24px',
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 12px 30px rgba(75, 115, 158, 0.06)',
                overflow: 'hidden',
                background: '#ffffff',
                aspectRatio: '4/3'
              }}
            >
              <img
                src="/images/about_craftsmanship.png"
                alt="WEAVION Weaving Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column (Text details) */}
          <div className="lg:w-1/2 w-full text-left">
            <span style={{ color: C.accent }} className="text-[11px] font-bold tracking-[0.25em] uppercase">Our Story</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Celebrating Craftsmanship & Luxury
            </h2>
            
            <p style={{ color: C.stone, fontSize: '1.05rem', lineHeight: '1.75' }} className="margin-0 font-normal">
              WEAVION is India's premier textile destination, dedicated to celebrating handloom weaving traditions and high-quality modern retail textiles. We collaborate directly with master artisans to curate high-quality fabrics, heritage sarees, and luxury home linen for retail and commercial partners nationwide.
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
