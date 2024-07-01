import ScrollItem from "./ScollItem";
import "./ScrollContent.css";

export default function ScrollContent() {
  return (
    <div className="">
        <header>
            <h1 className="text-lg sm:text-4xl font-bold text-slate-700 sm:mb-2">Games</h1>
        </header>
      <div className="flex flex-row w-full h-40 sm:h-128 py-2 pl-0 sm:pl-0 sm:p-12  overflow-x-scroll rounded-lg list box-border overflow-y-hidden">
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
