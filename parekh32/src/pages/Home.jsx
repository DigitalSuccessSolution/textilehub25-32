import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronLeft, ChevronRight,
  Gem, Truck, Headphones,
  Award, ShieldCheck, RefreshCw, Leaf, Crown,
  Gavel, Sparkles, Scissors, Shirt, Home as HomeIcon, Layers, Smile,
  FileText, Flower, Bed, Footprints, Briefcase, User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#4b739e',        // Steel Blue
  primaryDark: '#2b496e',   // Dark Navy Blue
  accent: '#c5a059',         // Warm Gold/Beige
  bg: '#ffffff',
  sand: '#f7f4ed',           // Soft Warm Sand
  sage: '#e8eff6',           // Soft Pastel Blue
  border: '#d2dfed',         // Soft Blue-Grey Border
  soil: '#1a2a3a',           // Deep Slate Blue (Main Text)
  stone: '#536476',          // Muted Slate Text
};

// ── Categories ──
const categories = [
  "Sarees",
  "Leggings",
  "Kurtis",
  "Dress Suits",
  "Bedsheets & Linen",
  "Hosiery Items",
  "Suiting",
  "Shirting",
  "Formal & Ethnic Wear for Women",
  "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children",
  "Home Upholstery & Furnishing"
];

// ── Category Details Mapping ──
const categoryDetails = {
  "Sarees": { icon: Flower, count: "1200+ Items" },
  "Leggings": { icon: Layers, count: "800+ Items" },
  "Kurtis": { icon: Shirt, count: "1500+ Items" },
  "Dress Suits": { icon: Crown, count: "1800+ Items" },
  "Bedsheets & Linen": { icon: Bed, count: "2200+ Items" },
  "Hosiery Items": { icon: Footprints, count: "1000+ Items" },
  "Suiting": { icon: Briefcase, count: "2500+ Items" },
  "Shirting": { icon: Shirt, count: "3000+ Items" },
  "Formal & Ethnic Wear for Women": { icon: Sparkles, count: "2800+ Items" },
  "Formal & Ethnic Wear for Men": { icon: User, count: "2000+ Items" },
  "Formal & Ethnic Wear for Children": { icon: Smile, count: "1200+ Items" },
  "Home Upholstery & Furnishing": { icon: HomeIcon, count: "1600+ Items" }
};

// ── Features Strip ──
const features = [
  { icon: Gem,        label: 'Premium Quality',    desc: 'Finest fabrics with luxury standards' },
  { icon: Truck,      label: 'Wide Range',         desc: 'Thousands of textiles for all needs' },
  { icon: Award,      label: 'Customer First',     desc: 'Your satisfaction is our focus' },
  { icon: ShieldCheck,label: 'Pan India Delivery',  desc: 'Safe & timely delivery across India' },
  { icon: Headphones, label: 'Dedicated Support',  desc: 'Here to help you anytime' },
];

// ── Featured Collections ──
const featuredCollections = [
  { name: 'Premium Linen Shirting',   image: '/images/hero_fabrics.png',    path: '/products?category=Shirting' },
  { name: 'Artisanal Handloom Saree',  image: '/images/hero_sarees.png',     path: '/products?category=Sarees' },
  { name: 'Luxury Cotton Bedding',     image: '/images/slide1_bed.png',      path: '/products?category=Bedsheets%20%26%20Linen' },
  { name: 'Heritage Brocade Fabrics',  image: '/images/slide1_rolls.png',    path: '/products?category=Suiting' },
];



