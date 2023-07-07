import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);

  const addFoodItem = (newFoodItem) => {
    setFoodItems([...foodItems, newFoodItem]);
  };

  return (
    <AppContext.Provider
      value={{
        foodItems,
        addFoodItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
