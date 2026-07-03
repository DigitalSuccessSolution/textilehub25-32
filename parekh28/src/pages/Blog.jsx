import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';

const C = {
  primary: '#745b9f',
  primaryLight: '#8e77b4',
  soil: '#2c1e43',
  sand: '#f3ebf7',
  cream: '#faf8f5',
  border: '#ebdff2',
  stone: '#66587c',
};

const posts = [
  { 
    title: "The Future of Sustainable Weaving", 
    date: "June 10, 2026", 
    category: "Innovation", 
    author: "Priya Sharma", 
    description: "Discover how sustainable practices are reshaping the handloom and textile manufacturing landscape.",
    image: "https://images.pexels.com/photos/8819312/pexels-photo-8819312.jpeg" 
  },
  { 
    title: "Elegance in Threads: The Fall Collection", 
    date: "May 28, 2026", 
    category: "Collections", 
    author: "Rajiv Kapoor", 
    description: "An exclusive look into our upcoming Fall fabric collection featuring warm tones and rich textures.",
    image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Behind the Scenes: Crafting the Perfect Saree", 
    date: "May 15, 2026", 
    category: "Craftsmanship", 
    author: "Ananya Patel", 
    description: "A deep dive into the intricate weaving processes and skilled artisan work behind our premium sarees.",
    image: "https://images.pexels.com/photos/30722459/pexels-photo-30722459.jpeg" 
  }
];

export default function Blog() {
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

  const filteredPosts = posts.filter(p => activeCategory === "All" || p.category === activeCategory);
  const uniqueCategories = ["All", ...new Set(posts.map(p => p.category))];
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 md:pt-14 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>Blog & Insights</h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 12px', lineHeight: 1.7, fontWeight: 400 }}>
          Stay updated with the latest trends in the textile industry, design inspirations, and behind-the-scenes stories of traditional handloom crafts from India.
        </p>

        {/* Small line above categories */}
        <p style={{ textAlign: 'center', fontSize: 13, color: C.primaryLight, marginBottom: 16, fontWeight: 500 }}>
          Filter by topic to read what interests you the most.
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

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              className="card-hover group flex flex-col rounded-2xl overflow-hidden bg-white border"
              style={{ borderColor: C.border }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div style={{ position: 'absolute', top: 12, left: 12, padding: '4px 12px', borderRadius: 20, background: 'rgba(253,249,242,0.92)', backdropFilter: 'blur(6px)', border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primary, fontWeight: 400 }}>{post.category}</span>
                </div>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 500, color: C.soil, margin: '0 0 8px', lineHeight: 1.4, cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.soil}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 12, color: C.primaryLight, margin: '0 0 10px', fontWeight: 500 }}>By {post.author}</p>
                <p style={{ fontSize: 13, color: C.stone, margin: '0 0 16px', lineHeight: 1.6, fontWeight: 400, flex: 1 }}>{post.description}</p>
                <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: C.primary, fontWeight: 400, cursor: 'pointer' }}>
                    Read More <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 24px', background: 'white', borderRadius: 16, border: `1px solid ${C.border}` }}>
             <Filter size={40} style={{ margin: '0 auto 16px', color: C.primaryLight, opacity: 0.5 }} />
             <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: C.soil }}>No blogs found for "{activeCategory}"</p>
             <button onClick={() => handleCategoryChange('All')} style={{ marginTop: 12, padding: '8px 20px', background: C.primary, color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>View All</button>
          </div>
        )}
      </div>
    </div>
  );
}
