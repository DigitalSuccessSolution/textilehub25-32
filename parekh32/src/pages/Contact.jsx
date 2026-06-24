import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['WEAVION, Block A', 'Textile Park, Surat, Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['info@weaviontextile.com', 'sales@weaviontextile.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>
      
      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 text-left pt-14 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Contact Us
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.accent})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Split screen content layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch mt-10">
          
          {/* Left Column: Contact Cards Stack */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                key={label}
                className="card-hover flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm"
                style={{
                  border: `1.5px solid ${C.border}`,
                }}
              >
                <div 
                  style={{ 
                    background: 'rgba(75, 115, 158, 0.08)',
                    border: `1px solid rgba(75, 115, 158, 0.15)` 
                  }} 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                >
                  <Icon size={20} style={{ color: C.primary }} />
                </div>
                <div>
                  <p style={{ color: C.accent, margin: '0 0 4px' }} className="text-[11px] font-bold uppercase tracking-wider">
                    {label}
                  </p>
                  {lines.map((line, i) => (
                    <p key={i} style={{ color: C.soil }} className="text-[14px] leading-relaxed font-semibold m-0">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Google Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div 
              style={{
                borderRadius: '24px',
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 12px 32px rgba(75, 115, 158, 0.08)',
                height: '100%',
                minHeight: '400px'
              }}
              className="overflow-hidden w-full relative"
            >
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', filter: 'grayscale(0.1) contrast(1.02)', height: '100%', minHeight: '400px' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WEAVION Textile Retail Location"
              />
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
