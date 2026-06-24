import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  cream: '#FDF9F2',
  border: '#EBE4D4',
  stone: '#6B5B45',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['123 Textile Avenue', 'Fashion & Weaving District, Ahmedabad, India'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['info@textileparadise.com', 'sales@textileparadise.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }}>

      {/* Hero */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Contact Us
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 py-14 pb-24 space-y-10">

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {contactDetails.map(({ icon: Icon, label, lines }) => (
            <div
              key={label}
              className="card-hover"
              style={{
                borderRadius: 16, padding: '24px 22px',
                background: 'white', border: `1px solid ${C.border}`,
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(139,105,20,0.08)',
                border: `1px solid rgba(196,163,90,0.2)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                <Icon size={18} color={C.primary} />
              </div>
              <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.2em', color: C.primaryLight, margin: '0 0 8px', fontWeight: 400 }}>
                {label}
              </p>
              {lines.map((line, i) => (
                <p key={i} style={{ fontSize: 13.5, color: C.soil, margin: 0, lineHeight: 1.6, fontWeight: 400 }}>{line}</p>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Map full-width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            borderRadius: 20, overflow: 'hidden',
            border: `1px solid ${C.border}`,
            height: 460,
            boxShadow: '0 4px 24px rgba(74,55,40,0.06)',
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', filter: 'grayscale(1) contrast(1.1) opacity(0.95)' }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Textile Paradise Location"
          />
        </motion.div>
      </div>
    </div>
  );
}
