import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#745b9f',       // Deep Purple / Lavender
  primaryLight: '#8e77b4',  // Medium Lavender
  accent: '#e37a6b',        // Warm Coral Rose Accent
  border: 'rgba(235, 223, 242, 0.15)', // Lavender Border (low opacity)
  textFaint: '#ebdff2',     // Soft lavender
  textMid: '#faf8fc',       // Off-white text with purple tint
  soil: '#ffffff',          // Pure white for headings
};

const footerLinks = {
  'Quick Links': [
    { name: 'About Us', path: '/about' },
    { name: 'Product Gallery', path: '/products' },
    { name: 'Trade Services', path: '/retail-management' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' }
  ],
  Resources: [
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Careers', path: '/career' },
    { name: 'Customer Reviews', path: '/reviews' },
  ],
  'Help & Support': [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' }
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: C.primary, color: '#faf8f5', fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: C.soil, lineHeight: 1.1 }}>
                  Loom & Luxury
                </span>
              </div>
              <span style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.textFaint, fontWeight: 600 }}>
                Celebrating Handloom Artistry & Textile Innovations
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: MapPin, val: 'Loom & Luxury Textile Mall, Block A, Textile Park, Surat, Gujarat, India - 395002', href: '#' },
                { icon: Phone, val: '1800 123 4567', href: 'tel:18001234567' },
                { icon: Mail, val: 'info@loomandluxury.com', href: 'mailto:info@loomandluxury.com' },
              ].map(({ icon: Icon, val, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    fontSize: 12.5, color: C.textMid, textDecoration: 'none',
                    lineHeight: 1.5, transition: 'color 0.2s ease',
                    maxWidth: 320,
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.textMid}
                >
                  <Icon size={14} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                  <span>{val}</span>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {[
                { 
                  name: 'Facebook', 
                  href: '#',
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Instagram', 
                  href: '#',
                  svg: (
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  )
                },
                { 
                  name: 'Pinterest', 
                  href: '#',
                  svg: (
                    <span style={{ fontSize: 13, fontWeight: 'bold', lineHeight: 1 }}>P</span>
                  )
                },
                { 
                  name: 'Youtube', 
                  href: '#',
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.002 3.002 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.51 9.388.51 9.388.51s7.524 0 9.388-.51a3.002 3.002 0 0 0 2.11-2.108C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.name}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#faf8fc', textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = C.accent;
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#faf8fc';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="col-span-1">
              <h4 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 14, fontWeight: 600, color: C.soil,
                marginBottom: 20, letterSpacing: '0.03em',
              }}>
                {group}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      style={{
                        fontSize: 13, color: C.textMid,
                        textDecoration: 'none',
                        display: 'flex', alignItems: 'center', gap: 6,
                        transition: 'all 0.2s ease', fontWeight: 400,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.paddingLeft = '4px'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = C.textMid; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(227,122,107,0.4)', flexShrink: 0 }} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-6 text-center">
          <p style={{ fontSize: 11.5, color: C.textFaint, margin: 0, fontWeight: 400, letterSpacing: '0.03em' }}>
            © 2026 Loom & Luxury · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
