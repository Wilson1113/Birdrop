import styles from "./CheckBox.module.css"

export default function CheckBox({name="", desc="", href=""}) {
  return(
    <tr>
      <td><input type="checkbox" className={styles.taskCheckbox}/></td>
      <td>{name}</td>
      <td>{desc}</td>
      <td><a href={href} className={styles.taskLink}>{href}</a></td>
    </tr>
  )
}