const heroSlides = [
  {
    badge: 'Luxury Textile Curation',
    titleLine1: 'Timeless Weaves, ',
    titleItalic: 'Modern Elegance',
    titleLine2: '',
    desc: "Discover fabrics that blend tradition with today's style.",
    btnText: 'Explore Collection',
    bg: '#d2e3f5', // soft light blue as in user image
    layout: 'three-columns-arched',
    images: [
      '/images/slide1_saree.png', // saree woman
      '/images/slide1_rolls.png', // rolls
      '/images/slide1_bed.png'    // bedding
    ],
    btnBg: '#3d699e',
    btnHoverBg: '#c5a059',
    badgeColor: '#c5a059',
    titleColor: '#1a2a3a',
    descColor: '#4b5a6a',
    hasLeafSketch: true,
    borderColor: '#ffffff'
  },
  {
    badge: 'Timeless Weaves · Modern You',
    titleLine1: 'Threads of ',
    titleItalic: 'Tradition,',
    titleLine2: ' Touch of Luxury',
    desc: "Discover India's finest textile curation. Crafted with century-old passion, tailored for modern elegance, and delivered with trust.",
    btnText: 'Explore Collection',
    bg: 'linear-gradient(135deg, #f7f4ed 0%, #e8eff6 100%)',
    layout: 'three-columns-arched',
    images: [
      '/images/hero_sarees.png',
      '/images/fabrics_rolls.png',
      '/images/hero_stacked_fabrics.png'
    ],
    btnBg: C.primary,
    btnHoverBg: C.accent,
    badgeColor: C.accent,
    titleColor: C.soil,
    descColor: C.stone,
    borderColor: '#ffffff',
    hasLeafSketch: true
  },
  {
    badge: 'Premium Home Furnishing',
    titleLine1: 'Crafted for Luxury, ',
    titleItalic: 'Styled for You',
    titleLine2: '',
    desc: "Experience the ultimate collection of home textiles and premium fabrics.",
    btnText: 'Explore Collection',
    bg: 'linear-gradient(135deg, #f2ece0 0%, #e8eff6 100%)', // warm cream/sand to soft blue
    layout: 'three-columns-arched',
    images: [
      '/images/category_ethnic.png', // ethnic
      '/images/category_home.png',   // home rolls
      '/images/about_hero.png'       // bed sheets
    ],
    btnBg: '#3d699e',
    btnHoverBg: '#c5a059',
    badgeColor: '#c5a059',
    titleColor: '#1a2a3a',
    descColor: '#4b5a6a',
    hasLeafSketch: true,
    borderColor: '#ffffff'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden">

      {/* ═══════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════ */}
      <section
        className="relative w-full flex items-center overflow-hidden transition-all duration-1000"
        style={{
          minHeight: '520px',
          paddingTop: 36,
          background: slide.bg,
        }}
      >
        {/* Soft background blobs */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 350, height: 500, background: 'rgba(75, 115, 158, 0.04)', borderRadius: '0 0 100% 0', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 400, height: 300, background: 'rgba(197, 160, 89, 0.05)', borderRadius: '100% 0 0 0', filter: 'blur(50px)', pointerEvents: 'none' }} />

        <div className="w-full max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 relative z-10 pt-1 pb-6 lg:pt-2 lg:pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full"
            >
              {/* ── Left: Text ── */}
              <div className="w-full lg:w-[45%] flex flex-col items-start text-left relative">
                {/* SVG Leaf Sketch Overlay */}
                {slide.hasLeafSketch && (
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none z-0 hidden lg:block text-[#3d699e]">
                    <svg
                      width="220"
                      height="380"
                      viewBox="0 0 100 200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20,180 C25,145 35,95 70,30" />
                      <path d="M70,30 C72,25 75,20 80,15 C75,22 72,27 70,30" />
                      <path d="M27,150 C12,145 5,130 10,122 C18,115 25,135 29,142 Z" fill="none" />
                      <path d="M31,135 C45,125 55,115 50,105 C42,98 35,115 33,125 Z" fill="none" />
                      <path d="M38,110 C25,100 18,85 24,78 C31,72 37,90 40,98 Z" fill="none" />
                      <path d="M45,90 C60,80 68,68 62,60 C55,54 48,72 47,80 Z" fill="none" />
                      <path d="M57,55 C50,42 45,28 50,22 C56,18 60,32 59,42 Z" fill="none" />
                    </svg>
                  </div>
                )}

                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: slide.badgeColor, textTransform: 'uppercase', marginBottom: 12, position: 'relative', zIndex: 1 }}>
                  {slide.badge}
                </span>

                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(32px, 4.5vw, 52px)',
                  fontWeight: 700, color: slide.titleColor,
                  lineHeight: 1.15, margin: 0, marginBottom: 16,
                  position: 'relative', zIndex: 1
                }}>
                  {slide.titleLine1}
                  {slide.titleItalic && (
                    <span style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: '#c5a059',
                      fontSize: 'clamp(38px, 5.5vw, 64px)',
                      paddingLeft: '4px',
                      display: 'inline-block',
                      lineHeight: 0.9,
                      transform: 'rotate(-2deg)',
                    }}>
                      {slide.titleItalic}
                    </span>
                  )}
                  {slide.titleLine2}
                </h1>

                <p style={{ color: slide.descColor, fontSize: '15px', lineHeight: 1.7, marginBottom: 28, maxWidth: 440, position: 'relative', zIndex: 1 }}>
                  {slide.desc}
                </p>

                {/* Premium Button */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Link
                    to="/products"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '6px 6px 6px 24px',
                      background: slide.btnBg,
                      color: '#ffffff',
                      borderRadius: 30,
                      fontSize: 11,
                      fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      boxShadow: '0 8px 24px rgba(61, 105, 158, 0.25)',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = slide.btnHoverBg;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      const circle = e.currentTarget.querySelector('.arrow-circle');
                      if (circle) {
                        circle.style.color = slide.btnHoverBg;
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = slide.btnBg;
                      e.currentTarget.style.transform = 'translateY(0)';
                      const circle = e.currentTarget.querySelector('.arrow-circle');
                      if (circle) {
                        circle.style.color = slide.btnBg;
                      }
                    }}
                  >
                    <span>{slide.btnText}</span>
                    <span
                      className="arrow-circle"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: slide.btnBg,
                        transition: 'all 0.25s',
                      }}
                    >
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center gap-3 mt-8 z-10">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: currentSlide === idx ? slide.btnBg : 'transparent',
                        border: `2.5px solid ${currentSlide === idx ? slide.btnBg : '#a3b8cc'}`,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0,
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* ── Right: Images (Three Arched Columns Layout) ── */}
              <div className="w-full lg:w-[55%] flex items-center justify-center relative">
                <div className="flex items-center justify-center gap-4 w-full">
                  {/* Column 1: Image 1 (Arched Top) */}
                  <div style={{
                    width: 'clamp(120px, 17vw, 200px)',
                    height: 'clamp(240px, 35vw, 400px)',
                    borderRadius: '999px 999px 24px 24px',
                    overflow: 'hidden',
                    boxShadow: '0 12px 30px rgba(26, 42, 58, 0.15)',
                    border: `2.5px solid ${slide.borderColor}`,
                    marginTop: '-15px',
                  }}>
                    <img src={slide.images[0]} alt="Textile Feature 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Column 2: Image 2 (Arched Top, shifted down) */}
                  <div style={{
                    width: 'clamp(120px, 17vw, 200px)',
                    height: 'clamp(240px, 35vw, 400px)',
                    borderRadius: '999px 999px 24px 24px',
                    overflow: 'hidden',
                    boxShadow: '0 12px 30px rgba(26, 42, 58, 0.15)',
                    border: `2.5px solid ${slide.borderColor}`,
                    marginTop: '30px',
                  }}>
                    <img src={slide.images[1]} alt="Textile Feature 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Column 3: Image 3 (Arched Top, shifted up) */}
                  <div style={{
                    width: 'clamp(120px, 17vw, 200px)',
                    height: 'clamp(240px, 35vw, 400px)',
                    borderRadius: '999px 999px 24px 24px',
                    overflow: 'hidden',
                    boxShadow: '0 12px 30px rgba(26, 42, 58, 0.15)',
                    border: `2.5px solid ${slide.borderColor}`,
                    marginTop: '-35px',
                  }}>
                    <img src={slide.images[2]} alt="Textile Feature 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(26, 42, 58, 0.08)',
              transition: 'all 0.2s',
              zIndex: 20
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.45)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={15} style={{ color: C.soil }} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(26, 42, 58, 0.08)',
              transition: 'all 0.2s',
              zIndex: 20
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.45)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={15} style={{ color: C.soil }} />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. KEY FEATURES STRIP
      ═══════════════════════════════════════ */}
      <section style={{ background: '#ffffff', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14">
          <div className="flex flex-wrap justify-center lg:justify-between items-start gap-6 py-7">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center gap-2" style={{ minWidth: 110, flex: '1 1 110px', maxWidth: 200 }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: C.sage, border: `1.5px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={19} style={{ color: C.primary }} />
                  </div>
                  <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: C.soil }}>{f.label}</p>
                  <p style={{ margin: 0, fontSize: 10.5, color: C.stone, lineHeight: 1.45 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. CATEGORIES SIDEBAR + PROMO SECTIONS
      ═══════════════════════════════════════ */}
      <section className="px-6 lg:px-14 py-12">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-6 items-stretch">

          {/* Left: Category Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 flex">
            <div style={{
              background: '#4b739e',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 12px 36px rgba(75, 115, 158, 0.1)',
            }} className="text-left w-full h-[380px] lg:h-[570px] flex flex-col">
              {/* Header with gold lines and diamonds */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="flex-1 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #c5a059)' }} />
                <span style={{ color: '#c5a059', fontSize: '10px' }}>◆</span>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0,
                  whiteSpace: 'nowrap'
                }}>
                  Shop by Category
                </h3>
                <span style={{ color: '#c5a059', fontSize: '10px' }}>◆</span>
                <span className="flex-1 h-[1.5px]" style={{ background: 'linear-gradient(90deg, #c5a059, transparent)' }} />
              </div>

              {/* Scrollable Categories List */}
              <div className="flex-1 overflow-y-auto pr-1 custom-sidebar-scrollbar flex flex-col gap-2">
                {categories.map((cat) => {
                  const details = categoryDetails[cat] || { icon: Gem, count: "1000+ Items" };
                  const Icon = details.icon;
                  return (
                    <Link
                      key={cat}
                      to={`/products?category=${encodeURIComponent(cat)}`}
                      className="flex items-center justify-between py-3 px-3 rounded-xl transition-all duration-200 group hover:bg-[rgba(255,255,255,0.08)]"
                      style={{ textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <div className="flex items-center">
                        <span style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: 600 }}>{cat}</span>
                      </div>
                      <ArrowRight size={14} className="text-[#c5a059] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Top Panel: Bulk Orders B2B Banner */}
            <div style={{
              background: '#fdf7ed',
              borderRadius: '24px',
              border: `1px solid ${C.border}`,
              display: 'flex',
              overflow: 'hidden',
              height: '260px',
            }} className="flex flex-col md:flex-row text-left group relative">
              <div className="w-full md:w-[48%] p-8 flex flex-col justify-center">
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: '8px' }}>
                  B2B CLEARANCE
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#1a2a3a', margin: 0, lineHeight: 1.2 }}>
                  Bulk Orders,
                </h3>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#3d699e', margin: 0, lineHeight: 1.2, marginBottom: '12px' }}>
                  Better Benefits
                </h3>
                <p style={{ color: C.stone, fontSize: '13.5px', margin: 0, marginBottom: '20px', lineHeight: 1.5 }}>
                  Special pricing for retailers and bulk buyers.
                </p>
                <div>
                  <Link
                    to="/trade-enquiry"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 24px',
                      background: '#c5a059',
                      color: '#ffffff',
                      borderRadius: 24,
                      fontSize: 11,
                      fontWeight: 700,
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.primary; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#c5a059'; }}
                  >
                    Enquire Now <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block w-[52%] relative overflow-hidden">
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '60px',
                  height: '100%',
                  background: 'linear-gradient(90deg, #fdf7ed 0%, transparent 100%)',
                  zIndex: 2,
                }} />
                <img
                  src="/images/bulk_orders_showroom.png"
                  alt="Bulk Orders Textile Showroom"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>

            {/* Bottom Panel: Live e-Auction Platforms */}
            {/* Bottom Panel: Live e-Auction & e-Quotation Platforms */}
            <div style={{
              background: '#e8f1f9',
              borderRadius: '24px',
              border: `1px solid ${C.border}`,
              display: 'flex',
              overflow: 'hidden',
              height: '286px',
            }} className="flex flex-col md:flex-row text-left relative">
              
              {/* Left description area: e-Auction */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between" style={{ borderRight: `1.5px solid ${C.border}` }}>
                <div className="flex flex-col items-start">
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: '#f2ece0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}>
                    <Gavel size={22} style={{ color: '#c5a059' }} />
                  </div>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.primary, display: 'block', marginBottom: '4px' }}>
                    LIVE NOW
                  </span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#1a2a3a', margin: 0, lineHeight: 1.25, marginBottom: '8px' }}>
                    e-Auction
                  </h3>
                  <p style={{ color: C.stone, fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                    Exclusive fabrics at unbeatable prices. Participate in our live digital bids and win bulk lots.
                  </p>
                </div>
                
                <div>
                  <Link
                    to="/e-auction"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 20px',
                      background: '#4b739e',
                      color: '#ffffff',
                      borderRadius: 24,
                      fontSize: 10.5,
                      fontWeight: 700,
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#4b739e'; }}
                  >
                    View Live Auctions <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right description area: e-Quotation */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div className="flex flex-col items-start">
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: '#e8eff6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}>
                    <FileText size={22} style={{ color: C.primary }} />
                  </div>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: '4px' }}>
                    QUICK RESPONSE
                  </span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#1a2a3a', margin: 0, lineHeight: 1.25, marginBottom: '8px' }}>
                    e-Quotation
                  </h3>
                  <p style={{ color: C.stone, fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                    Request instant custom quotes for your specific fabric and bulk requirements online with ease.
                  </p>
                </div>
                
                <div>
                  <Link
                    to="/e-quotation"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 20px',
                      background: '#c5a059',
                      color: '#ffffff',
                      borderRadius: 24,
                      fontSize: 10.5,
                      fontWeight: 700,
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.primary; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#c5a059'; }}
                  >
                    Request Quotation <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. FEATURED COLLECTIONS
      ═══════════════════════════════════════ */}
      <section className="px-6 lg:px-14 py-12 bg-white">
        <div className="max-w-[90rem] mx-auto">

          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: C.soil, margin: 0 }}>
              Featured Collections
            </h2>
            <Link
              to="/products"
              style={{ fontSize: 12, fontWeight: 700, color: C.primary, textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          {/* Static Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((product, idx) => (
              <Link
                key={idx}
                to={product.path}
                className="product-card text-left block w-full"
                style={{
                  textDecoration: 'none',
                  background: 'white',
                  borderRadius: 16, overflow: 'hidden',
                  border: `1px solid ${C.border}`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(75, 115, 158, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ aspectRatio: '3/4', background: C.sage, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '14px 14px' }}>
                  <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: C.soil, lineHeight: 1.35, fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}
