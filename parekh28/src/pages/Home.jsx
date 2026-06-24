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
  primary: '#745b9f',       // Deep Purple / Lavender
  primaryDark: '#5e4587',   // Darker Purple
  accent: '#e37a6b',        // Warm Coral Rose Accent
  bg: '#faf8fc',            // Warm Off-white with purple tint
  sand: '#f3ebf7',          // Soft Lavender Background
  border: '#ebdff2',        // Soft Lavender Border
  soil: '#2c1e43',          // Deep purple-tinted Dark Text
  stone: '#66587c',         // Muted Lavender-Grey Text
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

export default function Home() {
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % (popularCollections.length - 2));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + (popularCollections.length - 2)) % (popularCollections.length - 2));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }} className="w-full overflow-x-hidden pt-[30px] md:pt-[40px]">
      
      {/* ── 1. REDESIGNED HERO SECTION ── */}
      <section className="relative pt-4 md:pt-6 pb-12 px-6 sm:px-8 lg:px-14 flex items-center min-h-[460px]" style={{ background: 'linear-gradient(135deg, #fdfafd 0%, #f7f3fb 100%)' }}>
        {/* Background Subtle Shape Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#745b9f 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 text-left">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 
              className="text-4xl sm:text-5xl lg:text-[58px] leading-tight font-medium mb-1"
              style={{ color: C.soil, fontFamily: "'Playfair Display', serif" }}
            >
              Weave Stories.
            </h1>
            <h1 
              className="text-4xl sm:text-5xl lg:text-[58px] leading-tight font-medium mb-4"
              style={{ color: C.accent, fontFamily: "'Playfair Display', serif" }}
            >
              Wear Tradition.
            </h1>
            
            {/* Elegant wavy divider line with centerpiece */}
            <div className="flex items-center gap-3 my-4">
              <div className="h-[1px] w-20" style={{ background: `linear-gradient(90deg, transparent, ${C.accent})` }} />
              <div className="w-4 h-4 flex items-center justify-center rotate-45 border" style={{ borderColor: C.accent, borderRadius: '2px' }}>
                <div className="w-1.5 h-1.5" style={{ background: C.accent }} />
              </div>
              <div className="h-[1px] w-20" style={{ background: `linear-gradient(90deg, ${C.accent}, transparent)` }} />
            </div>

            <p style={{ color: C.stone }} className="text-base sm:text-lg mb-8 max-w-md leading-relaxed font-normal">
              India's largest destination for premium textile fabrics crafted with passion and perfection.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-8 py-4 rounded-full font-bold tracking-wider text-[11px] uppercase transition-all duration-300 shadow-md flex items-center gap-2"
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
                Explore Collections
                <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center font-normal">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Frame with Generated Saree / Fabrics Image */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[460px] aspect-[4/4] sm:aspect-[4/4] z-10 flex items-center justify-center">
              
              {/* Outer decorative soft color circle */}
              <div 
                className="absolute inset-0 border border-dashed rounded-full" 
                style={{ 
                  borderColor: C.accent,
                  transform: 'scale(1.05)'
                }}
              />

              {/* Decorative side dots */}
              <div className="absolute left-[-20px] bottom-[20%] grid grid-cols-3 gap-1.5 opacity-30">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: C.primary }} />
                ))}
              </div>

              {/* Main image container (Circular cutout like mockup) */}
              <div 
                className="w-full h-full overflow-hidden border-[6px] border-white shadow-2xl relative z-10 rounded-full"
                style={{ 
                  aspectRatio: '1/1',
                  background: C.sand
                }}
              >
                <img 
                  src="/images/hero_loom_luxury.png" 
                  alt="Loom & Luxury Traditional Saree Collection" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-103" 
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. NEW ARRIVALS SECTION ── */}
      <section className="py-16 px-6 sm:px-8 lg:px-14">
        <div className="max-w-[90rem] mx-auto">
          <div 
            className="relative w-full rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-lg border flex flex-col lg:flex-row" 
            style={{ borderColor: C.border, background: '#8d75b6' }}
          >
            {/* Wavy background curve and gold border for large screens */}
            <div className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1200 380" preserveAspectRatio="none">
                <path 
                  d="M 0,0 L 460,0 C 500,80 390,190 380,240 C 370,290 430,340 480,380 L 0,380 Z" 
                  fill="#745b9f" 
                />
                <path 
                  d="M 460,0 C 500,80 390,190 380,240 C 370,290 430,340 480,380" 
                  fill="none" 
                  stroke="#e9c078" 
                  strokeWidth="2.5" 
                />
              </svg>
            </div>

            {/* Left side decorative dots grid */}
            <div className="absolute left-[34%] bottom-[12%] opacity-30 hidden lg:block pointer-events-none z-10">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#e9c078]" />
                ))}
              </div>
            </div>

            {/* Right side decorative dots grid */}
            <div className="absolute right-8 top-8 opacity-20 pointer-events-none z-10">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#e9c078]" />
                ))}
              </div>
            </div>

            {/* Left side Content Column */}
            <div className="lg:w-[42%] w-full p-8 sm:p-12 lg:p-14 relative z-10 flex flex-col justify-center items-start text-left bg-[#745b9f] lg:bg-transparent">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#fdf2f0]/80 font-sans">New Arrivals</span>
              
              <h2 className="text-3xl sm:text-4xl font-semibold mt-4 mb-4 leading-tight text-[#fdf2f0] font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                Latest Fabrics <br className="hidden sm:inline" />for Every Creation
              </h2>
              
              <p className="text-[#fdf2f0]/90 text-[13px] leading-relaxed mb-8 max-w-sm font-normal font-sans">
                From classic weaves to contemporary designs, explore our newest fabric collection.
              </p>
              
              <Link
                to="/products"
                className="px-7 py-3.5 bg-white text-[#745b9f] rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-103 cursor-pointer font-sans"
                style={{ color: '#745b9f' }}
              >
                View New Arrivals
              </Link>
            </div>

            {/* Right side fabric swatches image */}
            <div className="lg:w-[62%] lg:-ml-[4%] w-full h-[300px] lg:h-auto z-0 relative overflow-hidden">
              <img 
                src="/images/new_arrivals_fabrics.png" 
                alt="Loom & Luxury Fabric Swatches" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. OUR SOLUTIONS SECTION (Empowering Your Textile Business) ── */}
      <section className="py-20 px-6 sm:px-8 lg:px-14">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block */}
          <div className="lg:col-span-5 text-left flex flex-col items-start">
            <span style={{ color: C.accent }} className="text-[11px] font-bold tracking-[0.2em] uppercase">Our Solutions</span>
            
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl sm:text-4xl font-semibold mt-3 mb-6 leading-tight">
              Empowering Your Textile Business
            </h2>
            
            <p style={{ color: C.stone }} className="text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-md">
              End-to-end services and support designed to help your business thrive in the textile industry.
            </p>

            <Link
              to="/retail-management"
              className="px-7 py-3 rounded-full font-bold tracking-wider text-[11px] uppercase transition-all duration-300"
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
              Explore Services
            </Link>
          </div>

          {/* Right Block: 4 Solutions cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Trade Enquiry */}
            <Link to="/trade-enquiry" className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all text-left flex gap-5 group" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: 'rgba(116,91,159,0.06)' }}>
                <PhoneCall size={18} style={{ color: C.primary }} />
              </div>
              <div>
                <h3 className="font-bold text-sm  tracking-wider mb-2 transition-colors group-hover:text-[#e37a6b]" style={{ color: C.soil }}>Trade Enquiry</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.stone }}>Connect with our textile experts</p>
              </div>
            </Link>

            {/* Card 2: E-Quotation */}
            <Link to="/e-quotation" className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all text-left flex gap-5 group" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: 'rgba(116,91,159,0.06)' }}>
                <FileText size={18} style={{ color: C.primary }} />
              </div>
              <div>
                <h3 className="font-bold text-sm  tracking-wider mb-2 transition-colors group-hover:text-[#e37a6b]" style={{ color: C.soil }}>e-Quotation</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.stone }}>Quick & transparent quotations</p>
              </div>
            </Link>

            {/* Card 3: E-Auction */}
            <Link to="/e-auction" className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all text-left flex gap-5 group" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: 'rgba(116,91,159,0.06)' }}>
                <Gavel size={18} style={{ color: C.primary }} />
              </div>
              <div>
                <h3 className="font-bold text-sm  tracking-wider mb-2 transition-colors group-hover:text-[#e37a6b]" style={{ color: C.soil }}>e-Auction</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.stone }}>Participate in live textile auctions</p>
              </div>
            </Link>

            {/* Card 4: Retail Management */}
            <Link to="/retail-management" className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all text-left flex gap-5 group" style={{ borderColor: C.border }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: 'rgba(116,91,159,0.06)' }}>
                <Store size={18} style={{ color: C.primary }} />
              </div>
              <div>
                <h3 className="font-bold text-sm  tracking-wider mb-2 transition-colors group-hover:text-[#e37a6b]" style={{ color: C.soil }}>Retail Management</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.stone }}>Grow your retail network with us</p>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* ── 4. COUNTERS BANNER (Redesigned matching mockup) ── */}
      <section className="py-10 px-6 sm:px-8 lg:px-14">
        <div 
          style={{ background: '#8869aeff' }} 
          className="max-w-[90rem] mx-auto rounded-[32px] py-12 px-8 lg:px-16 relative overflow-hidden shadow-md"
        >
          {/* Subtle watermark grid */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />

          <div className="grid grid-cols-2 lg:flex lg:flex-row justify-between items-stretch gap-y-12 gap-x-6 lg:gap-2 w-full relative z-10">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-start lg:pl-4">
              <div className="flex items-center gap-3">
                <span className="text-[#fae3da] shrink-0">
                  <Award size={36} strokeWidth={1.2} />
                </span>
                <span 
                  className="text-4xl sm:text-[42px] font-light text-[#fae3da] leading-none" 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  20+
                </span>
              </div>
              <div className="mt-3 text-left">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#fae3da]/90 uppercase block leading-tight">
                  Years <br />Of Excellence
                </span>
              </div>
            </div>

            {/* Divider 1 */}
            <div className="hidden lg:block h-14 w-[1px] bg-[#fae3da]/20 self-center" />

            {/* Stat 2 */}
            <div className="flex flex-col items-start lg:pl-6">
              <div className="flex items-center gap-3">
                <span className="text-[#fae3da] shrink-0">
                  <Tag size={36} strokeWidth={1.2} />
                </span>
                <span 
                  className="text-4xl sm:text-[42px] font-light text-[#fae3da] leading-none" 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  500+
                </span>
              </div>
              <div className="mt-3 text-left">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#fae3da]/90 uppercase block leading-tight">
                  Retail <br />Partners
                </span>
              </div>
            </div>

            {/* Divider 2 */}
            <div className="hidden lg:block h-14 w-[1px] bg-[#fae3da]/20 self-center" />

            {/* Stat 3 */}
            <div className="flex flex-col items-start lg:pl-6">
              <div className="flex items-center gap-3">
                <span className="text-[#fae3da] shrink-0">
                  <MapPin size={36} strokeWidth={1.2} />
                </span>
                <span 
                  className="text-4xl sm:text-[42px] font-light text-[#fae3da] leading-none" 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  100+
                </span>
              </div>
              <div className="mt-3 text-left">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#fae3da]/90 uppercase block leading-tight">
                  Cities <br />Pan India
                </span>
              </div>
            </div>

            {/* Divider 3 */}
            <div className="hidden lg:block h-14 w-[1px] bg-[#fae3da]/20 self-center" />

            {/* Stat 4 */}
            <div className="flex flex-col items-start lg:pl-6">
              <div className="flex items-center gap-3">
                <span className="text-[#fae3da] shrink-0">
                  <MessageCircle size={36} strokeWidth={1.2} />
                </span>
                <span 
                  className="text-4xl sm:text-[42px] font-light text-[#fae3da] leading-none" 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  1,00,000+
                </span>
              </div>
              <div className="mt-3 text-left">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#fae3da]/90 uppercase block leading-tight">
                  Happy <br />Customers
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
