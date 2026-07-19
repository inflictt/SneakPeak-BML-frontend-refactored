import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { PRODUCTS, fmt } from '../data';

export default function CulturePage() {
  const { navigateTo } = useContext(AppContext);

  // Take first 4 products for Trending Now
  const trendingNow = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <header className="px-6 md:px-14 pt-12 md:pt-20 text-center">
        <div className="inline-block bg-[#FF4A0E] text-[#F2EEE5] text-[9.5px] font-bold tracking-[0.2em] px-3.5 py-1.5 rounded-full">
          THE JOURNAL — ISSUE 01
        </div>
        <div className="overflow-hidden mt-4.5 mx-auto max-w-4xl">
          <h1 className="font-display font-normal text-[40px] md:text-[84px] lg:text-[96px] leading-[0.98] text-ink uppercase text-pretty">
            Why the best pairs never leave <span className="font-serif italic text-ember capitalize">the city.</span>
          </h1>
        </div>
        <div className="flex justify-center gap-6 flex-wrap mt-6 text-[10.5px] font-bold tracking-[0.2em] text-ink-dim uppercase">
          <span>JULY 2026</span>
          <span>·</span>
          <span>6 MIN READ</span>
          <span>·</span>
          <span>WORDS — THE SNEAKPEAK JOURNAL</span>
        </div>
      </header>

      {/* Main Banner */}
      <section className="mt-10 md:mt-14 px-6 md:px-14">
        <div className="relative h-[320px] md:h-[500px] lg:h-[620px] overflow-hidden rounded-[6px]">
          <img 
            src="assets/images/lifestyle_shoe_wall.jpg" 
            alt="Wall of collected sneakers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/32 to-transparent"></div>
          <span className="absolute left-6 bottom-6 bg-[#F2EEE5]/92 text-ink text-[10px] font-semibold tracking-[0.2em] px-3.5 py-2.5 rounded-full">
            A COLLECTOR’S WALL, MUMBAI
          </span>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-[720px] mx-auto mt-10 md:mt-16 px-6">
        <p className="text-lg md:text-[19.5px] leading-relaxed text-ink-2 text-pretty">
          <span className="font-serif italic text-[2.6em] leading-[0.8] text-ember float-left pt-2 pr-2.5">A</span>
          sk any collector where their best pair came from and you will rarely hear a warehouse. You will hear a name — a seller in Lajpat Nagar, a store above a café in Bandra, a friend of a friend in Gurugram who always seems to have your size.
        </p>
        <p className="mt-6 text-lg md:text-[19.5px] leading-relaxed text-ink-2 text-pretty">
          That is the quiet truth of sneaker culture here: it has always been local. Long before global checkout pages, pairs moved through trusted hands — checked, compared, haggled over, and passed on with a story attached. The story was the receipt.
        </p>

        {/* Quote Block */}
        <div className="my-10 md:my-14 py-6 border-y border-line text-center">
          <div className="font-serif italic text-2xl md:text-[34px] leading-normal text-ember text-pretty">
            “A grail isn’t just found. It’s vouched for.”
          </div>
        </div>

        <p className="text-lg md:text-[19.5px] leading-relaxed text-ink-2 text-pretty">
          SneakPeak was built around that habit, not against it. Every seller on the platform is verified in person, every listing is legit-checked, and every price sits next to its rivals — so the comparison that used to take a weekend of DMs now takes a scroll.
        </p>

        {/* Side-by-Side Images */}
        <div className="grid grid-cols-2 gap-3.5 my-10 md:my-14">
          <div className="aspect-[4/5] overflow-hidden rounded-[4px] bg-bg-2">
            <img src="assets/images/lifestyle_puma_feet.jpg" alt="Puma Speedcat worn on blue carpet" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-[4px] bg-bg-2">
            <img src="assets/images/lifestyle_nb_trio.jpg" alt="Three New Balance 9060 colourways" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="text-lg md:text-[19.5px] leading-relaxed text-ink-2 text-pretty">
          The result is a marketplace that behaves like the community it serves: transparent about condition, honest about price, and loyal to the cities it lives in. The warehouse never knew your name. Your local seller does.
        </p>

        <div className="mt-10 md:mt-12 flex justify-between items-center gap-4 flex-wrap border-t border-line pt-6">
          <span className="text-[10.5px] font-bold tracking-[0.2em] text-ink-dim uppercase">CURATED BY SAKSHAM LODHA</span>
          <button 
            onClick={() => navigateTo('discover')}
            className="text-xs font-bold tracking-[0.16em] border-b border-ink/35 pb-1 hover:text-blue-accent transition-colors"
          >
            BROWSE THE PAIRS YOUR CITY IS HOLDING →
          </button>
        </div>
      </article>

      {/* Trending Now */}
      <section className="px-6 md:px-14 py-16 md:py-24 border-t border-line mt-16 md:mt-24">
        <div className="flex justify-between items-end gap-5 flex-wrap mb-8">
          <h2 className="font-display font-normal text-3xl md:text-[64px] leading-none uppercase text-ink">
            Trending Now
          </h2>
          <button 
            onClick={() => navigateTo('discover')}
            className="text-xs font-semibold tracking-[0.16em] border-b border-ink/35 pb-1 hover:text-blue-accent transition-colors mb-1.5"
          >
            VIEW ALL →
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          {trendingNow.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateTo('product', item.id)}
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
    </div>
  );
}
