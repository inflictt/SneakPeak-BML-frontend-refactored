import React, { useState } from 'react';
import { fmt } from '../data';

export default function AdminPage() {
  const [pendingListings, setPendingListings] = useState([
    { id: 201, seller: 'SneakerHead Delhi', name: 'Air Jordan 4 Retro Black Cat', size: 'UK 9', price: 28999, city: 'Delhi' },
    { id: 202, seller: 'SoleSearch Mumbai', name: 'New Balance 2002R Protection Pack', size: 'UK 10', price: 14999, city: 'Mumbai' },
    { id: 203, seller: 'KicksStore BLR', name: 'Travis Scott x AJ1 Low', size: 'UK 8', price: 74999, city: 'Bengaluru' }
  ]);

  const [sellers, setSellers] = useState([
    { id: 1, name: 'Delhi Sneaker Vault', city: 'Delhi', listings: 14, verified: true },
    { id: 2, name: 'Mumbai Hype Exchange', city: 'Mumbai', listings: 8, verified: false },
    { id: 3, name: 'Bengaluru Grails', city: 'Bengaluru', listings: 3, verified: false }
  ]);

  const [logs, setLogs] = useState([
    { id: 1, action: 'User role changed to Admin', user: 'system', time: '10 mins ago' },
    { id: 2, action: 'Sellers credentials verified', user: 'Delhi Sneaker Vault', time: '1 hour ago' },
    { id: 3, action: 'Approved listing: Puma Palermo (UK 8)', user: 'system', time: '2 hours ago' }
  ]);

  const handleApproveListing = (id, name) => {
    setPendingListings(pendingListings.filter(l => l.id !== id));
    setLogs([{ id: Date.now(), action: `Approved listing: ${name}`, user: 'admin', time: 'Just now' }, ...logs]);
  };

  const handleRejectListing = (id, name) => {
    setPendingListings(pendingListings.filter(l => l.id !== id));
    setLogs([{ id: Date.now(), action: `Rejected listing: ${name}`, user: 'admin', time: 'Just now' }, ...logs]);
  };

  const handleVerifySeller = (id, name) => {
    setSellers(sellers.map(s => s.id === id ? { ...s, verified: true } : s));
    setLogs([{ id: Date.now(), action: `Verified seller: ${name}`, user: 'admin', time: 'Just now' }, ...logs]);
  };

  return (
    <div className="px-6 md:px-14 py-10 max-w-7xl mx-auto w-full">
      <header className="border-b border-line pb-8">
        <div className="text-[10.5px] font-bold tracking-[0.2em] text-ink-dim uppercase">SUPERADMIN CONTROL PANEL</div>
        <h1 className="font-display font-normal text-4xl md:text-[56px] leading-none uppercase text-ink mt-2">
          Platform Operations
        </h1>
      </header>

      {/* Metrics Row */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-panel border border-line p-5 rounded-[3px]">
          <div className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">PLATFORM SALES</div>
          <div className="font-display text-2xl md:text-3xl text-ink uppercase mt-2">₹18,52,400</div>
        </div>
        <div className="bg-panel border border-line p-5 rounded-[3px]">
          <div className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">TOTAL SELLERS</div>
          <div className="font-display text-2xl md:text-3xl text-ink uppercase mt-2">{sellers.length}</div>
        </div>
        <div className="bg-panel border border-line p-5 rounded-[3px]">
          <div className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">PENDING APPROVALS</div>
          <div className="font-display text-2xl md:text-3xl text-ember uppercase mt-2">{pendingListings.length}</div>
        </div>
        <div className="bg-panel border border-line p-5 rounded-[3px]">
          <div className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">VERIFICATION RATE</div>
          <div className="font-display text-2xl md:text-3xl text-ink uppercase mt-2">66.7%</div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        
        {/* Left Column: Approvals & Verification */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Pending Listings */}
          <div>
            <h2 className="font-display font-normal text-2xl uppercase text-ink mb-6">
              Pending Listings Approvals ({pendingListings.length})
            </h2>
            {pendingListings.length > 0 ? (
              <div className="flex flex-col gap-4">
                {pendingListings.map((item) => (
                  <div key={item.id} className="bg-panel border border-line p-5 rounded-[3px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="text-[10px] font-bold text-ink-dim uppercase tracking-wider">
                        BY {item.seller} • {item.city}
                      </div>
                      <div className="font-display text-lg text-ink uppercase tracking-wide mt-1">
                        {item.name}
                      </div>
                      <div className="text-xs text-ink-dim mt-0.5">
                        Size: {item.size} • Price: {fmt(item.price)}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleApproveListing(item.id, item.name)}
                        className="bg-good hover:bg-good/90 text-bg text-[10px] font-bold tracking-[0.16em] px-4 py-2 rounded-full transition-colors"
                      >
                        APPROVE
                      </button>
                      <button 
                        onClick={() => handleRejectListing(item.id, item.name)}
                        className="bg-danger/10 hover:bg-danger/20 text-danger text-[10px] font-bold tracking-[0.16em] px-4 py-2 rounded-full transition-colors"
                      >
                        REJECT
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-panel/40 border border-line/60 border-dashed p-8 rounded-[3px] text-center text-xs text-ink-dim uppercase tracking-widest">
                All Listings Audited
              </div>
            )}
          </div>

          {/* Manage Sellers Vetting */}
          <div>
            <h2 className="font-display font-normal text-2xl uppercase text-ink mb-6">
              Seller Registrations
            </h2>
            <div className="bg-panel border border-line rounded-[3px] overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-bold tracking-wider">
                <thead>
                  <tr className="border-b border-line text-ink-dim uppercase">
                    <th className="p-4.5">VENDOR NAME</th>
                    <th className="p-4.5">LOCATION</th>
                    <th className="p-4.5">LISTINGS</th>
                    <th className="p-4.5">VERIFIED</th>
                    <th className="p-4.5 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {sellers.map((seller) => (
                    <tr key={seller.id} className="border-b border-line/40 hover:bg-bg/40 transition-colors">
                      <td className="p-4.5 text-ink uppercase">{seller.name}</td>
                      <td className="p-4.5 text-ink-dim">{seller.city}</td>
                      <td className="p-4.5 text-ink">{seller.listings}</td>
                      <td className="p-4.5">
                        <span className={`inline-flex px-2 py-0.5 rounded-[2px] text-[9.5px] uppercase tracking-widest ${
                          seller.verified ? 'bg-good/10 text-good' : 'bg-ember/10 text-ember'
                        }`}>
                          {seller.verified ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="p-4.5 text-right">
                        {!seller.verified && (
                          <button 
                            onClick={() => handleVerifySeller(seller.id, seller.name)}
                            className="bg-blue-accent hover:bg-ember text-bg text-[10px] font-bold tracking-[0.16em] px-3.5 py-1.5 rounded-full transition-colors"
                          >
                            VET SELLER
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column: Platform Audit Logs */}
        <div className="lg:col-span-4">
          <h2 className="font-display font-normal text-2xl uppercase text-ink mb-6">
            Audit Trail
          </h2>
          <div className="bg-panel border border-line p-5 rounded-[3px]">
            <div className="flex flex-col gap-4">
              {logs.map((log) => (
                <div key={log.id} className="border-b border-line/40 pb-3 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[10px] text-ink-dim font-mono">{log.time}</span>
                    <span className="text-[9.5px] text-blue-accent uppercase tracking-wider">@{log.user}</span>
                  </div>
                  <p className="text-xs font-bold text-ink mt-1">
                    {log.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
