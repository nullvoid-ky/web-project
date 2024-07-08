type InputSearchType = {
    width:string
}

export default function InputSearch({width}:InputSearchType) {
  return (
    <div className={`flex ${width ? `${width}` : "w-60"}  flex-row-reverse`}>
      <input
        className={`w-full h-6 sm:h-10 px-2 sm:px-6 bg-opacity-40 bg-midnight-50 text-[8px] sm:text-sm text-pearl-50 focus:outline-1 focus:outline-pearl-800 focus:outline-double rounded-lg focus:bg-midnight-300`}
        type="text"
        placeholder="ค้นหาข้อมูล"
      />
      <button className="absolute h-6 sm:h-10 w-12 sm:w-24 bg-orange-500 text-[8px] sm:text-sm text-pearl-50 rounded-lg  hover:bg-orange-600 focus:outline-1 focus:outline-pearl-800 focus:outline-double ">
        ค้นหา
      </button>
    </div>
  );
}
