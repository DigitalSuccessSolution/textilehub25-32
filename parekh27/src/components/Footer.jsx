import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#1c4442',       // Deep Teal
  primaryLight: '#3d6966',  // Medium Teal
  accent: '#b56b46',        // Terracotta / Rust
  border: 'rgba(234, 226, 211, 0.15)', // Beige Border (low opacity)
  textFaint: '#eae2d3',     // Warm sand/beige
  textMid: '#faf8f5',       // Off-white text
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
    { name: 'Career', path: '/career' },
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
                  Fashion Heritage
                </span>
              </div>
              <span style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.textFaint, fontWeight: 600 }}>
                Celebrating Handloom Artistry & Textile Traditions
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: MapPin, val: 'Fashion Heritage Textile Mall, Block A, Textile Park, Surat, Gujarat, India - 395002', href: '#' },
                { icon: Phone, val: '1800 120 4567', href: 'tel:18001204567' },
                { icon: Mail, val: 'info@fashionheritage.com', href: 'mailto:info@fashionheritage.com' },
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
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(181,107,70,0.4)', flexShrink: 0 }} />
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
            © 2026 Fashion Heritage · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
