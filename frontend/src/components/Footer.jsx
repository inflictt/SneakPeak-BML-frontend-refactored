import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

export default function Footer() {
  const { navigateTo } = useContext(AppContext);

  return (
    <footer className="bg-dark-section text-[#EDE8DC] px-6 md:px-14 pt-16 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Brand */}
        <div className="md:col-span-2">
          <button 
            onClick={() => navigateTo('landing')} 
            className="font-display text-2xl tracking-wider text-[#EDE8DC] uppercase"
          >
            SNEAKPEAK<span className="text-[11px] align-super">®</span>
          </button>
          <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#EDE8DC]/60 max-w-[30ch]">
            The local marketplace for authentic sneakers. Built by collectors, for collectors.
          </p>
        </div>

        {/* Shop Column */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] font-bold tracking-[0.24em] text-[#EDE8DC]/45">
            SHOP
          </div>
          <button onClick={() => navigateTo('discover')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            All sneakers
          </button>
          <button onClick={() => navigateTo('landing')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            New arrivals
          </button>
          <button onClick={() => navigateTo('discover')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            Brands
          </button>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] font-bold tracking-[0.24em] text-[#EDE8DC]/45">
            COMPANY
          </div>
          <button onClick={() => navigateTo('discover')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            Discover
          </button>
          <button onClick={() => navigateTo('about')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            About us
          </button>
          <button onClick={() => navigateTo('about')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            Sell with us
          </button>
        </div>

        {/* Account Column */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] font-bold tracking-[0.24em] text-[#EDE8DC]/45">
            ACCOUNT
          </div>
          <button onClick={() => navigateTo('login')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            Log in
          </button>
          <button onClick={() => navigateTo('login')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            Create account
          </button>
          <button onClick={() => navigateTo('cart')} className="text-left text-[13.5px] text-[#EDE8DC] hover:text-ember transition-colors">
            Cart
          </button>
        </div>

      </div>

      {/* Large Outline Text */}
      <div className="mt-14 overflow-hidden select-none">
        <div className="font-display text-[72px] md:text-[160px] lg:text-[200px] leading-[0.92] tracking-wider text-transparent [-webkit-text-stroke:1px_rgba(237,232,220,0.26)] text-center uppercase">
          SNEAKPEAK®
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between gap-3 text-[10.5px] tracking-[0.18em] text-[#EDE8DC]/50">
        <span>© 2026 SNEAKPEAK</span>
        <span>A PROJECT BY SAKSHAM LODHA</span>
        <span>100% AUTHENTIC ✦ ALWAYS</span>
      </div>
    </footer>
  );
}
