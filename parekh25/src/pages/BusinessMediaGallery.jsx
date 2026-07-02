import { motion } from 'framer-motion';
import { useState } from 'react';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  cream: '#FDF9F2',
  border: '#EBE4D4',
  stone: '#6B5B45',
};

const categories = ["All", "Exhibition", "Launches", "Workshops", "Infrastructure"];

const galleryItems = [
  { title: "Artisan Craftsmanship Showcase", date: "June 20, 2026", category: "Exhibition", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60" },
  { title: "Eco-Friendly Fabric Launch Event", date: "May 12, 2026", category: "Launches", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60" },
  { title: "Annual Loom Weavers Workshop", date: "April 29, 2026", category: "Workshops", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" },
  { title: "Traditional Textiles Expo 2026", date: "March 18, 2026", category: "Exhibition", image: "https://images.pexels.com/photos/7005687/pexels-photo-7005687.jpeg" },
  { title: "Next-Gen Bio-Cotton Production Unit", date: "February 25, 2026", category: "Infrastructure", image: "https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg" }
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredItems = activeCategory === "All" ? galleryItems : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      {/* Hero */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Media Gallery
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-12 pb-20">
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 16px', lineHeight: 1.7, fontWeight: 400 }}>
          Explore our visual journey through events, exhibitions, and milestones.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActiveCategory(cat)} style={{ padding: '6px 16px', borderRadius: 20, border: `1px solid ${C.border}`, background: activeCategory === cat ? C.soil : 'white', color: activeCategory === cat ? 'white' : C.stone, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s' }}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
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
              </div>

              <div className="p-3 sm:p-5 flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                  <span className="text-[8px] sm:text-[11px]" style={{ color: C.primary, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{item.category}</span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: C.border }} />
                  <span className="text-[8px] sm:text-[11px]" style={{ color: C.stone, fontWeight: 400 }}>{item.date}</span>
                </div>
                <h3 className="text-[12px] sm:text-[16px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: C.soil, margin: 0, lineHeight: 1.3 }}>
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
