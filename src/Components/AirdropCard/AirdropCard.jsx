import React, {useState} from 'react';
import styles from './AirdropCard.module.css';
import StateItem from '../StateItem/StateItem';
import Phantom from '../../assets/Phantom.jpg'
import Steps from '../Steps/Steps';
import Icon1 from '../../assets/statusIcon1.svg'
import Icon2 from '../../assets/statusIcon2.svg'
import Icon3 from '../../assets/statusIcon3.svg'
import Icon4 from '../../assets/statusIcon4.svg'

export default function AirdropCard() {
  const textList1 = [
    "Visit the Phantom website", 
    "Download the wallet extension", 
    "Phantom currently supports Chrome, Firefox, Brave and Edge", 
    "Install the wallet and backup your recovery phrase", 
    "Now try to make swaps on the wallet", 
    "Users who've made a swap on the wallet may get an airdrop if they introduce their own token", 
    "Visit their quest's section, take a photo, and mint NFT", 
    "Please note that there is no guarantee that they will do an airdrop and that they will launch their own token. It's only speculation."
  ]

  const textList2 = [
    "Connect your Phantom wallet to a DeFi protocol",
    "Deposit a small amount into a liquidity pool to interact with the ecosystem",
    "Stake SOL in the Phantom wallet to earn rewards",
    "Explore the governance section and vote on any active proposals",
    "Test the wallet's integration with Solana dApps like Raydium or Serum",
    "Use your wallet to send SOL to another wallet to verify your transactions",
    "Look out for future updates regarding any potential token launch or airdrop campaigns",
    "Remember, participation in these activities does not guarantee an airdrop, and everything is subject to change."
  ]

  const [textList, setTextList] = useState(textList1);
  const [mission, setMission] = useState("Mission 1");

  const handleOnClick1 = () => {
    setTextList(textList1)
    setMission("Mission 1")
  };
  const handleOnClick2 = () => {
    setTextList(textList2)
    setMission("Mission 2")
  };

  return (
    <div className={styles.container}>
        <main>
            <section className={styles.walletInfo}>
                <img src={Phantom} alt="Phantom logo" className={styles.phantomLogo}/>
                <h1>Phantom Wallet</h1>
                <p>Phantom is a wallet and browser extension that can be used to manage digital assets and access decentralized applications on the Solana blockchain. It works by creating and managing private keys on behalf of its users, allowing them to store funds and sign transactions.</p>
                <p>Phantom doesn't have a token yet and could potentially launch a token in the future. Phantom has raised $118 million in funding from investors like a16z, Paradigm, and Solana Ventures. There's a rumor that making a swap on the platform may make you eligible for an airdrop if they create their own token.</p>
                <Steps textList={textList} mission={mission}></Steps>
                <p>You're interested in more projects that do not have any token yet and could potentially airdrop a governance token to early users in the future? Then check out our list of potential retroactive airdrops to not miss out on the next DeFi airdrop!</p>
                <p>Don't forget to follow us on Twitter, Telegram, & Facebook and subscribe our newsletter to receive new airdrops!</p>
                <a href="https://phantom.app/download" className={styles.ctaButton}>Visit Website</a>
            </section>
            <aside className={styles.walletStatus}>
                <h2>Links</h2>
                <div className={styles.statusItem}>
                  <img className={styles.statusIcon} src={Icon1} alt="" />  
                  <a href="https://x.com/phantom?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>
                </div>
                <div className={styles.statusItem}>
                  <img className={styles.statusIcon} src={Icon2} alt="" />  
                  <a href='https://discord.com/invite/phantom'>Reddit</a>
                </div>
                <div className={styles.statusItem}>
                  <img className={styles.statusIcon} src={Icon3} alt="" />  
                  <a href='https://podcast.phantom.app/'>Podcast</a>
                </div>
                <div className={styles.statusItem}>
                  <img className={styles.statusIcon} src={Icon4} alt="" />  
                  <a href='https://www.linkedin.com/company/phantomwallet'>Linkedin</a>
                </div>
                <div className={styles.projectStats}>
                    <h2>Project Stats</h2>
                    <StateItem text1='Raised:' text2='$118.00M'></StateItem>
                    <div className={styles.statItem}>
                        <span>Difficulty:</span>
                        <div className={styles.difficulty}>
                            2/5
                            <div className={styles.scoreBar}>
                                <div className={styles.scoreFill}></div>
                            </div>
                        </div>
                    </div>
                    <StateItem text1='Cost:' text2='$8'></StateItem>
                    <StateItem text1='Time:' text2='18 min'></StateItem>
                    <StateItem text1='Reward Type:' text2='Airdrop'></StateItem>
                    <StateItem text1='Status:' text2='Potential'></StateItem>
                    <StateItem text1='Reward Date:' text2='TBA'></StateItem>
                </div>

                <div className={styles.missionBlock} onClick={handleOnClick1}>
                  Mission 1: Basic wallet setup and usage
                </div>
                
                <div className={styles.missionBlock} onClick={handleOnClick2}>
                  Mission 2: Advanced DeFi interactions
                </div>
            </aside>
        </main>
    </div>
  );
}