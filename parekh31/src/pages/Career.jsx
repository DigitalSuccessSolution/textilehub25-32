import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Clock } from 'lucide-react';

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

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', type: 'Full-time', experience: '5-8 Years', description: 'Oversee store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', type: 'Full-time', experience: '7+ Years', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', type: 'Full-time', experience: '2-4 Years', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', experience: '3+ Years', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

export default function Career() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>

      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 text-left pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Career Opportunities
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.accent})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              key={job.id}
              className="flex flex-col justify-between p-8"
              style={{
                background: 'white',
                borderRadius: '16px',
                border: `1px solid ${C.border}`, borderTop: `4px solid ${C.primaryLight}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(91,79,207,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-[18px] font-bold mb-5 leading-snug">
                  {job.title}
                </h3>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    { icon: MapPin, val: job.location },
                    { icon: Briefcase, val: `${job.type} · ${job.experience}` },
                    { icon: Clock, val: 'Apply by June 30, 2026' },
                  ].map(({ icon: Icon, val }) => (
                    <div key={val} style={{ color: C.stone }} className="flex items-center gap-2.5 text-[13px] font-medium">
                      <Icon size={14} style={{ color: C.primaryLight }} className="shrink-0" />
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
                <p style={{ color: C.stone }} className="text-[13.5px] leading-relaxed mb-4">
                  {job.description}
                </p>
              </div>

              <div className="pt-6 mt-4 flex flex-col gap-3" style={{ borderTop: `1px solid rgba(200,224,224,0.4)` }}>
                <button
                  className="w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white transition-colors cursor-pointer"
                  style={{
                    background: C.primary,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.accent}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  Apply Now
                </button>
                <a
                  href="mailto:careers@vastraroyale.com"
                  style={{ color: C.accent }}
                  className="flex items-center justify-center gap-1.5 text-[13px] font-bold hover:opacity-85 mt-2"
                >
                  <Mail size={14} /> Email Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
