import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

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

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['Vastra Royale, Block A', 'Textile Park, Surat, Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['info@vastraroyale.com', 'sales@vastraroyale.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>
      
      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 text-left pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Contact Us
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.accent})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Top: Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={label}
              className="card-hover flex flex-col items-center text-center gap-3 p-8 rounded-2xl bg-white shadow-sm"
              style={{
                border: `1.5px solid ${C.border}`,
              }}
            >
              <div 
                style={{ 
                  background: 'rgba(91, 79, 207, 0.06)',
                  border: `1px solid rgba(91, 79, 207, 0.12)` 
                }} 
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 mb-3"
              >
                <Icon size={24} style={{ color: C.primary }} />
              </div>
              <div>
                <p style={{ color: C.accent }} className="text-[11px] font-bold uppercase tracking-widest mb-3">
                  {label}
                </p>
                {lines.map((line, i) => (
                  <p key={i} style={{ color: C.soil }} className="text-[13.5px] leading-relaxed font-medium m-0">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom: Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <div 
            style={{
              borderRadius: '24px',
              border: `1px solid ${C.border}`,
              boxShadow: '0 12px 32px rgba(91, 79, 207, 0.08)',
              height: '450px'
            }}
            className="overflow-hidden w-full relative"
          >
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.4) contrast(1.05)', height: '100%' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vastra Royale Textile Mall Location"
            />
          </div>
        </motion.div>
      </div>

    </div>
  );
}
