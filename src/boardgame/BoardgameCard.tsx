import Topic from "../utils/Topic";
import "./AnimationCard.css";

type BoardgameCardType = {
  name: string;
  picUrl: string;
  e: Function;
};
export default function BoardgameCard({ name, picUrl, e }: BoardgameCardType) {
  return (
    <>
      {console.log(picUrl)}
      <div className="">
        <div
        onClick={e}
          className={`item flex flex-row  h-44 ${
            picUrl ? `bg-[url(${picUrl})]` : " bg-red-300"
          } rounded-lg p-0 shadow-md 
        after:absolute after:h-44 after:w-full after:bg-midnight-600 after:-left-32 hover:after:translate-x-32 after:duration-500 after:transform after:opacity-0 hover:after:opacity-100 after:z-[40] after:midnight-900 after:blur-right-4 after:delay-150
        [&_.title]:hover:text-pearl-50 [&_.title]:hover:transfrom [&_.title]:hover:translate-x-1 [&_.title]:hover:duration-200 [&_.title]:duration-200 [&_.title]:hover:delay-100 [&_.title]:hover:text-xl `}
        >
          <img className="h-full w-full object-cover object-top rounded-r-lg" src={picUrl} alt="" />
          {/* line 1 div, line 2 after, line 3 hover*/}
          <div className="absolute flex h-44 w-full bg-midnight-900 blur-right-2 rounded-lg"></div>
          <div className="absolute bottom-4 left-4 flex rounded-lg z-50">
            <h1 className="title text-sm sm:text-lg text-pearl-700 ">{name}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
