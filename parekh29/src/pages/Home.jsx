import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Play, Calendar,
  Gem, Truck, Layers, Headphones, ShieldCheck,
  PhoneCall, FileText, Gavel, Store,
  Award, Heart, MapPin, Smile, MailOpen, Tag, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#475643',       // Deep Forest Green
  primaryDark: '#384535',   // Darker Forest Green
  accent: '#b05742',        // Terracotta Accent
  bg: '#faf8f5',            // Warm Cream Background
  sand: '#efebdf',          // Soft Sand/Beige Background
  border: '#e2ddd5',        // Soft Warm Border
  soil: '#222b20',          // Deep Dark Charcoal-Green Text
  stone: '#5a6657',         // Muted Olive-Charcoal Text
};

// 5 Popular Collections matching mockup
const popularCollections = [
  { 
    name: 'PRINTED FABRICS', 
    image: '/images/printed_fabrics.png',
    path: '/products?category=Printed Fabrics'
  },
  { 
    name: 'PLAIN FABRICS', 
    image: '/images/plain_fabrics.png',
    path: '/products?category=Plain Fabrics'
  },
  { 
    name: 'ETHNIC WEAR', 
    image: '/images/ethnic_wear.png',
    path: '/products?category=Ethnic Wear'
  },
  { 
    name: 'HOME TEXTILES', 
    image: '/images/home_textiles.png',
    path: '/products?category=Bedsheets & Linen'
  },
  { 
    name: 'KIDS WEAR', 
    image: '/images/kids_wear.png',
    path: '/products?category=Hosiery Items' // mapping kids wear to hosiery/cotton items
  }
];

