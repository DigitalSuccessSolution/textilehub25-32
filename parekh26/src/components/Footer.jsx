import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#7c8e76',       // Sage Green
  primaryLight: '#a3b89d',  // Soft Sage
  accent: '#d57e65',        // Terracotta Peach
  border: '#eae2d3',        // Beige Border
  textFaint: '#8a7b6e',     // Muted brown
  textMid: '#5a4d41',       // Muted brown text
  soil: '#2b1f15',          // Dark brown text
};

const footerLinks = {
  'Quick Links': [
    { name: 'About Us', path: '/about' },
    { name: 'Product Gallery', path: '/products' },
    { name: 'Trade Services', path: '/retail-management' },
    { name: 'Retail Management', path: '/retail-management' },
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
    <footer style={{ background: '#FAF6EF', fontFamily: "'DM Sans', sans-serif" }}>
      {/* Top Accent Strip */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #a3b89d, #d57e65, #7c8e76)' }} />

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: C.soil, lineHeight: 1.1 }}>
                  TEXMART
                </span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 500, color: C.accent, letterSpacing: '0.15em' }}>
                  RETAIL MALL
                </span>
              </div>
              <span style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.textFaint, fontWeight: 600 }}>
                India's Most Trusted Textile Retail Mall
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: MapPin, val: 'Texmart Textile Retail Mall, Block A, Textile Park, Surat, Gujarat, India - 395002', href: '#' },
                { icon: Phone, val: '1800 120 4567', href: 'tel:18001204567' },
                { icon: Mail, val: 'info@texmart.com', href: 'mailto:info@texmart.com' },
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
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(213,126,101,0.4)', flexShrink: 0 }} />
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
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p style={{ fontSize: 11.5, color: C.textFaint, margin: 0, fontWeight: 400, letterSpacing: '0.03em' }}>
            © 2026 Texmart Textile Retail Mall · All Rights Reserved
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(txt => (
              <a
                key={txt}
                href="#"
                style={{ fontSize: 11, color: C.textFaint, textDecoration: 'none', fontWeight: 400, letterSpacing: '0.05em' }}
                onMouseEnter={e => e.currentTarget.style.color = C.accent}
                onMouseLeave={e => e.currentTarget.style.color = C.textFaint}
              >
                {txt}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
