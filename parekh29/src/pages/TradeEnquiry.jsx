import { motion } from 'framer-motion';
import { Send, Building2, ShoppingBag } from 'lucide-react';

const C = {
  primary: '#475643',       // Deep Forest Green
  primaryLight: '#586a53',  // Medium Forest Green
  soil: '#222b20',          // Deep Dark Charcoal Text
  sand: '#efebdf',          // Soft Beige Background
  cream: '#faf8f5',          // Warm Off-white base background
  border: '#e2ddd5',        // Soft Warm Border
  stone: '#5a6657',         // Muted Olive-Charcoal Text
  accent: '#b05742',        // Terracotta Accent
};

export default function TradeEnquiry() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.cream, minHeight: '100vh' }}>

      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Trade Enquiry
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 15, lineHeight: 1.8, color: C.stone, marginBottom: 36, fontWeight: 400 }}>
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'white',
            borderRadius: 20,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(34,43,32,0.08)',
          }}
        >
          <div style={{
            padding: '24px 32px',
            borderBottom: `1px solid ${C.border}`,
            background: C.sand,
          }} className="text-left">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: C.soil, margin: '0 0 4px' }}>
              Enquiry Form
            </h2>
            <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 400 }}>
              Our trade team will respond within 1–2 business days.
            </p>
          </div>

          <div style={{ padding: '32px' }} className="text-left">
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={e => e.preventDefault()}>

              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: C.soil, margin: '0 0 16px', paddingBottom: 12, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Building2 size={16} color={C.primaryLight} /> Company Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Company Name *', type: 'text' },
                    { label: 'Contact Person *', type: 'text' },
                    { label: 'Email Address *', type: 'email' },
                    { label: 'Phone Number *', type: 'tel' },
                  ].map((f, i) => (
                    <div key={i}>
                      <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 400 }}>
                        {f.label}
                      </label>
                      <input type={f.type} required className="form-input" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: C.soil, margin: '0 0 16px', paddingBottom: 12, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ShoppingBag size={16} color={C.primaryLight} /> Enquiry Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 400 }}>
                      Interested Categories
                    </label>
                    <select className="form-input" style={{ appearance: 'none' }}>
                      <option>Sarees</option>
                      <option>Leggings</option>
                      <option>Kurtis</option>
                      <option>Suiting & Shirting</option>
                      <option>Home Furnishing</option>
                      <option>Multiple / Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 400 }}>
                      Expected Order Volume
                    </label>
                    <select className="form-input" style={{ appearance: 'none' }}>
                      <option>Small (Below 1000 meters / units)</option>
                      <option>Medium (1000 - 5000 meters / units)</option>
                      <option>Large (5000+ meters / units)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 400 }}>
                      Additional Requirements / Message
                    </label>
                    <textarea
                      rows={5}
                      className="form-input"
                      style={{ resize: 'none' }}
                      placeholder="Describe your requirements, custom specifications, delivery timeline..."
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', padding: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: C.soil, color: 'white',
                  border: 'none', borderRadius: 12,
                  fontSize: 14, fontWeight: 500,
                  cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = C.accent}
                onMouseLeave={e => e.currentTarget.style.background = C.soil}
              >
                <Send size={15} /> Submit Trade Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
