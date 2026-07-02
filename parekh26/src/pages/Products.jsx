import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter } from 'lucide-react';

const C = {
  primary: '#7c8e76',
  primaryLight: '#a3b89d',
  accent: '#d57e65',
  soil: '#2b1f15',
  sand: '#f2ebe1',
  cream: '#faf8f5',
  border: '#eae2d3',
  stone: '#5a4d41',
};

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  { id: 101, name: "Classic Banarasi Silk Saree", category: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60" },
  { id: 102, name: "Super-Stretch Cotton Leggings", category: "Leggings", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=60" },
  { id: 103, name: "Handcrafted Chikankari Kurti", category: "Kurtis", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60" },
  { id: 104, name: "Anarkali Embroidered Dress Suit", category: "Dress Suits", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60" },
  { id: 105, name: "Luxurious Egyptian Cotton Bedsheet", category: "Bedsheets & Linen", image: "https://images.pexels.com/photos/7746574/pexels-photo-7746574.jpeg" },
  { id: 106, name: "Soft Premium Cotton Hosiery Set", category: "Hosiery Items", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60" },
  { id: 107, name: "Italian Wool Blend Suiting Fabric", category: "Suiting", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60" },
  { id: 108, name: "Fine Egyptian Giza Cotton Shirting", category: "Shirting", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60" },
  { id: 109, name: "Designer Georgette Lehenga Choli", category: "Formal & Ethnic Wear for Women", image: "https://images.pexels.com/photos/16803130/pexels-photo-16803130.jpeg" },
  { id: 110, name: "Premium Silk Sherwani Set", category: "Formal & Ethnic Wear for Men", image: "https://images.unsplash.com/photo-1724856604249-ca73680262e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jvb20lMjBkcmVzc3xlbnwwfDB8MHx8fDA%3D" },
  { id: 111, name: "Kid's Festive Cotton Dhoti Kurta", category: "Formal & Ethnic Wear for Children", image: "https://images.unsplash.com/photo-1741992556912-3b2d62461e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWxkcmVucyUyMGNsb3RoZXN8ZW58MHwwfDB8fHww" },
  { id: 112, name: "Premium Velvet Upholstery Fabric", category: "Home Upholstery & Furnishing", image: "https://images.pexels.com/photos/35009336/pexels-photo-35009336.jpeg" },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") setSearchParams({});
    else setSearchParams({ category: cat });
  };

  const filteredProducts = allProducts.filter(p => {
    return activeCategory === "All" || p.category === activeCategory;
  });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }}>

      

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-24 lg:pt-32 pb-16 lg:pb-24">

        {/* Page Title Section */}
        <div className="text-center mb-10 lg:mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 500, color: C.soil, margin: '0 0 12px' }}>
            Explore Our Collection
          </h1>
          <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #a3b89d, #7c8e76)', borderRadius: 2, margin: '0 auto' }} />
        </div>
  

        {/* Categories row */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {['All', ...categories].map(cat => (
              <button 
                key={cat} 
                onClick={() => handleCategoryChange(cat)}
                style={{ 
                  padding: '6px 16px', borderRadius: 20, 
                  background: cat === activeCategory ? C.primary : 'transparent', 
                  color: cat === activeCategory ? 'white' : C.primary, 
                  border: `1px solid ${C.primary}`, 
                  fontSize: 12, cursor: 'pointer', transition: 'all 0.2s ease' 
                }}
              >
                {cat === 'All' ? 'All Products' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count row */}
        <div className="flex items-center justify-end gap-4 mb-8">
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', borderRadius: 20,
            background: 'white', border: `1px solid ${C.border}`,
          }}>
            <ShoppingBag size={14} color={C.primary} />
            <span style={{ fontSize: 12, color: C.stone, fontWeight: 400 }}>
              {filteredProducts.length} Products
            </span>
          </div>
        </div>


        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.04, 0.3) }}
                className="card-hover"
                style={{
                  borderRadius: 16, overflow: 'hidden',
                  background: 'white',
                  border: `1px solid ${C.border}`,
                }}
              >
                <div className="h-36 sm:h-60 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="p-3 sm:p-4" style={{ borderTop: `1px solid ${C.border}` }}>
                  <span className="truncate" style={{
                    fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.18em',
                    color: C.primary, fontWeight: 400, display: 'block', marginBottom: 6,
                  }}>
                    {product.category}
                  </span>
                  <h3 className="line-clamp-2" style={{ fontSize: 13, fontWeight: 500, color: C.soil, margin: '0 0 10px', lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                  <button
                    style={{
                      width: '100%', padding: '7px 10px',
                      borderRadius: 8, fontSize: 11, fontWeight: 500,
                      cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                      border: `1.5px solid ${C.border}`,
                      background: 'transparent', color: C.stone,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.soil; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.soil; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.stone; e.currentTarget.style.borderColor = C.border; }}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center', padding: '80px 24px',
            borderRadius: 20, background: 'white',
            border: `1px solid ${C.border}`,
          }}>
            <Filter size={44} style={{ margin: '0 auto 16px', color: C.primaryLight, display: 'block', opacity: 0.6 }} />
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: C.soil, marginBottom: 20 }}>
              No products found for "{activeCategory}"
            </p>
            <button
              onClick={() => handleCategoryChange('All')}
              style={{
                padding: '11px 24px', borderRadius: 12,
                background: C.primary, color: 'white',
                border: 'none', fontSize: 13, fontWeight: 400,
                cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.accent}
              onMouseLeave={e => e.currentTarget.style.background = C.primary}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
