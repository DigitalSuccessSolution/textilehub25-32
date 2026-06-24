import React from 'react';

const COLORS = { 
  primary: '#25D366', // Standard WhatsApp Green
  bg: '#faf8f5',      // Matches C.cream
  border: '#e2ddd5',  // Matches C.border
  textDark: '#222b20' // Matches C.soil
};

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/916353778329"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[100px] right-5 z-50 group"
    >
      {/* Tooltip */}
      <span
        className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 group-hover:-translate-x-1"
        style={{
          background: COLORS.bg,
          color: COLORS.textDark,
          border: `1px solid ${COLORS.border}`,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div
        className="w-[52px] h-[52px] rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer border"
        style={{
          background: COLORS.primary,
          borderColor: 'rgba(0,0,0,0.06)',
          boxShadow: '0 4px 16px rgba(37,211,102,0.25)'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 relative z-10"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 21.373c-1.579 0-3.093-.418-4.419-1.207l-4.908 1.29 1.309-4.787c-.854-1.37-1.305-2.955-1.305-4.595 0-4.887 3.976-8.863 8.863-8.863 4.886 0 8.861 3.975 8.861 8.861 0 4.887-3.975 8.861-8.861 8.861z" />
        </svg>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
