import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Crown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#4b739e',       // Steel Blue
  accent: '#c5a059',        // Warm Gold/Beige
  bg: '#ffffff',            // White
  sand: '#f7f4ed',          // Soft Warm Sand
  sage: '#e8eff6',          // Soft Pastel Blue
  border: '#d2dfed',        // Soft Blue-Grey Border
  soil: '#1a2a3a',           // Deep Slate Blue
  stone: '#536476',          // Muted Slate Text
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
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Product', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
  ];

  const dropdownNavItems = [
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog Page', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career Page', path: '/career' },
    { name: 'Customer Review', path: '/reviews' },
    { name: 'Business Media Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
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

  const isDropdownActive = () => dropdownNavItems.some(item => isItemActive(item));

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 transition-all duration-300"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Main Navbar ── */}
      <div
        className={`w-full transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${C.border}`,
          boxShadow: scrolled ? '0 2px 20px rgba(75, 115, 158, 0.08)' : 'none',
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">

          {/* Logo Brand: WEAVION */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 text-left">
            <div style={{
              background: 'linear-gradient(135deg, #4b739e 0%, #2b496e 100%)',
              borderRadius: '10px 20px 10px 20px',
              width: 42, height: 42,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(75, 115, 158, 0.3)',
            }}>
              <Crown size={20} color="#c5a059" />
            </div>
            <div className="flex flex-col">
              <span
                className="text-[19px] font-bold leading-none tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif", color: C.soil }}
              >
                WEAVION
              </span>
              <span className="text-[8px] tracking-[0.2em] font-semibold mt-1 uppercase" style={{ color: C.accent }}>
                Textile Retail
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-5">
            {directNavItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-1 py-0.5 text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase transition-all duration-200 whitespace-nowrap shrink-0"
                  style={{ color: active ? C.primary : C.soil }}
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

            {/* Pages Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-1 py-1 text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ color: isDropdownActive() ? C.primary : C.soil }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Pages</span>
                <ChevronDown size={11} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-2xl shadow-2xl border py-2 z-[999] text-left"
                    style={{ background: '#ffffff', borderColor: C.border }}
                  >
                    {dropdownNavItems.map((item) => {
                      const active = isItemActive(item);
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-[12.5px] font-medium transition-all"
                          style={{
                            color: active ? C.primary : C.soil,
                            background: active ? 'rgba(75, 115, 158, 0.06)' : 'transparent',
                          }}
                          onMouseEnter={e => { if (!active) { e.currentTarget.style.background = C.sage; e.currentTarget.style.color = C.primary; } }}
                          onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.soil; } }}
                        >
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: active ? C.accent : 'rgba(75, 115, 158, 0.3)', flexShrink: 0, display: 'inline-block' }} />
                          {item.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border transition-all"
              style={{
                color: C.soil,
                borderColor: C.border,
                background: C.sage,
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-0 z-40 flex flex-col"
            style={{ background: '#ffffff', fontFamily: "'DM Sans', sans-serif" }}
          >
            {/* Drawer header */}
            <div style={{ background: 'linear-gradient(135deg, #4b739e, #2b496e)', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontStyle: 'normal', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  WEAVION
                </p>
                <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c5a059', margin: 0, marginTop: 2, fontWeight: 600 }}>
                  Textile Retail
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 pb-28 space-y-2">
              <div className="grid grid-cols-1 gap-1.5">
                {directNavItems.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-semibold tracking-wide border transition-all uppercase"
                      style={{
                        background: active ? 'rgba(75, 115, 158, 0.06)' : '#f7f4ed',
                        borderColor: active ? C.primary : C.border,
                        color: active ? C.primary : C.soil,
                      }}
                    >
                      <span>{item.name}</span>
                      {active && <span className="w-2 h-2 rounded-full" style={{ background: C.accent }} />}
                    </Link>
                  );
                })}

                {/* Mobile Pages Accordion */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-semibold uppercase tracking-wide border transition-all cursor-pointer"
                    style={{
                      background: '#faf7f2',
                      borderColor: isDropdownActive() ? C.primary : C.border,
                      color: isDropdownActive() ? C.primary : C.soil,
                    }}
                  >
                    <span>Pages</span>
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
                              onClick={() => { setIsOpen(false); setMobileResourcesOpen(false); }}
                              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[12px] font-semibold uppercase tracking-wide border transition-all"
                              style={{
                                background: active ? 'rgba(75, 115, 158, 0.05)' : '#f7f4ed',
                                borderColor: active ? C.primary : C.border,
                                color: active ? C.primary : C.soil,
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
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white"
                  style={{ background: 'linear-gradient(135deg, #4b739e, #c5a059)' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
