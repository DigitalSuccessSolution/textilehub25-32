import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Leaf, Award, 
  Truck, Layers, Tag, Headphones, Shield, Play, 
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#7c8e76',       // Sage Green
  primaryLight: '#a3b89d',  // Soft Sage
  accent: '#d57e65',        // Terracotta Peach
  bg: '#faf8f5',            // Warm Cream
  sand: '#f2ebe1',          // Light Sand
  border: '#eae2d3',        // Beige Border
  soil: '#2b1f15',          // Dark Brown Text
  stone: '#5a4d41',         // Muted Brown Text
};

// 7 Categories from mockup
const categoriesList = [
  {
    name: 'Sarees',
    subtitle: 'Timeless Elegance',
    color: '#feece8',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Sarees'
  },
  {
    name: 'Leggings',
    subtitle: 'Comfortable Wear',
    color: '#ffecd6',
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Leggings'
  },
  {
    name: 'Kurtis',
    subtitle: 'Ethnic Chic',
    color: '#fdf1de',
    image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Kurtis'
  },
  {
    name: 'Dress Suits',
    subtitle: 'Perfect Fit',
    color: '#e6f0ff',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Dress Suits'
  },
  {
    name: 'Bedsheets & Linen',
    subtitle: 'Cozy & Soft',
    color: '#ffebeb',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Bedsheets & Linen'
  },
  {
    name: 'Hosiery Items',
    subtitle: 'Premium Comfort',
    color: '#f3e8ff',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=80',
    path: '/products?category=Hosiery Items'
  },
  {
    name: 'Suiting',
    subtitle: 'Fine Tailoring',
    color: '#e9f6e6',
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

// Blogs from Blog page
const blogs = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=150&auto=format&fit=crop&q=80" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=150&auto=format&fit=crop&q=80" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=150&auto=format&fit=crop&q=80" },
  { title: "Trends to Watch in Home Furnishing", date: "Apr 22, 2026", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=150&auto=format&fit=crop&q=80" }
];

// Media Gallery Images from BusinessMediaGallery page
const galleryImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=300&auto=format&fit=crop&q=80"
];

// Hero slider slides
const heroSlides = [
  {
    titleFirst: "Threads of Tradition,",
    titleSecond: "Styled for Today",
    description: "Explore India's largest collection of premium fabrics delivering unmatched quality and elegance.",
    image: "/images/hero_textile.png",
    btn1Text: "Explore Collections",
    btn1Path: "/products",
    btn2Text: "View Catalogue",
    btn2Path: "/gallery"
  },
  {
    titleFirst: "Crafting Excellence,",
    titleSecond: "Weaving Stories",
    description: "Sustainably sourced fibers and artisan cooperatives coming together to create heritage fabrics.",
    image: "/images/hero_textile_2.png",
    btn1Text: "Our Story",
    btn1Path: "/about",
    btn2Text: "Contact Us",
    btn2Path: "/contact"
  },
  {
    titleFirst: "Luxury Fabrics,",
    titleSecond: "Premium Designs",
    description: "A premium B2B and retail destination for heritage sarees, suiting, shirting, and luxury home furnishings.",
    image: "/images/hero_textile_3.png",
    btn1Text: "B2B Solutions",
    btn1Path: "/retail-management",
    btn2Text: "Trade Circular",
    btn2Path: "/trade-circular"
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // changes every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    // With 6 items, showing exactly 3 cards, the max start index is 3 (6 - 3).
    // So popularCollections.length - 2 is 4 (indices 0, 1, 2, 3)
    setCarouselIndex((prev) => (prev + 1) % (popularCollections.length - 2));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + (popularCollections.length - 2)) % (popularCollections.length - 2));
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative min-h-[580px] pt-14 pb-16 flex items-center" style={{ background: 'linear-gradient(135deg, #fdfbf7 0%, #f6f1e8 100%)' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-5 order-2 lg:order-1 text-left z-10 flex flex-col justify-center min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHeroSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <h1 style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.15 }} className="text-4xl sm:text-5xl lg:text-[54px] font-medium tracking-tight mb-6">
                  <span style={{ color: C.accent }} className="italic block mb-1">
                    {heroSlides[activeHeroSlide].titleFirst}
                  </span>
                  <span style={{ color: C.soil }} className="font-bold">
                    {heroSlides[activeHeroSlide].titleSecond}
                  </span>
                </h1>
                <p style={{ color: C.stone }} className="text-base sm:text-lg mb-8 max-w-lg leading-relaxed font-normal">
                  {heroSlides[activeHeroSlide].description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    to={heroSlides[activeHeroSlide].btn1Path}
                    className="px-8 py-3.5 rounded-xl font-semibold tracking-wider text-xs uppercase transition-all duration-300 shadow-sm"
                    style={{
                      background: C.primary,
                      color: '#ffffff',
                      border: `1.5px solid ${C.primary}`
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#697a63'}
                    onMouseLeave={e => e.currentTarget.style.background = C.primary}
                  >
                    {heroSlides[activeHeroSlide].btn1Text}
                  </Link>
                  <Link
                    to={heroSlides[activeHeroSlide].btn2Path}
                    className="px-8 py-3.5 rounded-xl font-semibold tracking-wider text-xs uppercase transition-all duration-300"
                    style={{
                      background: 'transparent',
                      color: C.accent,
                      border: `1.5px solid ${C.accent}`
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = C.accent;
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = C.accent;
                    }}
                  >
                    {heroSlides[activeHeroSlide].btn2Text}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHeroSlide(idx)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    background: idx === activeHeroSlide ? C.accent : C.stone,
                    opacity: idx === activeHeroSlide ? 1 : 0.3,
                    width: idx === activeHeroSlide ? 24 : 10,
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column (Wavy Organic Image Slider) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            {/* Background organic shape */}
            <div 
              style={{ 
                position: 'absolute', 
                inset: '-10px',
                background: 'rgba(124, 142, 118, 0.08)',
                zIndex: 0,
                borderRadius: '50% 40% 60% 40% / 40% 60% 40% 60%'
              }}
              className="w-full h-full float-up"
            />
            
            {/* Image Wrapper with organic border radius */}
            <div className="relative w-full max-w-[550px] aspect-[4/3] sm:aspect-square md:aspect-[5/4] z-10 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeHeroSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    borderRadius: '60% 40% 50% 30% / 40% 50% 30% 60%',
                    overflow: 'hidden',
                    border: `4px solid #ffffff`,
                    boxShadow: '0 20px 48px rgba(43, 31, 21, 0.12)',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img 
                    src={heroSlides[activeHeroSlide].image} 
                    alt="Premium Indian Textile Collections" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider Arrows */}
              <button
                onClick={() => setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="absolute left-4 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm border shadow-md transition-all hover:bg-white text-stone-700 hover:text-stone-900 cursor-pointer"
                style={{ borderColor: C.border }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                className="absolute right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm border shadow-md transition-all hover:bg-white text-stone-700 hover:text-stone-900 cursor-pointer"
                style={{ borderColor: C.border }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. CATEGORIES SECTION (7 Circular items, single border complete image feel) ── */}
      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          
          {/* Header Row */}
          <div className="flex justify-between items-baseline mb-8 border-b pb-4" style={{ borderColor: C.border }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 500, color: C.soil }} className="margin-0">
              Shop By Category
            </h2>
            <Link 
              to="/products" 
              style={{ color: C.accent, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}
              className="hover:underline transition-all"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 justify-center">
            {categoriesList.map((cat, i) => (
              <div 
                key={cat.name} 
                className="flex flex-col items-center text-center cursor-pointer group"
                onClick={() => navigate(cat.path)}
              >
                {/* Single complete circular image - no double borders */}
                <div 
                  style={{ borderColor: C.border }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md border-2 transition-all duration-300 group-hover:scale-105"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                {/* Text Label */}
                <h3 style={{ color: C.soil }} className="font-bold text-xs sm:text-[13px] uppercase mt-4 tracking-wider">
                  {cat.name}
                </h3>
                <p style={{ color: C.stone }} className="text-[10px] sm:text-xs mt-1 font-medium opacity-80">
                  {cat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TRUST BADGES STRIP ── */}
      <section className="py-6 border-y border-stone-100" style={{ background: '#f5f7f4' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'Assurance' },
              { icon: Truck, title: 'Pan India', desc: 'Delivery' },
              { icon: Layers, title: 'Wide Product', desc: 'Range' },
              { icon: Tag, title: 'Competitive', desc: 'Pricing' },
              { icon: Headphones, title: '24/7 Dedicated', desc: 'Support' },
              { icon: Shield, title: 'Secure & Trusted', desc: 'Transactions' }
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-3 px-3 py-1.5 justify-center md:justify-start">
                  <div style={{ background: 'rgba(124, 142, 118, 0.1)' }} className="w-10 h-10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Icon size={18} style={{ color: C.primary }} />
                  </div>
                  <div className="text-left">
                    <p style={{ color: C.soil }} className="text-[11.5px] font-bold uppercase tracking-wider leading-tight">{badge.title}</p>
                    <p style={{ color: C.stone }} className="text-[10.5px] font-medium leading-tight mt-0.5">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES GRID ── */}
      <section className="py-16">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            {/* Left Box (Double Width) */}
            <div 
              style={{ background: '#e8eee5', border: `1px solid ${C.border}` }} 
              className="lg:col-span-2 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] text-left"
            >
              <div className="z-10 max-w-[65%]">
                <span style={{ color: C.primary }} className="text-[10px] font-bold tracking-[0.2em] uppercase">About Texmart ——</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-2xl sm:text-3xl font-bold mt-3 mb-4 leading-tight">
                  Weaving Quality into Every Moment
                </h2>
                <p style={{ color: C.stone }} className="text-xs sm:text-[13px] leading-relaxed mb-6 font-medium">
                  At Texmart, we bring you the finest textiles from across India with a promise of trust, quality and timeless elegance.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
                  style={{ background: C.primary }}
                >
                  Learn More About Us
                </Link>
              </div>
              
              {/* Stack of Fabric Rolls Image on Right bottom */}
              <div className="absolute right-0 bottom-0 w-[45%] h-full pointer-events-none flex items-end">
                <img 
                  src="https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&auto=format&fit=crop&q=80" 
                  alt="Fabric stack" 
                  className="object-cover rounded-tl-3xl shadow-lg border-l-2 border-t-2 border-white max-h-[85%] w-full"
                />
              </div>
            </div>

            {/* Feature Box 1: Trade Services */}
            <div 
              style={{ background: '#f6f1e8', border: `1px solid ${C.border}` }} 
              className="rounded-2xl p-6 flex flex-col justify-between min-h-[320px] text-left relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div>
                <div style={{ background: '#ffffff' }} className="w-9 h-9 rounded-lg flex items-center justify-center text-primary shadow-sm mb-4">
                  <Leaf size={16} style={{ color: C.primary }} />
                </div>
                <span style={{ color: C.stone }} className="text-[9px] font-bold tracking-widest uppercase">Trade Services</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-[19px] font-bold mt-2 mb-2 leading-tight">
                  Solutions for Textile Professionals
                </h3>
                <p style={{ color: C.stone }} className="text-xs leading-relaxed mb-4">
                  Explore our range of B2B services designed to grow your business.
                </p>
              </div>
              <div>
                <Link to="/retail-management" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5 group-hover:text-accent transition-colors">
                  Explore Services <ArrowRight size={13} />
                </Link>
                <div className="mt-4 h-24 overflow-hidden rounded-t-xl">
                  <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop&q=80" alt="Trade Services" className="w-full h-full object-cover grayscale opacity-45 group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Feature Box 2: E-Quotation */}
            <div 
              style={{ background: '#feece8', border: `1px solid ${C.border}` }} 
              className="rounded-2xl p-6 flex flex-col justify-between min-h-[320px] text-left relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div>
                <div style={{ background: '#ffffff' }} className="w-9 h-9 rounded-lg flex items-center justify-center text-accent shadow-sm mb-4">
                  <Tag size={15} style={{ color: C.accent }} />
                </div>
                <span style={{ color: C.stone }} className="text-[9px] font-bold tracking-widest uppercase">E-Quotation</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-[19px] font-bold mt-2 mb-2 leading-tight">
                  Get Instant Quotation
                </h3>
                <p style={{ color: C.stone }} className="text-xs leading-relaxed mb-4">
                  Quick, transparent & reliable quotation for your business requirements.
                </p>
              </div>
              <div>
                <Link to="/e-quotation" className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                  Request Quote <ArrowRight size={13} />
                </Link>
                <div className="mt-4 h-24 overflow-hidden rounded-t-xl">
                  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&auto=format&fit=crop&q=80" alt="Quotation" className="w-full h-full object-cover grayscale opacity-45 group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Feature Box 3: Live E-Auction */}
            <div 
              style={{ background: '#e6f0ff', border: `1px solid ${C.border}` }} 
              className="rounded-2xl p-6 flex flex-col justify-between min-h-[320px] text-left relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div>
                <div style={{ background: '#ffffff' }} className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-600 shadow-sm mb-4">
                  <Shield size={16} className="text-blue-600" />
                </div>
                <span style={{ color: C.stone }} className="text-[9px] font-bold tracking-widest uppercase">Live E-Auction</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-[19px] font-bold mt-2 mb-2 leading-tight">
                  Join Live Textile Auctions
                </h3>
                <p style={{ color: C.stone }} className="text-xs leading-relaxed mb-4">
                  Bid on premium textile lots from verified sellers across the nation.
                </p>
              </div>
              <div>
                <Link to="/e-auction" className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                  View Auctions <ArrowRight size={13} />
                </Link>
                <div className="mt-4 h-24 overflow-hidden rounded-t-xl">
                  <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&auto=format&fit=crop&q=80" alt="Auction" className="w-full h-full object-cover grayscale opacity-45 group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. STATS ROW ── */}
      <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: '#ffffff' }} className="py-8">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stone-150">
            {[
              { val: '20+', title: 'Years of Excellence' },
              { val: '500+', title: 'Retail Partners' },
              { val: '100+', title: 'Cities Pan India' },
              { val: '1,00,000+', title: 'Happy Customers' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
                <p style={{ color: C.accent }} className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">{stat.val}</p>
                <p style={{ color: C.stone }} className="text-xs font-bold uppercase tracking-wider mt-0.5">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. POPULAR COLLECTIONS CAROUSEL (3 Cards Shown at a time) ── */}
      <section className="py-16" style={{ background: '#FAF6EF' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            {/* Title with decorative lines */}
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-px w-12 bg-stone-300 hidden sm:inline-block" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-center">
                Popular Collections
              </h2>
              <span className="h-px w-12 bg-stone-300 hidden sm:inline-block" />
            </div>

            {/* Arrows */}
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

          {/* Carousel Cards container */}
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

      {/* ── 7. LOWER MULTI-GRID SECTION (2-Column: Blog & Media Gallery) ── */}
      <section className="py-16">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            
            {/* Column 1: From the Blog */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-xl font-bold uppercase tracking-wider">From the Blog</h3>
                <Link to="/blog" className="text-xs font-semibold tracking-wider text-accent uppercase hover:opacity-85">View All</Link>
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
                        <Calendar size={11} style={{ color: C.primaryLight }} />
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
                <Link to="/gallery" className="text-xs font-semibold tracking-wider text-accent uppercase hover:opacity-85">View All</Link>
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
