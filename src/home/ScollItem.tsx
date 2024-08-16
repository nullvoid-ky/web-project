"https://picsum.photos/200/300"
import Topic from "../utils/Topic";
type ScrollItemType = {
  name: string
  picUrl: string
  topic: Array<string>
  short: string
}
export default function ScrollItem({name,picUrl,topic,short} : ScrollItemType) {
  return (
    <div className="item flex-shrink-0 w-40 sm:w-96 h-36 sm:h-80 bg-midnight-300 mx-1 sm:mx-3 rounded-sm shadow-md shadow-midnight-900 overflow-hidden">
      <img
        className="w-full h-3/5 object-cover object-top rounded-sm"
        src={picUrl}
        alt=""
      />
      <div className="flex flex-col py-2 px-2 sm:px-4 box rounded-lg">
        <h1 className="text-xs sm:text-2xl text-pearl-100 overflow-hidden text-ellipsis text-nowrap">
          {name}
        </h1>
        <li className="flex flex-row my-1">
          <Topic text="Multi" />
          <Topic text="Survival" />
          <Topic text="Psycology" />
        </li>
        <p className=" text-sm text-pearl-700">
          {short}
        </p>
      </div>
    </div>
  );
}
