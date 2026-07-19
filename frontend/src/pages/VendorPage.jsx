import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { PRODUCTS, fmt } from '../data';

export default function VendorPage() {
  const { navigateTo } = useContext(AppContext);
  const [listings, setListings] = useState([
    { id: 101, name: 'Puma Palermo', size: 'UK 8', price: 5249, status: 'Approved', city: 'Mumbai', condition: 'Deadstock' },
    { id: 102, name: 'Nike Dunk Low', size: 'UK 9', price: 10999, status: 'Pending', city: 'Delhi', condition: 'Deadstock' },
    { id: 103, name: 'Adidas Samba OG', size: 'UK 7', price: 8999, status: 'Approved', city: 'Bengaluru', condition: 'Lightly Used' },
  ]);

  const [name, setName] = useState('');
  const [size, setSize] = useState('UK 8');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('Delhi');
  const [condition, setCondition] = useState('Deadstock');
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    const newListing = {
      id: Date.now(),
      name,
      size,
      price: parseFloat(price),
      status: 'Pending',
      city,
      condition
    };
    setListings([newListing, ...listings]);
    setName('');
    setPrice('');
    setIsAdding(false);
  };

  return (
    <div className="px-6 md:px-14 py-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-line pb-8">
        <div>
          <div className="text-[10.5px] font-bold tracking-[0.2em] text-ink-dim uppercase">VENDOR DASHBOARD</div>
          <h1 className="font-display font-normal text-4xl md:text-[56px] leading-none uppercase text-ink mt-2">
            Seller Portal
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10.5px] font-bold bg-good/10 text-good tracking-wider uppercase">
            ● Vetted Seller
          </span>
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-blue-accent hover:bg-ember text-bg font-bold text-xs tracking-[0.16em] px-5 py-3 rounded-full transition-colors font-body"
          >
            + ADD LISTING
          </button>
        </div>
      </header>

      {/* Metrics Row */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-panel border border-line p-5 rounded-[3px]">
          <div className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">TOTAL SALES</div>
          <div className="font-display text-2xl md:text-3xl text-ink uppercase mt-2">₹1,42,800</div>
        </div>
        <div className="bg-panel border border-line p-5 rounded-[3px]">
          <div className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">ACTIVE LISTINGS</div>
          <div className="font-display text-2xl md:text-3xl text-ink uppercase mt-2">{listings.filter(l => l.status === 'Approved').length}</div>
        </div>
        <div className="bg-panel border border-line p-5 rounded-[3px]">
          <div className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">PENDING VERIFICATION</div>
          <div className="font-display text-2xl md:text-3xl text-ink uppercase mt-2">{listings.filter(l => l.status === 'Pending').length}</div>
        </div>
        <div className="bg-panel border border-line p-5 rounded-[3px]">
          <div className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">SELLER RATING</div>
          <div className="font-display text-2xl md:text-3xl text-ember uppercase mt-2">4.9 ★</div>
        </div>
      </section>

      {/* Add Listing Modal */}
      {isAdding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-bg border border-line-2 rounded-[4px] max-w-md w-full p-6 md:p-8 shadow-2xl relative">
            <button 
              onClick={() => setIsAdding(false)}
              className="absolute right-4 top-4 text-ink hover:text-ember transition-colors text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="font-display font-normal text-2xl md:text-3xl uppercase text-ink mb-6">
              Create Sneaker Listing
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-bold tracking-wider">
              <div className="flex flex-col gap-1.5">
                <label className="text-ink-dim uppercase">SNEAKER NAME</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Air Jordan 1 High"
                  className="bg-panel border border-line px-3 py-2.5 rounded-[2px] outline-none text-ink text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-ink-dim uppercase">SIZE</label>
                  <select 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)}
                    className="bg-panel border border-line px-3 py-2.5 rounded-[2px] outline-none text-ink text-sm"
                  >
                    <option>UK 6</option>
                    <option>UK 7</option>
                    <option>UK 8</option>
                    <option>UK 9</option>
                    <option>UK 10</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-ink-dim uppercase">PRICE (INR)</label>
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 9500"
                    className="bg-panel border border-line px-3 py-2.5 rounded-[2px] outline-none text-ink text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-ink-dim uppercase">CITY LOCATION</label>
                  <select 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-panel border border-line px-3 py-2.5 rounded-[2px] outline-none text-ink text-sm"
                  >
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bengaluru</option>
                    <option>Kolkata</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-ink-dim uppercase">CONDITION</label>
                  <select 
                    value={condition} 
                    onChange={(e) => setCondition(e.target.value)}
                    className="bg-panel border border-line px-3 py-2.5 rounded-[2px] outline-none text-ink text-sm"
                  >
                    <option>Deadstock</option>
                    <option>VNDS (Very Near Deadstock)</option>
                    <option>Lightly Used</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="bg-blue-accent hover:bg-ember text-bg font-bold tracking-[0.18em] py-3.5 mt-4 rounded-full transition-colors"
              >
                SUBMIT FOR APPROVAL
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Listings Table */}
      <section className="mt-10">
        <h2 className="font-display font-normal text-2xl uppercase text-ink mb-6">
          Your Listings ({listings.length})
        </h2>
        <div className="bg-panel border border-line rounded-[3px] overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-bold tracking-wider">
            <thead>
              <tr className="border-b border-line text-ink-dim uppercase">
                <th className="p-4.5">PRODUCT</th>
                <th className="p-4.5">SIZE</th>
                <th className="p-4.5">PRICE</th>
                <th className="p-4.5">LOCATION</th>
                <th className="p-4.5">CONDITION</th>
                <th className="p-4.5">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr key={item.id} className="border-b border-line/40 hover:bg-bg/40 transition-colors">
                  <td className="p-4.5 text-ink uppercase">{item.name}</td>
                  <td className="p-4.5 text-ink-dim">{item.size}</td>
                  <td className="p-4.5 text-ink">{fmt(item.price)}</td>
                  <td className="p-4.5 text-ink-dim">{item.city}</td>
                  <td className="p-4.5 text-ink-dim">{item.condition}</td>
                  <td className="p-4.5">
                    <span className={`inline-flex px-2 py-1 rounded-[2px] text-[9.5px] uppercase tracking-widest ${
                      item.status === 'Approved' ? 'bg-good/10 text-good' : 'bg-ember/10 text-ember'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
