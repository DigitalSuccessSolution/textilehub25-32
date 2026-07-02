import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock, Star, Package, Users, Award, Headphones, Leaf, Scissors, Globe, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  linen: '#FAF5EC',
  cream: '#FDF9F2',
  border: '#EBE4D4',
  stone: '#6B5B45',
  sage: '#7A8C6E',
  terracotta: '#C07850',
  mist: '#EBE4D4',
};

const sliderSlides = [
  {
    tag: 'Heritage Handlooms',
    title: <>Timeless Weaves <br className="block md:hidden" /> for Modern Living</>,
    desc: 'Experience India\'s finest sustainable fabrics, handcrafted silks, and premium textiles woven with heritage techniques.',
    image: '/images/heroimages/hero.png',
    position: 'object-top',
  },
  {
    tag: 'Heritage Kurtis',
    title: <>Exquisite Elegance <br className="block md:hidden" /> in Silk & Cotton</>,
    desc: 'Adorn yourself with designer sarees and ethnic ensembles woven by India\'s master artisans.',
    image: '/images/heroimages/hero1.png',
    position: 'object-top',
  },
  {
    tag: 'Royal Kids Wear',
    title: <>Sophisticated Men's <br className="block md:hidden" /> Suiting Fabrics</>,
    desc: 'Crafted for weddings, formal affairs, and heritage celebrations with premium longevity and soft textures.',
    image: '/images/heroimages/hero2.png',
    position: 'object-center',
  },
  {
    tag: 'Luxe Home Linen',
    title: <>Premium Linens & <br className="block md:hidden" /> Bedding Collections</>,
    desc: 'Transform your space with organic home textiles, designer upholstery, and luxury linen bedsheets.',
    image: '/images/heroimages/hero3.png',
    position: 'object-center',
  }
];

const featuredCollections = [
  {
    label: 'Wedding Collection',
    title: 'Bridal & Wedding Wear',
    desc: 'Exquisite sarees, lehengas and ethnic ensembles for the most special occasions.',
    image: 'https://images.pexels.com/photos/11726516/pexels-photo-11726516.jpeg',
    color: C.terracotta,
  },
  {
    label: 'Festive Collection',
    title: 'Festive & Party Wear',
    desc: 'Vibrant colours and rich fabrics for festivals, celebrations and family gatherings.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80',
    color: C.sage,
  },
  {
    label: 'Office Collection',
    title: 'Formal & Corporate Wear',
    desc: 'Refined suiting and shirting fabrics for professional settings and formal occasions.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80',
    color: C.primary,
  },
  {
    label: 'Home & Linen',
    title: 'Premium Home Textiles',
    desc: 'Organic bedsheets, upholstery and home furnishing fabrics for a luxurious lifestyle.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
    color: C.soil,
  },
];

const stats = [
  { icon: Award, value: '25+', label: 'Years of Legacy' },
  { icon: Package, value: '5000+', label: 'Retail Outlets' },
  { icon: Users, value: '25L+', label: 'Happy Customers' },
  { icon: Star, value: '10000+', label: 'Products' },
  { icon: Headphones, value: '24/7', label: 'Customer Support' },
];

