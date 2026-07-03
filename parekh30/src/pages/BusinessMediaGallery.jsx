import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const C = {
  primary: '#0e6b6b',
  primaryLight: '#1a8080',
  soil: '#0d2626',
  sand: '#f0f7f7',
  cream: '#ffffff',
  border: '#c8e0e0',
  stone: '#4a6b6b',
};

const galleryItems = [
  { 
    title: "Surat Textile Expo 2026", 
    category: "Exhibitions", 
    date: "April 15, 2026", 
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Sustainable Dyeing Workshop", 
    category: "Innovation", 
    date: "May 02, 2026", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Annual Handloom Weavers Meet", 
    category: "Events", 
    date: "May 20, 2026", 
    image: "https://images.pexels.com/photos/36731372/pexels-photo-36731372.jpeg" 
  },
  { 
    title: "New Spinning Machinery Inauguration", 
    category: "Manufacturing", 
    date: "June 05, 2026", 
    image: "https://images.pexels.com/photos/7005687/pexels-photo-7005687.jpeg" 
  },
  { 
    title: "Global Fabric Trends Conference", 
    category: "Events", 
    date: "June 28, 2026", 
    image: "https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg" 
  }
];

const categories = ["All", "Exhibitions", "Innovation", "Events", "Manufacturing"];

export default function BusinessMediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Media Gallery
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 24px', lineHeight: 1.7, fontWeight: 400 }}>
          Explore our corporate media gallery and filter event photos by category.
        </p>

        {/* Category buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: 20,
                border: `1px solid ${selectedCategory === cat ? C.primary : C.border}`,
                background: selectedCategory === cat ? C.primary : 'transparent',
                color: selectedCategory === cat ? 'white' : C.stone,
                fontSize: 12.5,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              style={{
                borderRadius: 16, overflow: 'hidden',
                background: 'white', cursor: 'pointer',
                border: `1px solid ${C.border}`, borderTop: `4px solid ${C.primaryLight}`,
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(14,107,107,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
                  background: 'rgba(71, 86, 67, 0.85)', backdropFilter: 'blur(6px)',
                  borderRadius: 20, padding: '4px 12px',
                }}>
                  <span style={{ fontSize: 9, color: '#fbfaf7', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 400 }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <Calendar size={13} color={C.primaryLight} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 500 }}>{item.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: C.soil, margin: 0, lineHeight: 1.45 }}>
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
