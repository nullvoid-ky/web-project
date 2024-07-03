
import Topic from "./Topic";
export default function ScrollItem() {
  return (
    <div className="item flex-shrink-0 w-40 sm:w-96 sm:h-80 bg-midnight-800 mx-1 sm:mx-3 rounded-sm shadow-md shadow-midnight-900 overflow-hidden">
      <img
        className="w-full h-2/3 object-cover rounded-sm"
        src="https://picsum.photos/200/300"
        alt=""
      />
      <div className="flex flex-col py-2 pl-3 sm:px-4 box rounded-lg">
        <h1 className="text-xs sm:text-2xl text-pearl-100">
          Werewolf Ultimate
        </h1>
        <li className="hidden sm:flex flex-row my-1">
          <Topic text="Multi" />
          <Topic text="Survival" />
          <Topic text="Psycology" />
        </li>
        <p className=" text-sm text-pearl-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ut
          tenetur repellat voluptatibus
        </p>
      </div>
    </div>
  );
}
