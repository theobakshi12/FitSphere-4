import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { useAppContext } from './AppContext'; 


function TrackerCalendar() {
  const [selectedDates, setSelectedDates] = useState(new Set());
  const { setHighlightedDaysCount } = useAppContext();

  const handleDayClick = (value) => {
    const dateStr = value.toISOString().split('T')[0]; // Convert date to YYYY-MM-DD format
    const newSelection = new Set(selectedDates);
    if (newSelection.has(dateStr)) {
      newSelection.delete(dateStr); // If already selected, unselect it
      setHighlightedDaysCount(previousCount => previousCount - 1);

    } else {
      newSelection.add(dateStr); // If not selected, add to selection
      setHighlightedDaysCount(previousCount => previousCount + 1);
    }
    setSelectedDates(newSelection);
  };

  return (
    <Calendar
      onClickDay={handleDayClick}
      tileClassName={({ date, view }) => {
        if (view === 'month') {
          const dateStr = date.toISOString().split('T')[0];
          if (selectedDates.has(dateStr)) {
            return 'highlighted-day'; // Return the CSS class to highlight the tile
          }
        }
      }}
    />
  );
}

export default TrackerCalendar;