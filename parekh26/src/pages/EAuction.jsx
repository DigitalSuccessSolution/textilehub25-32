import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send, Mail, Clock, Tag, TrendingUp } from 'lucide-react';

const C = {
  primary: '#7c8e76',
  primaryLight: '#a3b89d',
  accent: '#d57e65',
  soil: '#2b1f15',
  sand: '#f2ebe1',
  cream: '#faf8f5',
  linen: '#FAF5EC',
  border: '#eae2d3',
  stone: '#5a4d41',
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
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=600&auto=format&fit=crop&q=60",
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
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&auto=format&fit=crop&q=60",
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-24 lg:pt-32 pb-16 lg:pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-10 lg:mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            e-Auction
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #a3b89d, #7c8e76)', borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 14.5, color: C.stone, marginBottom: 40, fontWeight: 400, maxWidth: 560, margin: '0 auto 40px' }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <Gavel size={20} color={C.primaryLight} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 500, color: C.soil, margin: 0 }}>
              Active e-Auctions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {auctions.map((auction) => (
              <div
                key={auction.id}
                className="card-hover"
                style={{
                  borderRadius: 16, overflow: 'hidden',
                  background: 'white', border: `1px solid ${C.border}`,
                  display: 'flex', flexDirection: 'column',
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
                  <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                    <span style={{
                      fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em',
                      padding: '3px 10px', borderRadius: 20,
                      background: C.soil, color: 'white', fontWeight: 400,
                    }}>{auction.id}</span>
                    {auction.status === 'new' && (
                      <span style={{
                        fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em',
                        padding: '3px 10px', borderRadius: 20,
                        background: '#7c8e76', color: 'white', fontWeight: 400,
                      }}>New</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 500, color: C.soil, margin: '0 0 8px' }}>
                    {auction.title}
                  </h3>
                  <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: '0 0 16px', fontWeight: 400 }}>
                    {auction.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14, padding: '10px 0', borderTop: `1px dashed ${C.border}` }}>
                    <Clock size={13} color={C.primaryLight} />
                    <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>Closes: {auction.closingTime}</span>
                  </div>




                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          id="auction-reg-form"
          className="max-w-3xl mx-auto scroll-mt-6"
        >
          <div style={{
            background: 'white', borderRadius: 20,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(74,55,40,0.08)',
          }}>
            {/* Form header */}
            <div 
              className="p-6 md:p-8"
              style={{
              borderBottom: `1px solid ${C.border}`,
              background: C.sand,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: 'rgba(124, 142, 118,0.1)',
                border: `1px solid rgba(163, 184, 157,0.25)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Gavel size={20} color={C.primary} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 500, color: C.soil, margin: '0 0 4px' }}>
                  Participation Registration
                </h2>
                <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 400 }}>
                  Register your interest for upcoming auctions
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
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
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryLight; e.currentTarget.style.background = 'rgba(163, 184, 157,0.05)'; }}
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
                  fontSize: 14, fontWeight: 400,
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
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
  );
}
