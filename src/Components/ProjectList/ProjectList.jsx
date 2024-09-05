import styles from './ProjectList.module.css'

export default function ProjectList() {
  return(
    <div className={styles.projectList}>
      <h3>Farming List</h3>
      <ul>
          <li>Phantom</li>
          <li>Sonic</li>
          <li>Magic Eden</li>
          <li>Orca</li>
          <li>Raydium</li>
      </ul>
    </div>
  )
}