import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

const categories = ["All", "Craftsmanship", "Sustainability", "Home Decor", "Innovation"];

const posts = [
  { title: "The Art of Handwoven Silk: A Heritage Revived", date: "June 28, 2026", category: "Craftsmanship", author: "Priya Sharma", description: "Discover the intricate techniques of traditional Indian silk weaving, preserving ancient heritage while adapting to modern styles.", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60" },
  { title: "Why Sustainable Fabrics are the Future of Fashion", date: "June 15, 2026", category: "Sustainability", author: "Rajiv Kapoor", description: "How eco-friendly materials like organic cotton and bamboo linen are transforming the clothing industry one loom at a time.", image: "https://images.pexels.com/photos/5264914/pexels-photo-5264914.jpeg" },
  { title: "Choosing the Perfect Fabric for Home Furnishing", date: "May 20, 2026", category: "Home Decor", author: "Neha Gupta", description: "Guide to selecting high-durability, premium textures for bedsheets, upholstery, and curtains to elevate your living space.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60" },
  { title: "Innovations in Smart Textiles", date: "July 10, 2026", category: "Innovation", author: "Ananya Patel", description: "An overview of how integrating technology into fabrics is revolutionizing both fashion and functional wear.", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=60" }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts = activeCategory === "All" ? posts : posts.filter(post => post.category === activeCategory);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      {/* Hero Banner */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>Blog & Insights</h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      <div className="pb-20 max-w-[90rem] mx-auto px-6 lg:px-14 py-12">
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 16px', lineHeight: 1.7, fontWeight: 400 }}>
          Discover the latest insights, trends, and stories from the world of textiles.
        </p>

        {/* Categories */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActiveCategory(cat)} style={{ padding: '6px 16px', borderRadius: 20, border: `1px solid ${C.border}`, background: activeCategory === cat ? C.soil : 'white', color: activeCategory === cat ? 'white' : C.stone, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s' }}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
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
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border" style={{ background: 'rgba(253,249,242,0.92)', backdropFilter: 'blur(6px)', borderColor: C.border }}>
                  <span className="text-[7px] sm:text-[9px] uppercase font-normal" style={{ letterSpacing: '0.18em', color: C.primary }}>{post.category}</span>
                </div>
              </div>
              <div className="p-3 sm:p-5 flex flex-col text-left flex-1">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span className="text-[9px] sm:text-[11px]" style={{ color: C.stone, fontWeight: 400 }}>{post.date}</span>
                </div>
                <h3 className="text-[13px] sm:text-[16px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: C.soil, margin: '0 0 8px', lineHeight: 1.3, cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.soil}>
                  {post.title}
                </h3>
                <p className="text-[10px] sm:text-[12px]" style={{ color: C.stone, margin: '0 0 8px', fontWeight: 400 }}>By {post.author}</p>
                <p className="text-[11px] sm:text-[13px] line-clamp-3 sm:line-clamp-none" style={{ color: C.stone, margin: '0 0 14px', lineHeight: 1.4, flex: 1 }}>{post.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
