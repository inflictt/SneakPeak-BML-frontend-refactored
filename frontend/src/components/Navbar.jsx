import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

export default function Navbar() {
  const { page, navigateTo, cartItems, user, logoutUser, theme, toggleTheme, selectedCity, setSelectedCity } = useContext(AppContext);
  
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="sticky top-0 z-50 bg-bg/88 backdrop-blur-md border-b border-line">
      <div className="grid grid-cols-3 align-middle items-center h-[66px] px-6 md:px-14 gap-5">
        
        {/* Logo & City Selector */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigateTo('landing')} 
            className="text-left font-display text-lg tracking-wider text-ink uppercase"
          >
            SNEAKPEAK<span className="text-[10px] align-super">®</span>
          </button>
          
          <div className="relative group">
            <button className="text-[10px] font-bold tracking-[0.14em] text-ink-dim hover:text-blue-accent flex items-center gap-1 uppercase transition-colors">
              📍 {selectedCity === 'All' ? 'ALL CITIES' : selectedCity}
            </button>
            <div className="absolute left-0 mt-1 bg-panel border border-line-2 rounded-[2px] py-1 min-w-[120px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50 shadow-xl">
              {['All', 'Delhi', 'Mumbai', 'Bengaluru', 'Kolkata'].map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    navigateTo('discover');
                  }}
                  className={`w-full text-left px-3.5 py-1.5 text-[9.5px] font-bold tracking-widest uppercase hover:bg-bg transition-colors ${
                    selectedCity === city ? 'text-blue-accent' : 'text-ink-2'
                  }`}
                >
                  {city === 'All' ? 'ALL CITIES' : city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex justify-center gap-6 text-[11.5px] font-bold tracking-[0.16em]">
          <button
            onClick={() => navigateTo('discover')}
            className={`transition-colors py-1 ${
              page === 'discover' ? 'text-blue-accent border-b-2 border-ember' : 'text-ink hover:text-blue-accent'
            }`}
          >
            SNEAKERS
          </button>
          <button
            onClick={() => navigateTo('culture')}
            className={`transition-colors py-1 ${
              page === 'culture' ? 'text-blue-accent border-b-2 border-ember' : 'text-ink hover:text-blue-accent'
            }`}
          >
            CULTURE
          </button>
          <button
            onClick={() => navigateTo('about')}
            className={`transition-colors py-1 ${
              page === 'about' ? 'text-blue-accent border-b-2 border-ember' : 'text-ink hover:text-blue-accent'
            }`}
          >
            OUR STORY
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex gap-6 justify-end items-center text-[11.5px] font-bold tracking-[0.16em]">
          <button 
            onClick={toggleTheme} 
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-8 h-8 rounded-full border border-ink/30 hover:border-blue-accent hover:text-blue-accent flex items-center justify-center text-sm transition-colors"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          {user ? (
            <button 
              onClick={logoutUser} 
              className="text-ink hover:text-blue-accent transition-colors"
            >
              LOG OUT ({user.name.toUpperCase()})
            </button>
          ) : (
            <button 
              onClick={() => navigateTo('login')} 
              className="text-ink hover:text-blue-accent transition-colors"
            >
              LOG IN
            </button>
          )}

          <button 
            onClick={() => navigateTo('cart')} 
            className="inline-flex items-baseline gap-1.5 text-ink hover:text-blue-accent transition-colors"
          >
            CART
            <span className="inline-flex min-w-[17px] h-[17px] px-1 border-radius-99 bg-ink text-[#F2EEE5] text-[10px] items-center justify-center rounded-full font-mono tracking-normal">
              {cartCount}
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}
