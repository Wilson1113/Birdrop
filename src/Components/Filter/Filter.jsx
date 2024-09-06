import React, {useState} from 'react'
import styles from './Filter.module.css'
import searchIcon from '../../assets/search.svg'
import Table from '../Table/Table'
import Phantom from "../../assets/Phantom.jpg"
import Sonic from "../../assets/Sonic.jpg"
import Rain from "../../assets/Rain.png"
import Solana from "../../assets/Solana.jpg"
import Magic from "../../assets/Magic.jpg"
import Foot from "../../assets/foot.jpg"
import Jupiter from "../../assets/Jupiter.jpg"
import Kamino from "../../assets/Kamino.jpg"
import Sanctum from "../../assets/Sanctum.jpg"

export default function Filter() {

  const [search, setSearch] = useState('');

  const airdrops = [
    {id: 1, source: Phantom, name: "Phantom", taskType: {cost: "$8", time: "18 min"}, estimatedDate: "Q4 2024", likelihood: "Potential", difficulty:"High", funds:"$ 118.00M", href:"/airdropdetail"},
    {id: 2, source: Sonic, name: "Sonic", taskType: {cost: "$5", time: "20 min"}, estimatedDate: "Q4 2024", likelihood: "Confirmed", difficulty:"Medium", funds:"$ 6.10M"},
    {id: 3, source: Rain, name: "Rain.fi", taskType: {cost: "$2", time: "15 min"}, estimatedDate: "Q4 2024", likelihood: "Unlikely", difficulty:"Low", funds:"$ 3.50M"},
    {id: 4, source: Solana, name: "Solana ID", taskType: {cost: "$1", time: "5 min"}, estimatedDate: "Q4 2024", likelihood: "Confirmed", difficulty:"High", funds:"$ 5.00M"},
    {id: 5, source: Magic, name: "Magic Eden", taskType: {cost: "$4", time: "12 min"}, estimatedDate: "Q4 2024", likelihood: "Potential", difficulty:"Medium", funds:"$ 4.20M"},
    {id: 6, source: Foot, name: "Footmap", taskType: {cost: "$3", time: "8 min"}, estimatedDate: "Q4 2024", likelihood: "Confirmed", difficulty:"Low", funds:"$ 3.85M"},
    {id: 7, source: Jupiter, name: "Jupiter", taskType: {cost: "$2", time: "7 min"}, estimatedDate: "Q4 2024", likelihood: "Unlikely", difficulty:"High", funds:"$ 6.00M"},
    {id: 8, source: Kamino, name: "Kamino", taskType: {cost: "$5", time: "18 min"}, estimatedDate: "Q4 2024", likelihood: "Potential", difficulty:"Low", funds:"$ 2.95M"},
    {id: 9, source: Sanctum, name: "Sanctum", taskType: {cost: "$1", time: "3 min"}, estimatedDate: "Q4 2024", likelihood: "Confirmed", difficulty:"Medium", funds:"$ 4.80M"},
  ]

  return (
    <div className={styles.airdrops}>
      <ul className={styles.filter}>
        <li>
          <img src={searchIcon} alt="Search_Icon" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Filter projects' type="text" />
        </li>
      </ul>
      <Table airdrops={airdrops} search={search}></Table>
    </div>
  )
}