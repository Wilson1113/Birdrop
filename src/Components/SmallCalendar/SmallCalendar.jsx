import React, { useState, useEffect } from 'react';
import styles from './SmallCalendar.module.css';

export default function SmallCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date()); // Current date
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [initialRender, setInitialRender] = useState(true); // Track initial render

  // Get the number of days in the current month
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  // Get the day of the week the month starts on (0 = Sunday, 1 = Monday, etc.)
  const startDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  // Total number of days in the current month
  const currentMonthDays = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
  
  // The day of the week the month starts on (used for padding empty days)
  const startDay = startDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());

  // Create an array of day numbers for the current month
  const daysArray = Array.from({ length: currentMonthDays }, (_, i) => i + 1);

  // Number of rows in the calendar (6 weeks maximum)
  const totalCalendarCells = 42; // 7 columns x 6 rows

  // Add empty cells for the days before the start of the month
  const leadingEmptyDays = Array.from({ length: startDay }, () => null);
  
  // Add empty cells after the last day of the month to fill the grid
  const trailingEmptyDays = Array.from({ length: totalCalendarCells - currentMonthDays - startDay }, () => null);

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  useEffect(() => {
    if (!initialRender) {
      // If it's not the initial render, reset the selectedDate to null when the month changes
      setSelectedDate(null);
    }
    setInitialRender(false); // Ensure the effect only skips the first render
  }, [currentDate]);

  return (
    <div className={styles.smallCalendar}>
      <div className={styles.smallCalendarHeader}>
        <span className={styles.smallCalendarNav} onClick={handlePrevMonth}>◀</span>
        <h3>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h3>
        <span className={styles.smallCalendarNav} onClick={handleNextMonth}>▶</span>
      </div>
      <div className={styles.smallCalendarGrid}>
        <div className={styles.smallCalendarDay}>S</div>
        <div className={styles.smallCalendarDay}>M</div>
        <div className={styles.smallCalendarDay}>T</div>
        <div className={styles.smallCalendarDay}>W</div>
        <div className={styles.smallCalendarDay}>T</div>
        <div className={styles.smallCalendarDay}>F</div>
        <div className={styles.smallCalendarDay}>S</div>

        {/* Render leading empty days */}
        {leadingEmptyDays.map((_, index) => (
          <div key={`leading-${index}`} className={styles.emptyDay}></div>
        ))}

        {/* Render actual days of the current month */}
        {daysArray.map(day => (
          <div
            key={day}
            className={`${styles.smallCalendarDate} ${day === selectedDate ? styles.currentDate : ''}`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}

        {/* Render trailing empty days */}
        {trailingEmptyDays.map((_, index) => (
          <div key={`trailing-${index}`} className={styles.emptyDay}></div>
        ))}
      </div>
    </div>
  );
}
