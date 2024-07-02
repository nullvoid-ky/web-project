import BoardgameTable from "./BoardgameTable";

type RoomType = {
  name: string;
};

export default function Room({ name }: RoomType) {
  const time = "14:00:23";
  return (
    <>
      <div className="flex flex-col items-center lg:items-start pb-4 px-4 lg:pb-16 lg:px-16 w-full lg:h-[80vh] bg-orange-200 shadow-md rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-slate-700 my-8">{name}</h2>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4  w-full h-[calc(100%-132px)] ">
          {Array.from({ length: 40 }).map((_, index) => (
            <BoardgameTable number={index} time={time} valid={index % 6 > 2} />
          ))}
        </div>
      </div>
    </>
  );
}
