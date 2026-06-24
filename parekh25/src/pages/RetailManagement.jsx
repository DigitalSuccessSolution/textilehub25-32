import { motion } from 'framer-motion';
import { Mail, Users, TrendingUp, Award } from 'lucide-react';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  cream: '#FDF9F2',
  border: '#EBE4D4',
  stone: '#6B5B45',
};

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', expertise: 'Business Strategy & Operations' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', expertise: 'Retail Management & Customer Experience' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', expertise: 'Logistics & Trade Relations' },
];

const highlights = [
  { icon: Users, value: '200+', label: 'Management Professionals' },
  { icon: TrendingUp, value: '5000+', label: 'Retail Outlets Managed' },
  { icon: Award, value: '25+', label: 'Years of Excellence' },
];

export default function RetailManagement() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      {/* Hero */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Our Retail Management
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-12 pb-24">
        <p style={{ textAlign: 'center', fontSize: 15, color: C.stone, marginBottom: 40, fontWeight: 400, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Textile Paradise is administered and governed by highly skilled, experienced and qualified Management with decades of expertise in the textile industry.
        </p>


        {/* Team Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-hover"
              style={{
                borderRadius: 16, background: 'white',
                border: `1px solid ${C.border}`,
                padding: '28px 22px',
                textAlign: 'center',
              }}
            >
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: 18 }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: 90, height: 90, borderRadius: '50%',
                    objectFit: 'cover',
                    border: `3px solid rgba(196,163,90,0.3)`,
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: 24, height: 24, borderRadius: '50%',
                  background: C.primary, border: '2px solid white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'white' }} />
                </div>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 500, color: C.soil, margin: '0 0 4px' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.primary, margin: '0 0 8px', fontWeight: 400 }}>
                {member.role}
              </p>
              <p style={{ fontSize: 12, color: C.stone, margin: '0 0 18px', fontWeight: 400, lineHeight: 1.5 }}>
                {member.expertise}
              </p>

              <a
                href={`mailto:${member.name.toLowerCase().replace(' ', '')}@textileparadise.com`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 10,
                  fontSize: 12, color: C.primary, textDecoration: 'none', fontWeight: 400,
                  background: 'rgba(139,105,20,0.08)',
                  border: `1px solid rgba(196,163,90,0.2)`,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,105,20,0.08)'; e.currentTarget.style.color = C.primary; }}
              >
                <Mail size={13} /> Contact
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
