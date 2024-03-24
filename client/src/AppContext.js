// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [highlightedDaysCount, setHighlightedDaysCount] = useState(0);
  const [monthlyGoal, setMonthlyGoal] = useState(0); // Adding monthly goal state

  return (
    <AppContext.Provider value={{ highlightedDaysCount, setHighlightedDaysCount, monthlyGoal, setMonthlyGoal }}>
      {children}
    </AppContext.Provider>
  );
};
