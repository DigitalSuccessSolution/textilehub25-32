import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const COLORS = { 
  primary: '#b56b46', 
  accent: '#b56b46', 
  bg: '#faf8f5', 
  border: '#eae2d3', 
  textDark: '#133835' 
};

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function FloatingSocials() {
  const [isExpanded, setIsExpanded] = useState(true);

  const socials = [
    { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
  ];

  return (
    <div className="fixed left-0 top-[35%] z-[99] flex items-center">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isExpanded ? 0 : -60 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="flex flex-col items-center rounded-r-2xl shadow-2xl py-5 px-3.5 relative"
        style={{
          background: 'rgba(61,48,37,0.95)', // #3D3025 with opacity
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderLeft: 'none',
        }}
      >
        <div className="flex flex-col gap-5">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name}`}
                className="transition-all duration-200 hover:scale-115 cursor-pointer"
                style={{ color: 'rgba(250,249,245,0.85)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = COLORS.primary}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,249,245,0.85)'}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Toggle Arrow */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-10 flex items-center justify-center rounded-r-md border-y border-r transition-colors focus:outline-none shadow-md cursor-pointer"
          style={{
            background: COLORS.primary,
            color: '#FAF9F5',
            borderColor: 'rgba(255,255,255,0.1)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#3D3025'; e.currentTarget.style.color = COLORS.primary; }}
          onMouseLeave={e => { e.currentTarget.style.background = COLORS.primary; e.currentTarget.style.color = '#FAF9F5'; }}
          aria-label={isExpanded ? "Collapse socials" : "Expand socials"}
        >
          {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </motion.div>
    </div>
  );
}
