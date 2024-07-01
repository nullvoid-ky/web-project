import ScrollItem from "./ScollItem";
import "./ScrollContent.css";

export default function ScrollContent() {
  return (
    <div className="">
        <header>
            <h1 className="text-4xl font-bold text-slate-700 mb-2">Games</h1>
        </header>
      <div className="flex flex-row w-full h-72 sm:h-128 p-12 pl-0 overflow-x-scroll rounded-lg list box-border overflow-y-hidden">
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
      </div>
    </div>
  );
}
