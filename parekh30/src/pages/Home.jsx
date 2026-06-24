import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, ChevronLeft, ChevronRight, Play,
  Gem, Truck, ShieldCheck, Headphones, RotateCcw,
  PhoneCall, FileText, Gavel, Store,
  Award, Heart, MapPin, Smile, Star, ShoppingCart,
  Layers, CheckCircle, Package, Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#0e6b6b',
  primaryDark: '#094f4f',
  accent: '#c8922a',
  bg: '#ffffff',
  sand: '#f0f7f7',
  border: '#c8e0e0',
  soil: '#0d2626',
  stone: '#4a6b6b',
};

// ── Hero Carousel Slides ──
const heroSlides = [
  {
    badge: 'Timeless Weaves, Modern You',
    titleLine1: 'Crafted to',
    titleHighlight: 'Inspire,',
    titleLine2: 'Woven to Last',
    subtitle: 'Premium textiles for every occasion, every mood, every you.',
    cta1: 'Shop Collection',
    cta2: 'Play Video',
    path: '/products',
    bgImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85&fit=crop',
  },
  {
    badge: 'New Arrivals 2026',
    titleLine1: 'Luxury for Your',
    titleHighlight: 'Home',
    titleLine2: '& Living Spaces',
    subtitle: 'Premium cotton bedsheets, linen and home textiles that transform your space.',
    cta1: 'Explore Home',
    cta2: 'View Catalog',
    path: '/products?category=Bedsheets & Linen',
    bgImage: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=85&fit=crop',
  },
  {
    badge: 'Kids Collection',
    titleLine1: 'Vibrant Colors',
    titleHighlight: 'For Little',
    titleLine2: 'Ones',
    subtitle: 'Soft, safe & colorful fabrics for children\'s clothing — comfort that parents trust.',
    cta1: 'View Kids',
    cta2: 'New Arrivals',
    path: '/products?category=Hosiery Items',
    bgImage: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=900&q=85&fit=crop',
  },
];

// ── Hero right-side category cards ──
const heroCategories = [
  {
    name: 'Sarees',
    image: '/images/ethnic_wear.png',
    path: '/products?category=Ethnic Wear',
  },
  {
    name: 'Fabrics',
    image: '/images/printed_fabrics.png',
    path: '/products?category=Printed Fabrics',
  },
  {
    name: 'Kids Wear',
    image: '/images/kids_wear.png',
    path: '/products?category=Hosiery Items',
  },
  {
    name: 'Home Textiles',
    image: '/images/home_textiles.png',
    path: '/products?category=Bedsheets & Linen',
  },
];

// ── Shop by Category ──
const shopCategories = [
  { icon: '🥻', name: 'Sarees', count: 'Explore Collection', path: '/products?category=Sarees' },
  { icon: '👖', name: 'Leggings', count: 'Explore Collection', path: '/products?category=Leggings' },
  { icon: '👗', name: 'Kurtis', count: 'Explore Collection', path: '/products?category=Kurtis' },
  { icon: '👘', name: 'Dress Suits', count: 'Explore Collection', path: '/products?category=Dress Suits' },
  { icon: '🛏️', name: 'Bedsheets & Linen', count: 'Explore Collection', path: '/products?category=Bedsheets & Linen' },
  { icon: '🧦', name: 'Hosiery Items', count: 'Explore Collection', path: '/products?category=Hosiery Items' },
  { icon: '👔', name: 'Suiting', count: 'Explore Collection', path: '/products?category=Suiting' },
  { icon: '👕', name: 'Shirting', count: 'Explore Collection', path: '/products?category=Shirting' },
  { icon: '✨', name: 'Formal & Ethnic Wear for Women', count: 'Explore Collection', path: '/products?category=Formal & Ethnic Wear for Women' },
  { icon: '🕴️', name: 'Formal & Ethnic Wear for Men', count: 'Explore Collection', path: '/products?category=Formal & Ethnic Wear for Men' },
  { icon: '👦', name: 'Formal & Ethnic Wear for Children', count: 'Explore Collection', path: '/products?category=Formal & Ethnic Wear for Children' },
  { icon: '🛋️', name: 'Home Upholstery & Furnishing', count: 'Explore Collection', path: '/products?category=Home Upholstery & Furnishing' },
];

// ── Features Strip ──
const features = [
  { icon: Truck, label: 'Free Delivery', desc: 'On orders above ₹1999' },
  { icon: ShieldCheck, label: 'Secure Payments', desc: '100% safe & secure checkout' },
  { icon: Gem, label: 'Premium Quality', desc: 'Finest fabrics assured' },
  { icon: RotateCcw, label: 'Easy Returns', desc: 'Hassle-free returns within 7 days' },
  { icon: Headphones, label: 'Customer Support', desc: 'We are here to help you' },
];

