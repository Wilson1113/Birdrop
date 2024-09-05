import Header from "../Header/Header"
import Connect from "../Connect/Connect"
import CardContainer from "../CardContainer/CardContainer"
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
    {id: 1, source:Phantom, name:"Phantom", action:"testtesttest", href:""},
    {id: 2, source:Rain, name:"Sonic", action:"testtesttest"},
    {id: 3, source:Sonic, name:"Rain.fi", action:"testtesttest"}
  ];

  const secondCard = [
    {id: 1, source:Solana, name:"Solana ID", action:"testtesttest"},
    {id: 2, source:Magic, name:"Magic Eden", action:"testtesttest"},
    {id: 3, source:Foot, name:"Footmap", action:"testtesttest", href:"https://x.com/foot_map"}
  ];

  const thirdCard = [
    {id: 1, source:Jupiter, name:"Jupiter", action:"testtesttest"},
    {id: 2, source:Kamino, name:"Kamino", action:"testtesttest"},
    {id: 3, source:Sanctum, name:"Sanctum", action:"testtesttest"}
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