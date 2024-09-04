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
          <a href="/home">Home</a>
          <a href="/airdrop">Airdrop</a>
          <a href="/dailytracker">Daily tracker</a>
          <a href="/profile">Profile</a>
      </nav>
    </header>
  );
}

export default Header