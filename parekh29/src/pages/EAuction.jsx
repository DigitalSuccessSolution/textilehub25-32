import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send, Mail, Clock, TrendingUp } from 'lucide-react';

const C = {
  primary: '#475643',       // Deep Forest Green
  primaryLight: '#586a53',  // Medium Forest Green
  accent: '#b05742',        // Terracotta Accent
  bg: '#faf8f5',            // Warm Cream
  sand: '#efebdf',          // Light Sand
  border: '#e2ddd5',        // Beige Border
  soil: '#222b20',          // Dark Green-Charcoal Text
  stone: '#5a6657',         // Muted Text
  linen: '#fbfaf7',          // Linen background
};

const auctions = [
  {
    id: "AUC-2026-009",
    title: "Surplus Organic Linen Stock",
    description: "Lot of premium surplus dyed and organic linen fabrics. Total quantity of approx. 4,500 meters of various color rolls in pristine condition.",
    quantity: "4,500 Meters",
    reservePrice: "₹2,50,000",
    currentBid: "₹2,80,000",
    bidsCount: 8,
    closingTime: "June 20, 2026 · 17:00 IST",
    image: "https://images.pexels.com/photos/18359546/pexels-photo-18359546.jpeg",
    status: 'active',
  },
  {
    id: "AUC-2026-010",
    title: "Premium Jacquard Weaving Warp Yarns",
    description: "High-grade industrial warp & weft jacquard yarns. 100% natural wool-cotton textures, surplus stock from our high-end winter line.",
    quantity: "1,200 Kilograms",
    reservePrice: "₹1,80,000",
    currentBid: "₹1,95,000",
    bidsCount: 4,
    closingTime: "June 24, 2026 · 14:00 IST",
    image: "https://images.pexels.com/photos/36226283/pexels-photo-36226283.jpeg",
    status: 'active',
  },
  {
    id: "AUC-2026-011",
    title: "Eco-Luxe Mercerized Cotton Cones",
    description: "Mercerized carded cotton warp cones, assorted colors, high tensile strength, perfect for weaving machinery warp setup.",
    quantity: "3,000 Kilograms",
    reservePrice: "₹3,20,000",
    currentBid: "₹3,20,000",
    bidsCount: 0,
    closingTime: "June 28, 2026 · 11:00 IST",
    image: "https://images.pexels.com/photos/6358804/pexels-photo-6358804.jpeg",
    status: 'new',
  }
];

export default function EAuction() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '100vh' }}>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            e-Auction
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, marginBottom: 40, fontWeight: 400, maxWidth: 560, margin: '0 auto 40px' }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Cards) */}
          <div className="lg:col-span-4 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }} className="text-left">
                <Gavel size={20} color={C.primaryLight} />
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: C.soil, margin: 0 }}>
                  Active e-Auctions
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {auctions.map((auction) => (
                  <div
                    key={auction.id}
                    className="card-hover text-left"
                    style={{
                      borderRadius: 16, overflow: 'hidden',
                      background: 'white', border: `1px solid ${C.border}`,
                      display: 'flex', flexDirection: 'column',
                      maxWidth: '390px',
                    }}
                  >
                    {/* Image */}
                    <div style={{ height: 150, overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={auction.image}
                        alt={auction.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: C.soil, margin: '0 0 8px' }}>
                        {auction.title}
                      </h3>
                      <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: '0 0 16px', fontWeight: 400, flex: 1 }}>
                        {auction.description}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 0 0', borderTop: `1px dashed ${C.border}` }}>
                        <Clock size={13} color={C.primaryLight} />
                        <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>Closes: {auction.closingTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              id="auction-reg-form"
              className="max-w-4xl mx-auto lg:mx-0 scroll-mt-6"
            >
              <div style={{
                background: 'white', borderRadius: 20,
                border: `1px solid ${C.border}`,
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(34,43,32,0.08)',
              }}>
                {/* Form header */}
                <div style={{
                  padding: '24px 32px',
                  borderBottom: `1px solid ${C.border}`,
                  background: C.sand,
                  display: 'flex', alignItems: 'center', gap: 14,
                }} className="text-left">
                  <div style={{
                    width: 46, height: 46, borderRadius: 12,
                    background: 'rgba(71, 86, 67, 0.1)',
                    border: `1px solid rgba(71, 86, 67, 0.25)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Gavel size={20} color={C.primary} />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: C.soil, margin: '0 0 4px' }}>
                      Participation Registration
                    </h2>
                    <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 400 }}>
                      Register your interest for upcoming auctions
                    </p>
                  </div>
                </div>

                <div style={{ padding: '32px' }} className="text-left">
                  <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        { label: 'Name of the Participant *', type: 'text' },
                        { label: 'Legal Name of Business *', type: 'text' },
                        { label: 'Business Address with PIN Code *', type: 'text' },
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

                    {/* Upload */}
                    <div>
                      <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, display: 'block', marginBottom: 8, fontWeight: 400 }}>
                        Upload GST Certificate *
                      </label>
                      <label style={{
                        width: '100%', border: `2px dashed ${C.border}`,
                        borderRadius: 14, padding: '40px 24px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        cursor: 'pointer', background: C.linen,
                        transition: 'all 0.2s ease',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryLight; e.currentTarget.style.background = 'rgba(71, 86, 67, 0.05)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.linen; }}
                      >
                        <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                        <UploadCloud size={30} color={C.primaryLight} strokeWidth={1.5} style={{ marginBottom: 10 }} />
                        <p style={{ fontSize: 14, color: C.soil, margin: '0 0 4px', fontWeight: 400 }}>Click to upload GST Certificate</p>
                        <p style={{ fontSize: 11, color: C.stone, margin: 0, fontWeight: 400 }}>PDF, JPG, PNG accepted</p>
                      </label>
                    </div>

                    <button type="submit" style={{
                      width: '100%', padding: '14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      background: C.accent, color: 'white',
                      border: 'none', borderRadius: 12,
                      fontSize: 14, fontWeight: 500,
                      cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                      transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = C.primary}
                      onMouseLeave={e => e.currentTarget.style.background = C.accent}
                    >
                      <Send size={15} /> Submit Registration
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
