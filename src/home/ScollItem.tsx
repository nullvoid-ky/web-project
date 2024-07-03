
import Topic from "./Topic";
export default function ScrollItem() {
  return (
    <div className="item flex-shrink-0 w-40 sm:w-96 h-80 bg-white mx-1 sm:mx-4 rounded-sm shadow-md overflow-hidden">
      <img
        className="w-full h-2/3 object-cover rounded-sm"
        src="https://picsum.photos/200/300"
        alt=""
      />
      <div className="flex flex-col py-2 px-4 box rounded-lg">
        <h1 className="text-sm sm:text-2xl text-slate-700">
          Werewolf Ultimate
        </h1>
        <li className="hidden sm:flex flex-row my-1">
          <Topic text="Multi" />
          <Topic text="Survival" />
          <Topic text="Psycology" />
        </li>
        <p className=" text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ut
          tenetur repellat voluptatibus
        </p>
      </div>
    </div>
  );
}
