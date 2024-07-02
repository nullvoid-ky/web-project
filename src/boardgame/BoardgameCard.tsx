import Topic from "../home/Topic";
import "./AnimationCard.css";
export default function BoardgameCard() {
  return (
    <div className="item flex flex-row bg-white rounded-lg p-0 shadow-md">
      <div className="w-32">
        <img className="h-full rounded-lg rounded-r-3xl" src="https://picsum.photos/400/400" alt="" />
      </div>

      <div className="flex flex-col py-2 box rounded-lg px-4">
        <h1 className="text-sm sm:text-2xl text-slate-700">
          Werewolf Ultimate
        </h1>

        <li className="flex flex-row mb-2 my-1 flex-wrap">
          <Topic text="Multi" />
          <Topic text="Survival" />
          <Topic text="Psycology" />
        </li>
      </div>
    </div>
  );
}
