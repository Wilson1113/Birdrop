import styles from "./Card.module.css"

function Card({source="", name="", action="", href="/404"}) {
  const handleOnClick = () => {
    window.open(href, "_blank");
  };
  return(
    <div className={styles.card} onClick={handleOnClick}>
      <img src={source} alt="icon" />
      <div className={styles.airdropInfo}>
        <div className={styles.airdropName}>{name}</div>
        <div className={styles.airdropAction}>{action}</div>
      </div>
    </div>
  );
}

export default Card