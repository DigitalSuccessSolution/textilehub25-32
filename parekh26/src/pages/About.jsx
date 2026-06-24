import { motion } from 'framer-motion';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const C = {
  primary: '#7c8e76',       // Sage Green
  primaryLight: '#a3b89d',  // Soft Sage
  accent: '#d57e65',        // Terracotta Peach
  bg: '#faf8f5',            // Warm Cream
  sand: '#f2ebe1',          // Light Sand
  border: '#eae2d3',        // Beige Border
  soil: '#2b1f15',          // Dark Brown Text
  stone: '#5a4d41',         // Muted Brown Text
};



export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>
      
      

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-left pt-32 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 500, color: C.soil, margin: '0 0 10px' }}>
            About Texmart
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.accent})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column (Text - Reduced) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span style={{ color: C.accent }} className="text-[10px] font-bold tracking-[0.2em] uppercase">Our Story ——</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl sm:text-4xl font-bold mt-3 mb-6 leading-tight">
              Honoring Heritage Through Sustainable Threadcraft
            </h2>
            
            <p style={{ color: C.stone }} className="text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Established with a commitment to excellence, <strong>Texmart</strong> has grown to become India's premier fabric and apparel destination. We curate a vast collection of high-quality fabrics, heritage sarees, fine dress materials, and luxury home linen, catering to both retail shoppers and commercial B2B clients nationwide.
            </p>
            
            <p style={{ color: C.stone }} className="text-sm sm:text-base leading-relaxed mb-8">
              Our mission is to celebrate India's rich handloom weaving traditions while adopting modern, eco-friendly manufacturing technologies. By collaborating directly with master weavers and artisan cooperatives, we ensure authentic craftsmanship, fair wages, and unmatched material standards delivered across our extensive network.
            </p>

           
          </motion.div>

          {/* Right Column (Square Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div 
              style={{
                borderRadius: '16px',
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 16px 40px rgba(43, 31, 21, 0.08)',
              }}
              className="aspect-square overflow-hidden bg-stone-100"
            >
              <img
                src="/images/about.png"
                alt="Texmart Artisans & Textiles"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
