export default function ScrollItem() {
  return (
    <>
      <div className="item flex-shrink-0 w-72 sm:w-96 h-full sm:h-2/3 max-h-80 bg-white mx-4 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-2/3 object-cover rounded-lg"
          src="https://picsum.photos/200/300"
          alt=""
        />
        <div className="flex flex-col py-2 px-4 box rounded-lg">
          <h1 className="text-sm sm:text-2xl text-slate-700">
            Werewolf Ultimate
          </h1>
          <li className="flex flex-row space-x-2 my-1">
            <ul className="text-xs sm:text-base text-white bg-red-500 px-2 sm:px-4 rounded-xl flex-shrink-0">
              Tatics
            </ul>
            <ul className="text-xs sm:text-base text-white bg-red-500 px-2 sm:px-4 rounded-xl flex-shrink-0">
              Tatics
            </ul>
            <ul className="text-xs sm:text-base text-white bg-red-500 px-2 sm:px-4 rounded-xl flex-shrink-0">
              Tatics
            </ul>
          </li>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ut
            tenetur repellat voluptatibus
          </p>
        </div>
      </div>
    </>
  );
}
