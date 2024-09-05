import { useNavigate } from 'react-router';
import styles from './Table.module.css';

export default function Table({airdrops = [], search=''}) {
  const navigate = useNavigate()
  const handleOnClick = (href) => {
    navigate(href)
  }
  const listItem = airdrops.filter(airdrop => search.toLowerCase() === '' ? airdrop : airdrop.name.toLowerCase().includes(search.toLowerCase())).map(airdrop => 
    <tr key={airdrop.id} onClick={() => handleOnClick(airdrop.href)}>
      <td>
        <img src={airdrop.source} alt={`${airdrop.name} Logo`} />
        {airdrop.name}
      </td>
      <td>
        <span>Cost: {airdrop.taskType.cost}</span>
        <span>Time: {airdrop.taskType.time}</span>
      </td>
      <td>{airdrop.estimatedDate}</td>
      <td>{airdrop.likelihood}</td>
      <td>{airdrop.difficulty}</td>
      <td>{airdrop.funds}</td>
    </tr>
  );

  return (
    <table className={styles.projectTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Task Type</th>
          <th>Estimated Date</th>
          <th>Likelihood</th>
          <th>Difficulty</th>
          <th>Raise/Funds</th>
        </tr>
      </thead>
      <tbody>
        {listItem}
      </tbody>
    </table>
  );
}
