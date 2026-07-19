import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

export default function AboutPage() {
  const { navigateTo } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <header className="px-6 md:px-14 pt-12 md:pt-20">
        <div className="text-[10.5px] font-bold tracking-[0.22em] text-ink-dim uppercase">
          CONNECTING COLLECTORS & LOCAL SELLERS SINCE 2020
        </div>
        <div className="overflow-hidden mt-3.5">
          <h1 className="font-display font-normal text-[56px] md:text-[100px] lg:text-[140px] leading-[0.92] text-ink uppercase">
            For the love of <span className="font-serif italic text-ember capitalize">the pair.</span>
          </h1>
        </div>
      </header>

      {/* Story Section */}
      <section className="px-6 md:px-14 py-14 md:py-24 border-t border-line mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 items-start">
        <div className="sticky top-24 text-[11px] font-bold tracking-[0.22em] text-ink">
          OUR STORY
        </div>
        
        <div className="md:col-span-2">
          <p className="text-[19px] md:text-[26px] leading-normal text-ink text-pretty">
            Founded in 2020, SneakPeak emerged from a simple observation — enthusiasts were struggling to find <em className="font-serif italic text-blue-accent not-italic">authentic pairs</em> from sellers they could trust.
          </p>
          <p className="mt-5 text-sm md:text-base text-ink-2 leading-relaxed max-w-[62ch] text-pretty">
            So we built the bridge: a secure, transparent marketplace that connects buyers with verified local retailers — empowering sneaker lovers and small businesses at once, in a community where authenticity is guaranteed.
          </p>
          
          <div className="mt-8 border-t border-line">
            <div className="flex gap-3.5 items-baseline py-3.5 border-b border-line text-xs md:text-sm">
              <span className="text-ember font-bold">✓</span>
              <span>Every product verified by our authentication team</span>
            </div>
            <div className="flex gap-3.5 items-baseline py-3.5 border-b border-line text-xs md:text-sm">
              <span className="text-ember font-bold">✓</span>
              <span>Support local businesses and the sneaker community</span>
            </div>
            <div className="flex gap-3.5 items-baseline py-3.5 border-b border-line text-xs md:text-sm">
              <span className="text-ember font-bold">✓</span>
              <span>Secure transactions with buyer protection</span>
            </div>
            <div className="flex gap-3.5 items-baseline py-3.5 border-b border-line text-xs md:text-sm">
              <span className="text-ember font-bold">✓</span>
              <span>Transparent seller ratings and reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="bg-dark-section text-[#EDE8DC] px-6 md:px-14 py-12 md:py-20 mt-12 md:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div>
            <div className="font-display text-5xl md:text-[84px] leading-none">10K<span className="text-ember">+</span></div>
            <div className="mt-2 text-[10.5px] font-bold tracking-[0.22em] text-[#EDE8DC]/55 uppercase">VERIFIED PRODUCTS</div>
          </div>
          <div>
            <div className="font-display text-5xl md:text-[84px] leading-none">500<span className="text-ember">+</span></div>
            <div className="mt-2 text-[10.5px] font-bold tracking-[0.22em] text-[#EDE8DC]/55 uppercase">LOCAL SELLERS</div>
          </div>
          <div>
            <div className="font-display text-5xl md:text-[84px] leading-none">50K<span className="text-ember">+</span></div>
            <div className="mt-2 text-[10.5px] font-bold tracking-[0.22em] text-[#EDE8DC]/55 uppercase">HAPPY CUSTOMERS</div>
          </div>
          <div>
            <div className="font-display text-5xl md:text-[84px] leading-none">15<span className="text-ember">+</span></div>
            <div className="mt-2 text-[10.5px] font-bold tracking-[0.22em] text-[#EDE8DC]/55 uppercase">CITIES SERVED</div>
          </div>
        </div>
      </section>


      {/* The Team section */}
      <section className="px-6 md:px-14 py-16 md:py-24">
        <div className="flex justify-between items-end gap-5 flex-wrap">
          <h2 className="font-display font-normal text-4xl md:text-[72px] leading-none uppercase text-ink">
            The Team
          </h2>
          <span className="text-[11px] font-bold tracking-[0.2em] text-ink-dim uppercase mb-2">IDEATED & DEVELOPED BY SAKSHAM LODHA</span>
        </div>

        <div className="flex justify-center mt-8">
          <div className="bg-panel border border-line rounded-[3px] p-6 md:p-9 max-w-md w-full text-center">
            <div className="w-20 h-20 rounded-full bg-ink text-[#F2EEE5] flex items-center justify-center font-display text-3xl tracking-wider mx-auto">
              SL
            </div>
            <h3 className="mt-[18px] font-display font-normal text-3xl uppercase tracking-wide text-ink">Saksham Lodha</h3>
            <div className="text-[10.5px] font-bold tracking-[0.2em] text-ember uppercase mt-2">IDEATOR & LEAD DEVELOPER</div>
            <p className="mt-3.5 text-xs md:text-sm text-ink-2 leading-relaxed">
              Founder, Creator & Lead Developer of SneakPeak. Conceived, designed, and developed the entire marketplace experience, local city-wise sourcing system, and multi-portal platform.
            </p>
          </div>
        </div>
      </section>

      {/* Info points */}
      <section className="px-6 md:px-14 py-8">
        <div className="border-y border-line grid grid-cols-1 md:grid-cols-3">
          <div className="py-6 md:py-9 md:pr-9 border-b md:border-b-0 md:border-r border-line">
            <div className="font-serif italic text-[44px] text-ember leading-none">a.</div>
            <h3 className="mt-3 mb-2 font-display font-normal text-2xl tracking-wide uppercase text-ink">Authenticity</h3>
            <p className="text-sm text-ink-2 leading-relaxed max-w-[36ch]">
              Every product on the platform is 100% authentic — verified by our expert team, no exceptions.
            </p>
          </div>
          <div className="py-6 md:py-9 md:px-9 border-b md:border-b-0 md:border-r border-line">
            <div className="font-serif italic text-[44px] text-ember leading-none">c.</div>
            <h3 className="mt-3 mb-2 font-display font-normal text-2xl tracking-wide uppercase text-ink">Community</h3>
            <p className="text-sm text-ink-2 leading-relaxed max-w-[36ch]">
              We back local sellers and the collectors around them — a trusted circle that grows city by city.
            </p>
          </div>
          <div className="py-6 md:py-9 md:pl-9">
            <div className="font-serif italic text-[44px] text-ember leading-none">t.</div>
            <h3 className="mt-3 mb-2 font-display font-normal text-2xl tracking-wide uppercase text-ink">Transparency</h3>
            <p className="text-sm text-ink-2 leading-relaxed max-w-[36ch]">
              Clear pricing, honest ratings and open communication — at the core of every transaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 md:px-14 py-20 md:py-36 text-center">
        <h2 className="font-display font-normal text-4xl md:text-[104px] leading-[0.95] uppercase text-ink max-w-[14ch] mx-auto">
          Ready to join the <span className="font-serif italic text-ember lowercase">community?</span>
        </h2>
        <button 
          onClick={() => navigateTo('login')}
          className="mt-8 bg-ink hover:bg-blue-accent text-[#F2EEE5] font-bold text-xs tracking-[0.18em] px-8 py-[18px] rounded-full transition-colors font-body"
        >
          SIGN UP NOW
        </button>
      </section>
    </div>
  );
}
