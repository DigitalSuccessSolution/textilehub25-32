import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Clock } from 'lucide-react';

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

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', salary: '₹8,00,000 - ₹12,00,000 P.A.', description: 'Oversee store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', salary: '₹10,00,000 - ₹15,00,000 P.A.', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', salary: '₹6,00,000 - ₹9,00,000 P.A.', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', salary: '₹5,00,000 - ₹8,00,000 P.A.', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

export default function Career() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }}>

      

      {/* Main Content (4 Divs in 1 Row on desktop) */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 text-left pt-10 md:pt-14 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
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
              className="card-hover flex flex-col justify-between p-6 rounded-xl bg-white shadow-sm"
              style={{
                border: `1.5px solid ${C.border}`,
              }}
            >
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-[17px] font-bold mb-4 leading-snug">
                  {job.title}
                </h3>
                <div className="flex flex-col gap-2.5 mb-5">
                  {[
                    { icon: MapPin, val: job.location },
                    { icon: Briefcase, val: job.salary },
                    { icon: Clock, val: 'Apply by June 30, 2026' },
                  ].map(({ icon: Icon, val }) => (
                    <div key={val} style={{ color: C.stone }} className="flex items-center gap-2 text-xs font-semibold">
                      <Icon size={13} style={{ color: C.primaryLight }} className="shrink-0" />
                      <span>{val}</span>
                    </div>
                  ))}
                  <a
                    href="mailto:careers@loomandluxury.com"
                    style={{ color: C.stone }}
                    className="flex items-center gap-2 text-xs font-semibold hover:opacity-85"
                  >
                    <Mail size={13} style={{ color: C.primaryLight }} className="shrink-0" />
                    <span>careers@loomandluxury.com</span>
                  </a>
                </div>
                <p style={{ color: C.stone }} className="text-xs sm:text-[13px] leading-relaxed mb-4">
                  {job.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-150 flex flex-col gap-2.5">
                <button
                  className="w-full py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-white transition-colors"
                  style={{
                    background: C.primary,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.accent}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
