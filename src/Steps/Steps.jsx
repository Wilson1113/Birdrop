import styles from './Steps.module.css'

export default function Steps({textList=[]}) {
  const listItem = textList.map(text => <li>{text}</li>)
  return (
    <div className={styles.steps}>
        <h2>Step-by-Step Guide:</h2>
        <ol>
            {listItem}
        </ol>
    </div>
  )
}