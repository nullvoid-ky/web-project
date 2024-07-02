export default function Footer() {
  return (
    <>
      <footer className=" relative bottom-0 h-48 w-full bg-orange-300 rounded-t-xl flex flex-col justify-center items-center">
      <div className="w-36">
      <img
          src="/src/assets/logo-xl.png"
          alt=""
        />
      </div>
        <div className="flex flex-row justify-center space-x-2 text-lg text-slate-800">
            <a 
                className="w-8 h-8 bg-white flex items-center justify-center rounded-full"
                
                href="https://github.com/nullvoid-ky" target="_blank">
              <img
                className="w-4 h-4"
                src="/src/assets/github-icon.svg"
                alt=""
              />
            </a>
            <a 
                className="w-8 h-8 bg-white flex items-center justify-center rounded-full"
                href="https://www.instagram.com/kanyok.db8r/" target="_blank">
              <img
                className="w-4 h-4"
                src="/src/assets/instagram-icon.svg"
                alt=""
              />
            </a>
            <a 
                className="w-8 h-8 bg-white flex items-center justify-center rounded-full"
                href="https://www.youtube.com/@nullvoid-ky" target="_blank">
              <img
                className="w-4 h-4 "
                src="/src/assets/youtube-icon.svg"
                alt=""
              />
            </a>
        </div>
        <div className=" text-lg text-slate-800">
          kanyok boardGame
        </div>
        <div className=" text-sm text-slate-500">nullvoid-ky</div>
      </footer>
    </>
  );
}
