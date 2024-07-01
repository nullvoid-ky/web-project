import ScrollItem from "./ScollItem";
export default function ScrollContent() {
  return (
    <>
      <div className="flex flex-row bg-red-400 w-full h-72 p-8 overflow-x-scroll rounded-lg">
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
      </div>
    </>
  );
}
