import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"
import logoPic from "../assets/Birdrop.png"

function Header() {
  return(
    <header>
      <div className={styles.logo}>
          <img src={logoPic} alt="" />
          <span>Birdrop</span>
      </div>
      <nav >
          <Link to="/home">Home</Link>
          <Link to="/airdrop">Airdrop</Link>
          <Link to="/dailytracker">Daily tracker</Link>
          <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Header