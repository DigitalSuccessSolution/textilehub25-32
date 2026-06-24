import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronLeft, ChevronRight,
  Gem, Truck, Headphones, RotateCcw,
  Award, Package, Users, CheckCircle, Star,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#5b4fcf',
  primaryDark: '#3d3399',
  accent: '#c8922a',
  bg: '#ffffff',
  sand: '#f5f0e8',
  sage: '#ede8f5',
  border: '#d8cff0',
  soil: '#1a1435',
  stone: '#6b6080',
};

// ── Hero Slides ──
const heroSlides = [
  {
    badge: 'Timeless Weaves, Modern You',
    titleLine1: 'Threads of',
    titleHighlight: 'Tradition,',
    titleLine2: 'Touch of Luxury',
    subtitle: 'Discover timeless fabrics crafted with care, designed to bring elegance to every moment.',
    cta: 'Explore Collection',
    path: '/products',
    image: '/images/hero_stacked_fabrics.png',
  },
  {
    badge: 'New Arrivals 2026',
    titleLine1: 'Luxury for Your',
    titleHighlight: 'Home',
    titleLine2: '& Living Spaces',
    subtitle: 'Premium cotton bedsheets, linen and home textiles that transform your space.',
    cta: 'Explore Home',
    path: '/products?category=Bedsheets & Linen',
    image: '/images/category_home.png',
  },
  {
    badge: 'Kids Collection',
    titleLine1: 'Vibrant Colors',
    titleHighlight: 'For Little',
    titleLine2: 'Ones',
    subtitle: "Soft, safe & colorful fabrics for children's clothing — comfort that parents trust.",
    cta: 'View Kids',
    path: '/products?category=Hosiery Items',
    image: '/images/category_kids.png',
  },
];

