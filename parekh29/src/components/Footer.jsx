import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#3b4837',       // Dark Forest Green Background
  primaryLight: '#586a53',  // Medium Forest Green
  accent: '#b05742',        // Terracotta Accent
  border: 'rgba(226, 221, 213, 0.12)', // Light beige border (low opacity)
  textFaint: '#e2ddd5',     // Soft sand color
  textMid: '#faf8f5',       // Warm off-white
  soil: '#ffffff',          // Pure white for headings
};

const footerLinks = {
  'Quick Links': [
    { name: 'About Us', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
    { name: 'Career', path: '/career' },
   
  ],
  Resources: [
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Customer Reviews', path: '/reviews' },
  
  ],
  'Help & Support': [
    { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/faq' }

  ],
};

export default function Footer() {
  return (
    <footer style={{ background: C.primary, color: '#faf8f5', fontFamily: "'Outfit', sans-serif" }}>
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.soil, lineHeight: 1.1 }}>
                  Indian Fabric House
                </span>
              </div>
              <span style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.textFaint, fontWeight: 600 }}>
                Empowering businesses with premium textiles and unmatched service for over two decades.
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: MapPin, val: 'Indian Fabric House, Block A, Textile Park, Surat, Gujarat, India - 395002', href: '#' },
                { icon: Phone, val: '1800 123 4567', href: 'tel:18001234567' },
                { icon: Mail, val: 'info@indianfabrichouse.com', href: 'mailto:info@indianfabrichouse.com' },
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
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
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
                    color: '#faf8f5', textDecoration: 'none',
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
                    e.currentTarget.style.color = '#faf8f5';
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 15, fontWeight: 600, color: C.soil,
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
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(176,87,66,0.4)', flexShrink: 0 }} />
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
            © 2026 Indian Fabric House · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
