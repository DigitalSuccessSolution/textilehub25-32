import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#1c4442',       // Deep Teal
  primaryLight: '#3d6966',  // Medium Teal
  accent: '#b56b46',        // Terracotta / Rust
  bg: '#faf8f5',            // Warm Cream
  sand: '#f2ebe1',          // Light Sand
  border: '#eae2d3',        // Beige Border
  soil: '#133835',          // Dark Teal Text
  stone: '#5a4d41',         // Muted Brown Text
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['123 Textile Avenue', 'Fashion & Weaving District, Ahmedabad, India'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329', '1800 120 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['info@fashionheritage.com', 'sales@fashionheritage.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>
      
      

      {/* Main Content (2-Column Grid) */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 text-left pt-32 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Contact Us
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.accent})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (4 Contact Cards stacked) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4 justify-between"
          >
            {contactDetails.map(({ icon: Icon, label, lines }) => (
              <div
                key={label}
                className="card-hover flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm"
                style={{
                  border: `1.5px solid ${C.border}`,
                }}
              >
                <div 
                  style={{ 
                    background: 'rgba(124, 142, 118, 0.08)',
                    border: `1px solid rgba(163, 184, 157, 0.2)` 
                  }} 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0"
                >
                  <Icon size={18} style={{ color: C.primary }} />
                </div>
                <div>
                  <p style={{ color: C.accent }} className="text-[10px] font-bold uppercase tracking-widest mb-1.5">
                    {label}
                  </p>
                  {lines.map((line, i) => (
                    <p key={i} style={{ color: C.soil }} className="text-xs sm:text-[13.5px] leading-relaxed font-medium margin-0">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column (Google Map matching height) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div 
              style={{
                borderRadius: '16px',
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 8px 32px rgba(43, 31, 21, 0.06)',
                height: '100%',
                minHeight: '400px'
              }}
              className="overflow-hidden w-full relative"
            >
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', filter: 'grayscale(0.6) contrast(1.05) opacity(0.95)', minHeight: '400px' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fashion Heritage Textile Mall Location"
              />
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
