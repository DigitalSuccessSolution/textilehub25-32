import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  cream: '#FDF9F2',
  border: '#EBE4D4',
  stone: '#6B5B45',
};

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', salary: '₹8,00,000 - ₹12,00,000 PA', description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', salary: '₹9,00,000 - ₹14,00,000 PA', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', salary: '₹5,00,000 - ₹8,00,000 PA', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', salary: '₹6,00,000 - ₹10,00,000 PA', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

export default function Career() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      {/* Hero */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Career Opportunities
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={job.id}
              className="card-hover"
              style={{
                borderRadius: 16, background: 'white',
                border: `1px solid ${C.border}`,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 500, color: C.soil, margin: '0 0 10px' }}>
                  {job.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
                  {[
                    { icon: MapPin, val: job.location },
                    { icon: Briefcase, val: job.salary },
                    { icon: Clock, val: 'Apply by June 30, 2026' },
                  ].map(({ icon: Icon, val }) => (
                    <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: C.stone, fontWeight: 400 }}>
                      <Icon size={14} color={C.primaryLight} />
                      {val}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                  {job.description}
                </p>
              </div>

              <div style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: `1px solid ${C.border}`,
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <button
                  style={{
                    padding: '11px 24px', borderRadius: 10,
                    background: C.soil, color: 'white',
                    border: 'none', fontSize: 13, fontWeight: 400,
                    cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                    transition: 'all 0.2s ease', width: '100%',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.primary}
                  onMouseLeave={e => e.currentTarget.style.background = C.soil}
                >
                  Apply Now
                </button>
                <a
                  href="mailto:careers@textileparadise.com"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    fontSize: 12, color: C.primary, textDecoration: 'none', fontWeight: 400,
                  }}
                >
                  <Mail size={13} /> Email Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
