import { useState } from "react";
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Muffin from "../assets/Boardgames/Muffin Time/1.png";
import Muffin1 from "../assets/Boardgames/Muffin Time/2.png";
import Muffin2 from "../assets/Boardgames/Muffin Time/banner.png";
import Dropdown from "../utils/Dropdown";
export default function InsideGamePage() {
  const [errorImages, setErrorImages] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  const handleError = (imgKey: string) => {
    setErrorImages((prev) => ({
      ...prev,
      [imgKey]: true,
    }));
  };
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="min-h-screen flex flex-col justify-start items-center pt-20 sm:pt-36 p-4 sm:p-20 ">
          <div className=" box-border flex flex-col justify-center items-center w-fit sm:items-start sm:flex-row h-fit bg-midnight-600 bg-opacity-85 rounded-lg   min-h-[800px] sm:min-h-0  p-4 sm:p-8 lg:p-16 shadow-lg shadow-midnight-900">
            <div className="flex flex-col">
              <img
                src={Muffin}
                alt=""
                className="w-[calc(76vw)] h-[calc(76vw)] my-4 sm:my-0 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-112 xl:h-112 2xl:w-160 2xl:h-160 rounded-lg sm:rounded-none object-cover bg-midnight-800"
                
              />
              <div
                className="
                flex lg:hidden
                sm:w-36 sm:h-12 md:w-48 md:h-16
                bg-midnight-50 justify-between mb-4 sm:mb-0"
              >
                <img
                  src={Muffin1}
                  alt=""
                  className="w-[calc(24vw)] h-[calc(24vw)] sm:w-12 sm:h-12 md:w-16 md:h-16 object-scale-down"
                  onError={() => handleError('img1')}
                />
                <img
                  src={Muffin2}
                  alt=""
                  className="w-[calc(24vw)] h-[calc(24vw)] sm:w-12 sm:h-12 md:w-16 md:h-16 object-scale-down"
                  onError={() => handleError('img2')}
                />
                <img
                  src=""
                  alt=""
                  className={`w-[calc(24vw)] h-[calc(24vw)] sm:w-12 sm:h-12 md:w-16 md:h-16 object-scale-down`}
                  onError={() => handleError('img3')}
                />
              </div>
            </div>
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
              <p className="text-[10px] lg:text-sm 2xl:text-lg text-pearl-500 sm:max-w-[240px] md:max-w-[300px] lg:max-w-sm xl:max-w-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi similique officiis sequi, saepe temporibus consequatur.
                corporis reiciendis?
              </p>
              <div className="flex flex-col  space-y-1">
                <h1 className="text-orange-400 min-w-12">Room</h1>
                <Dropdown></Dropdown>
                <h1 className="text-orange-400 min-w-12">Table</h1>
                <Dropdown></Dropdown>
                <h1 className="text-orange-400 min-w-12">Date</h1>
                <Dropdown></Dropdown>
                <h1 className="text-orange-400 min-w-12">Time</h1>
                <Dropdown></Dropdown>
                <p className="text-xs text-orange-500 py-1 sm:py-2">
                  กรุณามาตามเวลาที่จอง
                </p>
                <div className="flex flex-col-reverse sm:flex-row w-full sm:space-x-2">
                  <button className="w-full bg-orange-400 min-w-12 rounded-sm p-1 text-pearl-50 hover:bg-orange-500 ">
                    จองและชำระเงิน
                  </button>
                  <button className="w-full bg-pearl-50 min-w-12 rounded-sm p-1 text-orange-400 hover:bg-pearl-200 mb-2 sm:mb-0">
                    จองด้วย Point
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
