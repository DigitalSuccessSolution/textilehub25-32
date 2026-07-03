import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

const C = {
  primary: '#745b9f',
  primaryLight: '#8e77b4',
  soil: '#2c1e43',
  sand: '#f3ebf7',
  cream: '#faf8f5',
  border: '#ebdff2',
  stone: '#66587c',
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', description: 'Mandatory annual meeting for all shareholders and board members.' },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', description: 'The Ahmedabad warehouse will remain closed for 3 days due to scheduled maintenance.' },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', description: 'New e-Way bill features have been integrated into the partner portal for streamlined logistics.' },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', description: 'We are hiring experienced Zonal Sales Managers across multiple regions.' },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 md:pt-14 pb-24">

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
          {notices.map((notice, idx) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col bg-white rounded-2xl overflow-hidden"
              style={{ 
                border: `1px solid ${C.border}`, 
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                borderTop: `4px solid ${C.primaryLight}`
              }}
            >
              <div className="p-6 sm:p-7 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5 pb-4" style={{ borderBottom: `1px dashed ${C.border}` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: C.sand, border: `1px solid rgba(116, 91, 159, 0.15)` }}>
                      <Bell size={20} color={C.primary} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: C.cream, border: `1px solid ${C.border}` }}>
                    <Calendar size={13} color={C.stone} />
                    <span className="text-xs font-medium" style={{ color: C.stone }}>{notice.date}</span>
                  </div>
                </div>
                
                <h3 className="text-[17px] font-semibold leading-snug mb-3" style={{ fontFamily: "'Playfair Display', serif", color: C.soil }}>
                  {notice.title}
                </h3>
                
                <p className="text-[13.5px] leading-relaxed mb-6 flex-1" style={{ color: C.stone }}>
                  {notice.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
