import styles from './StateItem.module.css'

export default function StateItem({text1="", text2=''}) {
  return(
    <div className={styles.statItem}>
        <span>{text1}</span>
        <strong>{text2}</strong>
    </div>
  )
} 