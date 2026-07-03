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
  primary: '#1c4442',
  primaryLight: '#3d6966',
  soil: '#133835',
  sand: '#f2ebe1',
  linen: '#FAF5EC',
  cream: '#faf8f5',
  border: '#eae2d3',
  stone: '#5a4d41',
  accent: '#b56b46',
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0"
            style={{ background: 'rgba(19,56,53,0.6)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="relative flex flex-col md:flex-row overflow-hidden"
            style={{
              background: C.cream,
              borderRadius: 24,
              border: `1px solid ${C.border}`,
              maxWidth: 760,
              width: '100%',
              zIndex: 10,
              boxShadow: '0 32px 80px rgba(19,56,53,0.25)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: C.soil, cursor: 'pointer', zIndex: 20,
                border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <X size={16} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-5/12 h-56 md:h-auto relative">
              <img 
                src="https://images.pexels.com/photos/4622423/pexels-photo-4622423.jpeg" 
                alt="Fashion Heritage" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: C.soil, lineHeight: 1.2, margin: '0 0 12px' }}>
                Discover The <br/>
                <span style={{ fontStyle: 'italic', color: C.accent }}>Art of Weaving</span>
              </h3>
              
              <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.7, marginBottom: 24, fontWeight: 400 }}>
                Experience the finest quality fabrics, curated to bring elegance, comfort and tradition to your life. Discover India's finest collections of premium royal silks and handloom weaves.
              </p>

              <button
                onClick={() => { setIsOpen(false); navigate('/products'); }}
                style={{
                  width: '100%', padding: '14px 18px',
                  background: C.primary, color: 'white',
                  border: 'none', borderRadius: 12,
                  fontSize: 14, fontWeight: 500,
                  cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = C.accent}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              >
                Explore Collections <ArrowRight size={16} />
              </button>
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
