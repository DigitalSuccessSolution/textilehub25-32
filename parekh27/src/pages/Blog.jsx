import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

const posts = [
  { title: "The Art of Saree Weaving: A Journey Through Time", date: "June 10, 2026", category: "Craftsmanship", author: "Priya Sharma", image: "https://images.pexels.com/photos/8819312/pexels-photo-8819312.jpeg", description: "Explore the intricate process and historical significance of traditional handloom saree weaving across different regions of India." },
  { title: "Sustainable Fabrics: The Future of Fashion", date: "May 28, 2026", category: "Innovation", author: "Rajiv Kapoor", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60", description: "Discover how eco-friendly textiles and organic dyes are revolutionizing the modern fashion landscape while preserving nature." },
  { title: "Caring for Your Silk Collections", date: "May 15, 2026", category: "Guide", author: "Ananya Patel", image: "https://images.pexels.com/photos/30722459/pexels-photo-30722459.jpeg", description: "Essential tips and techniques to maintain the luster, strength, and longevity of your premium silk garments." },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = posts.filter(post =>
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>



      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-16 md:pt-32 pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>Blog & Insights</h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7, fontWeight: 400 }}>
          Stay updated with the latest trends in the textile industry, design inspirations, and behind-the-scenes stories of traditional handloom crafts from India.
        </p>
        <p style={{ textAlign: 'center', fontSize: 13, color: C.stone, marginBottom: 12, fontWeight: 400 }}>
          Filter by your favorite topics
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
          {["All", "Craftsmanship", "Innovation", "Guide"].map(cat => (
            <span key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{ padding: '6px 16px', borderRadius: 20, border: `1px solid ${C.border}`, fontSize: 12, color: cat === activeCategory ? 'white' : C.stone, background: cat === activeCategory ? C.primary : 'transparent', cursor: 'pointer', transition: 'all 0.2s ease' }}>
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
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
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 500, color: C.soil, margin: '0 0 8px', lineHeight: 1.4, cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.soil}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 12, color: C.stone, margin: '0 0 10px', fontWeight: 400 }}>By {post.author}</p>
                <p style={{ fontSize: 13, color: C.stone, margin: '0 0 16px', fontWeight: 400, lineHeight: 1.6, flex: 1 }}>{post.description}</p>
                <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: C.primary, fontWeight: 400, cursor: 'pointer' }}>
                    Read More <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
