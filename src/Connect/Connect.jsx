import birdMiao from "../assets/Birdrop.png"
import styles from "./Connect.module.css"

function Connect() {
  return(
    <div className={styles.walletConnect}>
      <img src={birdMiao} alt="" />
      <button className={styles.connectButton}>Connect your wallet</button>
    </div>
  );
}

export default Connect