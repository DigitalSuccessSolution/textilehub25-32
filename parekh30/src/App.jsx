import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import RetailManagement from './pages/RetailManagement';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/EQuotation';
import EAuction from './pages/EAuction';
import TradeCircular from './pages/TradeCircular';
import Blog from './pages/Blog';
import NoticeBoard from './pages/NoticeBoard';
import Career from './pages/Career';
import CustomerReview from './pages/CustomerReview';
import BusinessMediaGallery from './pages/BusinessMediaGallery';
import FAQ from './pages/FAQ';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gem, ArrowRight, Sparkles } from 'lucide-react';

const C = {
  primary: '#0e6b6b',       // Deep Teal
  primaryDark: '#094f4f',   // Darker Teal
  accent: '#c8922a',        // Warm Gold
  bg: '#ffffff',            // White
  sand: '#f0f7f7',          // Light Teal Tint
  border: '#c8e0e0',        // Teal Border
  soil: '#0d2626',          // Deep Dark Text
  stone: '#4a6b6b',         // Muted Teal Text
};

// ─── Simple Welcome Popup ───
function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const shown = sessionStorage.getItem('tt_popup_shown');
    if (!shown) {
      const timer = setTimeout(() => setIsOpen(true), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      sessionStorage.setItem('tt_popup_shown', '1');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0"
            style={{ background: 'rgba(13, 38, 38, 0.60)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            style={{
              position: 'relative',
              background: '#ffffff',
              borderRadius: 24,
              maxWidth: 480,
              width: '100%',
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 40px 100px rgba(13, 38, 38, 0.25)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Top teal band */}
            <div style={{
              background: 'linear-gradient(135deg, #0e6b6b 0%, #094f4f 100%)',
              padding: '36px 32px 32px',
              position: 'relative',
              textAlign: 'center',
              overflow: 'hidden',
            }}>
              {/* Pattern overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)',
                backgroundSize: '18px 18px',
                pointerEvents: 'none',
              }} />
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(200,146,42,0.15)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

              {/* Icon */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'rgba(200,146,42,0.2)',
                  border: '1.5px solid rgba(200,146,42,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <Gem size={24} style={{ color: '#c8922a' }} />
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 26, fontWeight: 700,
                  color: '#ffffff', margin: 0, lineHeight: 1.25,
                }}>
                  Welcome to<br />
                  <span style={{ fontStyle: 'italic', color: '#e0b84a' }}>Textile Treasure</span>
                </h2>
              </div>
            </div>

            {/* Bottom content */}
            <div style={{ padding: '28px 32px 32px', position: 'relative' }}>
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  width: 32, height: 32, borderRadius: '50%',
                  background: '#f0f7f7', border: '1.5px solid #c8e0e0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#0d2626', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0e6b6b'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f0f7f7'; e.currentTarget.style.color = '#0d2626'; }}
              >
                <X size={15} />
              </button>

              <p style={{ color: '#4a6b6b', fontSize: 14, lineHeight: 1.7, margin: '0 0 24px', textAlign: 'center' }}>
                Discover India's finest textiles — from premium sarees and fabrics to ethnic wear and home textiles. Crafted with tradition, curated for you.
              </p>

              {/* Sparkle badges */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                {['Premium Fabrics', 'Ethnic Wear', 'Home Textiles', 'Wholesale'].map(tag => (
                  <span key={tag} style={{
                    padding: '5px 12px', borderRadius: 20,
                    background: '#f0f7f7', border: '1px solid #c8e0e0',
                    fontSize: 11, fontWeight: 600, color: '#0e6b6b',
                    letterSpacing: '0.04em',
                  }}>{tag}</span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 1, padding: '12px 20px',
                    background: '#0e6b6b', color: '#ffffff',
                    border: 'none', borderRadius: 12,
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 6, transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#c8922a'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#0e6b6b'; }}
                >
                  <Sparkles size={14} /> Explore Collections
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '12px 20px',
                    background: 'transparent', color: '#4a6b6b',
                    border: '1.5px solid #c8e0e0', borderRadius: 12,
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f0f7f7'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="retail-management" element={<RetailManagement />} />
          <Route path="trade-enquiry" element={<TradeEnquiry />} />
          <Route path="e-quotation" element={<EQuotation />} />
          <Route path="e-auction" element={<EAuction />} />
          <Route path="trade-circular" element={<TradeCircular />} />
          <Route path="blog" element={<Blog />} />
          <Route path="notice-board" element={<NoticeBoard />} />
          <Route path="career" element={<Career />} />
          <Route path="reviews" element={<CustomerReview />} />
          <Route path="gallery" element={<BusinessMediaGallery />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <WelcomePopup />
    </Router>
  );
}

export default App;
