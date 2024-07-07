import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Werewolf from "../assets/Boardgames/Werewolf Ultimate/front.png";
import Survive from "../assets/Boardgames/Survive/front.png";
import WTK from "../assets/Boardgames/WTK War Of The Three Kingdoms/front.png";
import DBDL from "../assets/Boardgames/Dead By Daylight/front.png";
export default function InsideGamePage() {
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="min-h-screen flex flex-col justify-center pt-20 sm:pt-36 p-4 sm:p-20 ">
          <div className=" box-border flex flex-col items-center sm:items-start sm:flex-row h-[calc(90dvh-10px)] xl:h-144 2xl:h-200 bg-midnight-600 bg-opacity-85 rounded-lg  max-h-screen min-h-[800px] sm:min-h-0 sm:max-h-none p-4 sm:p-8 lg:p-16 shadow-lg shadow-midnight-900">
            <img src={DBDL} alt="" className="w-[calc(76vw)] h-[calc(76vw)] my-4 sm:my-0 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-112 xl:h-112 2xl:w-160 2xl:h-160 rounded-lg object-contain bg-midnight-800" />
            <div className="flex flex-col pl-0 sm:pl-4 md:pl-12 space-y-1">
              <header>
                <h1 className="text-xl lg:text-4xl font-bold text-pearl-50">
                  Werewolf Ultimate
                </h1>
              </header>
              <h2 className="text-xs lg:text-lg font-bold text-orange-500">
                1,400.00 / hr
              </h2>
              <div className="flex flex-wrap">
                <div className="bg-orange-300 rounded-lg w-16 h-4 mr-2 mb-1"></div>{" "}
                <div className="bg-orange-300 rounded-lg w-16 h-4 mr-2 mb-1"></div>{" "}
                <div className="bg-orange-300 rounded-lg w-16 h-4 mr-2 mb-1"></div>{" "}
              </div>
              <p className="text-[10px] lg:text-sm text-pearl-500 sm:max-w-[240px] md:max-w-[300px] lg:max-w-sm xl:max-w-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi similique officiis sequi, saepe temporibus consequatur.
                corporis reiciendis?
              </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
