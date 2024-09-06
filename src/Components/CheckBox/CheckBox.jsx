import styles from "./CheckBox.module.css"
import Clock from "../../assets/clock.svg"

export default function CheckBox({name="", desc="", time=0, href=""}) {
  return(
    <tr>
      <td><input type="checkbox" className={styles.taskCheckbox}/></td>
      <td>{name}</td>
      <td>{desc}</td>
      <td className={styles.deadline}>{time} Hours Left<img src={Clock} className={styles.clock}/></td>
      <td><a href={href} className={styles.taskLink}>{href}</a></td>
    </tr>
  )
}