import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';

const C = {
  primary: '#475643',       // Deep Forest Green
  primaryLight: '#586a53',  // Medium Forest Green
  soil: '#222b20',          // Deep Dark Charcoal Text
  sand: '#efebdf',          // Soft Beige Background
  cream: '#faf8f5',         // Warm Off-white base background
  border: '#e2ddd5',        // Soft Warm Border
  stone: '#5a6657',         // Muted Olive-Charcoal Text
  accent: '#b05742',        // Terracotta Accent
};

const notices = [
  {
    id: 1,
    title: 'Annual General Meeting 2026',
    date: 'Nov 01, 2026',
    description: 'Official notification regarding the schedule, agenda, and participation details for the upcoming Annual General Meeting of stakeholders.'
  },
  {
    id: 2,
    title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)',
    date: 'Oct 20, 2026',
    description: 'Our Ahmedabad warehouse will be closed for routine inventory audit and facility maintenance. Dispatch services will resume on Oct 23.'
  },
  {
    id: 3,
    title: 'Introduction of e-Way Bill Integration in Partner Portal',
    date: 'Sep 15, 2026',
    description: 'We are integrating automated e-Way bill generation directly inside the vendor partner portal to streamline supply chain logistics.'
  },
  {
    id: 4,
    title: 'Recruitment Drive for Zonal Sales Managers',
    date: 'Aug 22, 2026',
    description: 'Applications are now open for experienced candidates to join our sales team as Zonal Managers. Submit your resumes before the deadline.'
  },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.cream, minHeight: '100vh' }}>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
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
                borderRadius: 16, padding: '22px',
                background: 'white', cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                border: `1.5px solid ${C.border}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(71, 86, 67, 0.08)', border: `1px solid rgba(71, 86, 67, 0.2)` }}>
                  <Bell size={18} color={C.primary} />
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <Calendar size={12} color={C.stone} />
                <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{notice.date}</span>
              </div>
              
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600, color: C.soil, lineHeight: 1.45, margin: '0 0 10px' }}>
                {notice.title}
              </h3>
              
              <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 400, flex: 1 }}>
                {notice.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
