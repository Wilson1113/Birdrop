import styles from './Todo.module.css'
import { useNavigate } from 'react-router'
import CheckBox from '../CheckBox/CheckBox';

export default function Todo() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/calendarview")

  return(
    <div className={styles.todoList}>
      <div className={styles.todoHeader}>
        <h2>To-do list</h2>
        <div className={styles.dateNav}>
          <span>◀ 5/9/2024 ▶</span>
          <button className={styles.calendarViewBtn} onClick={handleOnClick}>Calendar view</button>
      </div>
      </div>
        <table className={styles.todoTable}>
            <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Project Name</th>
                    <th>Task description</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <CheckBox name='Sanctum' desc='Stake Solana, collect pets, earn XP.' href='https://www.sanctum.so/'></CheckBox>
                <CheckBox name='Jupiter Swap' desc='Perform daily token swaps to earn rewards.' href='https://jup.ag/'></CheckBox>
                <CheckBox name='Orca Whirlpools' desc='Add liquidity to concentrated pools.' href='https://www.orca.so/'></CheckBox>
            </tbody>
        </table>
    </div>
  )
}