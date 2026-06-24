import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const C = {
  primary: '#475643',       // Deep Forest Green
  primaryLight: '#586a53',  // Medium Forest Green
  soil: '#222b20',          // Deep Dark Charcoal Text
  sand: '#efebdf',          // Soft Beige Background
  cream: '#faf8f5',          // Warm Off-white base background
  border: '#e2ddd5',        // Soft Warm Border
  stone: '#5a6657',         // Muted Olive-Charcoal Text
  accent: '#b05742',        // Terracotta Accent
};

const reviews = [
  { text: "Indian Fabric House has been our trusted partner for years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
  { text: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time and rework.", name: "Anita Desai", role: "Design Head, Mumbai", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
];

export default function CustomerReview() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.cream }}>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
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
                border: `1px solid ${C.border}`,
                borderRadius: 16, padding: '26px 24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Quote mark */}
                <div style={{
                  position: 'absolute', top: 18, right: 22,
                  fontFamily: "'Cormorant Garamond', serif",
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
