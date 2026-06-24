import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const C = {
  primary: '#4b739e',        // Steel Blue
  primaryLight: '#6a8db5',  // Light Steel Blue
  soil: '#1a2a3a',           // Deep Slate Blue (Main Text)
  sand: '#f7f4ed',           // Soft Warm Sand
  cream: '#ffffff',          // White Background
  border: '#d2dfed',         // Soft Blue-Grey Border
  stone: '#536476',          // Muted Slate Text
  accent: '#c5a059',         // Warm Gold/Beige
};

const faqs = [
  {
    question: "What types of fabrics do you specialize in?",
    answer: "We specialize in a wide range of premium textiles including pure silks, high-quality cottons, linens, and custom synthetic blends suitable for both traditional wear and modern fashion."
  },
  {
    question: "Do you accept wholesale or bulk orders?",
    answer: "Yes, we have a dedicated B2B division that handles wholesale and bulk orders. You can submit your requirements through our Trade Enquiry or e-Quotation pages for special pricing."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you will receive a tracking link via email and SMS. You can also track your order status directly from your account dashboard on our website."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We offer a hassle-free 7-day return and exchange policy for unstitched and unused products. Please ensure the original tags and packaging are intact."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, WEAVION ships globally. International shipping charges and delivery times vary based on the destination and order volume."
  },
  {
    question: "Can I request custom fabric weaving or dyeing?",
    answer: "Absolutely. Our manufacturing units are equipped to handle custom weaving and dyeing requests for bulk orders. Please reach out to our Trade Enquiry team to discuss your specific requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }}>

      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Frequently Asked Questions
          </h1>
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg, ${C.primaryLight}, ${C.primary})`, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                key={index}
                style={{
                  background: isOpen ? 'white' : 'white',
                  borderRadius: 0,
                  border: `1px solid ${isOpen ? C.primaryLight : C.border}`,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '24px 22px',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                >
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: isOpen ? 700 : 600, color: C.soil, margin: 0, lineHeight: 1.4, transition: 'all 0.2s ease' }}>
                    {faq.question}
                  </h3>
                  <div style={{
                    flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isOpen ? C.primary : 'rgba(75, 115, 158, 0.06)',
                    transition: 'all 0.3s ease',
                  }}>
                    {isOpen ? <Minus size={15} color="white" /> : <Plus size={15} color={C.primary} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div style={{ padding: '16px 22px 20px', borderTop: `1px solid ${C.border}` }}>
                        <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center', padding: '24px', background: C.sand, borderRadius: 16, border: `1px solid ${C.border}` }}>
          <p style={{ fontSize: 14, color: C.stone, margin: 0, fontWeight: 400 }}>
            Still have questions?{' '}
            <a href="/contact" style={{ color: C.primary, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${C.primaryLight}` }}>
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
