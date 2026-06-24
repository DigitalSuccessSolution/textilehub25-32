import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles, ChevronDown, MapPin, Flower } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#745b9f',       // Deep Purple / Lavender
  accent: '#e37a6b',        // Warm Coral Rose Accent
  bg: '#faf8fc',            // Warm Off-white with purple tint
  sand: '#f3ebf7',          // Soft Lavender Background
  border: '#ebdff2',        // Soft Lavender Border
  soil: '#2c1e43',          // Deep purple-tinted Dark Text
  stone: '#66587c',         // Muted Lavender-Grey Text
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const directNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Contact us', path: '/contact' },
    { name: 'Product', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' }
  ];

  const dropdownNavItems = [
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog Page', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career Page', path: '/career' },
    { name: 'Customer Review', path: '/reviews' },
    { name: 'Business Media Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' }
  ];

  const isItemActive = (item) => {
    if (item.path === '/' && location.pathname === '/') return true;
    if (item.path !== '/' && location.pathname === item.path) return true;
    if (item.path !== '/' && item.path !== '#' && location.pathname.startsWith(item.path) && item.path !== '/products') {
      return true;
    }
    if (item.path === '/products' && location.pathname === '/products') {
      return true;
    }
    return false;
  };

  const isDropdownActive = () => {
    return dropdownNavItems.some(item => isItemActive(item));
  };

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 transition-all duration-300"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >


      {/* ── Main Navbar (Row 1) ── */}
      <div
        className={`w-full transition-all duration-300 ${scrolled ? 'py-2.5 shadow-sm' : 'py-4'}`}
        style={{
          background: scrolled ? 'rgba(250, 248, 245, 0.98)' : '#faf8fc',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">
          
          {/* Logo Brand Name: Loom & Luxury */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0 text-left">
            <div 
              style={{ 
                background: 'rgba(116,91,159,0.08)',
                border: `1.5px solid ${C.primary}`,
                borderRadius: '50% 12px 50% 50%' 
              }}
              className="w-10 h-10 flex items-center justify-center text-primary"
            >
              <Flower size={20} style={{ color: C.primary }} />
            </div>
            <div className="flex flex-col">
              <span
                className="text-[22px] font-bold leading-none tracking-wide text-[#2c1e43]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Loom & Luxury
              </span>
              <span
                className="text-[7.5px] tracking-[0.35em] font-semibold mt-1 uppercase text-[#e37a6b]"
              >
                Textile & Artistry Mall
              </span>
            </div>
          </Link>

          {/* Right side Trade Enquiry button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/trade-enquiry"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold tracking-wider uppercase transition-all duration-300 shadow-sm"
              style={{
                background: C.primary,
                color: '#faf8fc',
                border: `1.5px solid ${C.primary}`,
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
              <Phone size={12} fill="currentColor" stroke="none" />
              Trade Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border transition-all"
              style={{
                color: C.soil,
                borderColor: C.border,
                background: C.sand,
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Sub Navigation Links Row (Row 2 - Desktop & Tablet) ── */}
      <div
        className="w-full hidden md:block"
        style={{
          background: scrolled ? 'rgba(250, 248, 252, 0.95)' : '#faf8fc',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex items-center justify-center py-2.5">
          <nav className="flex flex-nowrap justify-start md:justify-center items-center gap-x-5 lg:gap-x-7 overflow-x-auto md:overflow-visible scrollbar-none w-full py-0.5">
            {directNavItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-1 py-0.5 text-[11px] lg:text-[12px] font-bold tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 ${
                    item.name.toLowerCase().startsWith('e-') ? 'normal-case' : 'uppercase'
                  }`}
                  style={{
                    color: active ? C.accent : C.soil,
                  }}
                >
                  {item.name}
                  {active && (
                    <span
                      className="absolute bottom-[-3px] left-0 right-0 h-[2px] rounded-full"
                      style={{ background: C.accent }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Resources Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-1 py-0.5 text-[11px] lg:text-[12px] font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{
                  color: isDropdownActive() ? C.accent : C.soil,
                }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Resources</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl shadow-xl border overflow-hidden py-2 z-50 text-left"
                    style={{
                      background: '#faf8fc',
                      borderColor: C.border,
                    }}
                  >
                    {dropdownNavItems.map((item) => {
                      const active = isItemActive(item);
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-[11.5px] font-bold tracking-wide uppercase transition-colors"
                          style={{
                            color: active ? C.accent : C.soil,
                            background: active ? 'rgba(227, 122, 107, 0.05)' : 'transparent',
                          }}
                          onMouseEnter={e => {
                            if (!active) {
                              e.currentTarget.style.background = C.sand;
                            }
                          }}
                          onMouseLeave={e => {
                            if (!active) {
                              e.currentTarget.style.background = 'transparent';
                            }
                          }}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[70px] z-40 flex flex-col"
          style={{ background: '#faf8fc', fontFamily: "'DM Sans', sans-serif" }}
        >
          <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.accent}, ${C.primary})` }} />

          <div className="flex-1 overflow-y-auto px-5 py-6 pb-28 space-y-2">
            <div className="px-3 mb-4 pb-4" style={{ borderBottom: `1px solid ${C.border}` }}>
              <p className="font-bold text-xl" style={{ color: C.soil, fontFamily: "'Playfair Display', serif" }}>
                Loom & Luxury
              </p>
              <p className="text-[9px] tracking-wider uppercase mt-1 font-semibold text-accent">
                Textile & Artistry Mall
              </p>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {directNavItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-bold tracking-wide border transition-all ${
                      item.name.toLowerCase().startsWith('e-') ? 'normal-case' : 'uppercase'
                    }`}
                    style={{
                      background: active ? 'rgba(227,122,107,0.05)' : '#ffffff',
                      borderColor: active ? C.accent : C.border,
                      color: active ? C.accent : C.soil,
                    }}
                  >
                    <span>{item.name}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />}
                  </Link>
                );
              })}

              {/* Mobile Accordion Dropdown for Resources */}
              <div className="w-full">
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-bold uppercase tracking-wide border transition-all cursor-pointer"
                  style={{
                    background: '#ffffff',
                    borderColor: isDropdownActive() ? C.accent : C.border,
                    color: isDropdownActive() ? C.accent : C.soil,
                  }}
                >
                  <span>Resources</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {mobileResourcesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden mt-1.5 space-y-1.5 pl-3"
                    >
                      {dropdownNavItems.map((item) => {
                        const active = isItemActive(item);
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileResourcesOpen(false);
                            }}
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wide border transition-all"
                            style={{
                              background: active ? 'rgba(227,122,107,0.03)' : '#ffffff',
                              borderColor: active ? C.accent : C.border,
                              color: active ? C.accent : C.soil,
                            }}
                          >
                            <span>{item.name}</span>
                            {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/trade-enquiry"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white"
                style={{ background: C.primary }}
              >
                <Phone size={13} fill="currentColor" stroke="none" />
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
