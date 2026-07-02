import { motion } from 'framer-motion';
import { useState } from 'react';

const C = {
  primary: '#7c8e76',
  primaryLight: '#a3b89d',
  soil: '#2b1f15',
  sand: '#f2ebe1',
  cream: '#faf8f5',
  border: '#eae2d3',
  stone: '#5a4d41',
};

const galleryItems = [
  { title: "Advanced Weaving Machinery", date: "June 25, 2026", category: "Infrastructure", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60" },
  { title: "Cotton Spinning Process", date: "June 12, 2026", category: "Production", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60" },
  { title: "Quality Inspection", date: "May 30, 2026", category: "Quality Assurance", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" },
  { title: "Textile Storage Warehouse", date: "May 15, 2026", category: "Logistics", image: "https://images.pexels.com/photos/7005687/pexels-photo-7005687.jpeg" },
  { title: "Dyeing Plant Operations", date: "April 28, 2026", category: "Production", image: "https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg" },
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredItems = activeCategory === "All" ? galleryItems : galleryItems.filter(item => item.category === activeCategory);
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-24 lg:pt-32 pb-16 lg:pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-10 lg:mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
           Business Media Gallery
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #a3b89d, #7c8e76)', borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <p style={{ fontSize: 13, color: C.stone, marginBottom: 16 }}>Explore our diverse range of operations and initiatives.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {['All', 'Infrastructure', 'Production', 'Quality Assurance', 'Logistics'].map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                style={{ padding: '6px 16px', borderRadius: 20, background: cat === activeCategory ? C.primary : 'transparent', color: cat === activeCategory ? 'white' : C.primary, border: `1px solid ${C.primary}`, fontSize: 12, cursor: 'pointer', transition: 'all 0.2s ease' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="card-hover group"
              style={{
                borderRadius: 16, overflow: 'hidden',
                background: 'white', cursor: 'pointer',
                border: `1px solid ${C.border}`,
                display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'rgba(74,55,40,0.85)', backdropFilter: 'blur(6px)',
                  borderRadius: 20, padding: '4px 12px',
                }}>
                  <span style={{ fontSize: 9, color: '#f2ebe1', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 400 }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 12, color: C.stone, marginBottom: 8, fontWeight: 400 }}>{item.date}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 500, color: C.soil, margin: '0', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
