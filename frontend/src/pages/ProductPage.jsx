import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { byId, PRODUCTS, fmt } from '../data';

export default function ProductPage() {
  const { selectedProductId, navigateTo, addToCart } = useContext(AppContext);
  
  // Find product by active selected ID, default to 1 if not found
  const product = byId(selectedProductId) || PRODUCTS[0];

  const [activeImg, setActiveImg] = useState(product.images ? product.images[0] : product.img);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 8);
  const [selectedVendorIdx, setSelectedVendorIdx] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const selectedVendor = product.vendors ? product.vendors[selectedVendorIdx] : { name: "SneakerHead Delhi", price: product.price, rating: 4.5, verified: true };
  const currentPrice = selectedVendor.price;

  // Handle adding product to bag
  const handleAddToBag = () => {
    addToCart(product.id, selectedSize, selectedVendor.name, currentPrice, 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Find 4 related items (excluding current product)
  const relatedItems = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  // Specs array
  const specs = [
    { k: 'Style code', v: product.details?.style || 'N/A' },
    { k: 'Colorway', v: product.details?.color || product.subtitle },
    { k: 'Material', v: product.details?.material || 'Premium Leather & Suede' },
    { k: 'Fit', v: product.details?.fit || 'Regular (True to Size)' },
    { k: 'Profile', v: product.details?.profile || 'Low Top' }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumbs */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-14 py-6 text-[10.5px] font-bold tracking-[0.2em] text-ink-dim uppercase">
        <button onClick={() => navigateTo('discover')} className="hover:text-blue-accent">SHOP</button>
        <span className="mx-2 text-muted">/</span>
        <span>{product.brand.toUpperCase()}</span>
        <span className="mx-2 text-muted">/</span>
        <span className="text-ink">{product.name.toUpperCase()}</span>
      </div>

      {/* Main product view */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-14 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Gallery */}
        <div className="flex flex-col gap-3">
          <div className="relative aspect-square overflow-hidden rounded-[3px] bg-bg-2 border border-line">
            <img src={activeImg} alt={product.name} className="w-full h-full object-cover" />
            <span className="absolute top-3.5 left-3.5 bg-ember text-[#F2EEE5] text-[10px] font-bold tracking-[0.16em] px-3 py-1.5 rounded-full">
              -{Math.round(((product.originalPrice - currentPrice) / product.originalPrice) * 100)}%
            </span>
            <span className="absolute bottom-3.5 right-3.5 bg-[#F2EEE5]/92 text-ink text-[9.5px] font-bold tracking-[0.18em] px-3 py-1.5 rounded-full">
              ✓ LEGIT-CHECKED
            </span>
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 0 && (
            <div className="flex gap-2.5 overflow-x-auto">
              {product.images.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(imgUrl)}
                  className={`w-16 h-16 md:w-[76px] md:h-[76px] bg-[#E9E4D8] border flex-shrink-0 overflow-hidden rounded-[2px] ${
                    activeImg === imgUrl ? 'border-blue-accent border-2' : 'border-line hover:border-line-3'
                  }`}
                >
                  <img src={imgUrl} alt={`${product.name} thumb ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details & Purchase Form */}
        <div className="flex flex-col">
          <span className="text-[11px] font-bold tracking-[0.24em] text-blue-accent uppercase">
            {product.brand}
          </span>
          <h1 className="font-display font-normal text-4xl lg:text-[72px] leading-[0.95] text-ink uppercase mt-1.5">
            {product.name}
          </h1>
          <div className="font-serif italic text-lg md:text-[19px] text-ink-2 mt-2 leading-relaxed">
            {product.subtitle}
          </div>

          <div className="flex items-baseline gap-3 mt-5">
            <span className="text-[11px] font-bold tracking-[0.2em] text-ink-dim">FROM</span>
            <span className="font-bold text-3xl tracking-tight text-ink">{fmt(currentPrice)}</span>
            <span className="text-sm text-ink-dim line-through">{fmt(product.originalPrice)}</span>
          </div>

          <div className="h-px bg-line my-6"></div>

          {/* Size Selector */}
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline gap-3 text-[11px] font-bold tracking-[0.22em] text-ink mb-3.5 uppercase">
              <span>Select Size</span>
              <span className="text-ink-dim font-normal normal-case tracking-normal">Size guide →</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                   key={size}
                   onClick={() => setSelectedSize(size)}
                   className={`min-w-[64px] py-3 text-center border font-body text-xs font-bold rounded-[2px] transition-all ${
                    selectedSize === size
                      ? 'bg-ink border-ink text-[#F2EEE5]'
                      : 'border-line-3 text-ink hover:border-ink'
                  }`}
                >
                  UK {size}
                </button>
              ))}
            </div>
          </div>

          {/* Vetted Sellers */}
          {product.vendors && product.vendors.length > 0 && (
            <div className="flex flex-col mt-8">
              <div className="text-[11px] font-bold tracking-[0.22em] text-ink mb-3.5 uppercase">
                Verified Sellers
              </div>
              <div className="flex flex-col gap-2.5">
                {product.vendors.map((vendor, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVendorIdx(idx)}
                    className={`text-left grid grid-cols-[1fr_auto] gap-2 p-4 rounded-[2px] border transition-all ${
                      selectedVendorIdx === idx
                        ? 'border-blue-accent bg-blue-accent-soft text-ink'
                        : 'border-line hover:border-blue-accent text-ink-2'
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        {vendor.name}
                        <span className="text-[8px] font-bold tracking-[0.12em] text-blue-accent border border-blue-accent/40 px-2 py-0.5 rounded-full uppercase">
                          ✓ VERIFIED
                        </span>
                      </div>
                      <span className="text-[11.5px] text-ink-dim tracking-[0.08em] mt-1">★ {vendor.rating} SELLER RATING</span>
                    </div>
                    <span className="font-bold text-[17px] self-center">{fmt(vendor.price)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 mt-8">
            <button 
              onClick={() => alert("Mock saved to favorites!")}
              className="w-[54px] h-[54px] border border-line-3 rounded-[2px] hover:border-ember flex items-center justify-center text-lg"
            >
              ♡
            </button>
            <button 
              onClick={handleAddToBag}
              className="flex-1 bg-blue-accent hover:bg-ember text-[#F2EEE5] font-bold font-body text-[12.5px] tracking-[0.2em] py-4 rounded-[2px] transition-colors"
            >
              ADD TO BAG — {fmt(currentPrice)}
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4 text-[11px] tracking-[0.14em] text-ink-dim font-bold uppercase">
            <span>✓ FREE SHIPPING</span>
            <span>✓ FREE RETURNS</span>
            <span>✓ BUYER PROTECTION</span>
          </div>

          <div className="h-px bg-line my-7"></div>

          {/* Details & Specs */}
          <div className="text-[11px] font-bold tracking-[0.22em] text-ink mb-3.5 uppercase">
            The Details
          </div>
          <p className="text-sm md:text-[14.5px] leading-relaxed text-ink-2 mb-6 text-pretty">
            {product.description}
          </p>

          <div className="flex flex-col border-t border-line">
            {specs.map((spec, i) => (
              <div key={i} className="grid grid-cols-[150px_1fr] py-3.5 border-b border-line text-[12.5px]">
                <span className="font-bold text-[10.5px] tracking-[0.14em] text-ink-dim uppercase pt-0.5">{spec.k}</span>
                <span className="text-ink-2">{spec.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-14 py-16 border-t border-line mt-10">
        <div className="flex justify-between items-end gap-5 flex-wrap mb-8">
          <h2 className="font-display font-normal text-3xl md:text-[52px] leading-none uppercase text-ink">
            You may also like
            <span className="font-serif italic text-ember text-[0.5em] align-super ml-2">/next</span>
          </h2>
          <button 
            onClick={() => navigateTo('discover')}
            className="text-xs font-semibold tracking-[0.16em] border-b border-ink/35 pb-1 hover:text-blue-accent transition-colors"
          >
            VIEW ALL →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigateTo('product', item.id);
                setActiveImg(item.images ? item.images[0] : item.img);
                setSelectedSize(item.sizes ? item.sizes[0] : 8);
                setSelectedVendorIdx(0);
              }}
              className="bg-panel border border-line rounded-[3px] p-3 cursor-pointer hover:border-blue-accent group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] bg-bg-2">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,0.68,0.3,1)] group-hover:scale-106" />
              </div>
              <div className="flex justify-between items-baseline gap-2.5 mt-3">
                <span className="font-display font-normal text-sm uppercase tracking-wide truncate group-hover:text-blue-accent transition-colors">{item.name}</span>
                <span className="font-bold text-xs">{fmt(item.price)}</span>
              </div>
              <span className="block text-[10px] tracking-[0.16em] text-ink-dim mt-1 uppercase font-bold">{item.brand}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed left-1/2 bottom-7 -translate-x-1/2 z-50 bg-ink text-[#F2EEE5] rounded-full px-6 py-3.5 flex items-center gap-4 text-[11.5px] font-bold tracking-[0.16em] shadow-lg animate-bounce">
          <span>ADDED TO CART ✦</span>
          <button 
            onClick={() => navigateTo('cart')}
            className="text-[#F2EEE5] border-b border-[#F2EEE5]/50 pb-0.5 hover:text-ember transition-colors"
          >
            VIEW CART →
          </button>
        </div>
      )}
    </div>
  );
}