// ── Shop by Category — 6 uniform cards ──
const shopCategories = [
  { name: 'Sarees',            path: '/products?category=Sarees',            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
  { name: 'Leggings',          path: '/products?category=Leggings',          image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60' },
  { name: 'Kurtis',            path: '/products?category=Kurtis',            image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60' },
  { name: 'Dress Suits',       path: '/products?category=Dress Suits',       image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60' },
  { name: 'Bedsheets & Linen', path: '/products?category=Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
  { name: 'Hosiery Items',     path: '/products?category=Hosiery Items',     image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60' },
];

// ── Features Strip ──
const features = [
  { icon: Gem,        label: 'Premium Quality',    desc: 'Finest fabrics with unmatched quality' },
  { icon: Truck,      label: 'Wide Range',         desc: 'Thousands of fabrics for every need' },
  { icon: Users,      label: 'Customer First',     desc: 'Your satisfaction is our priority' },
  { icon: Package,    label: 'Secure Packaging',   desc: 'Safe & reliable packaging always' },
  { icon: Headphones, label: 'Dedicated Support',  desc: 'We are here to help you anytime' },
];

// ── Popular Picks ──
const popularPicks = [
  { name: 'Banarasi Silk Saree',       image: '/images/hero_sarees.png',     path: '/products?category=Sarees' },
  { name: 'Embroidered Anarkali Suit', image: '/images/category_ethnic.png', path: '/products?category=Dress Suits' },
  { name: 'Designer Lehenga Choli',    image: '/images/hero_main.png',       path: '/products?category=Ethnic Wear' },
  { name: 'Pure Cotton Fabric',        image: '/images/hero_fabrics.png',    path: '/products?category=Plain Fabrics' },
  { name: 'Luxury Bedsheet Set',       image: '/images/category_home.png',   path: '/products?category=Bedsheets & Linen' },
  { name: 'Tissue Silk Saree',         image: '/images/hero_sarees.png',     path: '/products?category=Sarees' },
];

// ── Trust badges ──
const trustBadges = [
  { icon: Users,        label: 'Trusted by Thousands', desc: 'Serving customers across India' },
  { icon: CheckCircle,  label: 'Authentic & Ethical',  desc: 'Sourced responsibly, crafted ethically' },
  { icon: Package,      label: 'Secure Packaging',     desc: 'Safety in every order delivered' },
  { icon: Award,        label: '100% Satisfaction',    desc: 'Your satisfaction is our priority' },
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const picksRef = useRef(null);
  const slide = heroSlides[slideIndex];

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

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden">

      {/* ═══════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════ */}
      <section
        className="relative w-full flex items-center overflow-hidden"
        style={{
          minHeight: '480px',
          paddingTop: 32,
          background: 'linear-gradient(135deg, #f5f0e8 0%, #ede8f5 60%, #e8e0f5 100%)',
        }}
      >
        {/* Soft background blobs */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 350, height: 500, background: 'rgba(91,79,207,0.04)', borderRadius: '0 0 100% 0', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 400, height: 300, background: 'rgba(200,146,42,0.05)', borderRadius: '100% 0 0 0', filter: 'blur(50px)', pointerEvents: 'none' }} />

        <div className="w-full max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-0 relative z-10 py-6 lg:py-8">

          {/* ── Left: Text ── */}
          <div className="w-full lg:w-[45%] flex flex-col items-start text-left">

            <AnimatePresence mode="wait">
              <motion.span
                key={slideIndex + '-badge'}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: C.primary, textTransform: 'uppercase', marginBottom: 12 }}
              >
                {slide.badge}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={slideIndex + '-title'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  fontWeight: 700, color: C.soil,
                  lineHeight: 1.15, margin: 0, marginBottom: 16,
                }}
              >
                {slide.titleLine1}<br />
                <span style={{ color: C.primary, fontStyle: 'italic' }}>{slide.titleHighlight}</span><br />
                {slide.titleLine2}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={slideIndex + '-sub'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{ color: C.stone, fontSize: 14, lineHeight: 1.65, marginBottom: 28, maxWidth: 360 }}
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>

            <Link
              to={slide.path}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 26px',
                background: C.soil, color: '#ffffff',
                borderRadius: 30, fontSize: 12, fontWeight: 700,
                textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
                boxShadow: '0 8px 24px rgba(26,20,53,0.2)', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.boxShadow = '0 8px 24px rgba(91,79,207,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.soil; e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,20,53,0.2)'; }}
            >
              {slide.cta} <ArrowRight size={14} />
            </Link>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8, marginTop: 30 }}>
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > slideIndex ? 1 : -1); setSlideIndex(idx); }}
                  style={{
                    width: idx === slideIndex ? 28 : 8, height: 8, borderRadius: 4,
                    background: idx === slideIndex ? C.primary : '#d8cff0',
                    border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Right: Image + Left/Right arrows at edges ── */}
          <div className="w-full lg:w-[55%] flex items-center justify-center relative" style={{ minHeight: 460 }}>

            {/* LEFT arrow — absolute left edge */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute', left: -8, top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, width: 40, height: 40, borderRadius: '50%',
                background: '#ffffff', border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 4px 12px rgba(91,79,207,0.12)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.borderColor = C.primary; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = C.border; }}
            >
              <ChevronLeft size={18} style={{ color: C.soil, transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = C.soil}
              />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: direction > 0 ? 70 : -70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -70 : 70 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: '100%', maxWidth: 620, position: 'relative' }}
              >
                <div style={{
                  borderRadius: 28, overflow: 'hidden',
                  boxShadow: '0 20px 55px rgba(91,79,207,0.16)',
                  aspectRatio: '4/3', background: '#f5f0e8',
                }}>
                  <img
                    src={slide.image}
                    alt={slide.titleLine1}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT arrow — absolute right edge */}
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute', right: -8, top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, width: 40, height: 40, borderRadius: '50%',
                background: '#ffffff', border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 4px 12px rgba(91,79,207,0.12)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.borderColor = C.primary; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = C.border; }}
            >
              <ChevronRight size={18} style={{ color: C.soil, transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = C.soil}
              />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. FEATURES STRIP
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
          3. COLLECTION BANNER + SHOP BY CATEGORY
      ═══════════════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-10">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-6">

          {/* ── Left: Collection Banner — image fills fully, no overlay ── */}
          <div
            className="relative rounded-3xl overflow-hidden flex-shrink-0"
            style={{ width: '100%', maxWidth: 320, minHeight: 360 }}
          >
            {/* Full image, no colour overlay */}
            <img
              src="/images/hero_main.png"
              alt="New Collection"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Only a thin bottom gradient so text stays readable */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(26,20,53,0.82) 0%, rgba(26,20,53,0.18) 55%, transparent 100%)',
            }} />
            <div style={{ position: 'relative', zIndex: 2, padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.accent, fontWeight: 700, display: 'block', marginBottom: 10 }}>
                New Collection
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.2, marginBottom: 10 }}>
                Elevate Every Occasion
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, margin: '0 0 20px', lineHeight: 1.6 }}>
                Explore our latest collection of fabrics for every celebration.
              </p>
              <Link
                to="/products"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '10px 20px',
                  background: 'rgba(255,255,255,0.12)', color: '#ffffff',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  borderRadius: 8, fontSize: 11, fontWeight: 700,
                  textDecoration: 'none', letterSpacing: '0.08em',
                  textTransform: 'uppercase', transition: 'all 0.25s',
                  backdropFilter: 'blur(6px)', alignSelf: 'flex-start',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.borderColor = C.primary; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              >
                View Collection <ArrowRight size={11} />
              </Link>
            </div>
          </div>

          {/* ── Right: Shop by Category Grid — 6 uniform cards, no count text ── */}
          <div className="flex-1">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 28, height: 1, background: `linear-gradient(90deg, transparent, ${C.accent})` }} />
              <span style={{ color: C.accent, fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>◆ Shop by Category ◆</span>
              <div style={{ width: 28, height: 1, background: `linear-gradient(90deg, ${C.accent}, transparent)` }} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {shopCategories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={cat.path}
                  className="group flex flex-col items-center text-center overflow-hidden"
                  style={{
                    borderRadius: 16,
                    background: 'white',
                    border: `1px solid ${C.border}`, borderTop: `4px solid ${C.primaryLight}`,
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(91,79,207,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', background: C.sage, position: 'relative' }}>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '12px 10px' }}>
                    <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: C.soil, lineHeight: 1.3 }}>
                      {cat.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          4. THREE PROMO BANNERS
      ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-6">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Banner 1: Bulk Orders */}
          <div
            className="relative rounded-2xl overflow-hidden border"
            style={{ minHeight: 180, borderColor: '#fce8d5', background: '#fff8f0' }}
          >
            <img src="/images/promo_bulk.png" alt="Bulk Orders" className="absolute inset-0 w-full h-full object-cover opacity-25" />
            <div style={{ position: 'relative', zIndex: 1, padding: '24px 24px' }}>
            <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, fontWeight: 800, display: 'block', marginBottom: 8 }}>
              Best Prices
            </span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: C.soil, margin: 0, lineHeight: 1.2, marginBottom: 6 }}>
              Bulk Orders,<br />Best Prices
            </h3>
              <p style={{ color: C.stone, fontSize: 11, margin: '0 0 16px', lineHeight: 1.5 }}>
              Special rates for retailers and bulk buyers.
            </p>
            <Link
              to="/trade-enquiry"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: 10, fontWeight: 700, color: C.accent,
                  textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
                }}
            >
              Know More <ArrowRight size={10} />
            </Link>
            </div>
          </div>

          {/* Banner 2: Custom Solutions */}
          <div
            className="relative rounded-2xl overflow-hidden border"
            style={{ minHeight: 180, borderColor: '#e8e0f5', background: '#f5f0fc' }}
          >
            <img src="/images/category_ethnic.png" alt="Custom Solutions" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div style={{ position: 'relative', zIndex: 1, padding: '24px 24px' }}>
            <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.primary, fontWeight: 800, display: 'block', marginBottom: 8 }}>
              Tailored For You
            </span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: C.soil, margin: 0, lineHeight: 1.2, marginBottom: 6 }}>
              Custom Solutions<br />for Your Brand
            </h3>
              <p style={{ color: C.stone, fontSize: 11, margin: '0 0 16px', lineHeight: 1.5 }}>
              Tailored textile solutions as per your needs.
            </p>
            <Link
              to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: 10, fontWeight: 700, color: C.primary,
                  textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
                }}
            >
              Get In Touch <ArrowRight size={10} />
            </Link>
            </div>
          </div>

          {/* Banner 3: Timely Delivery */}
          <div
            className="relative rounded-2xl overflow-hidden border"
            style={{ minHeight: 180, borderColor: '#ddd5f0', background: '#ede8f8' }}
          >
            <img src="/images/category_home.png" alt="Timely Delivery" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div style={{ position: 'relative', zIndex: 1, padding: '24px 24px' }}>
            <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7b4fcf', fontWeight: 800, display: 'block', marginBottom: 8 }}>
              Pan India
            </span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: C.soil, margin: 0, lineHeight: 1.2, marginBottom: 6 }}>
              Timely Delivery<br />Across India
            </h3>
              <p style={{ color: C.stone, fontSize: 11, margin: '0 0 16px', lineHeight: 1.5 }}>
              We ensure your orders reach you on time.
            </p>
            <Link
              to="/about"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: 10, fontWeight: 700, color: '#7b4fcf',
                  textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
                }}
            >
              Learn More <ArrowRight size={10} />
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. POPULAR PICKS — simple card: image + title only
             Scroll arrows on left & right of the row
      ═══════════════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-10">
        <div className="max-w-[90rem] mx-auto">

          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: C.soil, margin: 0 }}>
              Popular Picks
            </h2>
            <Link
              to="/products"
              style={{ fontSize: 11.5, fontWeight: 700, color: C.primary, textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          {/* Scroll row with LEFT / RIGHT buttons on sides */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 0 }}>

            {/* LEFT button */}
            <button
              onClick={() => scrollPicks(-1)}
              style={{
                flexShrink: 0,
                width: 36, height: 36, borderRadius: '50%',
                background: '#ffffff', border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', marginRight: 10,
                boxShadow: '0 2px 8px rgba(91,79,207,0.1)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.sage; e.currentTarget.style.borderColor = C.primary; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = C.border; }}
            >
              <ChevronLeft size={16} style={{ color: C.soil }} />
            </button>

            {/* Cards */}
            <div
              ref={picksRef}
              style={{ display: 'flex', gap: 14, overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', flex: 1, paddingBottom: 4 }}
            >
              {popularPicks.map((product, idx) => (
                <Link
                  key={idx}
                  to={product.path}
                  className="product-card shrink-0 text-left"
                  style={{
                    width: 186, textDecoration: 'none',
                    background: 'white',
                    borderRadius: 16, overflow: 'hidden',
                    border: `1px solid ${C.border}`, borderTop: `4px solid ${C.primaryLight}`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(91,79,207,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Image only — no tag, no price, no heart */}
                  <div style={{ aspectRatio: '3/4', background: C.sage, overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  {/* Title only */}
                  <div style={{ padding: '12px 12px' }}>
                    <p style={{ margin: 0, fontSize: 12.5, fontWeight: 600, color: C.soil, lineHeight: 1.35, fontFamily: "'Playfair Display', serif" }}>
                      {product.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* RIGHT button */}
            <button
              onClick={() => scrollPicks(1)}
              style={{
                flexShrink: 0,
                width: 36, height: 36, borderRadius: '50%',
                background: '#ffffff', border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', marginLeft: 10,
                boxShadow: '0 2px 8px rgba(91,79,207,0.1)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.sage; e.currentTarget.style.borderColor = C.primary; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = C.border; }}
            >
              <ChevronRight size={16} style={{ color: C.soil }} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. TRUST BADGES
      ═══════════════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-14 py-6">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden border" style={{ borderColor: C.border, background: C.sand }}>
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-5"
                  style={{ borderRight: idx < trustBadges.length - 1 ? `1px solid ${C.border}` : 'none' }}
                >
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(91,79,207,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={17} style={{ color: C.primary }} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 11.5, fontWeight: 700, color: C.soil }}>{badge.label}</p>
                    <p style={{ margin: 0, fontSize: 10.5, color: C.stone, marginTop: 2, lineHeight: 1.4 }}>{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
