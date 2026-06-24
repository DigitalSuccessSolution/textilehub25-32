import { motion } from 'framer-motion';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const C = {
  primary: '#5b4fcf',       // Deep Forest Green
  primaryLight: '#7b6fdf',  // Medium Forest Green
  accent: '#c8922a',        // Terracotta Accent
  bg: '#ffffff',            // Warm Cream
  sand: '#f5f0e8',          // Light Sand
  border: '#d8cff0',        // Beige Border
  soil: '#1a1435',          // Dark Green-Charcoal Text
  stone: '#6b6080',         // Muted Text
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-left pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
            About Us
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.accent})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mt-10">
          
          {/* Left Column (Large Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div 
              style={{
                width: '100%',
                borderRadius: '24px',
                border: `1px solid ${C.border}`,
                boxShadow: '0 20px 40px rgba(91, 79, 207, 0.08)',
                overflow: 'hidden',
                background: '#ffffff',
                aspectRatio: '4/3'
              }}
            >
              <img
                src="/images/about_hero.png"
                alt="Premium Textile Assortment"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Right Column (Text) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:w-1/2 w-full"
          >
            <span style={{ color: C.accent }} className="text-[11px] font-bold tracking-[0.25em] uppercase">Our Story</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">
              Celebrating Craftsmanship & Luxury
            </h2>
            
            <p style={{ color: C.stone, fontSize: '1.15rem' }} className="leading-relaxed mb-6 font-normal">
              Vastra Royale is India's premier textile destination, dedicated to celebrating handloom weaving traditions. We collaborate directly with master artisans to curate high-quality fabrics, heritage sarees, and luxury home linen for retail and commercial partners nationwide.
            </p>
          </motion.div>
  
        </div>
      </div>

    </div>
  );
}
