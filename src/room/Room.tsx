type RoomType = {
  name: string;
};

export default function Room({ name }: RoomType) {
  const time = "14:00:23";
  return (
    <>
      <div className="flex flex-col items-center sm:items-start pb-4 px-4 sm:pb-16 sm:px-16 w-full sm:h-[80vh] bg-orange-200 shadow-md rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-slate-700 my-8">{name}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-8 gap-4  w-full h-[calc(100%-132px)] ">
          {Array.from({ length: 40 }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center p-4 h-16 text-xs sm:text-lg rounded-lg shadow-md box-border cursor-pointer ${
                index % 6 <= 2 ? "bg-white" : "bg-orange-300"
              }`}
            >
              <div>
                <span>T{index + 1}</span>
                <span
                  className={`flex w-full text-xs ${
                    index % 6 <= 2 ? "" : "text-red-500"
                  }`}
                >
                  {index % 6 <= 2 ? "" : `${time}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
