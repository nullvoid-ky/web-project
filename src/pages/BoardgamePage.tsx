import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import BoardgameCard from "../boardgame/BoardgameCard";
export default function BoardgamePage() {
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="min-h-screen flex flex-col justify-center pt-20 sm:pt-36 p-4 sm:p-20 ">
          <header>
            <h1 className="text-4xl font-bold text-slate-700 mb-8 sm:mb-16">
              Boardgames
            </h1>
          </header>
          <div className="grid grid-col-1 xl:grid-cols-3 gap-4 w-full h-[calc(100%-132px)] ">
            {Array.from({ length: 40 }).map((_, index) => (
              <BoardgameCard key={index}></BoardgameCard>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
