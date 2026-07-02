import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send, Mail, Clock, Tag, TrendingUp } from 'lucide-react';

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

const auctions = [
  {
    id: "AUC-2026-009",
    title: "Surplus Cotton Yarn Liquidation",
    description: "Online bidding for 2,500 kg of premium grade carded cotton yarn. Starting bid ₹180/kg.",
    quantity: "2,500 Kilograms",
    reservePrice: "₹4,50,000",
    currentBid: "₹4,65,000",
    bidsCount: 12,
    closingTime: "July 05, 2026 · 17:00 IST",
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=600&auto=format&fit=crop&q=60",
    status: 'active',
  },
  {
    id: "AUC-2026-010",
    title: "Unused Jacquard Fabric Rolls",
    description: "Liquidation of 450 meters of high-end jacquard brocade fabrics. Starting bid ₹320/meter.",
    quantity: "450 Meters",
    reservePrice: "₹1,44,000",
    currentBid: "₹1,50,000",
    bidsCount: 5,
    closingTime: "July 08, 2026 · 14:00 IST",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&auto=format&fit=crop&q=60",
    status: 'active',
  }
];

export default function EAuction() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }}>

      {/* Hero */}
      <div className="page-hero relative flex items-center justify-center text-center" style={{ height: 180 }}>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            e-Auction
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C4A35A, #8B6914)', borderRadius: 2, margin: '0 auto' }} />
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-12 pb-24">
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-14">
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
                <div className="relative h-[110px] sm:h-[150px] overflow-hidden">
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
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <Clock size={12} color={C.primaryLight} />
                    <span className="text-[9px] sm:text-[11px]" style={{ color: C.stone, fontWeight: 400 }}>{auction.closingTime}</span>
                  </div>

                  <h3 className="text-[13px] sm:text-[17px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: C.soil, margin: '0 0 6px sm:0 0 8px' }}>
                    {auction.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] line-clamp-2 sm:line-clamp-none flex-1" style={{ color: C.stone, lineHeight: 1.4, margin: 0, fontWeight: 400 }}>
                    {auction.description}
                  </p>
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

            <div style={{ padding: '32px' }}>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Name of the Participant *', type: 'text' },
                    { label: 'Legal Name of Business *', type: 'text' },
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
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryLight; e.currentTarget.style.background = 'rgba(196,163,90,0.05)'; }}
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
                  background: C.soil, color: 'white',
                  border: 'none', borderRadius: 12,
                  fontSize: 14, fontWeight: 400,
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = C.primary}
                  onMouseLeave={e => e.currentTarget.style.background = C.soil}
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
