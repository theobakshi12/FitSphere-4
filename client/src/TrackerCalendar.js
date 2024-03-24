// TrackerCalendar.js
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { useAppContext } from './AppContext'; 

function TrackerCalendar() {
  const [selectedDates, setSelectedDates] = useState(new Set());
  const { setHighlightedDaysCount, currentMonthYear, setCurrentMonthYear } = useAppContext();

  const handleDayClick = (value) => {
    const dateStr = value.toISOString().split('T')[0]; // YYYY-MM-DD format
    const newSelection = new Set(selectedDates);
    if (newSelection.has(dateStr)) {
      newSelection.delete(dateStr);
      setHighlightedDaysCount(previousCount => previousCount - 1);
    } else {
      newSelection.add(dateStr);
      setHighlightedDaysCount(previousCount => previousCount + 1);
    }
    setSelectedDates(newSelection);
  };

  const handleViewChange = ({ activeStartDate }) => {
    const newMonthYear = `${activeStartDate.getFullYear()}-${String(activeStartDate.getMonth() + 1).padStart(2, '0')}`;
    if (newMonthYear !== currentMonthYear) {
      setCurrentMonthYear(newMonthYear);
      setHighlightedDaysCount(0); // Reset the counter when the month changes
      setSelectedDates(new Set()); // Optionally reset selected dates as well
    }
  };

  return (
    <Calendar
      onClickDay={handleDayClick}
      onActiveStartDateChange={handleViewChange}
      tileClassName={({ date, view }) => {
        if (view === 'month') {
          const dateStr = date.toISOString().split('T')[0];
          if (selectedDates.has(dateStr)) {
            return 'highlighted-day'; 
          }
        }
      }}
    />
  );
}

export default TrackerCalendar;
