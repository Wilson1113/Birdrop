import React from 'react';
import styles from './AirdropCard.module.css';
import Solana from '../assets/Solana.jpg'

export default function AirdropCard() {
  return (
    <div className={styles.airdropCard}>
      <div className={styles.header}>
        <img className={styles.logo} src={Solana} alt="Solana ID Logo" />
        <div className={styles.headerDetails}>
          <h2>Solana ID</h2>
          <p>Turn your wallet into a super account.</p>
          <div className={styles.rating}>
            <span>4°</span> <span>Confirmed</span>
          </div>
        </div>
      </div>
      
      <AirdropDetails />
      
      <StepGuide />
      
      <AirdropCTA />
    </div>
  );
}

function AirdropDetails() {
  return (
    <div className={styles.airdropDetails}>
      <p><strong>Airdrop Link:</strong> <a href="#">Go to airdrop</a></p>
      <p><strong>Total Value:</strong> n/a</p>
      <p><strong>Status:</strong> <span className={styles.confirmed}>Confirmed</span></p>
      <p><strong>Platform:</strong> Solana</p>
    </div>
  );
}

function StepGuide() {
  return (
    <div className={styles.stepGuide}>
      <h3>Step-by-Step Guide:</h3>
      <ol>
        <li>Visit the <a href="#">Solana ID priority pass mint page</a>.</li>
        <li>Select sign in with browser wallet or sign in with Ledger and approve the connection request.</li>
        <li>Approximately $7 worth of SOL is required to mint the Priority Pass.</li>
        <li>Click on "Mint Priority Pass", then click on "Mint" and approve the transaction in your wallet.</li>
        <li>Verify your web2 accounts such as email, Twitter, Discord, and others.</li>
        <li>To verify social accounts, the <a href="#">zkPass TransGate</a> Chrome browser plug-in is required.</li>
        <li>Follow the steps from the zkPass TransGate extension to verify the social accounts.</li>
        <li>Add and verify an email address to be notified of updates on airdrops and exclusive perks from Solana ID partners.</li>
      </ol>
    </div>
  );
}

function AirdropCTA() {
  return (
    <div className={styles.cta}>
      <button className={styles.claimButton}>Claim Airdrop</button>
    </div>
  );
}
