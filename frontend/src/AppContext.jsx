import React, { createContext, useState, useEffect } from 'react';
import { cart as originalCart } from './data';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState('landing');
  const [role, setRole] = useState('user');
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('sneakpeak_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      return null;
    }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState('All');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('All');
  const [priceRangeFilter, setPriceRangeFilter] = useState(15000);
  const [sortOrder, setSortOrder] = useState('featured');
  const [selectedCity, setSelectedCity] = useState('All');
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('sneakpeak_theme');
      if (saved) return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {}
    return 'light';
  });

  // Sync theme with document element attribute
  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      localStorage.setItem('sneakpeak_theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Load cart items on init
  useEffect(() => {
    setCartItems(originalCart.get());
  }, []);

  const addToCart = (pid, size, vendor, price, qty = 1) => {
    const updated = originalCart.add(pid, size, vendor, price, qty);
    setCartItems(updated);
  };

  const updateCartQty = (idx, qty) => {
    const updated = originalCart.update(idx, qty);
    setCartItems(updated);
  };

  const removeFromCart = (idx) => {
    const updated = originalCart.remove(idx);
    setCartItems(updated);
  };

  const clearCart = () => {
    originalCart.clear();
    setCartItems([]);
  };

  const loginUser = (email, password) => {
    const userData = { email, name: email.split('@')[0] };
    localStorage.setItem('sneakpeak_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logoutUser = () => {
    localStorage.removeItem('sneakpeak_user');
    setUser(null);
  };

  const navigateTo = (targetPage, productId = null) => {
    setPage(targetPage);
    if (productId !== null) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider value={{
      page,
      setPage,
      selectedProductId,
      setSelectedProductId,
      cartItems,
      addToCart,
      updateCartQty,
      removeFromCart,
      clearCart,
      user,
      loginUser,
      logoutUser,
      searchQuery,
      setSearchQuery,
      selectedBrandFilter,
      setSelectedBrandFilter,
      selectedSizeFilter,
      setSelectedSizeFilter,
      priceRangeFilter,
      setPriceRangeFilter,
      sortOrder,
      setSortOrder,
      navigateTo,
      theme,
      toggleTheme,
      role,
      setRole,
      selectedCity,
      setSelectedCity
    }}>
      {children}
    </AppContext.Provider>
  );
};
