import Card from "../Card/Card"
import styles from "./CardContainer.module.css"

function CardContainer({ title, cards = [] }) {
  const listItems = cards.map(card => <Card key={card.id} source={card.source} name={card.name} action={card.action} href={card.href}></Card>)
  
  return(
    <div className={styles.cardContainer}>
      <h2>{title}</h2>
      <div className={styles.cards}>
        {listItems}
      </div>
    </div>
  );
}
export default CardContainer