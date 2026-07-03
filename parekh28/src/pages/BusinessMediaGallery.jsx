import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Calendar } from 'lucide-react';

const C = {
  primary: '#745b9f',
  primaryLight: '#8e77b4',
  soil: '#2c1e43',
  sand: '#f3ebf7',
  cream: '#faf8f5',
  border: '#ebdff2',
  stone: '#66587c',
};

const galleryItems = [
  { title: "Surat Textile Expo 2026", category: "Exhibitions", date: "April 15, 2026", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60" },
  { title: "Sustainable Dyeing Workshop", category: "Innovation", date: "May 02, 2026", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60" },
  { title: "Annual Handloom Weavers Meet", category: "Events", date: "May 20, 2026", image: "https://images.pexels.com/photos/36731372/pexels-photo-36731372.jpeg" },
  { title: "New Spinning Machinery Inauguration", category: "Manufacturing", date: "June 05, 2026", image: "https://images.pexels.com/photos/7005687/pexels-photo-7005687.jpeg" },
  { title: "Global Fabric Trends Conference", category: "Events", date: "June 28, 2026", image: "https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg" }
];

export default function BusinessMediaGallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") setSearchParams({});
    else setSearchParams({ category: cat });
  };

  const filteredItems = galleryItems.filter(p => activeCategory === "All" || p.category === activeCategory);
  const uniqueCategories = ["All", ...new Set(galleryItems.map(p => p.category))];
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 md:pt-14 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Media Gallery
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Small line above categories */}
        <p style={{ textAlign: 'center', fontSize: 13, color: C.primaryLight, marginBottom: 16, fontWeight: 500 }}>
          Explore our latest events and gallery by categories.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {uniqueCategories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide uppercase whitespace-nowrap transition-all duration-200 cursor-pointer"
                style={{
                  background: active ? C.primary : 'white',
                  color: active ? 'white' : C.stone,
                  border: `1.5px solid ${active ? C.primary : C.border}`,
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.borderColor = C.primary;
                    e.currentTarget.style.color = C.primary;
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.stone;
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filteredItems.length > 0 ? (
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
                  background: 'rgba(74,55,40,0.85)', backdropFilter: 'blur(6px)',
                  borderRadius: 20, padding: '4px 12px',
                }}>
                  <span style={{ fontSize: 9, color: '#f2ebe1', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 400 }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 500, color: C.soil, margin: '0 0 10px', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Calendar size={13} color={C.stone} />
                  <span style={{ fontSize: 12, color: C.stone, fontWeight: 400 }}>{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 24px', background: 'white', borderRadius: 16, border: `1px solid ${C.border}` }}>
             <Filter size={40} style={{ margin: '0 auto 16px', color: C.primaryLight, opacity: 0.5 }} />
             <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: C.soil }}>No images found for "{activeCategory}"</p>
             <button onClick={() => handleCategoryChange('All')} style={{ marginTop: 12, padding: '8px 20px', background: C.primary, color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>View All</button>
          </div>
        )}
      </div>
    </div>
  );
}
