import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  cream: '#FDF9F2',
  border: '#EBE4D4',
  stone: '#6B5B45',
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', description: 'Join us for the annual review of our financial performance and strategic vision for the upcoming year.' },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', description: 'The Ahmedabad Depot will be closed for routine maintenance. Please plan your logistics accordingly.' },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', description: 'We are launching the new e-Way Bill system directly within the Partner Portal for smoother tracking.' },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', description: 'Looking for experienced sales professionals to lead our growing regional teams across India.' },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      {/* Hero */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Notice Board
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="card-hover"
              style={{
                borderRadius: 16, padding: '22px',
                background: 'white', cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                border: `1.5px solid ${C.border}`,
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(139,105,20,0.08)', border: `1px solid rgba(196,163,90,0.2)` }}>
                    <Bell size={18} color={C.primary} />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <Calendar size={12} color={C.stone} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{notice.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 500, color: C.soil, lineHeight: 1.45, margin: '0 0 10px' }}>
                  {notice.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, margin: 0, lineHeight: 1.5 }}>
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
