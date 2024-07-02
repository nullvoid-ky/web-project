import "./BoardgameTable.css";

type BoardgameTableType = {
  number: number;
  time: string;
  valid: boolean;
};

export default function BoardgameTable({
  number,
  time,
  valid,
}: BoardgameTableType) {
  return (
    <div
      key={number}
      className={`flex 
      ${valid ? "bg-orange-300 table-item-false cursor-not-allowed" : "bg-white table-item"}  
      items-center p-4 h-16 text-xs lg:text-lg rounded-lg shadow-md box-border cursor-pointer`}
    >
      
      <div className="plus fixed  w-full h-full pr-8">
        <div className={`flex justify-end items-center w-full h-full 
        md:before:bg-orange-300 md:before:w-[calc(100%)] md:before:h-16 md:before:absolute 
        md:before:rounded-lg md:before:opacity-65 md:before:-z-10 md:before:border-2 md:before:border-t-4
        md:before:border-white
 z-20
        md:after:bg-white md:after:blur-bottom-2 md:after:w-[calc(100%)] md:after:h-16 md:after:absolute md:after:rounded-lg md:after:opacity-65 md:after:-z-[9] 
          `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`hidden md:block z-20 `}
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
      <div className="z-10">
        <span className="">T{number + 1} </span>
        <span
          className={`flex w-full text-xs ${
            number % 6 <= 2 ? "" : "text-red-500"
          }`}
        >
          {number % 6 <= 2 ? "" : `${time}`}
        </span>
      </div>
    </div>
  );
}
