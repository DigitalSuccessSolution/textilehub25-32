import { useState } from 'react';
import { motion } from 'framer-motion';

const C = {
  primary: '#475643',
  primaryLight: '#586a53',
  soil: '#222b20',
  sand: '#efebdf',
  cream: '#faf8f5',
  border: '#e2ddd5',
  stone: '#5a6657',
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

export default function BusinessMediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Exhibitions', 'Innovation', 'Events', 'Manufacturing'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.cream, minHeight: '100vh' }}>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Media Gallery
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Short 1-line paragraph above categories */}
        <p style={{ textAlign: 'center', fontSize: 13, color: C.stone, margin: '0 auto 20px', maxWidth: '500px', fontWeight: 400 }}>
          Visual highlights from our exhibitions, workshops, product launches, and eco-initiatives.
        </p>

        {/* Category filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif",
                background: selectedCategory === cat ? C.primary : 'white',
                color: selectedCategory === cat ? 'white' : C.stone,
                border: `1px solid ${selectedCategory === cat ? C.primary : C.border}`,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.background = C.sand;
                  e.currentTarget.style.color = C.primary;
                }
              }}
              onMouseLeave={e => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = C.stone;
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.title}
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
                  background: 'rgba(71, 86, 67, 0.85)', backdropFilter: 'blur(6px)',
                  borderRadius: 20, padding: '4px 12px',
                }}>
                  <span style={{ fontSize: 9, color: '#fbfaf7', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 400 }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1, textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{item.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: C.soil, margin: 0, lineHeight: 1.4 }}>
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
