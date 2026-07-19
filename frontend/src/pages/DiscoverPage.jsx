import React, { useContext, useMemo } from 'react';
import { AppContext } from '../AppContext';
import { PRODUCTS, fmt } from '../data';

export default function DiscoverPage() {
  const {
    navigateTo,
    searchQuery,
    setSearchQuery,
    selectedBrandFilter,
    setSelectedBrandFilter,
    selectedCity,
    setSelectedCity,
  } = useContext(AppContext);

  const brands = ['All', 'Nike', 'Adidas Originals', 'Puma', 'New Balance', 'Asics', 'Reebok'];

  // Perform dynamic filtering of products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Brand filter
      if (selectedBrandFilter !== 'All' && product.brand !== selectedBrandFilter) {
        return false;
      }
      
      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesSubtitle = product.subtitle.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesSubtitle) {
          return false;
        }
      }

      // City filter
      if (selectedCity !== 'All') {
        const hasCitySeller = product.vendors.some(v => v.city.toLowerCase() === selectedCity.toLowerCase());
        if (!hasCitySeller) return false;
      }

      return true;
    });
  }, [selectedBrandFilter, searchQuery, selectedCity]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-14 py-10 flex flex-col">
      {/* Header */}
      <header className="pt-8 pb-4">
        <div className="text-[10.5px] font-bold tracking-[0.22em] text-ink-dim uppercase">
          THE CATALOG — EVERY PAIR VERIFIED
        </div>
        <h1 className="font-display font-normal text-[56px] md:text-[90px] lg:text-[110px] leading-[0.92] text-ink uppercase mt-3.5 mb-8">
          All Sneakers
          <span className="font-serif italic text-ember text-[0.62em] lowercase align-baseline ml-3.5">
            ({filteredProducts.length})
          </span>
        </h1>

        {/* Toolbar & Search */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-line pb-5">
          {/* Brand Buttons */}
          <div className="flex flex-wrap gap-2.5">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrandFilter(brand)}
                className={`text-[10.5px] font-bold tracking-[0.16em] px-4.5 py-3 rounded-full border transition-all ${
                  selectedBrandFilter === brand 
                    ? 'bg-ink border-ink text-[#F2EEE5]' 
                    : 'border-line-3 text-ink hover:border-ink'
                }`}
              >
                {brand === 'All' ? 'ALL SNEAKERS' : brand.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-2.5 w-full md:w-80 border-b border-line-3 pb-2 self-stretch md:self-end">
            <span className="text-sm font-semibold">⌕</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH THE CATALOG"
              className="bg-transparent border-0 outline-none font-bold text-xs tracking-[0.14em] text-ink w-full placeholder:text-ink/40"
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product, idx) => (
              <div 
                key={product.id}
                onClick={() => navigateTo('product', product.id)}
                className="bg-panel border border-line rounded-[3px] flex flex-col cursor-pointer hover:border-blue-accent group"
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
                  <span className="absolute top-2.5 left-2.5 bg-ember text-[#F2EEE5] text-[9.5px] font-bold tracking-[0.14em] px-2.5 py-1.5 rounded-full">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
                <div className="p-[18px] mt-auto">
                  <div className="font-display font-normal text-2xl text-ink uppercase tracking-wide">
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
        ) : (
          <div className="text-center py-20">
            <h2 className="font-display font-normal text-4xl md:text-6xl text-ink uppercase leading-none">
              Nothing in the vault
            </h2>
            <p className="mt-3.5 text-sm text-ink-dim max-w-sm mx-auto leading-relaxed">
              No pairs match <span className="font-serif italic text-ember">“{searchQuery}”</span> — try another brand or spelling.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedBrandFilter('All'); }}
              className="mt-8 bg-ink hover:bg-blue-accent text-[#F2EEE5] font-bold text-xs tracking-[0.18em] px-7 py-4.5 rounded-full transition-colors"
            >
              RESET FILTERS
            </button>
          </div>
        )}

        {/* Drop Alerts Banner */}
        <div className="mt-16 bg-[#ECE7DA] border border-line-2 rounded-[3px] grid grid-cols-1 md:grid-cols-12 items-center gap-5 p-6 md:p-9">
          <div className="md:col-span-8">
            <h3 className="font-display font-normal text-2xl md:text-3xl text-ink uppercase leading-none">
              Can’t find your grail?
            </h3>
            <p className="mt-2 text-xs md:text-sm text-ink-2 max-w-xl">
              New pairs land every week from sellers across 15+ cities. Tell us what you’re hunting and we’ll ping you on the drop.
            </p>
          </div>
          <button 
            onClick={() => navigateTo('login')}
            className="md:col-span-4 justify-self-end bg-blue-accent hover:bg-ember text-[#F2EEE5] font-bold text-xs tracking-[0.18em] px-6 py-4 rounded-full transition-colors whitespace-nowrap font-body"
          >
            GET DROP ALERTS
          </button>
        </div>
      </main>
    </div>
  );
}
