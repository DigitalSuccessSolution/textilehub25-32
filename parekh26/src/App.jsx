import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
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
import { X, Tag, Leaf, ArrowRight, Star } from 'lucide-react';

const C = {
  primary: '#7c8e76',
  primaryLight: '#a3b89d',
  soil: '#2b1f15',
  sand: '#f2ebe1',
  linen: '#FAF5EC',
  cream: '#faf8f5',
  border: '#eae2d3',
  stone: '#5a4d41',
};

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0"
            style={{ background: 'rgba(74,55,40,0.5)', backdropFilter: 'blur(4px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            style={{
              position: 'relative',
              background: C.cream,
              borderRadius: 24,
              border: `1px solid ${C.border}`,
              maxWidth: 460,
              width: '100%',
              fontFamily: "'DM Sans', sans-serif",
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 32px 80px rgba(74,55,40,0.2)',
            }}
          >
            {/* Decorative top band */}
            <div style={{
              background: `linear-gradient(135deg, ${C.soil}, ${C.primary}, #7c8e76)`,
              padding: '28px 32px 24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Dot pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute', top: 14, right: 14,
                  width: 32, height: 32, borderRadius: 50,
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', cursor: 'pointer', zIndex: 5,
                }}
              >
                <X size={15} />
              </button>

              {/* Header content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 26, fontWeight: 600, color: 'white',
                  lineHeight: 1.2, margin: 0,
                }}>
                  Welcome to<br/>
                  <span style={{ fontStyle: 'italic', color: '#f2ebe1' }}>Texmart Retail Mall</span>
                </h3>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '24px 32px 28px' }}>
              <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.7, marginBottom: 22, fontWeight: 400 }}>
                Discover India's finest collection of sarees, kurtis, suiting fabrics, bedsheets and premium artisan textiles — crafted with heritage techniques.
              </p>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} fill="#a3b89d" stroke="none" />
                ))}
                <span style={{ fontSize: 12, color: C.stone, marginLeft: 6, fontWeight: 400 }}>
                  Trusted by 25,000+ customers
                </span>
              </div>



              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 1, padding: '12px 16px',
                    background: C.primary, color: 'white',
                    border: 'none', borderRadius: 12,
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', gap: 6,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.accent}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  Explore Collections <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '12px 18px',
                    background: 'transparent',
                    color: C.stone,
                    border: `1px solid ${C.border}`,
                    borderRadius: 12,
                    fontSize: 13, fontWeight: 400,
                    cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Later
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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
      {loading && <Preloader />}
      <WelcomePopup />
    </Router>
  );
}

export default App;
