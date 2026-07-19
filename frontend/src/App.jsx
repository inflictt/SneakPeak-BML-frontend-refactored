import React, { useContext } from 'react';
import { AppProvider, AppContext } from './AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DiscoverPage from './pages/DiscoverPage';
import CulturePage from './pages/CulturePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import VendorPage from './pages/VendorPage';
import AdminPage from './pages/AdminPage';

function AppContent() {
  const { page, role, setRole, navigateTo } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col justify-between selection:bg-blue-accent selection:text-bg">
      <Navbar />
      <main className="flex-1 w-full">
        {page === 'landing' && <LandingPage />}
        {page === 'discover' && <DiscoverPage />}
        {page === 'culture' && <CulturePage />}
        {page === 'product' && <ProductPage />}
        {page === 'cart' && <CartPage />}
        {page === 'login' && <LoginPage />}
        {page === 'about' && <AboutPage />}
        {page === 'vendor' && <VendorPage />}
        {page === 'admin' && <AdminPage />}
      </main>

      {/* Floating Developer Role Switcher Widget */}
      <div className="fixed bottom-6 right-6 z-50 bg-panel border border-line-3 p-2 rounded-full flex gap-1.5 shadow-2xl items-center">
        <span className="text-[9px] font-bold tracking-widest text-ink-dim uppercase px-2">ROLE:</span>
        <button
          onClick={() => { setRole('user'); navigateTo('landing'); }}
          className={`px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-colors ${
            role === 'user' ? 'bg-blue-accent text-bg' : 'text-ink hover:bg-bg-2'
          }`}
        >
          User
        </button>
        <button
          onClick={() => { setRole('vendor'); navigateTo('vendor'); }}
          className={`px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-colors ${
            role === 'vendor' ? 'bg-ember text-bg' : 'text-ink hover:bg-bg-2'
          }`}
        >
          Vendor
        </button>
        <button
          onClick={() => { setRole('admin'); navigateTo('admin'); }}
          className={`px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-colors ${
            role === 'admin' ? 'bg-ink text-bg' : 'text-ink hover:bg-bg-2'
          }`}
        >
          Admin
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