const whyUs = [
  {
    icon: Leaf,
    title: 'Sustainably Sourced',
    desc: 'Every fabric is ethically sourced with eco-friendly dyes and responsible manufacturing practices.',
  },
  {
    icon: Scissors,
    title: 'Artisan Craftsmanship',
    desc: 'Our weaves come from India\'s most skilled artisan clusters, preserving centuries-old handloom traditions.',
  },
  {
    icon: Globe,
    title: 'Nationwide Reach',
    desc: 'With 5000+ retail outlets, we bring premium textiles to every corner of India.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    desc: 'Rigorous quality checks ensure every product meets the highest standards of texture and durability.',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'Incredible quality sarees! The fabric feels luxurious and the colors are vibrant even after multiple washes.',
    rating: 5,
  },
  {
    name: 'Rajesh Mehta',
    location: 'Delhi',
    text: 'Best suiting fabric I\'ve found in India. The e-quotation system made bulk ordering very smooth.',
    rating: 5,
  },
  {
    name: 'Anita Patel',
    location: 'Ahmedabad',
    text: 'Textile Paradise truly lives up to its name. Beautiful bedsheets and the delivery was prompt.',
    rating: 5,
  },
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%' }),
  center: { x: 0 },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%' }),
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
  };

  return (
    <div style={{ background: C.cream, fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO SLIDER ── */}
      <section className="relative w-full overflow-hidden h-[320px] md:h-[520px]" style={{ background: C.soil }}>
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'tween', ease: 'easeInOut', duration: 0.65 } }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={sliderSlides[currentSlide].image}
                alt={sliderSlides[currentSlide].title}
                className={`w-full h-full object-cover ${sliderSlides[currentSlide].position}`}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(90deg, rgba(74,55,40,0.80) 0%, rgba(74,55,40,0.40) 50%, rgba(74,55,40,0.15) 100%)'
              }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-[90rem] mx-auto px-12 sm:px-14 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-block text-[9px] md:text-[11px] tracking-[0.28em] uppercase font-normal mb-2 md:mb-3" style={{ color: C.primaryLight }}>
                {sliderSlides[currentSlide].tag}
              </span>

              <h1 className="font-semibold leading-tight text-white max-w-[560px] mb-2 md:mb-4" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(24px, 5vw, 58px)',
              }}>
                {sliderSlides[currentSlide].title}
              </h1>

              <div className="w-[40px] md:w-[52px] h-[2px] rounded-sm mb-4 md:mb-5" style={{ background: C.primaryLight }} />

              <p className="hidden sm:block text-[15px] leading-relaxed font-normal max-w-[440px] mb-6 md:mb-8" style={{
                color: 'rgba(245,237,216,0.9)',
              }}>
                {sliderSlides[currentSlide].desc}
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl text-[11px] md:text-[13px] font-medium transition-all no-underline"
                  style={{
                    background: C.primaryLight, color: C.soil,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primaryLight; }}
                >
                  Explore Collections <ArrowRight size={14} />
                </Link>
                <Link
                  to="/about"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl text-[11px] md:text-[13px] font-normal transition-all no-underline"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1.5px solid rgba(255,255,255,0.3)',
                    color: 'white', backdropFilter: 'blur(6px)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                >
                  Our Story
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {sliderSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => { setDirection(index > currentSlide ? 1 : -1); setCurrentSlide(index); }}
              style={{
                height: 6, borderRadius: 3,
                width: currentSlide === index ? 28 : 6,
                background: currentSlide === index ? C.primaryLight : 'rgba(255,255,255,0.35)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        {[{ dir: 'prev', icon: ChevronLeft, action: handlePrev, side: 'left-1 md:left-5' }, { dir: 'next', icon: ChevronRight, action: handleNext, side: 'right-1 md:right-5' }].map(({ dir, icon: Icon, action, side }) => (
          <button
            key={dir}
            onClick={action}
            className={`absolute ${side} top-1/2 -translate-y-1/2 z-25 w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer`}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              color: 'white', backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.primaryLight; e.currentTarget.style.borderColor = C.primaryLight; e.currentTarget.style.color = C.soil; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'white'; }}
            aria-label={dir}
          >
            <Icon className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        ))}
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: C.soil, padding: '0' }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0" style={{ divideColor: 'rgba(255,255,255,0.1)' }}>
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-6 py-5 ${index === stats.length - 1 ? 'col-span-2 sm:col-span-1 justify-center sm:justify-start' : ''}`}
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <Icon size={22} color={C.primaryLight} />
                <div>
                  <p style={{ color: 'white', fontSize: 18, fontWeight: 600, margin: 0, lineHeight: 1.2 }}>{value}</p>
                  <p style={{ color: 'rgba(245,237,216,0.65)', fontSize: 11, margin: 0, fontWeight: 400 }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── OUR STORY STRIP ── */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/images/heroimages/herobg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderBottom: `1px solid ${C.border}`,
        padding: '50px 0'
      }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14">
          <div style={{ maxWidth: '580px', textAlign: 'left' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 500, color: C.soil, marginBottom: 12,
            }}>
              A Legacy Woven in Every Thread
            </h2>
            <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, marginBottom: 14 }} />
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: C.stone, marginBottom: 18, fontWeight: 500 }}>
              Textile Paradise is India's largest and most trusted textile destination, offering an extraordinary range of fabrics and fashion for every need. From ethnic elegance to everyday comfort — we bring exceptional quality, craftsmanship and trust together for over 25 years.
            </p>
            <Link
              to="/about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontWeight: 500, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: C.primary,
                textDecoration: 'none', borderBottom: `1.5px solid ${C.primaryLight}`, paddingBottom: 2,
              }}
            >
              Know More About Us <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED COLLECTIONS ── */}
      <section style={{ padding: '72px 0', background: C.cream }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: 500, color: C.soil, margin: 0,
              }}>
                Timeless Collections for Every Occasion
              </h2>
            </div>
            <Link
              to="/products"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 20px', borderRadius: 10,
                border: `1.5px solid ${C.border}`, color: C.stone,
                fontSize: 13, fontWeight: 400, textDecoration: 'none',
                transition: 'all 0.2s ease', background: 'white',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredCollections.map((col, i) => (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to="/products" style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    className="card-hover"
                    style={{
                      borderRadius: 16,
                      overflow: 'hidden',
                      background: 'white',
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-[120px] sm:h-[260px] overflow-hidden">
                      <img
                        src={col.image}
                        alt={col.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                        className="group-hover:scale-105"
                        loading="lazy"
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(to top, rgba(74,55,40,0.7) 0%, rgba(74,55,40,0.1) 50%, transparent 100%)`,
                      }} />
                      {/* Label badge */}
                      <div className="hidden sm:block" style={{
                        position: 'absolute', top: 14, left: 14,
                        background: 'rgba(253,249,242,0.92)',
                        backdropFilter: 'blur(6px)',
                        border: `1px solid ${C.border}`,
                        borderRadius: 20, padding: '4px 12px',
                      }}>
                        <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: col.color, fontWeight: 500 }}>
                          {col.label}
                        </span>
                      </div>
                      {/* Bottom text in image */}
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                        <p className="text-white font-medium m-0 text-[13px] sm:text-[17px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {col.title}
                        </p>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="p-3 sm:px-4 sm:py-4">
                      <p className="text-[10px] sm:text-[13px] line-clamp-2 sm:line-clamp-none mb-2 sm:mb-3" style={{ color: C.stone, lineHeight: 1.4, fontWeight: 400 }}>
                        {col.desc}
                      </p>
                      <span className="text-[10px] sm:text-[12px]" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        color: C.primary, fontWeight: 500,
                      }}>
                        Explore <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: C.sand, padding: '72px 0', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 500, color: C.soil, margin: '8px 0 0' }}>
              Why Choose Textile Paradise?
            </h2>
            <div style={{ width: 48, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '14px auto 0' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card-hover"
                  style={{
                    background: 'white', borderRadius: 16,
                    padding: '28px 24px',
                    border: `1px solid ${C.border}`,
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 18,
                  }}>
                    <Icon size={22} color="#111" />
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 17, fontWeight: 500, color: C.soil, marginBottom: 10,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '72px 0', background: C.cream }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 500, color: C.soil, margin: '8px 0 0' }}>
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'white',
                  border: `1px solid ${C.border}`,
                  borderRadius: 16, padding: '26px 24px',
                  position: 'relative',
                }}
              >
                {/* Quote mark */}
                <div style={{
                  position: 'absolute', top: 18, right: 22,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 60, color: C.sand, lineHeight: 1, fontWeight: 700,
                  userSelect: 'none',
                }}>
                  "
                </div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={14} fill={C.primaryLight} stroke="none" />
                  ))}
                </div>
                <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.7, margin: '0 0 18px', fontWeight: 400, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${C.sand}, ${C.primaryLight})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, color: C.soil, fontWeight: 600,
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: C.soil, margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: C.stone, margin: 0, fontWeight: 400 }}>{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link
              to="/reviews"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '11px 24px', borderRadius: 10,
                border: `1.5px solid ${C.border}`, color: C.soil,
                fontSize: 13, fontWeight: 400, textDecoration: 'none',
                transition: 'all 0.2s ease', background: 'white',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.soil; }}
            >
              View All Reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT US ── */}
      <section style={{ background: C.sand, borderTop: `1px solid ${C.border}`, padding: '72px 0' }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14">
          <div className="text-center mb-12">
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3vw, 38px)',
              fontWeight: 500, color: C.soil, marginBottom: 14,
            }}>
              We're Here to Help
            </h2>
            <div style={{ width: 48, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto 18px' }} />
            <p style={{ fontSize: 15, color: C.stone, lineHeight: 1.8, fontWeight: 400, maxWidth: 480, margin: '0 auto' }}>
              Have questions about our products, bulk orders, or trade enquiries? Reach out to our team — we're always ready to assist.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { icon: MapPin, label: 'Address', value: '123 Textile Avenue, Ahmedabad, Gujarat' },
              { icon: Phone, label: 'Phone', value: '+91 6353778329' },
              { icon: Mail, label: 'Email', value: 'info@textileparadise.com' },
              { icon: Clock, label: 'Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} style={{
                background: 'white', borderRadius: 16,
                padding: '22px 20px', border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'flex-start', gap: 14,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(139,105,20,0.08)', border: `1px solid rgba(196,163,90,0.2)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={17} color={C.primary} />
                </div>
                <div>
                  <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', color: C.primaryLight, margin: '0 0 4px', fontWeight: 400 }}>{label}</p>
                  <p style={{ fontSize: 14, color: C.soil, margin: 0, fontWeight: 400, lineHeight: 1.5 }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 12,
                background: C.soil, color: 'white',
                fontSize: 14, fontWeight: 400, textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.primary}
              onMouseLeave={e => e.currentTarget.style.background = C.soil}
            >
              View Full Contact Details <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
