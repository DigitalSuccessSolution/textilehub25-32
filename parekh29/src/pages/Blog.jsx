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
  accent: '#b05742',
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
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Innovation', 'Collections', 'Craftsmanship'];
  
  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.cream, minHeight: '100vh' }}>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Blog & Insights
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 12px', lineHeight: 1.7, fontWeight: 400 }}>
          Stay updated with the latest trends in the textile industry, design inspirations, and behind-the-scenes stories of traditional handloom crafts from India.
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

        {/* Blog cards grid */}
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
                  <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primary, fontWeight: 400 }}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{post.date}</span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: C.primaryLight }} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>By {post.author}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: C.soil, margin: '0 0 10px', lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, margin: 0, fontWeight: 400, lineHeight: 1.6, flex: 1 }}>
                  {post.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
