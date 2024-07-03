import "./Home.css"
export default function Banner() {
  return (
    <>
      <div className="flex flex-row w-full h-[calc(40dvh-48px)] sm:h-96 sm:mb-32 bg-[url('https://i.ebayimg.com/images/g/hrsAAOSwQhNlbipp/s-l1600.jpg')] bg-center bg-cover shadow-xl shadow-[#FAFAFA22] sm:rounded-3xl">
        <div className="flex w-full bg-midnight-300 blur-bottom sm:blur-right sm:rounded-3xl"></div>
        <div className="absolute rounded-sm">
          <div className=" flex flex-col sm:p-16 h-[calc(40dvh-48px)] sm:h-96 w-[100vw] sm:w-full justify-center items-center sm:items-start">
          <h5 className="flex text-xs sm:text-base font-bold  text-[#FD4058]">
              Recommend
            </h5>
            <h1 className="flex text-2xl sm:text-4xl font-bold mb-2 text-pearl-200">
              Im The Boss
            </h1>
            <button className="bigger flex max-w-64 bg-[#F02038] border-neutral-700 hover:border-neutral-600 border-[1px] w-24 sm:w-32 text-center items-center justify-center p-2 sm:p-4 text-pearl-400 rounded-lg hover:bg-[#FF3246]">
             เล่นเลย
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
