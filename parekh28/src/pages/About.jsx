import { motion } from 'framer-motion';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const C = {
  primary: '#745b9f',       // Deep Teal
  primaryLight: '#8e77b4',  // Medium Teal
  accent: '#e37a6b',        // Terracotta / Rust
  bg: '#faf8fc',            // Warm Cream
  sand: '#f3ebf7',          // Light Sand
  border: '#ebdff2',        // Beige Border
  soil: '#2c1e43',          // Dark Teal Text
  stone: '#66587c',         // Muted Brown Text
};



export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>
      
      

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-left pt-32 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 500, color: C.soil, margin: '0 0 10px' }}>
            About Us
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.accent})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column (Text - Shortened) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <span style={{ color: C.accent }} className="text-[10px] font-bold tracking-[0.2em] uppercase">Our Story</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl sm:text-4xl font-bold mt-3 mb-6 leading-tight">
              Celebrating Craftsmanship & Luxury
            </h2>
            
            <p style={{ color: C.stone }} className="text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Loom & Luxury is India's premier textile destination, dedicated to celebrating handloom weaving traditions. We collaborate directly with master artisans to curate high-quality fabrics, heritage sarees, and luxury home linen for retail and commercial partners nationwide.
            </p>
          </motion.div>
  
          {/* Right Column (Circular Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 flex justify-center items-center"
          >
            <div 
              style={{
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 16px 40px rgba(44, 30, 67, 0.08)',
                overflow: 'hidden',
                background: '#faf8fc',
              }}
            >
              <img
                src="/images/about.png"
                alt="Loom & Luxury Artisans & Textiles"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
