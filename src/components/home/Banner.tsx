export default function Banner() {
  return (
    <>
    <header>
    <h1 className="text-4xl font-bold text-slate-700 mb-16">Recommend</h1>
    </header>
      <div className="flex flex-row w-full h-96 rounded-md mb-32 bg-[url('https://i.ebayimg.com/images/g/hrsAAOSwQhNlbipp/s-l1600.jpg')] bg-center bg-cover shadow-lg">
        <div className="flex w-full bg-red-50 blur-right "></div>
        <div className="absolute">
          <div className="flex flex-col p-16 h-96 w-full justify-center">
            <h1 className="text-4xl font-bold mb-2">
              Im The Boss
            </h1>
            <button className=" max-w-64 bg-red-900 p-4 text-white rounded-lg">Play</button>
          </div>
        </div>
      </div>
    </>
  );
}
