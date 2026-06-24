import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Play, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#1c4442',       // Deep Teal / Dark Green
  primaryLight: '#3d6966',  // Medium Teal
  accent: '#b56b46',        // Terracotta / Rust Accent
  bg: '#faf8f5',            // Warm Cream
  sand: '#f2ebe1',          // Light Sand
  border: '#eae2d3',        // Beige Border
  soil: '#133835',          // Teal-tinted Dark Text
  stone: '#5a4d41',         // Muted Brown Text
};

// 7 Categories matching original pages
const categoriesList = [
  {
    name: 'Sarees',
    subtitle: 'Timeless Elegance',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Sarees'
  },
  {
    name: 'Leggings',
    subtitle: 'Comfortable Wear',
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Leggings'
  },
  {
    name: 'Kurtis',
    subtitle: 'Ethnic Chic',
    image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Kurtis'
  },
  {
    name: 'Dress Suits',
    subtitle: 'Perfect Fit',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Dress Suits'
  },
  {
    name: 'Bedsheets & Linen',
    subtitle: 'Cozy & Soft',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Bedsheets & Linen'
  },
  {
    name: 'Hosiery Items',
    subtitle: 'Premium Comfort',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Hosiery Items'
  },
  {
    name: 'Suiting',
    subtitle: 'Fine Tailoring',
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Suiting'
  }
];

