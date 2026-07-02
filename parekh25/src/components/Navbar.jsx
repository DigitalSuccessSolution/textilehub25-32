import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Leaf } from 'lucide-react';
import { useState, useEffect } from 'react';

const C = {
  primary: '#8B6914',
  bg: '#FDF9F2',
  sand: '#F5EDD8',
  border: '#EBE4D4',
  soil: '#4A3728',
  stone: '#6B5B45',
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
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

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Products', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
  ];

  const moreLinks = [
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career', path: '/career' },
    { name: 'Customer Reviews', path: '/reviews' },
    { name: 'Business Media Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isMoreActive = moreLinks.some(l => location.pathname === l.path);

  return (
    <header
      className="w-full fixed top-0 left-0 z-[100] transition-all duration-300"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
        style={{
          background: scrolled
            ? 'rgba(253, 249, 242, 0.97)'
            : '#FDF9F2',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-14 flex justify-between items-center py-3.5">

          {/* Brand Name - NO LOGO */}
          <Link to="/" className="flex flex-col group shrink-0 text-left">
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-[22px] leading-none tracking-tight display-title transition-all duration-300"
                style={{ color: C.soil, fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Textile
              </span>
              <span
                className="text-[22px] leading-none tracking-tight display-title transition-all duration-300"
                style={{ color: C.primary, fontFamily: "'Playfair Display', serif", fontWeight: 500, fontStyle: 'italic' }}
              >
                Paradise
              </span>
            </div>
            <span
              className="text-[9px] tracking-[0.28em] uppercase mt-1 font-medium"
              style={{ color: C.stone }}
            >
              India's Finest Textile Destination
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-3.5 py-2 text-[13.5px] font-medium tracking-wide rounded-lg transition-all duration-200"
                  style={{
                    color: isActive ? C.primary : C.soil,
                    background: isActive ? 'rgba(139,105,20,0.08)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = C.primary;
                      e.currentTarget.style.background = 'rgba(139,105,20,0.06)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = C.soil;
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{ background: C.primary }}
                    />
                  )}
                </Link>
              );
            })}

            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button
                className="relative flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium tracking-wide rounded-lg transition-all duration-200"
                style={{
                  color: isMoreActive ? C.primary : C.soil,
                  background: isMoreActive ? 'rgba(139,105,20,0.08)' : 'transparent',
                }}
                onMouseEnter={e => {
                  if (!isMoreActive) {
                    e.currentTarget.style.color = C.primary;
                    e.currentTarget.style.background = 'rgba(139,105,20,0.06)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isMoreActive) {
                    e.currentTarget.style.color = C.soil;
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                More
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMoreOpen && (
                <div
                  className="absolute top-full right-0 w-56 rounded-2xl shadow-2xl overflow-hidden mt-2 py-2 z-50"
                  style={{
                    background: '#FDF9F2',
                    border: `1px solid ${C.border}`,
                    boxShadow: '0 20px 60px rgba(74,55,40,0.12)',
                  }}
                >
                  {moreLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium transition-all duration-150"
                        style={{
                          background: isActive ? 'rgba(139,105,20,0.08)' : 'transparent',
                          color: isActive ? C.primary : C.soil,
                        }}
                        onMouseEnter={e => {
                          if (!isActive) {
                            e.currentTarget.style.background = 'rgba(139,105,20,0.06)';
                            e.currentTarget.style.color = C.primary;
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = C.soil;
                          }
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: isActive ? C.primary : '#C4A35A' }}
                        />
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/trade-enquiry"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-[12px] font-medium tracking-wide transition-all duration-200"
              style={{
                background: C.soil,
                color: '#FDF9F2',
                border: `1px solid ${C.soil}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.primary;
                e.currentTarget.style.borderColor = C.primary;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.soil;
                e.currentTarget.style.borderColor = C.soil;
              }}
            >
              <Phone size={13} />
              Trade Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl transition-colors border"
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
          className="lg:hidden fixed inset-0 top-[59px] z-[99] flex flex-col"
          style={{ background: '#FDF9F2', fontFamily: "'DM Sans', sans-serif" }}
        >
          {/* Decorative strip at top of drawer */}
          <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, #C4A35A, #8B6914, #7A8C6E)' }} />

          <div className="flex-1 overflow-y-auto px-5 py-7 pb-24 space-y-1.5">
            <p className="px-3 text-[10px] font-medium tracking-[0.2em] uppercase mb-2" style={{ color: C.stone }}>
              Navigation
            </p>
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[14px] font-medium transition-all duration-200 border"
                  style={{
                    background: isActive ? 'rgba(139,105,20,0.08)' : '#FFFFFF',
                    borderColor: isActive ? 'rgba(139,105,20,0.25)' : C.border,
                    color: isActive ? C.primary : C.soil,
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full" style={{ background: C.primary }} />}
                </Link>
              );
            })}

            <div className="h-px my-5" style={{ background: C.border }} />
            <p className="px-3 text-[10px] font-medium tracking-[0.2em] uppercase mb-2" style={{ color: C.stone }}>
              More Pages
            </p>

            <div className="grid grid-cols-2 gap-2">
              {moreLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[11px] font-medium transition-all duration-200 border"
                    style={{
                      background: isActive ? 'rgba(139,105,20,0.08)' : '#FFFFFF',
                      borderColor: isActive ? 'rgba(139,105,20,0.25)' : C.border,
                      color: isActive ? C.primary : C.stone,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: isActive ? C.primary : '#C4A35A' }}
                    />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6">
              <Link
                to="/trade-enquiry"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 w-full"
                style={{ background: C.soil, color: '#FDF9F2' }}
              >
                <Phone size={14} />
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
