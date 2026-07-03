import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

const C = {
  primary: '#1c4442',
  primaryLight: '#3d6966',
  soil: '#133835',
  sand: '#f2ebe1',
  cream: '#faf8f5',
  border: '#eae2d3',
  stone: '#5a4d41',
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', description: 'Join us for our annual general meeting where we discuss yearly performance and future roadmaps.' },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', description: 'Please be informed that the Ahmedabad Depot will remain closed for 3 days for essential maintenance work.' },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', description: 'We have successfully integrated e-Way Bill generation directly into our B2B partner portal for faster dispatch.' },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', description: 'We are expanding! Walk-in interviews for Zonal Sales Managers will be held in Mumbai and Delhi branches.' },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-16 md:pt-32 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
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
              className="card-hover"
              style={{
                borderRadius: 16, padding: '22px',
                background: 'white', cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                border: `1.5px solid ${C.border}`,
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(124, 142, 118,0.08)', border: `1px solid rgba(163, 184, 157,0.2)` }}>
                    <Bell size={18} color={C.primary} />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <Calendar size={12} color={C.stone} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{notice.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 500, color: C.soil, lineHeight: 1.45, margin: '0 0 8px' }}>
                  {notice.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, margin: '0 0 16px', fontWeight: 400, flex: 1, lineHeight: 1.6 }}>
                  {notice.description}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, marginTop: 'auto', borderTop: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 12, color: C.primary, fontWeight: 400 }}>Read More</span>
                <ChevronRight size={15} color={C.primary} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
