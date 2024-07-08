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
      <div className="hidden sm:block">
        <div
          className={`item flex flex-row  h-44 ${
            picUrl ? `bg-[url(${picUrl})]` : " bg-red-300"
          } rounded-lg p-0 shadow-md 
      after:absolute after:h-44 after:w-full after:bg-midnight-600 after:-left-32 hover:after:translate-x-32 after:duration-500 after:transform after:opacity-0 hover:after:opacity-100 after:z-[40] after:midnight-900 after:blur-right-4 after:delay-150
      [&_.title]:hover:text-pearl-50 [&_.title]:hover:transfrom [&_.title]:hover:translate-x-1 [&_.title]:hover:duration-200 [&_.title]:duration-200 [&_.title]:hover:delay-100 [&_.title]:hover:text-xl `}
        >
          <img
            className="h-full w-32 sm:w-full object-cover object-top rounded-lg max-w-40 sm:max-w-none"
            src={picUrl}
            alt=""
          />
          <div className="sm:absolute flex h-44 w-full bg-midnight-900 blur-right-2 rounded-lg"></div>
          <div className="absolute sm:bottom-4 sm:left-4 sm:w-52 flex rounded-lg z-50">
            <h1 className="title mt-36 ml-1 text-sm sm:text-lg text-pearl-50 sm:text-pearl-700 text-nowrap overflow-hidden text-ellipsis sm:text-balance bg-black sm:bg-transparent px-2 bg-opacity-25 w-28 sm:w-100">
              {name}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:hidden">
        <div className="flex bg-black h-36 w-[82vw] rounded-lg [&_.title]:active:text-pearl-50 [&_.title]:active:transfrom [&_.title]:active:translate-x-1 [&_.title]:active:duration-200 [&_.title]:duration-200 [&_.title]:active:delay-100 [&_.title]:active:text-sm">
          <img
            className=" w-full object-cover object-top rounded-lg "
            src={picUrl}
            alt=""
          />
          <div className="absolute w-[82vw] h-36 bg-midnight-900 z-30 rounded-lg blur-right">
          </div>
            
          <div className="absolute text-xs mt-28 pl-4 z-40 pr-3 py-1 text-pearl-700  rounded-r-lg font-bold max-w-44 ">
            <h1 className="title text-ellipsis overflow-hidden text-nowrap">
              {name}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
