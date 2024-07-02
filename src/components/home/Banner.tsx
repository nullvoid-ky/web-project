export default function Banner() {
  return (
    <>
      <header id="" className="hidden sm:block">
        <h1 className="text-4xl font-bold text-slate-700 mb-16">Recommend</h1>
      </header>
      <div className="flex flex-row w-full h-[calc(40dvh-48px)] sm:h-96 sm:rounded-md sm:mb-32 bg-[url('https://i.ebayimg.com/images/g/hrsAAOSwQhNlbipp/s-l1600.jpg')] bg-center bg-cover shadow-md">
        <div className="flex w-full bg-orange-50 blur-bottom sm:blur-right  sm:rounded-md"></div>
        <div className="absolute">
          <div className="flex flex-col sm:p-16 h-[calc(40dvh-48px)] sm:h-96 w-[100vw] sm:w-full justify-center items-center sm:items-start sm:rounded-md">
            <h1 className="flex text-2xl sm:text-4xl font-bold mb-2">
              Im The Boss
            </h1>
            <button className="flex max-w-64 bg-orange-900 w-24 sm:w-32 text-center items-center justify-center p-2 sm:p-4 text-white rounded-lg hover:bg-orange-700">
              จองเลย
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
