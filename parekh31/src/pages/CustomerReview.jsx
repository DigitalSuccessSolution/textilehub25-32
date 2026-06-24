import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const C = {
  primary: '#5b4fcf',       // Deep Forest Green
  primaryLight: '#7b6fdf',  // Medium Forest Green
  soil: '#1a1435',          // Deep Dark Charcoal Text
  sand: '#f5f0e8',          // Soft Beige Background
  cream: '#ffffff',          // Warm Off-white base background
  border: '#d8cff0',        // Soft Warm Border
  stone: '#6b6080',         // Muted Olive-Charcoal Text
  accent: '#c8922a',        // Terracotta Accent
};

const reviews = [
  { text: "Vastra Royale has been our trusted partner for years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
  { text: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time and rework.", name: "Anita Desai", role: "Design Head, Mumbai", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
];

export default function CustomerReview() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Customer Reviews
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card-hover text-left"
              style={{
                background: 'white',
                border: `1px solid ${C.border}`, borderTop: `4px solid ${C.primaryLight}`,
                borderRadius: 16, padding: '26px 24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
                {/* Quote mark */}
                <div style={{
                  position: 'absolute', top: 18, right: 22,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 60, color: C.sand, lineHeight: 1, fontWeight: 700,
                  userSelect: 'none',
                }}>
                  "
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={14} fill={C.accent} stroke="none" />
                  ))}
                </div>

                <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.7, margin: '0 0 18px', fontWeight: 400, fontStyle: 'italic' }}>
                  "{review.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${C.sand}, ${C.primaryLight})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, color: C.soil, fontWeight: 600,
                }}>
                  {review.name[0]}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, color: C.soil, margin: 0 }}>{review.name}</p>
                  <p style={{ fontSize: 11, color: C.stone, margin: 0, fontWeight: 400 }}>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
