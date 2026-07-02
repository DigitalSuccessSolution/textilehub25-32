import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send, Mail, Calendar, Package } from 'lucide-react';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  cream: '#FDF9F2',
  linen: '#FAF5EC',
  border: '#EBE4D4',
  stone: '#6B5B45',
};

const quotations = [
  {
    id: "EQ-2026-004",
    title: "Premium Combed Cotton Fabric",
    specifications: "100% Cotton, 60/60 Count, 180 GSM, plain weave, dyed white. Required certificate of quality standard.",
    quantity: "15,000 Meters",
    closingDate: "June 25, 2026",
  },
  {
    id: "EQ-2026-005",
    title: "Organic Mulberry Silk Yarn",
    specifications: "Grade A Mulberry Silk Yarn, count: 20/22 D, unbleached, ready for custom dyeing process.",
    quantity: "2,000 Kilograms",
    closingDate: "June 30, 2026",
  },
  {
    id: "EQ-2026-006",
    title: "Linen Polyester Upholstery Blend",
    specifications: "55% Linen / 45% Polyester blend fabric, 320 GSM, textured weave, fire retardant coated.",
    quantity: "8,500 Meters",
    closingDate: "July 05, 2026",
  },
];

export default function EQuotation() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      {/* Hero */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            e-Quotation
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-12 pb-24">
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, marginBottom: 40, fontWeight: 400, maxWidth: 560, margin: '0 auto 40px' }}>
          Digital procurement and transparent quotation system across our corporate ecosystem.
        </p>

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <ClipboardCheck size={20} color={C.primaryLight} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, color: C.soil, margin: 0 }}>
              Active Quotation Requests
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-14">
            {quotations.map((item) => (
              <div
                key={item.id}
                className="card-hover"
                style={{
                  borderRadius: 16, overflow: 'hidden',
                  background: 'white', border: `1px solid ${C.border}`,
                  display: 'flex', flexDirection: 'column',
                  padding: '22px',
                }}
              >
                {/* Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 14 }}>
                  <Calendar size={12} color={C.stone} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{item.closingDate}</span>
                </div>

                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 500, color: C.soil, margin: '0 0 10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 400, flex: 1 }}>
                  {item.specifications}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          id="quote-form-section"
          className="max-w-3xl mx-auto scroll-mt-6"
        >
          <div style={{
            background: 'white', borderRadius: 20,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(74,55,40,0.08)',
          }}>
            {/* Form header */}
            <div style={{
              padding: '24px 32px',
              borderBottom: `1px solid ${C.border}`,
              background: C.sand,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: 'rgba(139,105,20,0.1)',
                border: `1px solid rgba(196,163,90,0.25)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FileText size={20} color={C.primary} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 500, color: C.soil, margin: '0 0 4px' }}>
                  Request a Price Quote
                </h2>
                <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 400 }}>
                  Fill in your details below to receive a quotation
                </p>
              </div>
            </div>

            <div style={{ padding: '32px' }}>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Name of the Trader *', type: 'text' },
                    { label: 'Business Name *', type: 'text' },
                    { label: 'Business Address with Pin Code *', type: 'text' },
                    { label: 'GST No.', type: 'text' },
                    { label: 'Mobile No. *', type: 'tel' },
                    { label: 'Email ID *', type: 'email' },
                  ].map((f, i) => (
                    <div key={i}>
                      <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 400 }}>
                        {f.label}
                      </label>
                      <input type={f.type} className="form-input" />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 400 }}>
                    Options *
                  </label>
                  <select className="form-input" style={{ appearance: 'none' }}>
                    <option value="" disabled>Select Option</option>
                    <option>Textile Products</option>
                    <option>Raw Materials</option>
                    <option>Corporate Gifting</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 6, fontWeight: 400 }}>
                    Particulars of the Products *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter product details, GSM, quantity, color, specifications..."
                    className="form-input" style={{ resize: 'none' }}
                  />
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: C.soil, color: 'white',
                  border: 'none', borderRadius: 12,
                  fontSize: 14, fontWeight: 400,
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = C.primary}
                  onMouseLeave={e => e.currentTarget.style.background = C.soil}
                >
                  <Send size={15} /> Submit Quotation Request
                </button>

              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
