import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Werewolf from "../assets/Boardgames/Werewolf Ultimate/front.png";
import Survive from "../assets/Boardgames/Survive/front.png";
import WTK from "../assets/Boardgames/WTK War Of The Three Kingdoms/front.png";
import DBDL from "../assets/Boardgames/Dead By Daylight/front.png";
import Avalon from "../assets/Boardgames/Avalon/front.png";
import Coup from "../assets/Boardgames/Coup/front.png";
import GOT from "../assets/Boardgames/Game Of Thrones/front.png"
import EXPKT from "../assets/Boardgames/Exploding Kitten/front.png"
import MineTurtle from "../assets/Boardgames/Mine Turtle/front.png"
import Splender from "../assets/Boardgames/Splender/front.png"
import Muffin from "../assets/Boardgames/Muffin Time/front.png"

import BoardgameContent from "../boardgame/BoardgameContent";
import SearchBar from "../boardgame/SearchBar";

export default function BoardgamePage() {
  const data = [
    {
      id: 1,
      name: "Werewolf Ultimate",
      picUrl: Werewolf,
    },
    {
      id: 2,
      name: "Survive",
      picUrl: Survive,
    },
    {
      id: 3,
      name: "WTK War Of The Three Kingdoms",
      picUrl: WTK,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },{
      id: 5,
      name: "Avalon",
      picUrl: Avalon,
    },
    {
      id: 6,
      name: "Coup",
      picUrl: Coup,
    },
    {
      id: 7,
      name: "Game Of Thrones",
      picUrl: GOT,
    },
    {
      id: 8,
      name: "Exploding Kitten",
      picUrl: EXPKT,
    },{
      id: 9,
      name: "Mine Turtle",
      picUrl: MineTurtle,
    },
    {
      id: 10,
      name: "Splender",
      picUrl: Splender,
    },
    {
      id: 11,
      name: "Muffin Time",
      picUrl: Muffin,
    },
    {
      id: 1,
      name: "Werewolf Ultimate",
      picUrl: Werewolf,
    },
    {
      id: 2,
      name: "Survive",
      picUrl: Survive,
    },
    {
      id: 3,
      name: "WTK War Of The Three Kingdoms",
      picUrl: WTK,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },{
      id: 5,
      name: "Avalon",
      picUrl: Avalon,
    },
    {
      id: 6,
      name: "Coup",
      picUrl: Coup,
    },
    {
      id: 7,
      name: "Game Of Thrones",
      picUrl: GOT,
    },
    {
      id: 8,
      name: "Exploding Kitten",
      picUrl: EXPKT,
    },{
      id: 9,
      name: "Mine Turtle",
      picUrl: MineTurtle,
    },
    {
      id: 10,
      name: "Splender",
      picUrl: Splender,
    },
    {
      id: 11,
      name: "Muffin Time",
      picUrl: Muffin,
    },
    {
      id: 1,
      name: "Werewolf Ultimate",
      picUrl: Werewolf,
    },
    {
      id: 2,
      name: "Survive",
      picUrl: Survive,
    },
    {
      id: 3,
      name: "WTK War Of The Three Kingdoms",
      picUrl: WTK,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },{
      id: 5,
      name: "Avalon",
      picUrl: Avalon,
    },
    {
      id: 6,
      name: "Coup",
      picUrl: Coup,
    },
    {
      id: 7,
      name: "Game Of Thrones",
      picUrl: GOT,
    },
    {
      id: 8,
      name: "Exploding Kitten",
      picUrl: EXPKT,
    },{
      id: 9,
      name: "Mine Turtle",
      picUrl: MineTurtle,
    },
    {
      id: 10,
      name: "Splender",
      picUrl: Splender,
    },
    {
      id: 11,
      name: "Muffin Time",
      picUrl: Muffin,
    },
    {
      id: 1,
      name: "Werewolf Ultimate",
      picUrl: Werewolf,
    },
    {
      id: 2,
      name: "Survive",
      picUrl: Survive,
    },
    {
      id: 3,
      name: "WTK War Of The Three Kingdoms",
      picUrl: WTK,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },{
      id: 5,
      name: "Avalon",
      picUrl: Avalon,
    },
    {
      id: 6,
      name: "Coup",
      picUrl: Coup,
    },
    {
      id: 7,
      name: "Game Of Thrones",
      picUrl: GOT,
    },
    {
      id: 8,
      name: "Exploding Kitten",
      picUrl: EXPKT,
    },{
      id: 9,
      name: "Mine Turtle",
      picUrl: MineTurtle,
    },
    {
      id: 10,
      name: "Splender",
      picUrl: Splender,
    },
    {
      id: 11,
      name: "Muffin Time",
      picUrl: Muffin,
    },
    {
      id: 1,
      name: "Werewolf Ultimate",
      picUrl: Werewolf,
    },
    {
      id: 2,
      name: "Survive",
      picUrl: Survive,
    },
    {
      id: 3,
      name: "WTK War Of The Three Kingdoms",
      picUrl: WTK,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },{
      id: 5,
      name: "Avalon",
      picUrl: Avalon,
    },
    {
      id: 6,
      name: "Coup",
      picUrl: Coup,
    },
    {
      id: 7,
      name: "Game Of Thrones",
      picUrl: GOT,
    },
    {
      id: 8,
      name: "Exploding Kitten",
      picUrl: EXPKT,
    },{
      id: 9,
      name: "Mine Turtle",
      picUrl: MineTurtle,
    },
    {
      id: 10,
      name: "Splender",
      picUrl: Splender,
    },
    {
      id: 11,
      name: "Muffin Time",
      picUrl: Muffin,
    },
    
  ];

  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="min-h-screen flex flex-col justify-center pt-20 sm:pt-36 p-8 sm:p-20 ">
          <header>
            <h1 className="text-4xl font-bold text-pearl-50  mb-8 sm:mb-16">
              Boardgames
            </h1>
          </header>
          <SearchBar/>
          <BoardgameContent data={data}/>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
