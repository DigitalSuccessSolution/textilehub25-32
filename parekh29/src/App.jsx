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
            {/* Left Column (Creative Background Cover) - visible on md+ */}
            <div className="hidden md:block md:col-span-5 relative h-full min-h-[340px] bg-stone-100 border-r" style={{ borderColor: C.border }}>
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #475643 0%, #384535 100%)',
                }}
              />
              {/* Pattern watermark */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
              
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-left">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-display">IFH</span>
                </div>
                <div>
                  <span className="text-white/60 text-[9px] font-bold tracking-[0.2em] uppercase">Special Offer</span>
                  <h4 className="text-white text-xl font-bold leading-tight mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Heritage Weaves
                  </h4>
                  <p className="text-white/80 text-[11px] mt-1 leading-relaxed">Crafted with tradition, designed for modern living.</p>
                </div>
              </div>
            </div>

            {/* Right Column (Message & Code Details) */}
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

              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full mb-3 border"
                style={{
                  background: 'rgba(176, 87, 66, 0.06)',
                  borderColor: 'rgba(176, 87, 66, 0.15)',
                }}
              >
                <Tag size={11} style={{ color: C.accent }} />
                <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, fontWeight: 700 }}>
                  Welcome Gift
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: C.soil }}>
                Indian Fabric House<br />
                <span style={{ fontStyle: 'italic', color: C.accent, fontWeight: 500 }}>Timeless Elegance</span>
              </h3>

              <p className="text-xs sm:text-[13px] leading-relaxed mb-5" style={{ color: C.stone }}>
                Discover India's largest and most trusted textile collection. To celebrate your first visit, enjoy a special discount on premium fabrics.
              </p>

              {/* Offer Code Card */}
              <div className="rounded-2xl p-4 text-center border border-dashed mb-6"
                style={{
                  background: 'rgba(71, 86, 67, 0.03)',
                  borderColor: C.accent,
                }}
              >
                <span className="text-[13px] font-bold block" style={{ color: C.soil }}>
                  FLAT 10% OFF YOUR FIRST ORDER
                </span>
                <div className="inline-block mt-2 px-4 py-1.5 bg-[#475643] text-white rounded-lg text-xs font-mono tracking-wider font-bold">
                  WELCOME10
                </div>
              </div>

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
