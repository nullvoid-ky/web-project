import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import BoardgameCard from "../boardgame/BoardgameCard";
import Werewolf from "../assets/Boardgames/Werewolf Ultimate/front.png";
import Survive from "../assets/Boardgames/Survive/front.png";
import WTK from "../assets/Boardgames/WTK War Of The Three Kingdoms/front.png";
import DBDL from "../assets/Boardgames/Dead By Daylight/front.png";
import { Link } from "react-router-dom";

export default function BoardgamePage() {
  const id = 1
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
    },
  ];

  function handleClick() {}

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
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-8 w-full h-[calc(100%-132px)] ">
            <Link to={`/boardgame/${id}`}>
              <BoardgameCard
                key={-2}
                name={data[0].name}
                picUrl={data[0].picUrl}
              ></BoardgameCard>
            </Link>
            <Link to={`/boardgame/${id}`}>
              <BoardgameCard
                key={-1}
                name={data[1].name}
                picUrl={data[1].picUrl}
              ></BoardgameCard>
            </Link>
            <Link to={`/boardgame/${id}`}>
              <BoardgameCard
                key={0}
                name={data[2].name}
                picUrl={data[2].picUrl}
              ></BoardgameCard>
            </Link>
            {Array.from({ length: 40 }).map((_, index) => (
              <Link to={`/boardgame/${id}`}>
                <BoardgameCard
                  key={index}
                  name={data[index % 4].name}
                  picUrl={data[index % 4].picUrl}
                  onclick={handleClick}
                ></BoardgameCard>
              </Link>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
