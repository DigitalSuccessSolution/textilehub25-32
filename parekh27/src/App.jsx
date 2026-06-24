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
    }, 1800);
  };

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
            style={{ background: 'rgba(19,56,53,0.45)', backdropFilter: 'blur(6px)' }}
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
              border: `1.5px solid ${C.border}`,
              maxWidth: 460,
              width: '100%',
              fontFamily: "'DM Sans', sans-serif",
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 32px 80px rgba(19,56,53,0.18)',
            }}
          >
            {/* Decorative top band */}
            <div style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.primaryLight})`,
              padding: '30px 32px 26px',
              position: 'relative',
              overflow: 'hidden',
              borderBottom: `2.5px solid ${C.accent}`,
            }}>
              {/* Pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                opacity: 0.5
              }} />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute', top: 14, right: 14,
                  width: 32, height: 32, borderRadius: 50,
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', cursor: 'pointer', zIndex: 5,
                }}
              >
                <X size={15} />
              </button>

              {/* Header content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.12)', borderRadius: 20,
                  padding: '4px 12px', marginBottom: 12,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <Tag size={11} color="#eae2d3" />
                  <span style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#eae2d3', fontWeight: 600 }}>
                    Exclusive Welcome Offer
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28, fontWeight: 600, color: 'white',
                  lineHeight: 1.25, margin: 0,
                }}>
                  Fashion Heritage<br/>
                  <span style={{ fontStyle: 'italic', color: '#f2ebe1', fontWeight: 500 }}>Artistry & Tradition</span>
                </h3>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '26px 32px 30px' }}>
              <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.7, marginBottom: 20, fontWeight: 400 }}>
                Join the Fashion Heritage community to receive updates on premium sarees, traditional handlooms, new launches, and exclusive member discounts.
              </p>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={13} fill="#b56b46" stroke="none" />
                ))}
                <span style={{ fontSize: 11.5, color: C.stone, marginLeft: 6, fontWeight: 500 }}>
                  Trusted by 25,000+ textile patrons
                </span>
              </div>

              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: '#e8eee5',
                    border: '1px solid #1c4442',
                    borderRadius: 14,
                    padding: '20px',
                    textAlign: 'center',
                    color: '#1c4442',
                    fontWeight: 600,
                  }}
                >
                  Thank you! You've subscribed successfully.
                  <span style={{ display: 'block', fontSize: 12, color: C.stone, marginTop: 4, fontWeight: 400 }}>
                    Use code <strong style={{ color: '#b56b46' }}>HERITAGE10</strong> at check-out.
                  </span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  {/* Offer coupon banner */}
                  <div style={{
                    background: C.sand,
                    border: `1.5px dashed ${C.accent}`,
                    borderRadius: 14,
                    padding: '12px 16px',
                    textAlign: 'center',
                  }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: C.primary, display: 'block' }}>
                      Get 10% Off Your First Order
                    </span>
                    <span style={{ fontSize: 11, color: C.stone, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginTop: 2 }}>
                      Discount Code: <strong style={{ color: C.accent }}>HERITAGE10</strong>
                    </span>
                  </div>

                  {/* Input and button */}
                  <div className="flex flex-col gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 12,
                        border: `1.5px solid ${C.border}`,
                        outline: 'none',
                        fontSize: 13,
                        background: '#fff',
                        width: '100%',
                      }}
                    />
                    <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                      <button
                        type="submit"
                        style={{
                          flex: 2, padding: '12px 16px',
                          background: C.primary, color: 'white',
                          border: 'none', borderRadius: 12,
                          fontSize: 13, fontWeight: 600,
                          cursor: 'pointer', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', gap: 6,
                          fontFamily: "'DM Sans', sans-serif",
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = C.accent}
                        onMouseLeave={e => e.currentTarget.style.background = C.primary}
                      >
                        Subscribe Now <ArrowRight size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => { setIsOpen(false); navigate('/products'); }}
                        style={{
                          flex: 1, padding: '12px 16px',
                          background: 'transparent',
                          color: C.stone,
                          border: `1.5px solid ${C.border}`,
                          borderRadius: 12,
                          fontSize: 13, fontWeight: 500,
                          cursor: 'pointer',
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        Later
                      </button>
                    </div>
                  </div>
                </form>
              )}
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
