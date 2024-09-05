import { useNavigate } from 'react-router-dom';
import styles from "./Card.module.css"

function Card({source="", name="", action="", href="/Birdrop/404"}) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/airdropdetail')
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