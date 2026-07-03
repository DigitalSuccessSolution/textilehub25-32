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
  primary: '#745b9f',       // Deep Purple / Lavender
  primaryLight: '#8e77b4',  // Medium Lavender
  soil: '#2c1e43',          // Deep purple-tinted Dark Text
  sand: '#f3ebf7',          // Soft Lavender Background
  linen: '#fdfafd',          // Pure Linen Cream with purple hint
  cream: '#faf8fc',          // Warm Off-white with purple tint
  border: '#ebdff2',        // Soft Lavender Border
  stone: '#66587c',         // Muted Lavender-Grey Text
  accent: '#e37a6b',        // Warm Coral Rose Accent
};

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2200);
  };

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
            style={{ background: 'rgba(44, 30, 67, 0.45)', backdropFilter: 'blur(6px)' }}
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
              maxWidth: 680,
              fontFamily: "'DM Sans', sans-serif",
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 32px 80px rgba(44, 30, 67, 0.18)',
            }}
          >
            {/* Form & Details Column (Left side now) */}
            <div className="col-span-1 md:col-span-7 p-6 sm:p-8 flex flex-col justify-center text-left relative order-2 md:order-1">
              
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 md:right-auto md:left-4 w-8 h-8 rounded-full flex items-center justify-center border transition-colors cursor-pointer z-20"
                style={{
                  background: 'rgba(116,91,159,0.06)',
                  borderColor: C.border,
                  color: C.soil,
                }}
              >
                <X size={15} />
              </button>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 mt-6 md:mt-0" style={{ fontFamily: "'Playfair Display', serif", color: C.soil }}>
                Loom & Luxury<br />
                <span style={{ fontStyle: 'italic', color: C.accent, fontWeight: 500 }}>Pure Artistry & Design</span>
              </h3>

              <p className="text-xs sm:text-[13px] leading-relaxed mb-5" style={{ color: C.stone }}>
                Join our exclusive circle to receive updates on premium sarees, traditional handlooms, and new launches.
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={12} fill="#e37a6b" stroke="none" />
                ))}
                <span className="text-[10.5px] ml-2 font-semibold" style={{ color: C.stone }}>
                  Trusted by 25,000+ patrons
                </span>
              </div>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl p-4 text-center border"
                  style={{
                    background: '#f2eefa',
                    borderColor: C.primary,
                    color: C.soil,
                    fontWeight: 600,
                  }}
                >
                  Thank you! You've subscribed successfully.
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {/* Buttons */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2.5 mt-1 w-full">
                      <button
                        type="button"
                        onClick={() => { setIsOpen(false); navigate('/products'); }}
                        className="flex-[2] py-3 rounded-full text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        style={{ background: C.primary }}
                      >
                        Explore Now <ArrowRight size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="flex-1 py-3 rounded-full text-xs font-semibold border transition-colors cursor-pointer"
                        style={{
                          borderColor: C.border,
                          color: C.stone,
                        }}
                      >
                        Later
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Image Column (Right side now) */}
            <div className="block md:col-span-5 relative w-full min-h-[220px] md:min-h-[380px] bg-stone-100 md:border-l animate-fade-in order-1 md:order-2" style={{ borderColor: C.border }}>
              <img
                src="https://images.pexels.com/photos/14789186/pexels-photo-14789186.jpeg"
                alt="Loom & Luxury Premium Fabrics"
                className="absolute inset-0 w-full h-full object-cover animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e43]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase">Premium Silk</span>
                <h4 className="text-white text-lg font-bold leading-tight mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Loom & Luxury
                </h4>
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
