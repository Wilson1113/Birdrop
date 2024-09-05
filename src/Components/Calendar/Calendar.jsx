import React, { useState, useEffect } from 'react';
import styles from './Calendar.module.css';
import { useNavigate } from 'react-router'

const events = {
  '2024-09-01': ['$ADA - Chang Hardfork'],
  '2024-09-02': ['$MPL - MIP-010 ($SYRUP) Vote Begins'],
  '2024-09-04': ['$MATIC - POL Migration', '$RUNE - Hard Fork Upgrade'],
  '2024-09-05': ['U.S - Initial Jobless Claims', 'Coinbase Future - $BB·$CFX·$NEO Listing', 'Upbit - $MATIC Delist & $POL Pending Listing'],
  '2024-09-06': ['U.S - Unemployment Rate'],
  '2024-09-09': ['$ENJ - Relaychain v1.3 , Matrixchain v1.1 Upgrades', 'Fractal - Mainnet Launch & TGE'],
  '2024-09-10': ['U.S - Trump-Harris Debate', 'U.S - Crypto Hearings', '$SUSHI - Memecoin Launchpad Flatform Launch'],
  '2024-09-11': ['U.S - CPI'],
  '2024-09-12': ['U.S - PPI', 'U.S - Initial Jobless Claims'],
  '2024-09-13': ['Binance - $POL Listing'],
  '2024-09-18': ['U.S - Fed Interest Rate Decision', '$MKR $DAI - $SKY $USDS Upgradable', 'U.S - Crypto Hearings'],
  '2024-09-19': ['$LUNA $LUNC $USTC - Terraform Labs Chapter 11 Bankruptcy Hearing'],
  '2024-09-20': ['$DUSK - Mainnet Launch', '$SOL - Solana Breakpoint 2024'],
  '2024-09-23': ['U.S - Crypto Hearings'],
  '2024-09-24': ['$LSK - 100M $LSK Burning Vote Start'],
  '2024-09-25': ['$EOS - Hard Fork'],
  '2024-09-26': ['$BNB - Bohr Hardfork', '$HMSTR - TGE & Airdrop'],
  '2024-09-29': ['CZ - Release from Prison'],
  '2024-09-30': ['CME - Bitcoin Friday Futures Launch']
};
function Calendar() {
    const [currentYear, setCurrentYear] = useState(2024);
    const [currentMonth, setCurrentMonth] = useState(9); // September

    const createCalendar = (year, month) => {
        const firstDay = new Date(year, month - 1, 1).getDay();
        const daysInMonth = new Date(year, month, 0).getDate();

        const daysArray = [];
        // Add empty cells for days before the first of the month
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(<div key={`empty-${i}`}></div>);
        }

        // Add calendar days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayEvents = events[dateString] || [];

            daysArray.push(
                <div className={styles.calendarDay} key={day}>
                    {day}
                    {dayEvents.map((event, index) => (
                        <div className={styles.event} key={index}>{event}</div>
                    ))}
                </div>
            );
        }

        return daysArray;
    };

    const handlePrevMonth = () => {
        setCurrentMonth(prev => {
            if (prev === 1) {
                setCurrentYear(year => year - 1);
                return 12;
            }
            return prev - 1;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth(prev => {
            if (prev === 12) {
                setCurrentYear(year => year + 1);
                return 1;
            }
            return prev + 1;
        });
    };

    const navigate = useNavigate();
    const handleOnClick = () => navigate("/dailytracker")

    return (
        <div className={styles.calendar}>
            <div className={styles.calendarHeader}>
                <h2>Calendar</h2>
                <div>
                    <span className={styles.calendarNav} onClick={handlePrevMonth}>◀</span>
                    <h3>{new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' })} {currentYear}</h3>
                    <span className={styles.calendarNav} onClick={handleNextMonth}>▶</span>
                </div>
                <button className={styles.calendarViewBtn} onClick={handleOnClick}>To-do list</button>
            </div>
            <div className={styles.calendarGrid}>
                {/* Day labels */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div key={index} style={{ fontWeight: 'bold', textAlign: 'center' }}>{day}</div>
                ))}
                {/* Calendar Days */}
                {createCalendar(currentYear, currentMonth)}
            </div>
        </div>
    );
}

export default Calendar;
