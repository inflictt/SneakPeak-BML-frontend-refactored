import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { PRODUCTS, fmt } from '../data';

export default function LandingPage() {
  const { navigateTo } = useContext(AppContext);

  // Take first 3 products for featured drops
  const featuredDrops = PRODUCTS.slice(0, 3);

  // Labeled list of brands with custom backgrounds
  const brands = [
    { name: 'Adidas', tag: '№ 01', img: 'assets/images/img_rectangle_23.png', logo: 'assets/images/img_rectangle_25.png', label: 'SHOP ADIDAS →' },
    { name: 'Nike', tag: '№ 02', img: 'assets/images/img_rectangle_23_500x320.png', logo: 'assets/images/img_rectangle_25_108x102.png', label: 'SHOP NIKE →' },
    { name: 'Puma', tag: '№ 03', img: 'assets/images/img_rectangle_23_1.png', logo: 'assets/images/img_rectangle_25_1.png', label: 'SHOP PUMA →' },
    { name: 'New Balance', tag: '№ 04', img: 'assets/images/img_rectangle_23_2.png', logo: 'assets/images/img_rectangle_25_2.png', label: 'SHOP NEW BALANCE →' },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Header */}
      <header className="px-6 md:px-14 pt-8 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mt-6 md:mt-10">
          <h1 className="lg:col-span-8 font-display font-normal text-[48px] md:text-[80px] lg:text-[106px] leading-[0.95] tracking-normal uppercase text-ink">
            <div className="flex flex-wrap items-center gap-x-3.5 md:gap-x-5 gap-y-2 whitespace-nowrap">
              <span>GRAILS,</span>
              <span className="inline-flex items-center justify-center bg-white border border-line-2 rounded-full h-[0.72em] aspect-[2/1] overflow-hidden align-middle mx-1 md:mx-2 shadow-[0_3px_12px_rgba(25,19,9,0.08)]">
                <img 
                  src="assets/images/img_palermo_side.png" 
                  alt="Puma Palermo inline" 
                  className="h-[145%] max-h-[145%] object-contain -rotate-[12deg] transform translate-y-1.5 scale-[1.22] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
                />
              </span>
              <span>SOURCED</span>
            </div>
            <div className="font-serif italic text-ember capitalize text-[0.94em] mt-1 md:mt-2">
              locally.
            </div>
          </h1>
          <div className="lg:col-span-4 pb-4">
            <p className="text-base md:text-[16.5px] text-ink-2 leading-relaxed max-w-[38ch] mb-8 text-pretty">
              Find your grail from hundreds of verified local sellers — compare sizes, prices and ratings, all in one place.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={() => navigateTo('discover')} 
                className="bg-blue-accent hover:bg-ember text-bg font-bold text-xs tracking-[0.18em] px-8 py-4.5 rounded-full transition-colors font-body"
              >
                BROWSE ALL SNEAKERS
              </button>
              <a 
                href="#how" 
                className="text-xs font-semibold tracking-[0.16em] border-b border-ink/35 pb-1 hover:text-blue-accent transition-colors"
              >
                HOW IT WORKS ↓
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image section */}
      <section className="mt-10 md:mt-14 px-6 md:px-14">
        <div className="relative h-[340px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-sm">
          <img 
            src="assets/images/img_rectangle_10.png" 
            alt="Air Jordan 1 Turbo Green on teal fabric" 
            className="absolute -inset-y-[9%] inset-x-0 w-full h-[118%] object-cover scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          <div className="absolute left-4 md:left-7 bottom-4 md:bottom-7 flex flex-wrap gap-2.5">
            <span className="bg-[#F2EEE5]/92 text-ink text-[10px] font-semibold tracking-[0.2em] px-3.5 py-2.5 rounded-full">
              IN FRAME — AIR JORDAN 1 «TURBO GREEN»
            </span>
            <span className="bg-black/55 text-[#F2EEE5] text-[10px] font-semibold tracking-[0.2em] px-3.5 py-2.5 rounded-full border border-[#F2EEE5]/30">
              SOLD BY 12 LOCAL SELLERS
            </span>
          </div>
          <span className="absolute right-4 md:right-7 bottom-4 md:bottom-7 text-[#F2EEE5] text-[10px] font-semibold tracking-[0.24em]">
            SCROLL ↓
          </span>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="px-6 md:px-14 pt-16 md:pt-24">
        <div className="flex justify-between items-end gap-5 flex-wrap">
          <h2 className="font-display font-normal text-4xl md:text-6xl lg:text-[78px] leading-none uppercase text-ink">
            New Arrivals
          </h2>
          <button 
            onClick={() => navigateTo('discover')}
            className="text-xs font-semibold tracking-[0.16em] border-b border-ink/35 pb-1 mb-2 hover:text-blue-accent transition-colors"
          >
            VIEW ALL →
          </button>
        </div>
        <div className="h-px bg-line mt-6 mb-8"></div>

        {/* Scrollable grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {featuredDrops.map((product, idx) => (
            <div 
              key={product.id}
              onClick={() => navigateTo('product', product.id)}
              className="flex-shrink-0 w-[280px] md:w-[350px] bg-panel border border-line rounded-[3px] flex flex-col cursor-pointer hover:border-blue-accent group"
            >
              <div className="flex justify-between px-[18px] py-4 text-[10px] font-bold tracking-[0.2em] text-ink-dim uppercase">
                <span>{product.brand}</span>
              </div>
              <div className="relative aspect-square overflow-hidden mx-[18px] rounded-[2px] bg-bg-2">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,0.68,0.3,1)] group-hover:scale-106"
                />
                {product.hoverImg && (
                  <img 
                    src={product.hoverImg} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100"
                  />
                )}
                <span className="absolute top-2.5 left-2.5 bg-ember text-[#F2EEE5] text-[9.5px] font-bold tracking-[0.14em] px-2.5 py-1.5 rounded-full">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>
              <div className="p-[18px] mt-auto">
                <div className="font-display font-normal text-xl md:text-2xl text-ink uppercase tracking-wide">
                  {product.name}
                </div>
                <div className="text-xs text-ink-dim mt-1 truncate">
                  {product.subtitle}
                </div>
                <div className="flex justify-between items-baseline gap-2.5 mt-4 border-t border-line pt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-base">{fmt(product.price)}</span>
                    <span className="text-xs text-muted line-through">{fmt(product.originalPrice)}</span>
                  </div>
                  <span className="font-mono text-base translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[400ms]">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mt-20 md:mt-32 bg-bg-2 border-y border-line px-6 md:px-14 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
          <div className="sm:col-span-3 font-serif italic text-ember text-[100px] md:text-[230px] leading-[0.8] font-normal">
            3
          </div>
          <div className="sm:col-span-9 pt-2 md:pt-[26px]">
            <h2 className="font-display font-normal text-4xl md:text-[76px] leading-none uppercase text-ink">
              Steps to your pair
            </h2>
            <p className="mt-4 text-base md:text-[15.5px] text-ink-2 leading-relaxed max-w-[46ch] text-pretty">
              From search to doorstep - every listing verified, every seller rated, every order protected.
            </p>
          </div>
        </div>

        {/* Steps info */}
        <div className="flex flex-col gap-14 md:gap-24 mt-14 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 items-center">
            <div className="justify-self-center relative w-[210px] md:w-[330px] aspect-square rounded-full bg-radial from-[#FDFBF6] to-[#EFEAE0] shadow-[0_24px_50px_-22px_rgba(25,19,9,0.28)] border-t border-white">
              <img 
                src="assets/images/img_palermo_top.png" 
                alt="Palermo top view" 
                className="absolute inset-[12%] w-[76%] h-[76%] object-cover rounded-full mix-blend-multiply animate-[floaty_7s_ease-in-out_infinite]"
              />
            </div>
            <div>
              <div className="font-serif italic text-ember text-4xl md:text-[68px] leading-none font-normal">1</div>
              <h3 className="mt-3.5 mb-1 font-display font-normal text-2xl md:text-4xl tracking-wide uppercase text-ink">Search</h3>
              <div className="text-[10.5px] font-bold tracking-[0.22em] text-ink-dim uppercase">FIND THE PAIR</div>
              <p className="mt-4 text-sm md:text-base text-ink-2 leading-relaxed max-w-[44ch] text-pretty">
                Browse every verified drop in one place - filter by brand, size or city, and shortlist the grail you have been hunting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="font-serif italic text-ember text-4xl md:text-[68px] leading-none font-normal">2</div>
              <h3 className="mt-3.5 mb-1 font-display font-normal text-2xl md:text-4xl tracking-wide uppercase text-ink">Compare</h3>
              <div className="text-[10.5px] font-bold tracking-[0.22em] text-ink-dim uppercase">PICK YOUR SELLER</div>
              <p className="mt-4 text-sm md:text-base text-ink-2 leading-relaxed max-w-[44ch] text-pretty">
                See every local seller carrying your size: live prices, honest ratings and verification badges, side by side.
              </p>
            </div>
            <div className="order-1 md:order-2 justify-self-center relative w-[210px] md:w-[330px] aspect-square rounded-full bg-radial from-[#FDFBF6] to-[#EFEAE0] shadow-[0_24px_50px_-22px_rgba(25,19,9,0.28)] border-t border-white">
              <img 
                src="assets/images/img_palermo_rear_394x394.png" 
                alt="Palermo rear view" 
                className="absolute inset-[12%] w-[76%] h-[76%] object-cover rounded-full mix-blend-multiply animate-[floaty_8s_ease-in-out_0.6s_infinite]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 items-center">
            <div className="justify-self-center relative w-[210px] md:w-[330px] aspect-square rounded-full bg-radial from-[#FDFBF6] to-[#EFEAE0] shadow-[0_24px_50px_-22px_rgba(25,19,9,0.28)] border-t border-white">
              <img 
                src="assets/images/img_palermo_side.png" 
                alt="Palermo side view" 
                className="absolute inset-[12%] w-[76%] h-[76%] object-cover rounded-full mix-blend-multiply animate-[floaty_7.5s_ease-in-out_1.1s_infinite]"
              />
            </div>
            <div>
              <div className="font-serif italic text-ember text-4xl md:text-[68px] leading-none font-normal">3</div>
              <h3 className="mt-3.5 mb-1 font-display font-normal text-2xl md:text-4xl tracking-wide uppercase text-ink">Cop</h3>
              <div className="text-[10.5px] font-bold tracking-[0.22em] text-ink-dim uppercase">SECURE CHECKOUT</div>
              <p className="mt-4 text-sm md:text-base text-ink-2 leading-relaxed max-w-[44ch] text-pretty">
                Check out with buyer protection on every order. Your money moves only when your pair does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands section */}
      <section className="px-6 md:px-14 pt-16 md:pt-24">
        <div className="flex justify-between items-end gap-5 flex-wrap">
          <h2 className="font-display font-normal text-4xl md:text-[78px] leading-none uppercase text-ink">
            The Brands
          </h2>
          <span className="text-[11px] font-bold tracking-[0.2em] text-ink-dim uppercase mb-2">FOUR OF MANY</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-8">
          {brands.map((brand, i) => (
            <div 
              key={i}
              onClick={() => navigateTo('discover')}
              className="relative h-[300px] md:h-[440px] overflow-hidden rounded-[3px] cursor-pointer group"
            >
              <img 
                src={brand.img} 
                alt={brand.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,0.68,0.3,1)] group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] max-w-[110px] filter drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
              />
              <span className="absolute left-4 bottom-4 text-[#F2EEE5] text-[10.5px] font-bold tracking-[0.2em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {brand.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Info points */}
      <section className="mx-6 md:mx-14 mt-20 md:mt-32 border-y border-line">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-6 md:p-9 border-b md:border-b-0 md:border-r border-line">
            <div className="text-[11px] font-bold tracking-[0.2em] text-ember">(01)</div>
            <h3 className="mt-3.5 mb-2 font-display font-normal text-2xl tracking-wide uppercase text-ink">100% Authentic</h3>
            <p className="text-sm text-ink-2 leading-relaxed max-w-[36ch]">
              Every pair passes our in-house legit check before it ever reaches your feet.
            </p>
          </div>
          <div className="p-6 md:p-9 border-b md:border-b-0 md:border-r border-line">
            <div className="text-[11px] font-bold tracking-[0.2em] text-ember">(02)</div>
            <h3 className="mt-3.5 mb-2 font-display font-normal text-2xl tracking-wide uppercase text-ink">Direct from Local</h3>
            <p className="text-sm text-ink-2 leading-relaxed max-w-[36ch]">
              Compare prices and ratings from verified sellers in your city — no imports, no waiting.
            </p>
          </div>
          <div className="p-6 md:p-9">
            <div className="text-[11px] font-bold tracking-[0.2em] text-ember">(03)</div>
            <h3 className="mt-3.5 mb-2 font-display font-normal text-2xl tracking-wide uppercase text-ink">Secure Checkout</h3>
            <p className="text-sm text-ink-2 leading-relaxed max-w-[36ch]">
              Buyer protection on every order — your money moves only when your pair does.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 md:px-14 py-20 md:py-36 text-center">
        <div className="text-[11px] font-bold tracking-[0.24em] text-ink-dim uppercase">
          JOIN 50,000+ COLLECTORS
        </div>
        <h2 className="mt-5 mx-auto font-display font-normal text-[50px] md:text-[104px] leading-[0.95] uppercase max-w-[14ch] text-ink">
          Ready to find your <span className="font-serif italic text-ember lowercase">grails?</span>
        </h2>
        <div className="mt-10 flex flex-col items-center gap-4">
          <button 
            onClick={() => navigateTo('login')}
            className="bg-ink hover:bg-blue-accent text-[#F2EEE5] font-bold text-xs tracking-[0.18em] px-8 py-[18px] rounded-full transition-colors font-body"
          >
            CREATE AN ACCOUNT
          </button>
          <span className="text-[11.5px] tracking-[0.14em] text-ink-dim">
            FREE TO JOIN · BUYER PROTECTION ON EVERY ORDER
          </span>
        </div>
      </section>
    </div>
  );
}