// 3 Slides for Hero Carousel
const heroSlides = [
  {
    titleLine1: "Elegance Woven",
    titleLine2: "Into Every Thread.",
    subtitle: "Premium Indian ethnic wear fabrics crafted with generations of artisan tradition.",
    image: "https://images.pexels.com/photos/8886955/pexels-photo-8886955.jpeg",
    cta: "Explore Collections",
    path: "/products"
  },
  {
    titleLine1: "Luxury for Your",
    titleLine2: "Home & Living.",
    subtitle: "Premium cotton bedsheets, linen and home textiles that transform your living space.",
    image: "https://images.pexels.com/photos/11899139/pexels-photo-11899139.jpeg",
    cta: "Shop Home Textiles",
    path: "/products?category=Bedsheets & Linen"
  },
  {
    titleLine1: "Vibrant Colors",
    titleLine2: "For Little Ones.",
    subtitle: "Soft, safe & colorful fabrics for children's clothing — comfort that parents trust.",
    image: "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg",
    cta: "View Kids Collection",
    path: "/products?category=Hosiery Items"
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

export default function Home() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000); // Autoplay slide every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: C.bg, fontFamily: "'Outfit', sans-serif" }} className="w-full overflow-x-hidden pt-2 md:pt-4">
      
      {/* ── 1. HERO SECTION CAROUSEL (Rounded card style) ── */}
      <section className="relative px-4 sm:px-6 lg:px-14 py-2 mt-1">
        <div 
          className="max-w-[90rem] mx-auto rounded-[24px] md:rounded-[32px] overflow-hidden relative shadow-sm border h-[310px] sm:h-[420px] md:h-[460px] lg:h-[490px]"
          style={{ 
            borderColor: C.border
          }}
        >
          {/* Sliding container covering the entire div */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-stone-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div 
                key={slideIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.8 },
                  opacity: { duration: 0.5 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background image — full bleed */}
                <img 
                  src={heroSlides[slideIndex].image} 
                  alt="Heritage Fabric Backdrop" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />

                {/* Dark gradient overlay left→right so text sits cleanly on image */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none" 
                  style={{ 
                    background: 'linear-gradient(100deg, rgba(34,43,32,0.82) 0%, rgba(34,43,32,0.55) 45%, rgba(34,43,32,0.12) 75%, rgba(34,43,32,0) 100%)'
                  }} 
                />

                {/* Text content — directly on top of image, no card wrapper */}
                <div className="absolute inset-0 z-20 flex items-center px-8 sm:px-14 lg:px-20">
                  <div className="max-w-lg text-left">
                    <h1 
                      className="text-3xl sm:text-4xl lg:text-[46px] leading-tight font-semibold drop-shadow-sm"
                      style={{ color: '#ffffff', fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {heroSlides[slideIndex].titleLine1}
                    </h1>
                    <h1 
                      className="text-3xl sm:text-4xl lg:text-[46px] leading-tight font-semibold mt-1 drop-shadow-sm"
                      style={{ color: '#e8b49a', fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {heroSlides[slideIndex].titleLine2}
                    </h1>
                    
                    {/* Decorative divider */}
                    <div className="flex items-center gap-2.5 my-4">
                      <div className="h-[1px] w-14" style={{ background: 'linear-gradient(90deg, transparent, rgba(232,180,154,0.8))' }} />
                      <div className="w-2.5 h-2.5 rotate-45 border border-[#e8b49a]/70" style={{ borderRadius: '2px' }}>
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-0.5 h-0.5 bg-[#e8b49a]" />
                        </div>
                      </div>
                      <div className="h-[1px] w-14" style={{ background: 'linear-gradient(90deg, rgba(232,180,154,0.8), transparent)' }} />
                    </div>

                    <p className="text-[13px] sm:text-sm mb-7 max-w-sm leading-relaxed font-normal text-white/80">
                      {heroSlides[slideIndex].subtitle}
                    </p>
                    
                    <Link
                      to={heroSlides[slideIndex].path}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold tracking-wider text-[11px] uppercase transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{
                        background: '#ffffff',
                        color: C.primary,
                        border: '1.5px solid rgba(255,255,255,0.9)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = C.accent;
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = C.accent;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.color = C.primary;
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.9)';
                      }}
                    >
                      {heroSlides[slideIndex].cta}
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-[#222b20] transition-colors border border-white/20 z-20 cursor-pointer shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-[#222b20] transition-colors border border-white/20 z-20 cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2.5 mt-4">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                background: idx === slideIndex ? C.primary : 'rgba(71, 86, 67, 0.2)',
                transform: idx === slideIndex ? 'scale(1.25)' : 'scale(1)'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── 2. FEATURES ROW (Horizontal row in a white card) ── */}
      <section className="px-4 sm:px-6 lg:px-14 py-8">
        <div className="max-w-[90rem] mx-auto bg-white rounded-2xl p-6 sm:p-8 border shadow-sm flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-4" style={{ borderColor: C.border }}>
          
          {[
            { icon: Award, label: "PREMIUM QUALITY", desc: "Finest fabrics with unmatched quality" },
            { icon: Truck, label: "PAN INDIA DELIVERY", desc: "Timely delivery across the country" },
            { icon: Layers, label: "WIDE RANGE", desc: "Thousands of fabrics for every need" },
            { icon: Headphones, label: "DEDICATED SUPPORT", desc: "We are here to help you 24/7" },
            { icon: ShieldCheck, label: "SECURE & TRUSTED", desc: "Safe transactions, complete peace of mind" }
          ].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="flex-1 flex gap-4 text-left md:items-start md:px-3">
                <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center" style={{ background: 'rgba(176, 87, 66, 0.06)' }}>
                  <Icon size={20} style={{ color: C.accent }} />
                </div>
                <div>
                  <h4 className="text-[11.5px] font-bold tracking-wider leading-tight" style={{ color: C.soil }}>{feat.label}</h4>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: C.stone }}>{feat.desc}</p>
                </div>
                {idx < 4 && <div className="hidden lg:block h-10 w-[1px] bg-[#e2ddd5] self-center ml-auto" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. POPULAR COLLECTIONS GRID ── */}
      <section className="px-4 sm:px-6 lg:px-14 py-10">
        <div className="max-w-[90rem] mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 border-b pb-4" style={{ borderColor: C.border }}>
            <h2 
              className="text-2xl sm:text-3xl font-semibold text-left tracking-wide"
              style={{ color: C.soil, fontFamily: "'Cormorant Garamond', serif" }}
            >
              POPULAR COLLECTIONS
            </h2>
            <Link 
              to="/products"
              className="group flex items-center gap-1 text-[11.5px] font-bold uppercase tracking-wider transition-colors hover:text-[#b05742]"
              style={{ color: C.primary }}
            >
              <span>View All Collections</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {popularCollections.map((col, idx) => (
              <Link 
                key={idx}
                to={col.path}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-left"
                style={{ borderColor: C.border }}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <img 
                    src={col.image} 
                    alt={col.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Footer details */}
                <div className="p-4 flex items-center justify-between border-t" style={{ borderColor: C.border }}>
                  <span className="text-[11.5px] font-bold tracking-wider" style={{ color: C.soil }}>
                    {col.name}
                  </span>
                  <div 
                    className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:bg-[#475643] group-hover:text-white"
                    style={{ borderColor: C.border, color: C.soil }}
                  >
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. BULK ORDERS BANNER (Forest green background card) ── */}
      <section className="px-4 sm:px-6 lg:px-14 py-8">
        <div 
          className="max-w-[90rem] mx-auto rounded-[24px] overflow-hidden shadow-sm relative border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 lg:py-8 lg:px-14"
          style={{ 
            background: '#475643', // Dark forest green background
            borderColor: 'rgba(255,255,255,0.08)'
          }}
        >
          {/* Subtle line art patterns */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />

          {/* Left Column (Logo & Title) */}
          <div className="lg:col-span-4 flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <Layers size={22} className="text-white" />
            </div>
            <div>
              <h3 
                className="text-white text-2xl font-bold leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Bulk Orders<br />Made Simple
              </h3>
            </div>
          </div>

          {/* Middle Column (Description) */}
          <div className="lg:col-span-5 text-left">
            <p className="text-white/80 text-[13px] leading-relaxed max-w-md font-light">
              Special pricing, dedicated support and seamless delivery for businesses of all sizes. Connect with our volume retail specialists.
            </p>
          </div>

          {/* Right Column (CTA Button & Trolley Image) */}
          <div className="lg:col-span-3 flex items-center justify-between sm:justify-start lg:justify-end gap-6 w-full">
            <Link
              to="/trade-enquiry"
              className="px-6 py-2.5 rounded-lg border border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-all hover:bg-white hover:text-[#475643] whitespace-nowrap shadow-sm hover:shadow"
            >
              Know More
            </Link>

            {/* Fabric Trolley Image bolting out */}
            <div className="w-24 h-20 shrink-0 relative overflow-hidden hidden sm:block">
              <img 
                src="/images/bulk_orders_cart.png" 
                alt="Bulk orders delivery trolley" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. STATS SECTION (Soft Sand background) ── */}
      <section className="px-4 sm:px-6 lg:px-14 py-8">
        <div 
          className="max-w-[90rem] mx-auto rounded-[24px] py-10 px-8 border shadow-sm"
          style={{ background: C.sand, borderColor: C.border }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-stretch items-center w-full">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 text-left w-full pl-0 sm:pl-8">
              <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-white/60">
                <Award size={22} style={{ color: C.accent }} />
              </div>
              <div>
                <span 
                  className="text-3xl sm:text-4xl font-light leading-none block font-display" 
                  style={{ color: C.soil, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  20+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#5a6657] uppercase mt-1.5 block leading-tight">
                  Years of<br />Excellence
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 text-left w-full pl-0 sm:pl-8 lg:border-l border-black/5">
              <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-white/60">
                <Store size={22} style={{ color: C.accent }} />
              </div>
              <div>
                <span 
                  className="text-3xl sm:text-4xl font-light leading-none block font-display" 
                  style={{ color: C.soil, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  500+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#5a6657] uppercase mt-1.5 block leading-tight">
                  Retail<br />Partners
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 text-left w-full pl-0 sm:pl-8 lg:border-l border-black/5">
              <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-white/60">
                <MapPin size={22} style={{ color: C.accent }} />
              </div>
              <div>
                <span 
                  className="text-3xl sm:text-4xl font-light leading-none block font-display" 
                  style={{ color: C.soil, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  100+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#5a6657] uppercase mt-1.5 block leading-tight">
                  Cities<br />Pan India
                </span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 text-left w-full pl-0 sm:pl-8 lg:border-l border-black/5">
              <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-white/60">
                <Smile size={22} style={{ color: C.accent }} />
              </div>
              <div>
                <span 
                  className="text-3xl sm:text-4xl font-light leading-none block font-display" 
                  style={{ color: C.soil, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  1,00,000+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#5a6657] uppercase mt-1.5 block leading-tight">
                  Happy<br />Customers
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. WHY INDIAN FABRIC HOUSE? & SOLUTIONS ── */}
      <section className="px-4 sm:px-6 lg:px-14 py-12">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Block (Intro & Illustration) */}
          <div 
            className="lg:col-span-5 text-left p-8 sm:p-10 rounded-[24px] border shadow-sm relative overflow-hidden flex flex-col justify-between"
            style={{ borderColor: C.border, minHeight: '380px' }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/about_pampas.png" 
                alt="Background texture" 
                className="w-full h-full object-cover"
              />
              {/* Soft overlay to ensure high text contrast */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 249, 246, 0.90) 0%, rgba(239, 235, 223, 0.80) 100%)'
                }}
              />
            </div>

            <div className="relative z-10">
              <span className="text-[11.5px] font-bold tracking-widest uppercase block" style={{ color: C.accent }}>
                WHY INDIAN FABRIC HOUSE?
              </span>
              <h2 
                className="text-3xl sm:text-4xl font-bold mt-4 mb-4 leading-tight"
                style={{ color: C.soil, fontFamily: "'Cormorant Garamond', serif" }}
              >
                More Than Fabric,<br />A Relationship.
              </h2>
              <p style={{ color: C.stone }} className="text-[13px] leading-relaxed mb-6 font-normal max-w-sm">
                Built on trust, craftsmanship and unwavering commitment to quality — for you, always. We work with weavers directly to assure genuine textile heritage.
              </p>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b05742] hover:bg-[#475643] text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right Block: 4 Solutions cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Trade Enquiry */}
            <Link to="/trade-enquiry" className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all text-left flex gap-5 group" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: 'rgba(71, 86, 67, 0.06)' }}>
                <PhoneCall size={18} style={{ color: C.primary }} />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wider mb-2 transition-colors group-hover:text-[#b05742]" style={{ color: C.soil }}>Trade Enquiry</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.stone }}>Connect with our textile experts</p>
              </div>
            </Link>

            {/* Card 2: E-Quotation */}
            <Link to="/e-quotation" className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all text-left flex gap-5 group" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: 'rgba(71, 86, 67, 0.06)' }}>
                <FileText size={18} style={{ color: C.primary }} />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wider mb-2 transition-colors group-hover:text-[#b05742]" style={{ color: C.soil }}>e-Quotation</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.stone }}>Quick & transparent quotations</p>
              </div>
            </Link>

            {/* Card 3: E-Auction */}
            <Link to="/e-auction" className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all text-left flex gap-5 group" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: 'rgba(71, 86, 67, 0.06)' }}>
                <Gavel size={18} style={{ color: C.primary }} />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wider mb-2 transition-colors group-hover:text-[#b05742]" style={{ color: C.soil }}>e-Auction</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.stone }}>Participate in live textile auctions</p>
              </div>
            </Link>

            {/* Card 4: Retail Management */}
            <Link to="/retail-management" className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all text-left flex gap-5 group" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: 'rgba(71, 86, 67, 0.06)' }}>
                <Store size={18} style={{ color: C.primary }} />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wider mb-2 transition-colors group-hover:text-[#b05742]" style={{ color: C.soil }}>Retail Management</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.stone }}>Grow your retail network with us</p>
              </div>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}
