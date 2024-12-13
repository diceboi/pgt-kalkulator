'use client'

import { createContext, useState } from "react";

export const Context = createContext({
  currentPage: '1',
  toggleMobileMenu: () => {},
  setMobileMenuOpen: () => {},
  setMobileMenuClose: () => {},
});

export default function ContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('1');

  return (
    <Context.Provider value={{
      currentPage,
      setCurrentPage,
    }}>
      {children}
    </Context.Provider>
  );
}