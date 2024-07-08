import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <nav className="fixed top-0 flex h-12 w-full bg-midnight-800 z-[1000] lg:px-12 border-b-[1px] border-b-midnight-900 shadow-sm shadow-midnight-900">
        <div className="flex w-2/5">
          <div className="hidden lg:flex py-1 ml-4">
            <Link to="/" className="flex justify-center items-center">
              <img
                className="min-h-2 max-h-10"
                src="/src/assets/logo-icon-nav.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex w-1/5">
          <div className="flex lg:hidden py-1">
            <Link to="/" className="flex justify-center items-center">
              <img
                className="min-h-4 max-h-10"
                src="/src/assets/logo-icon-nav.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex w-2/5 items-center justify-end">
          <div className="hidden lg:flex">
            <ul className="pointer-events-auto flex flex-row w-full items-center space-x-4 pr-6">
              <Link
                to="/#"
                className="hover:text-white text-orange-50 tranZ flex px-6 justify-center box-border p-4 text-pearl-50"
              >
                Home
              </Link>
              <Link
                to="/boardgame"
                className="hover:text-white text-orange-50 tranZ flex px-6 justify-center box-border p-4 text-pearl-50"
              >
                Boardgames
              </Link>
              <Link
                to="/about"
                className="hover:text-white text-orange-50 tranZ flex px-6 justify-center box-border p-4 text-pearl-50"
              >
                About
              </Link>
              <Link
                to="/login"
                className="hover:text-white text-orange-50 tranZ flex px-6 justify-center box-border p-4 text-pearl-50"
              >
                Login
              </Link>
            </ul>
          </div>
          <div
            onClick={handleClick}
            className="flex flex-col bg-transparent w-8 h-8 rounded-md border-white border-[1px] justify-center items-center space-y-1 mr-2 hover:bg-midnight-900 cursor-pointer lg:hidden"
          >
            <div className="w-4 h-[2px] bg-white rounded-full "></div>
            <div className="w-4 h-[2px] bg-white rounded-full "></div>
            <div className="w-4 h-[2px] bg-white rounded-full "></div>
          </div>
        </div>
      </nav>

      {isClicked && (
        <div
          onClick={handleClick}
          className="fixed inset-0 z-[490] bg-[#00000055] lg:hidden "
        ></div>
      )}

      <div className="fixed inset-0 z-[500] flex flex-col justify-end pointer-events-none lg:hidden">
        <div
          className={` pointer-events-auto flex flex-col bg-midnight-600 shadow-2xl  w-full h-4/5 rounded-t-xl transition-transform duration-300 ease-in-out transform ${
            isClicked ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ul className=" flex flex-col w-full items-center  pt-6 h-full  ">
            <Link to="/" className="flex w-full justify-center box-border p-4 text-pearl-50">
              Home
            </Link>
            <hr className="w-5/6  border-midnight-200" />
            <Link
              to="/boardgame"
              className="flex w-full justify-center box-border p-4 text-pearl-50"
            >
              Boardgame 
            </Link>
            <hr className="w-5/6  border-midnight-200" />
            <Link
              to="/about"
              className="flex w-full justify-center box-border p-4 text-pearl-50"
            >
              Abouts
            </Link>
            <hr className="w-5/6  border-midnight-200" />
            <Link
              to="/login"
              className="flex w-full justify-center box-border p-4 text-pearl-50"
            >
              Login
            </Link>
            <hr className="w-5/6  border-midnight-200" />
          </ul>
        </div>
      </div>
    </>
  );
}
