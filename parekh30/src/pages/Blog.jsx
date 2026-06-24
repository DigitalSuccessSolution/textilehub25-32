import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const C = {
  primary: '#0e6b6b',
  primaryLight: '#1a8080',
  soil: '#0d2626',
  sand: '#f0f7f7',
  cream: '#ffffff',
  border: '#c8e0e0',
  stone: '#4a6b6b',
  accent: '#c8922a',
};

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
  { title: "Trends to Watch in Home Furnishing", date: "Apr 22, 2026", category: "Trends", author: "Neha Gupta", readTime: "4 min read", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>Blog & Insights</h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7, fontWeight: 400 }}>
          Stay updated with the latest trends in the textile industry, design inspirations, and behind-the-scenes stories of traditional handloom crafts from India.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden"
              style={{ 
                background: 'white', 
                borderRadius: '16px',
                border: `1px solid ${C.border}`, borderTop: `4px solid ${C.primaryLight}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div style={{ position: 'absolute', top: 12, left: 12, padding: '4px 12px', borderRadius: 20, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(6px)' }}>
                  <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primary, fontWeight: 700 }}>{post.category}</span>
                </div>
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 500 }}>{post.date}</span>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.accent }} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 500 }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: C.soil, margin: '0 0 10px', lineHeight: 1.4, cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.soil}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 12, color: C.stone, margin: '0 0 16px', fontWeight: 500 }}>By {post.author}</p>
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: `1px solid rgba(200,224,224,0.3)` }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: C.primary, fontWeight: 700, cursor: 'pointer' }}>
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
