import { createContext, useContext, useState } from "react";

const SavedContext = createContext();

export function SavedProvider({ children }) {
  const [savedItems, setSavedItems] = useState([]);

  // Add product — prevent duplicates by checking id
  const saveProduct = (product) => {
    setSavedItems((prev) => {
      const alreadySaved = prev.some((item) => item.id === product.id);
      if (alreadySaved) return prev; // no duplicate
      return [...prev, product];
    });
  };

  // Remove product by id
  const removeProduct = (productId) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Check if a product is already saved
  const isSaved = (productId) => savedItems.some((item) => item.id === productId);

  return (
    <SavedContext.Provider value={{ savedItems, saveProduct, removeProduct, isSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  return useContext(SavedContext);
}
