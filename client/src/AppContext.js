// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [highlightedDaysCount, setHighlightedDaysCount] = useState(0);
  const [monthlyGoal, setMonthlyGoal] = useState(0);
  const [currentMonthYear, setCurrentMonthYear] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`; // Ensure month is in MM format
  });

  return (
    <AppContext.Provider value={{ highlightedDaysCount, setHighlightedDaysCount, monthlyGoal, setMonthlyGoal, currentMonthYear, setCurrentMonthYear }}>
      {children}
    </AppContext.Provider>
  );
};