// 6 Popular Collections for Carousel
const popularCollections = [
  { name: 'Ethnic Wear', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80' },
  { name: 'Fabric Collection', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=80' },
  { name: 'Home Furnishing', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=80' },
  { name: 'Bedding Collection', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=80' },
  { name: 'Kids Wear', image: 'https://images.unsplash.com/photo-1741992556912-3b2d62461e75?w=500&auto=format&fit=crop&q=80' },
  { name: 'Men\'s Wear', image: 'https://images.unsplash.com/photo-1724856604249-ca73680262e8?w=500&auto=format&fit=crop&q=80' }
];

// Blogs from original Blog page
const blogs = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=150&auto=format&fit=crop&q=80" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=150&auto=format&fit=crop&q=80" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=150&auto=format&fit=crop&q=80" },
  { title: "Trends to Watch in Home Furnishing", date: "Apr 22, 2026", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=150&auto=format&fit=crop&q=80" }
];

// Media Gallery Images
const galleryImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=300&auto=format&fit=crop&q=80"
];

const heroSlides = [
  {
    titleFirst: "Crafted with Heritage,",
    titleSecond: "Made for Modern Living.",
    description: "Experience the finest quality fabrics, curated to bring elegance, comfort and tradition to your life.",
    image: "/images/hero_saree_arch.png"
  },
  {
    titleFirst: "Threads of Tradition,",
    titleSecond: "Styled for Today.",
    description: "Discover India's finest collections of premium royal silks and handloom weaves of unmatched standards.",
    image: "/images/hero_saree_arch_2.png"
  },
  {
    titleFirst: "Weaving Artistry,",
    titleSecond: "Perfect for Every Era.",
    description: "Collaborating directly with master artisans to bring authentic legacy designs straight to your wardrobe.",
    image: "/images/hero_saree_arch_3.png"
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % (popularCollections.length - 2));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + (popularCollections.length - 2)) % (popularCollections.length - 2));
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden">
      
      {/* ── 1. HERO SECTION (Arched Mockup Redesign) ── */}
      <section className="relative pt-8 md:pt-12 pb-6 md:pb-8 px-6 sm:px-8 lg:px-14 flex items-center min-h-[380px]" style={{ background: 'linear-gradient(135deg, #fbfaf8 0%, #f6f2eb 100%)' }}>
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center min-h-[280px] md:min-h-[320px]">
            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHeroSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <span 
                    className="italic text-[26px] sm:text-[30px] font-medium block mb-2"
                    style={{ color: C.accent, fontFamily: "'Playfair Display', serif" }}
                  >
                    {heroSlides[activeHeroSlide].titleFirst}
                  </span>
                  <h1 
                    className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight mb-4 text-[#133835]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {heroSlides[activeHeroSlide].titleSecond}
                  </h1>
                  
                  {/* Elegant wavy underline */}
                  <div className="w-24 h-1.5 mb-6">
                    <svg width="100" height="10" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5C20 1 30 9 50 5C70 1 80 9 100 5" stroke={C.accent} strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <p style={{ color: C.stone }} className="text-base sm:text-lg mb-6 max-w-md leading-relaxed font-normal">
                    {heroSlides[activeHeroSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                to="/products"
                className="px-7 py-3.5 rounded-xl font-bold tracking-wider text-[11px] uppercase transition-all duration-300 shadow-md"
                style={{
                  background: C.primary,
                  color: '#ffffff',
                  border: `1.5px solid ${C.primary}`
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = C.accent;
                  e.currentTarget.style.borderColor = C.accent;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = C.primary;
                  e.currentTarget.style.borderColor = C.primary;
                }}
              >
                Explore Collection
              </Link>
              <Link
                to="/gallery"
                className="px-7 py-3.5 rounded-xl font-bold tracking-wider text-[11px] uppercase transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: C.primary,
                  border: `1.5px solid ${C.primary}`
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = C.primary;
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = C.primary;
                }}
              >
                View Catalogue
              </Link>
            </div>
          </div>

          {/* Right Column: Arched Image Frame */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[360px] aspect-[4/5] sm:aspect-[4/5] z-10">
              
              {/* Offset border accent */}
              <div 
                className="absolute right-[-10px] bottom-[-10px] w-full h-full border-[1.5px] z-0 transition-transform duration-500 hover:translate-x-1 hover:translate-y-1" 
                style={{ 
                  borderColor: C.accent,
                  borderRadius: '180px 180px 24px 24px' 
                }}
              />

              {/* Main image container */}
              <div 
                className="w-full h-full overflow-hidden border-4 border-white shadow-xl relative z-10"
                style={{ 
                  borderRadius: '180px 180px 24px 24px' 
                }}
              >
                <AnimatePresence initial={false}>
                  <motion.img 
                    key={activeHeroSlide}
                    src={heroSlides[activeHeroSlide].image} 
                    alt="Fashion Heritage Traditional Collection" 
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  />
                </AnimatePresence>

              </div>
  
              {/* Slider Dots (Interactive) */}
              <div className="absolute left-[-20px] md:left-[-40px] top-[40%] flex flex-col gap-2.5 z-20">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHeroSlide(idx)}
                    className={`w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeHeroSlide === idx 
                        ? 'bg-[#b56b46] opacity-100 scale-125 shadow-sm' 
                        : 'bg-[#b56b46] opacity-40 hover:opacity-85'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ── 3. DOUBLE GRID PROMO BLOCK (Mockup Redesign) ── */}
      <section className="py-20 px-6 sm:px-8 lg:px-14">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Terracotta Banner (60% Width) */}
          <div 
            style={{ background: '#b56b46' }} 
            className="lg:col-span-3 rounded-2xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[350px] text-left shadow-sm group"
          >
            {/* Pattern Backdrop */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="z-10 max-w-[60%] flex flex-col items-start">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">New Collection</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4 leading-tight">
                Timeless Weaves, Thoughtfully Designed.
              </h2>
              <p className="text-white/80 text-[13px] leading-relaxed mb-6 font-medium">
                From everyday comfort to timeless elegance, our fabrics are designed to inspire.
              </p>
              <Link
                to="/products"
                className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white text-[#b56b46] hover:bg-opacity-90 transition-all shadow-sm"
              >
                Discover Now
              </Link>
            </div>
            
            {/* Image aligned right bottom */}
            <div className="absolute right-0 bottom-0 w-[42%] h-full pointer-events-none flex items-end">
              <img 
                src="/images/draped_fabric_terracotta.png" 
                alt="Timeless Weaves Draped Fabric" 
                className="object-cover h-[92%] w-full rounded-tl-[100px] border-l-4 border-t-4 border-white/20 shadow-2xl group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Sage Green Banner (40% Width) */}
          <div 
            style={{ background: '#e0e7e3' }} 
            className="lg:col-span-2 rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[350px] text-left relative overflow-hidden shadow-sm group"
          >
            <div className="z-10">
              <span style={{ color: C.primary }} className="text-[10px] font-bold tracking-[0.2em] uppercase">Trade Services</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl font-semibold mt-3 mb-4 leading-tight">
                Growing Together in Every Thread
              </h2>
              <p style={{ color: C.stone }} className="text-[13px] leading-relaxed mb-6">
                We offer end-to-end textile solutions for your business growth and success.
              </p>
            </div>
            <div className="z-10">
              <Link 
                to="/retail-management" 
                className="inline-block px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all hover:bg-[#1c4442] hover:text-white"
                style={{ color: C.primary, borderColor: C.primary }}
              >
                Explore Services
              </Link>
            </div>

            {/* Subtle botanical line leaf decoration in bottom right corner */}
            <div className="absolute right-4 bottom-4 opacity-15 pointer-events-none group-hover:rotate-6 transition-transform duration-500">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1">
                <path d="M12 2C12 2 12 10 18 10C18 10 12 12 12 22C12 22 12 14 6 14C6 14 12 12 12 2Z" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. CATEGORIES SECTION (Circular slider) ── */}
      <section className="py-16 bg-white border-y" style={{ borderColor: C.border }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          
          <div className="flex justify-between items-baseline mb-10 border-b pb-4" style={{ borderColor: C.border }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif', color: C.soil" }} className="text-2xl sm:text-3xl font-semibold">
              Shop By Category
            </h2>
            <Link 
              to="/products" 
              style={{ color: C.accent, fontSize: 13, fontweight: 600, display: 'flex', items: 'center', gap: 4 }}
              className="hover:underline transition-all font-bold uppercase tracking-wider"
            >
              View All <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 justify-center">
            {categoriesList.map((cat) => (
              <div 
                key={cat.name} 
                className="flex flex-col items-center text-center cursor-pointer group"
                onClick={() => navigate(cat.path)}
              >
                <div 
                  style={{ borderColor: C.border }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md border-2 transition-all duration-300 group-hover:scale-105 group-hover:border-[#b56b46]"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                <h3 style={{ color: C.soil }} className="font-bold text-xs uppercase mt-4 tracking-wider transition-colors group-hover:text-[#b56b46]">
                  {cat.name}
                </h3>
                <p style={{ color: C.stone }} className="text-[10px] mt-1 font-medium opacity-80">
                  {cat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE FASHION HERITAGE (A Commitment Woven in Trust) ── */}
      <section className="py-20 px-6 sm:px-8 lg:px-14">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block */}
          <div className="lg:col-span-4 text-left">
            <span style={{ color: C.accent }} className="text-[11px] font-bold tracking-[0.2em] uppercase">Why Choose Us</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif', color: C.soil" }} className="text-3xl sm:text-4xl font-semibold mt-3 mb-5 leading-tight">
              A Commitment Woven in Trust.
            </h2>
            
            {/* Paint stroke design line under title */}
            <div className="w-40 h-2 bg-[#eae2d3] rounded-full relative overflow-hidden mb-6">
              <div className="absolute left-0 top-0 h-full w-[45%]" style={{ background: C.accent }} />
            </div>

            <p style={{ color: C.stone }} className="text-[14px] leading-relaxed mb-6 font-medium">
              We stand for purity, authentic textures, and sustainable weaving standards, honoring classic Indian craftsmanship.
            </p>
          </div>

          {/* Right Block: 3 image cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Heritage of Quality',
                desc: 'Decades of expertise in delivering world-class textiles.',
                img: '/images/heritage_quality.png'
              },
              {
                title: 'Innovation in Every Fiber',
                desc: 'Blending tradition with modern technology for better tomorrow.',
                img: '/images/innovation_fiber.png'
              },
              {
                title: 'Sustainable & Responsible',
                desc: 'Committed to ethical practices and a greener planet.',
                img: '/images/sustainable_responsible.png'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow flex flex-col text-left"
                style={{ borderColor: C.border }}
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 style={{ color: C.soil }} className="font-bold text-[13px] uppercase tracking-wider mb-2">{item.title}</h3>
                    <p style={{ color: C.stone }} className="text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. STATS BANNER (Teal Background & Gold Text) ── */}
      <section style={{ background: C.primary }} className="py-12 px-6 sm:px-8 lg:px-14 relative overflow-hidden">
        {/* Mandala vector watermark */}
        <div className="absolute right-[-40px] top-[-40px] opacity-5 text-white pointer-events-none">
          <svg width="220" height="220" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"/></svg>
        </div>

        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { val: '20+', title: 'Years of Excellence' },
              { val: '500+', title: 'Retail Partners' },
              { val: '100+', title: 'Cities Pan India' },
              { val: '1,00,000+', title: 'Happy Customers' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
                <p style={{ color: '#f2ebe1' }} className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 font-display">{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-0.5 text-white/70">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. POPULAR COLLECTIONS CAROUSEL ── */}
      <section className="py-20" style={{ background: '#FAF6EF' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-px w-12 bg-stone-300 hidden sm:inline-block" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-2xl sm:text-3xl font-semibold uppercase tracking-widest text-center">
                Popular Collections
              </h2>
              <span className="h-px w-12 bg-stone-300 hidden sm:inline-block" />
            </div>

            <div className="flex gap-2 shrink-0">
              <button 
                onClick={prevSlide}
                style={{ border: `1.5px solid ${C.border}` }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-stone bg-white transition-all hover:bg-stone-50 cursor-pointer shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={nextSlide}
                style={{ border: `1.5px solid ${C.border}` }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-stone bg-white transition-all hover:bg-stone-50 cursor-pointer shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden w-full relative py-2">
            <motion.div 
              className="flex gap-6 w-full"
              animate={{ x: `-${carouselIndex * 35.2}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {popularCollections.map((col, idx) => (
                <div 
                  key={idx} 
                  className="w-[85%] sm:w-[46%] lg:w-[calc(33.333%-16px)] shrink-0 cursor-pointer"
                  onClick={() => navigate('/products')}
                >
                  <div 
                    className="card-hover rounded-2xl overflow-hidden bg-white shadow-sm"
                    style={{ border: `1px solid ${C.border}` }}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img 
                        src={col.image} 
                        alt={col.name} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 style={{ color: C.soil }} className="font-bold text-sm tracking-wider uppercase">{col.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>



      {/* ── 9. LOWER MULTI-GRID SECTION (Blog & Media) ── */}
      <section className="py-16 bg-white border-t" style={{ borderColor: C.border }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            
            {/* Column 1: From the Blog */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-xl font-bold uppercase tracking-wider">From the Blog</h3>
                <Link to="/blog" className="text-xs font-bold tracking-wider text-accent uppercase hover:opacity-85">View All</Link>
              </div>
              <div className="flex flex-col gap-5">
                {blogs.map((b, idx) => (
                  <Link key={idx} to="/blog" className="flex gap-4 group">
                    <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-stone-100 shadow-sm border border-stone-100">
                      <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <h4 style={{ color: C.soil }} className="text-sm sm:text-base font-bold leading-snug group-hover:text-accent transition-colors line-clamp-2">{b.title}</h4>
                      <div className="flex items-center gap-1.5 mt-1.5 text-stone text-xs">
                        <Calendar size={11} style={{ color: C.accent }} />
                        <span>{b.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Media Gallery */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-xl font-bold uppercase tracking-wider">Media Gallery</h3>
                <Link to="/gallery" className="text-xs font-bold tracking-wider text-accent uppercase hover:opacity-85">View All</Link>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {galleryImages.map((img, i) => (
                  <Link 
                    key={i} 
                    to="/gallery" 
                    className="aspect-square rounded-xl overflow-hidden bg-stone-100 relative group cursor-pointer shadow-sm border border-stone-100 block"
                  >
                    <img src={img} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {(i === 0 || i === 4) && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white">
                        <Play size={14} fill="currentColor" className="opacity-95" />
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
