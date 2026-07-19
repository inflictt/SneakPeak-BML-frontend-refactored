import React, { useContext, useMemo } from 'react';
import { AppContext } from '../AppContext';
import { byId, fmt, PRODUCTS } from '../data';

export default function CartPage() {
  const { cartItems, updateCartQty, removeFromCart, navigateTo } = useContext(AppContext);

  // Map cartItems to rich product detail objects
  const richItems = useMemo(() => {
    return cartItems.map((item, idx) => {
      const prod = byId(item.pid);
      return {
        ...item,
        idx,
        product: prod || {
          brand: 'Generic',
          name: 'Sneaker',
          subtitle: 'Original Colorway',
          img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
          originalPrice: item.price + 1000
        }
      };
    });
  }, [cartItems]);

  // Calculations
  const subtotal = useMemo(() => {
    return richItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [richItems]);

  const total = subtotal; // matching the simple subtotal checkout from legacy code

  const totalQty = useMemo(() => {
    return richItems.reduce((sum, item) => sum + item.qty, 0);
  }, [richItems]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-14 py-10 flex flex-col flex-1">
      {/* Head */}
      <div className="text-[10.5px] font-bold tracking-[0.22em] text-ink-dim uppercase">
        YOUR SELECTION — SECURE CHECKOUT
      </div>
      <div className="overflow-hidden mt-3.5 pb-4">
        <h1 className="font-display font-normal text-[52px] md:text-[100px] leading-[0.92] text-ink uppercase">
          The Cart
          <span className="font-serif italic text-ember text-[0.62em] lowercase align-baseline ml-3.5">
            ({totalQty})
          </span>
        </h1>
      </div>

      {/* Cart Content */}
      {richItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
          {/* Items Pane */}
          <div className="lg:col-span-8 border-t border-line">
            {richItems.map((item) => (
              <div 
                key={`${item.pid}-${item.size}-${item.vendor}`}
                className="grid grid-cols-[96px_1fr_auto_auto_auto] gap-4 md:gap-6 items-center py-5 border-b border-line"
              >
                {/* Image */}
                <button
                  onClick={() => navigateTo('product', item.pid)}
                  className="w-24 h-24 rounded-[2px] overflow-hidden bg-bg-2 border border-line flex-shrink-0"
                >
                  <img src={item.product.img} alt={item.product.name} className="w-full h-full object-cover" />
                </button>

                {/* Details */}
                <div className="min-w-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-ink-dim uppercase">
                    {item.product.brand}
                  </div>
                  <button 
                    onClick={() => navigateTo('product', item.pid)}
                    className="block text-left font-display text-[19px] tracking-wide text-ink uppercase mt-1 truncate hover:text-blue-accent transition-colors"
                  >
                    {item.product.name}
                  </button>
                  <div className="text-[11.5px] text-ink-2 mt-1 tracking-wide font-mono uppercase">
                    Size: UK {item.size} · Seller: {item.vendor}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-line-3 rounded-full overflow-hidden">
                  <button 
                    onClick={() => updateCartQty(item.idx, item.qty - 1)}
                    className="w-8 h-8 flex items-center justify-center text-sm font-semibold hover:text-ember transition-colors"
                  >
                    −
                  </button>
                  <span className="min-w-[22px] text-center text-[12.5px] font-bold">
                    {item.qty}
                  </span>
                  <button 
                    onClick={() => updateCartQty(item.idx, item.qty + 1)}
                    className="w-8 h-8 flex items-center justify-center text-sm font-semibold hover:text-blue-accent transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="font-bold text-base md:text-lg text-right min-w-[84px]">
                  {fmt(item.price * item.qty)}
                </div>

                {/* Remove */}
                <button 
                  onClick={() => removeFromCart(item.idx)}
                  className="text-ink/40 hover:text-ember w-8 h-8 text-base transition-colors"
                >
                  ✕
                </button>

              </div>
            ))}

            <button 
              onClick={() => navigateTo('discover')}
              className="inline-block mt-6 text-[11.5px] font-bold tracking-[0.16em] border-b border-ink/35 pb-1 hover:text-blue-accent transition-colors"
            >
              ← CONTINUE BROWSING
            </button>
          </div>

          {/* Sidebar checkout summary */}
          <aside className="lg:col-span-4 bg-[#ECE7DA] border border-line-2 rounded-[3px] p-6 md:p-8 flex flex-col sticky top-24">
            <div className="text-[11px] font-bold tracking-[0.22em] text-ink">
              ORDER SUMMARY
            </div>
            
            <div className="flex justify-between mt-5 text-[13.5px] text-ink-2">
              <span>Subtotal</span>
              <span className="font-semibold text-ink">{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between mt-3 text-[13.5px] text-ink-2">
              <span>Shipping</span>
              <span className="font-bold text-blue-accent text-[11.5px] tracking-[0.12em]">FREE ✦</span>
            </div>

            <div className="h-px bg-line-2 my-4.5"></div>

            <div className="flex justify-between items-baseline">
              <span className="text-[11px] font-bold tracking-[0.2em] text-ink">TOTAL</span>
              <span className="font-display font-normal text-3xl text-ink">{fmt(total)}</span>
            </div>

            <button 
              onClick={() => alert("Proceeding to secure payment checkout!")}
              className="w-full mt-6 bg-ink hover:bg-blue-accent text-[#F2EEE5] font-bold font-body text-xs tracking-[0.2em] py-4.5 rounded-full transition-colors"
            >
              PROCEED TO CHECKOUT
            </button>
            <div className="mt-4.5 text-[10px] tracking-[0.16em] text-ink-dim text-center uppercase font-bold">
              ✓ BUYER PROTECTION ON EVERY ORDER
            </div>
          </aside>

        </div>
      ) : (
        <div className="text-center py-16 md:py-24">
          <div className="relative w-[180px] md:w-[250px] aspect-square rounded-full mx-auto bg-radial from-[#FDFBF6] to-[#EFEAE0] shadow-[0_24px_50px_-22px_rgba(25,19,9,0.28)] flex items-center justify-center border-t border-white mb-8">
            <img 
              src="assets/images/img_palermo_top.png" 
              alt="Puma Palermo top view" 
              className="absolute inset-[12%] w-[76%] h-[76%] object-cover rounded-full mix-blend-multiply"
            />
          </div>
          <h2 className="font-display font-normal text-4xl md:text-[68px] leading-none uppercase text-ink">
            Nothing in the bag <span className="font-serif italic text-ember lowercase">(yet)</span>
          </h2>
          <p className="mt-3.5 text-sm md:text-[14.5px] text-ink-dim max-w-sm mx-auto leading-relaxed">
            Your grail is out there — six verified drops are live right now.
          </p>
          <button 
            onClick={() => navigateTo('discover')}
            className="mt-8 bg-blue-accent hover:bg-ember text-[#F2EEE5] font-bold text-xs tracking-[0.18em] px-8 py-[17px] rounded-full transition-colors"
          >
            BROWSE ALL SNEAKERS
          </button>
        </div>
      )}
    </div>
  );
}
