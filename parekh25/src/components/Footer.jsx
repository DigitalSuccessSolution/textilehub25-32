import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Share2, MessageCircle, Globe, AtSign, ArrowRight } from 'lucide-react';

const C = {
  primary: '#8B6914',
  primaryLight: '#C4A35A',
  soil: '#4A3728',
  sand: '#F5EDD8',
  border: 'rgba(255,255,255,0.08)',
  textFaint: 'rgba(245,237,216,0.55)',
  textMid: 'rgba(245,237,216,0.8)',
};

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ],
  Services: [
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Our Retail Management', path: '/retail-management' },
    { name: 'Business Media Gallery', path: '/gallery' },
  ],
  Resources: [
    { name: 'Blog', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Customer Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#2C1F15', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Top accent */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #C4A35A, #8B6914, #7A8C6E, #C07850, #C4A35A)' }} />


      {/* Main Footer */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            {/* Brand Name - no logo */}
            <div style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600, color: 'white', lineHeight: 1.1 }}>
                  Textile
                </span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 500, fontStyle: 'italic', color: C.primaryLight, lineHeight: 1.1 }}>
                  Paradise
                </span>
              </div>
              <span style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.textFaint, fontWeight: 400 }}>
                India's Finest Textile Destination
              </span>
            </div>

            <p style={{ fontSize: 13.5, color: C.textMid, lineHeight: 1.8, marginBottom: 24, maxWidth: 300, fontWeight: 400 }}>
              Your trusted partner in premium artisan textiles, sustainable handlooms and luxury apparel. Serving 5000+ retail outlets across India.
            </p>

            {/* Contact quick links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: Phone, val: '+91 6353778329', href: 'tel:+916353778329' },
                { icon: Mail, val: 'info@textileparadise.com', href: 'mailto:info@textileparadise.com' },
                { icon: MapPin, val: 'Ahmedabad, Gujarat, India', href: '#' },
              ].map(({ icon: Icon, val, href }) => (
                <a
                  key={val}
                  href={href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontSize: 13, color: C.textMid, textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primaryLight}
                  onMouseLeave={e => e.currentTarget.style.color = C.textMid}
                >
                  <Icon size={14} color={C.primaryLight} />
                  {val}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              {[
                { Icon: MessageCircle, href: '#', label: 'Chat' },
                { Icon: AtSign, href: '#', label: 'Email' },
                { Icon: Share2, href: '#', label: 'Share' },
                { Icon: Globe, href: '#', label: 'Website' },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: C.textMid, textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(196,163,90,0.2)';
                    e.currentTarget.style.borderColor = C.primaryLight;
                    e.currentTarget.style.color = C.primaryLight;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = C.textMid;
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="col-span-1">
              <h4 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 14, fontWeight: 500, color: 'white',
                marginBottom: 18, letterSpacing: '0.03em',
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
                      onMouseEnter={e => { e.currentTarget.style.color = C.primaryLight; e.currentTarget.style.paddingLeft = '4px'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = C.textMid; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(196,163,90,0.4)', flexShrink: 0 }} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-5 flex items-center justify-center text-center">
          <p style={{ fontSize: 12, color: C.textFaint, margin: 0, fontWeight: 400 }}>
            © 2026 Textile Paradise · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
