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
        <div className="flex justify-center items-center w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  stroke-orange-300"
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
      <div>
        <span>T{number + 1}</span>
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
