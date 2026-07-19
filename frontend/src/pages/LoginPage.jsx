import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

export default function LoginPage() {
  const { loginUser, logoutUser, user, navigateTo } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      loginUser(email, password);
    }
  };

  const getInitials = (emailStr) => {
    if (!emailStr) return 'SP';
    const clean = emailStr.split('@')[0];
    return clean.slice(0, 2).toUpperCase();
  };

  const getFirstName = (emailStr) => {
    if (!emailStr) return 'Collector';
    return emailStr.split('@')[0];
  };

  return (
    <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-66px)]">
      
      {/* Left Column info panel */}
      <section className="relative bg-dark-section text-[#EDE8DC] p-8 md:p-14 flex flex-col justify-between overflow-hidden min-h-[500px]">
        <div className="text-[10.5px] font-bold tracking-[0.24em] text-[#EDE8DC]/55">
          MEMBERS GET THE DROP FIRST
        </div>
        
        <div className="my-10 md:my-0">
          <h1 className="font-display font-normal text-5xl md:text-[90px] lg:text-[110px] leading-[0.95] text-[#EDE8DC] uppercase">
            <span>Grails don’t</span>
            <br />
            <span>wait<span className="font-serif italic text-ember capitalize font-normal"> around.</span></span>
          </h1>
          <p className="mt-[22px] text-sm md:text-[14.5px] leading-relaxed text-[#EDE8DC]/60 max-w-[40ch]">
            Drop alerts in your size, saved sellers, one-tap checkout — free for every collector.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <span className="border border-white/25 rounded-full px-3.5 py-2 text-[10px] font-bold tracking-[0.18em] uppercase">
            ✦ DROP ALERTS
          </span>
          <span className="border border-white/25 rounded-full px-3.5 py-2 text-[10px] font-bold tracking-[0.18em] uppercase">
            ✦ SAVED SELLERS
          </span>
          <span className="border border-white/25 rounded-full px-3.5 py-2 text-[10px] font-bold tracking-[0.18em] uppercase">
            ✦ BUYER PROTECTION
          </span>
        </div>
      </section>

      {/* Right Column Auth Form */}
      <section className="flex items-center justify-center p-8 md:p-14">
        <div className="w-full max-w-[440px]">
          {!user ? (
            <form onSubmit={handleSubmit} className="flex flex-col">
              
              {/* Tab Pills */}
              <div className="flex border border-line rounded-full p-1 bg-[#ECE7DA] mb-8">
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 font-body text-[11px] font-bold tracking-[0.18em] py-3 rounded-full transition-all uppercase ${
                    activeTab === 'login' 
                      ? 'bg-ink text-[#F2EEE5]' 
                      : 'text-ink-dim hover:text-ink'
                  }`}
                >
                  LOG IN
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('create')}
                  className={`flex-1 font-body text-[11px] font-bold tracking-[0.18em] py-3 rounded-full transition-all uppercase ${
                    activeTab === 'create' 
                      ? 'bg-ink text-[#F2EEE5]' 
                      : 'text-ink-dim hover:text-ink'
                  }`}
                >
                  CREATE ACCOUNT
                </button>
              </div>

              <h1 className="font-display font-normal text-3xl md:text-[44px] leading-none uppercase text-ink">
                {activeTab === 'login' ? 'SIGN IN' : 'CREATE ACCOUNT'}
              </h1>
              <p className="mt-2.5 text-xs md:text-[13.5px] text-ink-dim">
                {activeTab === 'login' ? 'Welcome back to SneakPeak.' : 'Unlock priority access to drops.'}
              </p>

              {/* Form Input fields */}
              <div className="flex flex-col gap-5 mt-8">
                {activeTab === 'create' && (
                  <label className="block">
                    <span className="block text-[10px] font-bold tracking-[0.2em] text-ink-dim uppercase">
                      FULL NAME
                    </span>
                    <input 
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Saksham Lodha"
                      className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-blue-accent outline-none text-ink text-sm py-2.5 placeholder:text-ink/35 tracking-wide"
                    />
                  </label>
                )}
                
                <label className="block">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-ink-dim uppercase">
                    EMAIL
                  </span>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-blue-accent outline-none text-ink text-sm py-2.5 placeholder:text-ink/35 tracking-wide"
                  />
                </label>

                <label className="block">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-ink-dim uppercase">
                    PASSWORD
                  </span>
                  <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-blue-accent outline-none text-ink text-sm py-2.5 placeholder:text-ink/35 tracking-wide"
                  />
                </label>
              </div>

              <button 
                type="submit"
                className="w-full mt-8 bg-ink hover:bg-blue-accent text-[#F2EEE5] font-bold font-body text-xs tracking-[0.2em] py-4.5 rounded-full transition-colors"
              >
                {activeTab === 'login' ? 'PROCEED' : 'REGISTER'}
              </button>

              <div className="mt-[18px] text-[10px] tracking-[0.1em] text-ink-dim text-center uppercase font-bold">
                DEMO BUILD — CREDENTIALS ARE SAVED LOCALLY
              </div>
            </form>
          ) : (
            <div className="text-center flex flex-col items-center">
              <div className="w-[84px] h-[84px] rounded-full bg-blue-accent text-[#F2EEE5] flex items-center justify-center font-display text-3xl tracking-wider">
                {getInitials(user.email)}
              </div>
              
              <h1 className="font-display font-normal text-3xl md:text-[44px] leading-none uppercase text-ink mt-6">
                Welcome back, <span className="font-serif italic text-ember lowercase font-normal">{getFirstName(user.email)}.</span>
              </h1>
              <p className="text-xs md:text-[13.5px] text-ink-dim mt-3">
                You’re signed in as {user.email}
              </p>

              <div className="flex flex-col gap-3.5 w-full mt-8">
                <button
                  onClick={() => navigateTo('discover')}
                  className="w-full bg-ink hover:bg-blue-accent text-[#F2EEE5] font-bold font-body text-xs tracking-[0.2em] py-4.5 rounded-full transition-colors"
                >
                  BROWSE THE CATALOG
                </button>
                <button
                  onClick={() => navigateTo('cart')}
                  className="w-full border border-ink/30 hover:border-blue-accent hover:text-blue-accent text-ink font-bold font-body text-xs tracking-[0.2em] py-4.5 rounded-full transition-colors"
                >
                  VIEW CART
                </button>
                <button 
                  onClick={logoutUser}
                  className="font-bold text-[11px] tracking-[0.18em] text-ink-dim hover:text-ember uppercase mt-2.5 transition-colors"
                >
                  LOG OUT →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