// ── Popular Picks ──
const popularPicks = [
  {
    name: 'Organza Floral Saree',
    price: '₹ 4,299',
    image: '/images/ethnic_wear.png',
    path: '/products?category=Ethnic Wear',
    tag: 'Bestseller',
  },
  {
    name: 'Embroidered Anarkali',
    price: '₹ 3,899',
    image: '/images/printed_fabrics.png',
    path: '/products?category=Printed Fabrics',
    tag: 'New',
  },
  {
    name: 'Designer Lehenga',
    price: '₹ 8,999',
    image: '/images/ethnic_wear.png',
    path: '/products?category=Ethnic Wear',
    tag: 'Trending',
  },
  {
    name: 'Pure Cotton Fabric',
    price: '₹ 169 /mtr',
    image: '/images/plain_fabrics.png',
    path: '/products?category=Plain Fabrics',
    tag: '',
  },
  {
    name: 'Luxury Bedsheet Set',
    price: '₹ 2,299',
    image: '/images/home_textiles.png',
    path: '/products?category=Bedsheets & Linen',
    tag: 'Sale',
  },
  {
    name: 'Tissue Silk Saree',
    price: '₹ 3,499',
    image: '/images/ethnic_wear.png',
    path: '/products?category=Ethnic Wear',
    tag: 'Premium',
  },
];

