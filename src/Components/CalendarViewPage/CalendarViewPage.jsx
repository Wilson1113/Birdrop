import styles from './CalendarViewPage.module.css'
import React from 'react';
import Calendar from '../Calendar/Calendar';

export default function CalendarViewPage() {
  return (
    <div className={styles.mainContent}>
      <aside className={styles.sidebar}>
        <div className={styles.claimableAirdrop}>
          <h3>Claimable Airdrop</h3>
          <button className={styles.sidebarButton}>Uniswap (UNI)</button>
          <button className={styles.sidebarButton}>PancakeSwap (CAKE)</button>
        </div>
        <h2>Farming List</h2>
        
        <button className={styles.sidebarButton}>Aave (AAVE)</button>
        <button className={styles.sidebarButton}>Compound (COMP)</button>
        <button className={styles.sidebarButton}>SushiSwap (SUSHI)</button>
      </aside>
      <Calendar />
    </div>

  );
}
