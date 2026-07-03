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
  primary: '#475643',       // Deep Forest Green
  primaryLight: '#586a53',  // Medium Forest Green
  soil: '#222b20',          // Deep Dark Charcoal Text
  sand: '#efebdf',          // Soft Beige Background
  linen: '#faf8f5',          // Pure Linen Cream Background
  cream: '#faf8f5',          // Warm Off-white base background
  border: '#e2ddd5',        // Soft Warm Border
  stone: '#5a6657',         // Muted Olive-Charcoal Text
  accent: '#b05742',        // Terracotta Accent
};

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000); // Open after 4 seconds
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0"
            style={{ background: 'rgba(34, 43, 32, 0.45)', backdropFilter: 'blur(6px)' }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="grid grid-cols-1 md:grid-cols-12 w-full"
            style={{
              position: 'relative',
              background: C.cream,
              borderRadius: 24,
              border: `1.5px solid ${C.border}`,
              maxWidth: 600,
              fontFamily: "'Outfit', sans-serif",
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 32px 80px rgba(34, 43, 32, 0.18)',
            }}
          >
            {/* Left Column (Image) - visible on all screen sizes */}
            <div className="col-span-1 md:col-span-5 relative h-[180px] md:h-auto md:min-h-[340px] bg-stone-100 border-b md:border-b-0 md:border-r" style={{ borderColor: C.border }}>
              <img
                src="https://images.pexels.com/photos/5531709/pexels-photo-5531709.jpeg"
                alt="Welcome to Indian Fabric House"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Column (Message Details) */}
            <div className="col-span-1 md:col-span-7 p-6 sm:p-8 flex flex-col justify-center text-left relative">
              
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center border transition-colors cursor-pointer hover:bg-stone-100"
                style={{
                  background: 'rgba(71, 86, 67, 0.05)',
                  borderColor: C.border,
                  color: C.soil,
                }}
              >
                <X size={15} />
              </button>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: C.soil }}>
                Welcome to<br />
                <span style={{ fontStyle: 'italic', color: C.accent, fontWeight: 500 }}>Indian Fabric House</span>
              </h3>

              <p className="text-xs sm:text-[13px] leading-relaxed mb-6" style={{ color: C.stone }}>
                Discover India's largest and most trusted textile collection. Explore our premium fabrics, heritage sarees, and luxury home linen crafted directly in collaboration with master artisans.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-2.5">
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  className="flex-1 py-3 bg-[#475643] hover:bg-[#b05742] text-xs font-bold text-white rounded-full flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  Shop Fabrics <ArrowRight size={13} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-3 rounded-full text-xs font-semibold border transition-colors cursor-pointer hover:bg-stone-100"
                  style={{
                    borderColor: C.border,
                    color: C.stone,
                  }}
                >
                  Dismiss
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