// ── Trust badges ──
const trustBadges = [
  { icon: Users, label: 'Trusted by Thousands', desc: 'Serving customers across India' },
  { icon: CheckCircle, label: 'Authentic & Ethical', desc: 'Sourced responsibly, crafted ethically' },
  { icon: Package, label: 'Secure Packaging', desc: 'Safety in every order delivered' },
  { icon: Award, label: '100% Satisfaction', desc: 'Your satisfaction is our priority' },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function Home() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const picksRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollPicks = (dir) => {
    if (picksRef.current) {
      picksRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  const navbarHeight = 64; // navbar (~64)

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden">

      {/* ──────────────────────────────────────
          1. HERO SECTION — Image Match Redesign
      ────────────────────────────────────── */}
      <section
        className="relative w-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          paddingTop: `${navbarHeight - 24}px`, // Reduced gap further
          paddingBottom: 40,
          background: 'linear-gradient(135deg, #f4f8f7 0%, #e8f2ef 100%)',
        }}
      >
        {/* Background Leaf Shapes (Abstract) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 300, height: 400, background: 'rgba(14,107,107,0.05)', borderRadius: '0 0 100% 0', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 400, height: 300, background: 'rgba(200,146,42,0.05)', borderRadius: '100% 0 0 0', filter: 'blur(40px)' }} />
        
        <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 flex flex-col lg:flex-row items-center relative z-10">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-[40%] flex flex-col items-start pr-8 mb-12 lg:mb-0 text-left">
            <span style={{ color: '#7a9e9e', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>
              Timeless Weaves, Modern You
            </span>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 500,
              color: '#1a1a1a',
              lineHeight: 1.15,
              margin: 0,
              marginBottom: 24
            }}>
              Crafted to<br />
              <span style={{ color: C.primary, fontStyle: 'normal' }}>Inspire</span>, Woven<br />
              to Last
            </h1>
            <p style={{ color: '#4a4a4a', fontSize: 15, lineHeight: 1.6, marginBottom: 32, maxWidth: 380 }}>
              Premium textiles for every occasion,<br />every mood, every you.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/products"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', background: C.primary, color: '#ffffff',
                  borderRadius: 30, fontSize: 13, fontWeight: 600,
                  textDecoration: 'none', letterSpacing: '0.05em',
                  boxShadow: '0 8px 24px rgba(14,107,107,0.25)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                SHOP COLLECTION <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: The Specific Slider */}
          <div className="w-full lg:w-[60%] relative flex items-center justify-center mt-10 lg:mt-0">
            {/* Left/Right Arrows Removed */}


            <div className="flex items-center justify-center gap-3 md:gap-4 w-full h-[500px]">
              {heroCategories.map((cat, idx) => {
                const isActive = idx === slideIndex;
                
                // Staggered default heights to keep the visual design when not active
                const defaultStyles = [
                  { w: '24%', h: 360, y: 15 },
                  { w: '26%', h: 380, y: 5 },
                  { w: '24%', h: 340, y: 25 },
                  { w: '22%', h: 300, y: 10 }
                ];
                
                const slotWidth = isActive ? '32%' : defaultStyles[idx].w;
                const slotHeight = isActive ? 460 : defaultStyles[idx].h;
                const translateY = isActive ? -15 : defaultStyles[idx].y;
                const zIndex = isActive ? 10 : 1;
                const shadow = isActive ? '0 20px 40px rgba(14,107,107,0.15)' : '0 10px 30px rgba(0,0,0,0.04)';

                return (
                  <motion.div
                    key={cat.name}
                    animate={{
                      width: slotWidth,
                      height: slotHeight,
                      y: translateY,
                      zIndex: zIndex,
                      boxShadow: shadow
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{
                      background: '#ffffff', borderRadius: 24, overflow: 'hidden',
                      display: 'flex', flexDirection: 'column', position: 'relative',
                      flexShrink: 0
                    }}
                  >
                    {isActive && (
                      <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
                        <Star size={20} style={{ color: '#fff', fill: '#fff', opacity: 0.9 }} />
                      </div>
                    )}
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', height: isActive ? '82%' : '75%', objectFit: 'cover' }} />
                    <div style={{ padding: isActive ? '20px' : '16px', flex: 1, background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h3 style={{ margin: 0, fontSize: isActive ? 18 : 14, fontWeight: isActive ? 800 : 700, color: '#1a1a1a' }}>{cat.name}</h3>
                      <span style={{ fontSize: isActive ? 12 : 11, color: isActive ? C.primary : '#7a9e9e', display: 'flex', alignItems: 'center', gap: 4, marginTop: isActive ? 6 : 4, fontWeight: isActive ? 700 : 500 }}>
                        Explore Now <ArrowRight size={isActive ? 11 : 10} />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 10, marginTop: 40, zIndex: 10 }}>
          {heroCategories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              style={{
                width: 10, height: 10, borderRadius: '50%',
                background: idx === slideIndex ? C.primary : 'transparent',
                border: idx === slideIndex ? 'none' : `2px solid #c8e0e0`,
                padding: 0, cursor: 'pointer', transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </section>



      {/* ──────────────────────────────────────
          3. SHOP BY CATEGORY
      ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-10">
        <div className="max-w-[90rem] mx-auto">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, transparent, ${C.accent})` }} />
              <span style={{ color: C.accent, fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Collections</span>
              <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, ${C.accent}, transparent)` }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 700, color: C.soil, margin: 0 }}>
              Shop by Category
            </h2>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {shopCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={cat.path}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#ffffff',
                  borderColor: C.border,
                  boxShadow: '0 2px 8px rgba(14,107,107,0.04)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.boxShadow = '0 10px 28px rgba(14,107,107,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = '0 2px 8px rgba(14,107,107,0.04)'; }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(14,107,107,0.06)',
                  border: `1.5px solid rgba(14,107,107,0.12)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 10,
                  transition: 'all 0.3s',
                }}>
                  {cat.icon}
                </div>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: C.soil, lineHeight: 1.3, marginBottom: 4 }}>
                  {cat.name}
                </p>
                <p style={{ margin: 0, fontSize: 10, color: C.stone }}>
                  {cat.count}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          4. TWO PROMO BANNERS
      ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-8">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Banner 1: Careers */}
          <div
            className="relative rounded-2xl overflow-hidden border"
            style={{ minHeight: 220, borderColor: C.border, background: '#f8fefe' }}
          >
            <img
              src="/images/ethnic_wear.png"
              alt="Join Our Team"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div style={{ position: 'relative', zIndex: 1, padding: '28px 32px' }}>
              <span style={{
                fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase',
                color: C.accent, fontWeight: 800, display: 'block', marginBottom: 10,
              }}>
                Hiring Now
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800,
                color: C.soil, margin: 0, lineHeight: 1.2, marginBottom: 6,
              }}>
                Build Your Career<br />With Us!
              </h3>
              <p style={{ color: C.stone, fontSize: 12, margin: '0 0 20px', lineHeight: 1.6 }}>
                Join a team that weaves success.
              </p>
              <Link
                to="/career"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '10px 20px',
                  background: C.accent, color: '#ffffff',
                  borderRadius: 8, fontSize: 11, fontWeight: 700,
                  textDecoration: 'none', letterSpacing: '0.08em',
                  textTransform: 'uppercase', transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.accent; }}
              >
                Apply Now <ArrowRight size={11} />
              </Link>
            </div>
          </div>

          {/* Banner 2: Media Gallery */}
          <div
            className="relative rounded-2xl overflow-hidden border"
            style={{ minHeight: 220, borderColor: C.border, background: '#f8fefe' }}
          >
            <img
              src="/images/home_textiles.png"
              alt="Business & Media Gallery"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div style={{ position: 'relative', zIndex: 1, padding: '28px 32px' }}>
              <span style={{
                fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase',
                color: C.accent, fontWeight: 800, display: 'block', marginBottom: 10,
              }}>
                Media & Gallery
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800,
                color: C.soil, margin: 0, lineHeight: 1.2, marginBottom: 6,
              }}>
                Inside the<br />World of Textiles
              </h3>
              <p style={{ color: C.stone, fontSize: 12, margin: '0 0 20px', lineHeight: 1.6 }}>
                A glimpse into our business journey
              </p>
              <Link
                to="/business-media-gallery"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '10px 20px',
                  background: C.primary, color: '#ffffff',
                  borderRadius: 8, fontSize: 11, fontWeight: 700,
                  textDecoration: 'none', letterSpacing: '0.08em',
                  textTransform: 'uppercase', transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
              >
                View Gallery <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          5. TRUST BADGES
      ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-6">
        <div className="max-w-[90rem] mx-auto">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden border"
            style={{ borderColor: C.border, background: C.sand }}
          >
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-5"
                  style={{
                    borderRight: idx < trustBadges.length - 1 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: 'rgba(14,107,107,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={17} style={{ color: C.primary }} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 11.5, fontWeight: 700, color: C.soil }}>
                      {badge.label}
                    </p>
                    <p style={{ margin: 0, fontSize: 10.5, color: C.stone, marginTop: 2, lineHeight: 1.4 }}>
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          6. POPULAR PICKS
      ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-10">
        <div className="max-w-[90rem] mx-auto">

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: C.soil, margin: 0 }}>
              Popular Picks
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Link
                to="/products"
                style={{
                  fontSize: 11.5, fontWeight: 700, color: C.primary,
                  textDecoration: 'none', letterSpacing: '0.08em',
                  textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                View All <ArrowRight size={12} />
              </Link>
              <button
                onClick={() => scrollPicks(-1)}
                style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: '#fff', border: `1px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={15} style={{ color: C.soil }} />
              </button>
              <button
                onClick={() => scrollPicks(1)}
                style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: C.primary, border: `1px solid ${C.primary}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={15} style={{ color: '#fff' }} />
              </button>
            </div>
          </div>

          {/* Scrollable Cards */}
          <div
            ref={picksRef}
            style={{
              display: 'flex', gap: 16, overflowX: 'auto',
              scrollbarWidth: 'none', msOverflowStyle: 'none',
              paddingBottom: 4,
            }}
            className="hide-scroll"
          >
            {popularPicks.map((product, idx) => (
              <Link
                key={idx}
                to={product.path}
                className="product-card shrink-0"
                style={{
                  width: 200, textDecoration: 'none',
                  background: '#ffffff',
                  borderRadius: 16, overflow: 'hidden',
                  border: `1px solid ${C.border}`,
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '3/4', background: C.sand, overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease' }}
                    className="product-img"
                  />
                </div>
                {/* Info */}
                <div style={{ padding: '14px 12px', textAlign: 'center' }}>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: C.soil, lineHeight: 1.4, fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          7. SERVICES (Trade Tools)
      ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-10">
        <div className="max-w-[90rem] mx-auto">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, transparent, ${C.accent})` }} />
              <span style={{ color: C.accent, fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Trade Tools</span>
              <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, ${C.accent}, transparent)` }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 3.5vw, 28px)', fontWeight: 700, color: C.soil, margin: 0 }}>
              More Than Fabric, A Relationship.
            </h2>
            <p style={{ color: C.stone, fontSize: 13.5, marginTop: 10, lineHeight: 1.7 }}>
              Built on trust, craftsmanship and unwavering commitment to quality — for you, always.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { to: '/trade-enquiry', icon: PhoneCall, title: 'Trade Enquiry', desc: 'Connect with our textile experts for personalized solutions' },
              { to: '/e-quotation', icon: FileText, title: 'e-Quotation', desc: 'Quick & transparent quotations for bulk fabric orders' },
              { to: '/e-auction', icon: Gavel, title: 'e-Auction', desc: 'Participate in live textile auctions for best prices' },
              { to: '/retail-management', icon: Store, title: 'Retail Management', desc: 'Grow your retail network with expert support' },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link
                  key={idx}
                  to={card.to}
                  className="group flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 text-left"
                  style={{
                    background: '#ffffff', borderColor: C.border, textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(14,107,107,0.04)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.boxShadow = '0 12px 32px rgba(14,107,107,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = '0 2px 8px rgba(14,107,107,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'rgba(14,107,107,0.07)',
                    border: '1.5px solid rgba(14,107,107,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} style={{ color: C.primary }} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.soil, marginBottom: 6 }}>
                      {card.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 12, color: C.stone, lineHeight: 1.6 }}>
                      {card.desc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 'auto', fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: '0.06em' }}>
                    Know More <ArrowRight size={11} />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>



    </div>
  );
}
