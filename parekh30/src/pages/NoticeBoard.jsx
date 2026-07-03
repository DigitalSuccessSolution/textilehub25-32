import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

const C = {
  primary: '#0e6b6b',       // Deep Forest Green
  primaryLight: '#1a8080',  // Medium Forest Green
  soil: '#0d2626',          // Deep Dark Charcoal Text
  sand: '#f0f7f7',          // Soft Beige Background
  cream: '#ffffff',          // Warm Off-white base background
  border: '#c8e0e0',        // Soft Warm Border
  stone: '#4a6b6b',         // Muted Olive-Charcoal Text
  accent: '#c8922a',        // Terracotta Accent
};

const notices = [
  { 
    id: 1, 
    title: 'Annual General Meeting 2026', 
    date: 'Nov 01, 2026',
    description: "All members and stakeholders are cordially invited to attend the Annual General Meeting to discuss the company's annual financial performance and future expansion strategies." 
  },
  { 
    id: 2, 
    title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', 
    date: 'Oct 20, 2026',
    description: "The Ahmedabad depot will remain closed for bi-annual maintenance and technical upgrades from October 22nd to October 24th, 2026. Normal operations will resume on October 25th." 
  },
  { 
    id: 3, 
    title: 'Introduction of e-Way Bill Integration in Partner Portal', 
    date: 'Sep 15, 2026',
    description: "Logistics partners can now directly generate and sync e-way bills within the partner portal, improving dispatch speed, accuracy, and regulatory compliance." 
  },
  { 
    id: 4, 
    title: 'Recruitment Drive for Zonal Sales Managers', 
    date: 'Aug 22, 2026',
    description: "We are hiring experienced Zonal Sales Managers to direct our sales force, establish new distributor channels, and expand market share in Northern and Western regions." 
  },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Notice Board
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="card-hover text-left"
              style={{
                borderRadius: 16, padding: '24px 22px',
                background: 'white',
                display: 'flex', flexDirection: 'column',
                border: `1px solid ${C.border}`,
                borderTop: `4px solid ${C.primaryLight}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(71, 86, 67, 0.03)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(14,107,107,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(71, 86, 67, 0.08)', border: `1px solid rgba(71, 86, 67, 0.2)` }}>
                    <Bell size={18} color={C.primary} />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                  <Calendar size={12} color={C.stone} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{notice.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: C.soil, lineHeight: 1.45, margin: '0 0 10px' }}>
                  {notice.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                  {notice.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
