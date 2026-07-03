import { useState } from 'react';
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react';

const C = {
  primary: '#1c4442',
  primaryLight: '#3d6966',
  soil: '#133835',
  sand: '#f2ebe1',
  cream: '#faf8f5',
  border: '#eae2d3',
  stone: '#5a4d41',
  accent: '#b56b46',
};

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {isOpen && (
        <div
          className="mb-4 w-[340px] sm:w-[370px] rounded-2xl overflow-hidden border"
          style={{ borderColor: C.border, background: '#FFFFFF', boxShadow: '0 12px 40px rgba(19,56,53,0.15)' }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between relative"
            style={{ background: C.soil }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: C.primary }}
              >
                <Sparkles size={15} color="white" />
              </div>
              <div className="text-left">
                <p className="text-white text-[13px] font-bold tracking-wide leading-tight">
                  Fashion Heritage Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] tracking-wide" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Online · Replies instantly
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-5 h-64 overflow-y-auto" style={{ background: C.cream }}>
            <div className="flex items-start gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: C.primaryLight }}
              >
                <Sparkles size={11} color="white" />
              </div>
              <div
                className="px-4 py-3 rounded-2xl rounded-tl-sm max-w-[82%] bg-white text-left border"
                style={{ borderColor: C.border }}
              >
                <p className="text-[13px] leading-relaxed" style={{ color: C.soil }}>
                  Hello! 🙏 Welcome to <strong>Fashion Heritage</strong>. How can I assist you today?
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 pl-9">
              {['Product Enquiry', 'Trade Enquiry', 'Store Locations'].map(chip => (
                <button
                  key={chip}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: '#FFFFFF', border: `1.5px solid ${C.border}`, color: C.stone }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; e.currentTarget.style.background = C.sand; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; e.currentTarget.style.background = '#FFFFFF'; }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-3 flex items-center gap-2.5 border-t bg-white"
            style={{ borderColor: C.border }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-grow px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all duration-200"
              style={{ background: C.cream, border: `1.5px solid ${C.border}`, color: C.soil }}
              onFocus={e => e.target.style.borderColor = C.primary}
              onBlur={e => e.target.style.borderColor = C.border}
            />
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 cursor-pointer border"
              style={{ background: C.primary, borderColor: C.border }}
            >
              <Send size={15} color="white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat Assistant"
        className="w-[52px] h-[52px] rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 border"
        style={{
          background: isOpen ? C.soil : C.primary,
          borderColor: C.border,
          boxShadow: '0 4px 16px rgba(124, 142, 118,0.2)'
        }}
      >
        {isOpen ? (
          <X size={22} color="white" />
        ) : (
          <MessageSquareText size={22} color="white" />
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;
