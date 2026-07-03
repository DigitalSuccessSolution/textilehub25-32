import { motion } from 'framer-motion';
import { useState } from 'react';

const C = {
  primary: '#1c4442',
  primaryLight: '#3d6966',
  soil: '#133835',
  sand: '#f2ebe1',
  cream: '#faf8f5',
  border: '#eae2d3',
  stone: '#5a4d41',
};

const galleryItems = [
  { title: "Exquisite Handloom Sarees Exhibition", date: "August 15, 2026", category: "Exhibition", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60" },
  { title: "Launch of Sustainable Cotton Fabrics", date: "July 22, 2026", category: "Product Launch", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60" },
  { title: "Traditional Weaving Masterclass", date: "June 05, 2026", category: "Workshop", image: "https://images.pexels.com/photos/36731372/pexels-photo-36731372.jpeg" },
  { title: "Dyeing & Printing Techniques Demo", date: "April 18, 2026", category: "Demonstration", image: "https://images.pexels.com/photos/7005687/pexels-photo-7005687.jpeg" },
  { title: "Annual Textile Retailers Meet", date: "March 10, 2026", category: "Community", image: "https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg" }
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = galleryItems.filter(item =>
    activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>



      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-16 md:pt-32 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Business Media Gallery
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: C.stone, marginBottom: 12, fontWeight: 400 }}>
          Explore our visual journey through events, launches, and craftsmanship.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
          {["All", "Exhibition", "Product Launch", "Workshop", "Demonstration", "Community"].map(cat => (
            <span key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{ padding: '6px 16px', borderRadius: 20, border: `1px solid ${C.border}`, fontSize: 12, color: cat === activeCategory ? 'white' : C.stone, background: cat === activeCategory ? C.primary : 'transparent', cursor: 'pointer', transition: 'all 0.2s ease' }}>
              {cat}
            </span>
          ))}
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

              <div style={{ padding: '20px', flex: 1 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 500, color: C.soil, margin: '0 0 8px', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
