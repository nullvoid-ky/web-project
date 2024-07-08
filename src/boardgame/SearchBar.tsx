import InputSearch from "../utils/InputSearch";
import Dropdown from "../utils/Dropdown";

export default function SearchBar() {
  return (
    <>
      <div className="flex w-full items-center h-20 bg-midnight-600 bg-opacity-85 mb-16 rounded-xl px-4 space-x-4">
      <Dropdown width="w-1/5"/>
      <Dropdown width="w-1/5"/>
      <InputSearch width="w-3/5"/>
      </div>
    </>
  );
}
