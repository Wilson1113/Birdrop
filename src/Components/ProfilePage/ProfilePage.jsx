import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './ProfilePage.module.css';
import Solana from '../../assets/solana-sol-logo.png'
import Jup from '../../assets/Jupiter.jpg'
import Kamino from '../../assets/Kamino.jpg'

const ProfilePage = () => {
  // Use refs to store chart instances
  const scoreChartRef = useRef(null);
  const interactionsChartRef = useRef(null);
  const analysisChartRef = useRef(null);

  useEffect(() => {
    const scoreCircle = document.getElementById('scoreCircle');
      const score = 71;
      scoreCircle.style.background = `conic-gradient(var(--primary-color) ${score * 3.6}deg, var(--card-color) ${score * 3.6}deg)`;
      
    // Create Score Chart
    const scoreCtx = document.getElementById('scoreChart').getContext('2d');
    if (scoreChartRef.current) scoreChartRef.current.destroy(); // Destroy existing chart if any
    scoreChartRef.current = new Chart(scoreCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Credit Score',
          data: [65, 59, 80, 81, 56, 71],
          borderColor: '#c78b00ba',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Create Interactions Chart
    const interactionsCtx = document.getElementById('interactionsChart').getContext('2d');
    if (interactionsChartRef.current) interactionsChartRef.current.destroy(); // Destroy existing chart if any
    interactionsChartRef.current = new Chart(interactionsCtx, {
      type: 'bar',
      data: {
        labels: ['0-10', '11-50', '51-100', '101-500', '500+'],
        datasets: [{
          label: 'Number of Addresses',
          data: [300, 450, 320, 280, 120],
          backgroundColor: '#c78b00ba'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Create Analysis Chart
    const analysisCtx = document.getElementById('analysisChart').getContext('2d');
    if (analysisChartRef.current) analysisChartRef.current.destroy(); // Destroy existing chart if any
    analysisChartRef.current = new Chart(analysisCtx, {
      type: 'radar',
      data: {
        labels: ['TVL', 'Volume', 'Users', 'Transactions', 'Growth'],
        datasets: [{
          label: 'On-Chain Analysis',
          data: [80, 90, 70, 85, 75],
          backgroundColor: 'rgba(116, 104, 0, 0.2)',
          borderColor: '#c78b00ba',
          pointBackgroundColor: '#c78b00ba'
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: {
              color: 'rgba(165, 165, 165)'
            },
            grid: {
              color: 'rgba(165, 165, 165)'
            },
            ticks: {
              backdropColor: 'transparent'
            }
          }
        }
      }
    });

    // Cleanup function to destroy charts on component unmount
    return () => {
      if (scoreChartRef.current) scoreChartRef.current.destroy();
      if (interactionsChartRef.current) interactionsChartRef.current.destroy();
      if (analysisChartRef.current) analysisChartRef.current.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div>
          <div className={styles.card}>
            <h2>  Credit Score</h2>
            <div className={styles.scoreCircle} id='scoreCircle'>
              <span>71</span>
            </div>
            <div className={styles.chartContainer}>
              <canvas id="scoreChart"></canvas>
            </div>
            <h3>Number of addresses by total interactions</h3>
            <div className={styles.chartContainer}>
              <canvas id="interactionsChart"></canvas>
            </div>
            <p>15% increase from last week</p>
          </div>

          <div className={styles.walletCard}>
            <div className={styles.walletHeader}>
              <h3>Wallet</h3>
              <div className={styles.walletBalance}>$39</div>
            </div>
            <ul className={styles.tokenList}>
            <li className={styles.tokenItem}>
              <div className={styles.tokenName}>
                <img src={Solana} class={styles.tokenIcon}/>
                SOL
              </div>
              <div className={styles.tokenAmount}>
                0.15
                <div className={styles.tokenUsd}>$24.81</div>
              </div>
            </li>
            <li className={styles.tokenItem}>
              <div className={styles.tokenName}>
                <img src={Jup} class={styles.tokenIcon}/>
                JUP
              </div>
              <div className={styles.tokenAmount}>
                20.11
                <div className={styles.tokenUsd}>$14.24</div>
              </div>
            </li>
            <li className={styles.tokenItem}>
              <div className={styles.tokenName}>
                <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="USDC icon" class={styles.tokenIcon}/>
                USDC
              </div>
              <div className={styles.tokenAmount}>
                0.1838
                <div className={styles.tokenUsd}>$0.18</div>
              </div>
            </li>
          </ul>
          </div>

          <div className={styles.lendingCard}>
            <div className={styles.lendingHeader}>
              <h3>Kamino</h3>
              <div className={styles.lendingBalance}>$255</div>
            </div>
            <div className={styles.lendingItem}>
              <div className={styles.lendingToken}>
                <img src={Kamino} class={styles.lendingIcon}/>
                KMNO
              </div>
              <div className={styles.lendingAmount}>
                5223
                <div className={styles.lendingUsd}>$254.78</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>On-Chain Analysis</h2>
          <div className={styles.chartContainer}>
            <canvas id="analysisChart"></canvas>
          </div>
          <h3>Portfolio Distribution</h3>
          <div className={styles.protocols}>
            <div className={styles.protocol}>
              <h4>Wallet</h4>
              <p>$39</p>
            </div>
            <div className={styles.protocol}>
              <h4>Kamino</h4>
              <p>$242</p>
            </div>
            <div className={styles.protocol}>
              <h4>Jupiter</h4>
              <p>$0</p>
            </div>
            <div className={styles.protocol}>
              <h4>Sanctum</h4>
              <p>$0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
