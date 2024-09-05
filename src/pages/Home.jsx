import Header from "../Components/Header/Header"
import Connect from "../Components/Connect/Connect"
import CardContainer from "../Components/CardContainer/CardContainer"
import Phantom from "../assets/Phantom.jpg"
import Rain from "../assets/Rain.png"
import Sonic from "../assets/Sonic.jpg"
import Solana from "../assets/Solana.jpg"
import Magic from "../assets/Magic.jpg"
import Foot from "../assets/foot.jpg"
import Jupiter from "../assets/Jupiter.jpg"
import Kamino from "../assets/Kamino.jpg"
import Sanctum from "../assets/Sanctum.jpg"

export default function Home() {
  const firstCard = [
    {id: 1, source:Phantom, name:"Phantom", action:"Wallet"},
    {id: 2, source:Sonic, name:"Sonic", action:"GameFi"},
    {id: 3, source:Rain, name:"Rain.fi", action:"DeFi"}
  ];

  const secondCard = [
    {id: 1, source:Solana, name:"Solana ID", action:"Decentralized Identity"},
    {id: 2, source:Magic, name:"Magic Eden", action:"NFT MarketPlace"},
    {id: 3, source:Foot, name:"Footmap", action:"DeFi", href:"https://x.com/foot_map"}
  ];

  const thirdCard = [
    {id: 1, source:Jupiter, name:"Jupiter", action:"DeFi"},
    {id: 2, source:Kamino, name:"Kamino", action:"DeFi"},
    {id: 3, source:Sanctum, name:"Sanctum", action:"DeFi"}
  ];
  return(
    <>
    <Header></Header>
    <Connect></Connect>
    <div className="card-block">
      <CardContainer title="Potential Airdrops" cards={firstCard}></CardContainer>
      <CardContainer title="Confirmed Airdrops" cards={secondCard}></CardContainer>
      <CardContainer title="Completed Airdrops" cards={thirdCard}></CardContainer>
    </div>
    </>
  );
}