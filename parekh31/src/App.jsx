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
import { X, Crown, Sparkles } from 'lucide-react';

const C = {
  primary: '#5b4fcf',       // Royal Purple
  primaryDark: '#3d3399',   // Darker Purple
  accent: '#c8922a',        // Warm Gold
  bg: '#ffffff',
  sand: '#f5f0e8',          // Warm Cream
  sage: '#ede8f5',          // Light Lavender
  border: '#d8cff0',        // Lavender Border
  soil: '#1a1435',          // Deep Dark Navy
  stone: '#6b6080',         // Muted Purple Text
};

// ─── Simple Welcome Popup ───
function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const shown = sessionStorage.getItem('vr_popup_shown');
    if (!shown) {
      const timer = setTimeout(() => setIsOpen(true), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      sessionStorage.setItem('vr_popup_shown', '1');
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
            style={{ background: 'rgba(26, 20, 53, 0.65)', backdropFilter: 'blur(10px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.82, opacity: 0, y: 36 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 24 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'relative',
              background: '#ffffff',
              borderRadius: 28,
              maxWidth: 440,
              width: '100%',
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 40px 100px rgba(26, 20, 53, 0.3)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Top purple band */}
            <div style={{
              background: 'linear-gradient(135deg, #5b4fcf 0%, #3d3399 100%)',
              padding: '40px 32px 36px',
              position: 'relative',
              textAlign: 'center',
              overflow: 'hidden',
            }}>
              {/* Pattern overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)',
                backgroundSize: '20px 20px',
                pointerEvents: 'none',
              }} />
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -50, right: -50, width: 180, height: 180, borderRadius: '50%', background: 'rgba(200,146,42,0.12)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -30, left: -30, width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute', top: 14, right: 14,
                  width: 30, height: 30, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'rgba(255,255,255,0.8)', transition: 'all 0.2s',
                  zIndex: 5,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
              >
                <X size={14} />
              </button>

              {/* Icon */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  width: 62, height: 62, borderRadius: '14px 28px 14px 28px',
                  background: 'rgba(200,146,42,0.2)',
                  border: '1.5px solid rgba(200,146,42,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px',
                  boxShadow: '0 0 30px rgba(200,146,42,0.2)',
                }}>
                  <Crown size={26} style={{ color: '#c8922a' }} />
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28, fontWeight: 700,
                  color: '#ffffff', margin: 0, lineHeight: 1.2,
                }}>
                  Welcome to<br />
                  <span style={{ fontStyle: 'italic', color: '#e0b84a' }}>Vastra Royale</span>
                </h2>
              </div>
            </div>

            {/* Bottom content */}
            <div style={{ padding: '28px 32px 32px' }}>
              <p style={{ color: C.stone, fontSize: 14, lineHeight: 1.7, margin: '0 0 22px', textAlign: 'center' }}>
                Discover India's finest textiles — premium sarees, fabrics, ethnic wear and home textiles. Crafted with tradition, curated for you.
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                {['Premium Fabrics', 'Ethnic Wear', 'Home Textiles', 'Wholesale'].map(tag => (
                  <span key={tag} style={{
                    padding: '5px 12px', borderRadius: 20,
                    background: '#ede8f5', border: '1px solid #d8cff0',
                    fontSize: 11, fontWeight: 600, color: '#5b4fcf',
                    letterSpacing: '0.04em',
                  }}>{tag}</span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 1, padding: '13px 20px',
                    background: '#5b4fcf', color: '#ffffff',
                    border: 'none', borderRadius: 12,
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 6, transition: 'all 0.25s',
                    boxShadow: '0 6px 20px rgba(91,79,207,0.3)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#c8922a'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(200,146,42,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#5b4fcf'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(91,79,207,0.3)'; }}
                >
                  <Sparkles size={14} /> Explore Collections
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '13px 20px',
                    background: 'transparent', color: C.stone,
                    border: '1.5px solid #d8cff0', borderRadius: 12,
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#ede8f5'; }}
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
