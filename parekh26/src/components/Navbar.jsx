import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Leaf } from 'lucide-react';
import { useState, useEffect } from 'react';

const C = {
  primary: '#7c8e76',       // Sage Green
  accent: '#d57e65',        // Terracotta Peach
  bg: '#faf8f5',            // Warm Cream
  sand: '#f2ebe1',          // Light Sand
  border: '#eae2d3',        // Beige Border
  soil: '#2b1f15',          // Dark Brown Text
  stone: '#5a4d41',         // Muted Brown Text
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Product', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
    {
      name: 'Pages',
      path: '#',
      dropdown: [
        { name: 'e-Quotation', path: '/e-quotation' },
        { name: 'e-Auction', path: '/e-auction' },
        { name: 'Trade Circular', path: '/trade-circular' },
        { name: 'Blog', path: '/blog' },
        { name: 'Notice Board', path: '/notice-board' },
        { name: 'Career', path: '/career' },
        { name: 'Customer Review', path: '/reviews' },
        { name: 'Business Media Gallery', path: '/gallery' },
        { name: 'FAQ', path: '/faq' }
      ]
    }
  ];

  // Helper to check if item or dropdown child is active
  const isItemActive = (item) => {
    if (item.path === '/' && location.pathname === '/') return true;
    if (item.path !== '/' && item.path !== '#' && location.pathname.startsWith(item.path)) {
      // If item is 'Product' but has query search, do not activate parent unless it matches exactly
      if (item.name === 'Product' && location.search !== '') return false;
      return true;
    }
    if (item.dropdown) {
      return item.dropdown.some(sub => {
        const subPath = sub.path.split('?')[0];
        const subSearch = sub.path.includes('?') ? '?' + sub.path.split('?')[1] : '';
        return location.pathname === subPath && (subSearch === '' || location.search === decodeURIComponent(subSearch) || location.search === subSearch);
      });
    }
    return false;
  };

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 transition-all duration-300"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div 
        style={{ 
          background: '#eef3ec', 
          borderBottom: `1px solid ${C.border}`,
          fontSize: '11px',
          color: '#556652' 
        }} 
        className="relative z-50 py-2.5 px-6 sm:px-8 lg:px-14 flex flex-row justify-between items-center gap-2"
      >
        <div className="flex items-center gap-1.5 font-medium">
          <Leaf size={12} style={{ color: C.primary }} />
          <span>India's Most Trusted Textile Retail Mall</span>
        </div>
        <div className="flex items-center gap-4.5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-75" style={{ color: '#556652' }} aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-75" style={{ color: '#556652' }} aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-75" style={{ color: '#556652' }} aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-75" style={{ color: '#556652' }} aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.54a29 29 0 0 0 .46 5.12 2.78 2.78 0 0 0 1.95 1.96C5.12 19 12 19 12 19s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z"/><polygon points="9.75 15.02 15.5 11.54 9.75 8.06 9.75 15.02"/></svg>
          </a>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div
        className={`relative z-50 w-full transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-3.5'}`}
        style={{
          background: scrolled ? 'rgba(250, 248, 245, 0.98)' : '#faf8f5',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">
          
          {/* Logo matching Mockup exactly */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 text-left">
            <div 
              style={{ 
                background: 'rgba(213,126,101,0.08)',
                border: `1.5px solid ${C.accent}`,
                borderRadius: '50% 12px 50% 50%' 
              }}
              className="w-10 h-10 flex items-center justify-center text-accent"
            >
              {/* Geometric SVG Flower */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C11.5 5 8.5 8 5.5 8C2.5 8 2.5 10 5.5 10C8.5 10 11.5 13 12 16C12.5 13 15.5 10 18.5 10C21.5 10 21.5 8 18.5 8C15.5 8 12.5 5 12 2Z" fill="currentColor" opacity="0.15" />
                <circle cx="12" cy="9" r="2" fill="currentColor" />
                <path d="M5.5 12C5.5 12 8.5 15 12 15M18.5 12C18.5 12 15.5 15 12 15" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[20px] font-bold leading-none tracking-wide"
                style={{ color: C.soil, fontFamily: "'Playfair Display', serif" }}
              >
                TEXMART
              </span>
              <span
                className="text-[8px] tracking-[0.3em] font-semibold mt-1"
                style={{ color: C.stone }}
              >
                TEXTILE RETAIL MALL
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isItemActive(item);
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-semibold tracking-wide uppercase transition-all duration-200"
                      style={{
                        color: active || activeDropdown === item.name ? C.accent : C.soil,
                      }}
                    >
                      {item.name}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        style={{ color: active || activeDropdown === item.name ? C.accent : C.stone }}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 w-52 rounded-xl shadow-xl overflow-hidden mt-1 py-1.5 z-50 animate-fade-in-scale"
                        style={{
                          background: '#faf8f5',
                          border: `1px solid ${C.border}`,
                          maxHeight: '380px',
                          overflowY: 'auto'
                        }}
                      >
                        {item.dropdown.map((sub) => {
                          const subActive = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="flex items-center px-4 py-2.5 text-[12.5px] font-medium transition-all duration-150 rounded-lg mx-1.5"
                              style={{
                                background: subActive ? 'rgba(213,126,101,0.05)' : 'transparent',
                                color: subActive ? C.accent : C.soil,
                              }}
                              onMouseEnter={e => {
                                if (!subActive) {
                                  e.currentTarget.style.background = 'rgba(124,142,118,0.06)';
                                  e.currentTarget.style.color = C.primary;
                                }
                              }}
                              onMouseLeave={e => {
                                if (!subActive) {
                                  e.currentTarget.style.background = 'transparent';
                                  e.currentTarget.style.color = C.soil;
                                }
                              }}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-3.5 py-1.5 text-[13px] font-semibold tracking-wide uppercase transition-all duration-200"
                  style={{
                    color: active ? C.accent : C.soil,
                  }}
                >
                  {item.name}
                  {active && (
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] rounded-full"
                      style={{ background: C.accent }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side Trade Enquiry button */}
          <div className="flex items-center gap-4">
            <Link
              to="/trade-enquiry"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-[12px] font-bold tracking-wider uppercase transition-all duration-300 shadow-sm"
              style={{
                background: C.accent,
                color: '#faf8f5',
                border: `1.5px solid ${C.accent}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#bf6a52';
                e.currentTarget.style.borderColor = '#bf6a52';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.accent;
                e.currentTarget.style.borderColor = C.accent;
              }}
            >
              <Phone size={12} fill="currentColor" stroke="none" />
              Trade Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl border transition-all"
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
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 flex flex-col pt-[110px]"
          style={{ background: '#faf8f5', fontFamily: "'DM Sans', sans-serif" }}
        >
          <div className="h-[2px] w-full relative z-50" style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.accent}, ${C.primary})` }} />

          <div className="flex-1 overflow-y-auto px-5 py-4 pb-24 space-y-2">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <div key={item.name} className="space-y-1">
                  {item.dropdown ? (
                    <>
                      <div className="px-4 py-2.5 text-[13px] font-bold text-stone-500 uppercase tracking-wider bg-sand-100 rounded-lg">
                        {item.name}
                      </div>
                      <div className="pl-4 border-l-2 ml-2 space-y-1" style={{ borderColor: C.border }}>
                        {item.dropdown.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-[13px] font-medium rounded-lg"
                            style={{
                              color: location.pathname === sub.path ? C.accent : C.soil,
                              background: location.pathname === sub.path ? 'rgba(213,126,101,0.04)' : 'transparent',
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-wide border transition-all"
                      style={{
                        background: active ? 'rgba(213,126,101,0.05)' : '#ffffff',
                        borderColor: active ? C.accent : C.border,
                        color: active ? C.accent : C.soil,
                      }}
                    >
                      <span>{item.name}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-6">
              <Link
                to="/trade-enquiry"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white"
                style={{ background: C.accent }}
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
