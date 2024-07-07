import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Werewolf from "../assets/Boardgames/Werewolf Ultimate/front.png";
import Survive from "../assets/Boardgames/Survive/front.png";
import WTK from "../assets/Boardgames/WTK War Of The Three Kingdoms/front.png";
import DBDL from "../assets/Boardgames/Dead By Daylight/front.png";
import BoardgameContent from "../boardgame/BoardgameContent";

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
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight",
      picUrl: DBDL,
    },
    {
      id: 4,
      name: "Dead By Daylight Dead By Daylight Dead By Daylight Dead By Daylight",
      picUrl: DBDL,
    },
  ];

  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="min-h-screen flex flex-col justify-center pt-20 sm:pt-36 p-4 sm:p-20 ">
          <header>
            <h1 className="text-4xl font-bold text-pearl-50  mb-8 sm:mb-16">
              Boardgames
            </h1>
          </header>
          <BoardgameContent data={data}/>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
