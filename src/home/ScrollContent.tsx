import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import ScrollItem from "./ScollItem";
import Werewolf from "../assets/Boardgames/Werewolf Ultimate/front.png";
import Survive from "../assets/Boardgames/Survive/front.png";
import WTK from "../assets/Boardgames/WTK War Of The Three Kingdoms/front.png";
import DBDL from "../assets/Boardgames/Dead By Daylight/front.png";
import { Link } from "react-router-dom";
type ContentType = {
  Category: string;
};
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


const ScrollContent = ({ Category }: ContentType) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollingLeft, setScrollingLeft] = useState(false);
  const [scrollingRight, setScrollingRight] = useState(false);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    if (scrollingLeft) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: -420,
            behavior: "smooth",
          });
        }
      }, 80);
    }
    if (scrollingRight) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 420,
            behavior: "smooth",
          });
        }
      }, 80);
    }
    return () => clearInterval(scrollInterval);
  }, [scrollingLeft, scrollingRight]);

  const dynamicStyles = {
    "--heading-width": `-${96}px`, // X
    "--hover-heading-width": `-${112}px`, // Y
  } as React.CSSProperties;

  return (
    <div className="relative main mb-4 sm:mb-0 bg-midnight-600 bg-opacity-85 p-3 pb-0 sm:pb-8 sm:p-8 shadow-md shadow-midnight-500 rounded-lg">
      <header className="header">
        <h1
          style={dynamicStyles}
          className={`text-lg sm:text-3xl font-bold sm:-mb-2 text-pearl-50
        `}
        >
          {Category}
        </h1>
      </header>
      <div
        ref={scrollContainerRef}
        className="sm:no-scrollbar flex flex-row w-full h-40 sm:h-112 mb-4 sm:mb-0 py-2 pl-0 sm:pl-0 sm:p-12 overflow-x-scroll rounded-lg list box-border overflow-y-hidden"
      >
        {data.map((game) => (
        <Link key={game.id} to={`/boardgame/${game.id}`}>
          <ScrollItem name={game.name} picUrl={game.picUrl} short={"lorem"}
            topic={""}/>
        </Link>
       ))}
      </div>
      <button
        onMouseDown={() => setScrollingLeft(true)}
        onMouseUp={() => setScrollingLeft(false)}
        onMouseLeave={() => setScrollingLeft(false)}
        className="scroll-button left-0"
      >
        {"<"}
      </button>
      <button
        onMouseDown={() => setScrollingRight(true)}
        onMouseUp={() => setScrollingRight(false)}
        onMouseLeave={() => setScrollingRight(false)}
        className="scroll-button right-0"
      >
        {">"}
      </button>
    </div>
  );
};

export default ScrollContent;
