import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#475643',       // Deep Forest Green
  accent: '#b05742',        // Terracotta Accent
  bg: '#faf8f5',            // Warm off-white
  sand: '#efebdf',          // Warm sand/beige
  border: '#e2ddd5',        // Warm grey border
  soil: '#222b20',          // Dark green-charcoal text
  stone: '#5a6657',         // Muted text
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
    { name: 'Blog', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career', path: '/career' },
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

  const isDropdownActive = () => {
    return dropdownNavItems.some(item => isItemActive(item));
  };

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 transition-all duration-300"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >


      {/* ── Main Navbar ── */}
      <div
        className={`w-full transition-all duration-300 ${scrolled ? 'py-2.5 shadow-sm' : 'py-3.5'}`}
        style={{
          position: 'relative',
          zIndex: 50,
          background: isOpen ? '#faf8f5' : (scrolled ? 'rgba(250, 248, 245, 0.98)' : '#faf8f5'),
          backdropFilter: scrolled && !isOpen ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">
          
          {/* Logo Brand Name: Indian Fabric House */}
          <Link to="/" className="flex items-center gap-2 group shrink-0 text-left">
            <div 
              style={{ 
                background: 'rgba(71, 86, 67, 0.06)',
                border: `1.5px solid ${C.primary}`,
                borderRadius: '6px 16px 6px 16px' 
              }}
              className="w-10 h-10 flex items-center justify-center text-primary"
            >
              <span className="font-display font-bold text-lg" style={{ color: C.primary }}>I</span>
              <span className="font-display font-bold text-lg" style={{ color: C.accent }}>F</span>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[20px] font-bold leading-none tracking-wide text-[#222b20]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                INDIAN FABRIC HOUSE
              </span>
              <span
                className="text-[7px] tracking-[0.35em] font-semibold mt-1 uppercase text-[#b05742]"
              >
                Premium Textile & Retail Mall
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop & Tablet) */}
          <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-5">
            {directNavItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-1 py-0.5 text-[11px] lg:text-[12px] font-bold tracking-wide uppercase transition-all duration-200 whitespace-nowrap shrink-0"
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

            {/* Pages Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-1 py-1 text-[11px] lg:text-[12px] font-bold tracking-wide uppercase transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ color: isDropdownActive() ? C.accent : C.soil }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Pages</span>
                <ChevronDown size={11} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 rounded-xl shadow-2xl border py-1.5 z-[999] text-left"
                  style={{ background: '#faf8f5', borderColor: C.border }}
                >
                  {dropdownNavItems.map((item) => {
                    const active = isItemActive(item);
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-[12px] font-semibold tracking-wide"
                        style={{
                          color: active ? C.accent : C.soil,
                          background: active ? 'rgba(176, 87, 66, 0.05)' : 'transparent',
                          textTransform: 'none',
                          letterSpacing: '0.04em',
                        }}
                        onMouseEnter={e => { if (!active) e.currentTarget.style.background = C.sand; }}
                        onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right side Mobile Toggle only (Trade Enquiry is now in the nav) */}
          <div className="flex items-center gap-4 shrink-0">
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 z-40 flex flex-col"
            style={{ background: '#faf8f5', fontFamily: "'Outfit', sans-serif" }}
          >
            <div className="flex-1 overflow-y-auto px-5 pt-[85px] pb-28 space-y-2">
              <div className="grid grid-cols-1 gap-1.5">
                {directNavItems.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-bold tracking-wide border transition-all uppercase"
                      style={{
                        background: active ? 'rgba(176,87,66,0.05)' : '#ffffff',
                        borderColor: active ? C.accent : C.border,
                        color: active ? C.accent : C.soil,
                      }}
                    >
                      <span>{item.name}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />}
                    </Link>
                  );
                })}

                {/* Mobile Accordion Dropdown for Pages */}
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
                        className="grid grid-cols-2 gap-2 mt-2 pl-3"
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
                              className="flex items-center justify-between px-3 py-2 border rounded-xl text-[11px] font-bold tracking-wide transition-all uppercase"
                              style={{
                                background: active ? 'rgba(176,87,66,0.03)' : '#ffffff',
                                borderColor: active ? C.accent : C.border,
                                color: active ? C.accent : C.soil,
                              }}
                            >
                              <span>
                                {item.name.startsWith('e-') ? (
                                  <>
                                    <span style={{ textTransform: 'lowercase' }}>e</span>
                                    <span>{item.name.slice(1)}</span>
                                  </>
                                ) : (
                                  item.name
                                )}
                              </span>
                              {active && <span className="w-1.5 h-1.5 rounded-full shrink-0 ml-1" style={{ background: C.accent }} />}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
