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
      <nav className="fixed top-0 flex h-12 w-full bg-orange-400 z-[1000] sm:px-16">
        <div className="flex flex-1">
          <div className="hidden sm:flex py-1 ml-4">
            <img className="" src="/src/assets/logo-icon-nav.png" alt="logo" />
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex sm:hidden py-1">
            <img className="" src="/src/assets/logo-icon-nav.png" alt="logo" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="hidden sm:flex">
            <ul className="pointer-events-auto flex flex-row w-full items-center space-x-4 pr-6">
              <Link to="/#" className="text-white flex w-full justify-center box-border p-4">
                Home
              </Link>
              <Link to="/boardgame"  className="text-white flex w-full justify-center box-border p-4">
                Boardgames
              </Link>
              <Link to="/room"  className="text-white flex w-full justify-center box-border p-4">
                Rooms
              </Link>
              <Link to="/login"  className="text-white flex w-full justify-center box-border p-4">
                Login
              </Link>
            </ul>
          </div>
          <div
            onClick={handleClick}
            className="flex flex-col bg-transparent w-8 h-8 rounded-md border-white border-[1px] justify-center items-center space-y-1 mr-2 hover:bg-orange-700 cursor-pointer sm:hidden"
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
          className="fixed inset-0 z-30 bg-[#00000055] sm:hidden "
        ></div>
      )}

      <div className="fixed inset-0 z-40 flex flex-col justify-end pointer-events-none sm:hidden">
        <div
          className={` pointer-events-auto flex flex-col bg-white w-full h-3/5 rounded-t-lg transition-transform duration-300 ease-in-out transform ${
            isClicked ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ul className=" flex flex-col w-full items-center  pt-6 ">
            <Link to="/" className="flex w-full justify-center box-border p-4">
              Home
            </Link>
            <hr className="w-5/6" />
            <Link
              to="boardgames"
              className="flex w-full justify-center box-border p-4"
            >
              Boardgames
            </Link>
            <hr className="w-5/6" />
            <Link
              to="room"
              className="flex w-full justify-center box-border p-4"
            >
              Rooms
            </Link>
            <hr className="w-5/6" />
            <Link
              to="login"
              className="flex w-full justify-center box-border p-4"
            >
              Login
            </Link>
            <hr className="w-5/6" />
          </ul>
        </div>
      </div>
    </>
  );
}
