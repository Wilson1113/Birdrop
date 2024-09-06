import birdMiao from "../../assets/Birdrop.png"
import styles from "./Connect.module.css"
import React, { FC, useMemo, useState, useEffect } from 'react';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

function CustomWalletButton() {
  const { publicKey, connected } = useWallet();
  const [accountInfo, setAccountInfo] = useState(null);

  // Create a connection to Solana's Devnet
  const connection = useMemo(() => new Connection(clusterApiUrl('devnet'), "confirmed"), []);

  useEffect(() => {
    const getAccountInfo = async () => {
      if (publicKey && connected) {
        // Get account information using the public key
        const account = await connection.getAccountInfo(new PublicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"));
        console.log(account)
        setAccountInfo(account);
      }
    };

    getAccountInfo();
  }, [publicKey, connected, connection]);

  
  return (
    <WalletMultiButton>
      {publicKey ? `Connected: ${publicKey.toString().slice(0, 6)}...${publicKey.toString().slice(-4)}` : 'Connect your wallet'}
    </WalletMultiButton>
  );
}

function Connect() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

  return (
    <div className={styles.walletConnect}>
      <img src={birdMiao} alt="" />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <CustomWalletButton /> {/* Custom button with wallet address display */}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default Connect;
