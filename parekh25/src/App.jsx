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
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  linen: '#FAF5EC',
  cream: '#FDF9F2',
  border: '#EBE4D4',
  stone: '#6B5B45',
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
            {/* Top Image Header */}
            <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
              <img src="/images/heroimages/hero.png" alt="Welcome to Textile Paradise" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(74,55,40,0.9) 0%, rgba(74,55,40,0.1) 100%)'
              }} />
              
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  width: 32, height: 32, borderRadius: 50,
                  background: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', cursor: 'pointer', zIndex: 5,
                  backdropFilter: 'blur(4px)',
                }}
              >
                <X size={15} />
              </button>

              <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24, zIndex: 2 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.2)', borderRadius: 20,
                  padding: '4px 12px', marginBottom: 10,
                  border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)',
                }}>
                  <Leaf size={11} color="#F5EDD8" />
                  <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F5EDD8', fontWeight: 500 }}>
                    Textile Paradise
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28, fontWeight: 600, color: 'white',
                  lineHeight: 1.15, margin: 0,
                }}>
                  Discover <br/>
                  <span style={{ fontStyle: 'italic', color: '#C4A35A', fontWeight: 500 }}>Heritage Elegance</span>
                </h3>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '24px 28px 28px' }}>
              <p style={{ fontSize: 14.5, color: C.stone, lineHeight: 1.6, marginBottom: 20, fontWeight: 400 }}>
                Immerse yourself in India's finest collection of designer sarees, premium suiting fabrics, and luxury artisan textiles.
              </p>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 24, alignItems: 'center' }}>
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={15} fill="#C4A35A" stroke="none" />
                ))}
                <span style={{ fontSize: 12, color: C.stone, marginLeft: 8, fontWeight: 500 }}>
                  25,000+ Happy Customers
                </span>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 1, padding: '14px 16px',
                    background: C.soil, color: 'white',
                    border: 'none', borderRadius: 12,
                    fontSize: 13.5, fontWeight: 500,
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', gap: 8,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(74,55,40,0.15)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.primary}
                  onMouseLeave={e => e.currentTarget.style.background = C.soil}
                >
                  Explore Collections <ArrowRight size={15} />
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
