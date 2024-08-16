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
        <div className="flex w-2/5 items-center pl-2">
          <div className="hidden lg:flex py-1 ml-4">
            <Link to="/" className="flex justify-center items-center">
              <img
                className="min-h-2 max-h-10"
                src="/src/assets/logo-icon-nav.png"
                alt="logo"
              />
            </Link>
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
                className="hover:text-white  tranZ flex px-6 justify-center box-border p-4 text-pearl-50"
              >
                Home
              </Link>
              <Link
                to="/boardgame"
                className="hover:text-white  tranZ flex px-6 justify-center box-border p-4 text-pearl-50"
              >
                Boardgames
              </Link>
              <Link
                to="/about"
                className="hover:text-white  tranZ flex px-6 justify-center box-border p-4 text-pearl-50"
              >
                About
              </Link>
              {/* <Link
                to="/login"
                className=" hover:text-white text-orange-50 tranZ flex px-6 justify-center box-border p-4 text-pearl-50"
              >
                Login
              </Link> */}
              <div className="text-pearl-50 flex justify-center items-center box-border p-4">
                <div className="flex items-center  tranZ justify-center px-4">
                  <div className="text-xs flex items-center justify-center  w-4 h-4 bg-green-600 rounded-full mx-2 ">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="18" cy="18" r="18" fill="#16A34A" />
                      <path
                        d="M16.7955 26.8182V8.63636H17.9602V26.8182H16.7955ZM12.7614 25V10.4545H17.8466C18.8598 10.4545 19.6955 10.6297 20.3537 10.9801C21.0118 11.3258 21.5019 11.7921 21.8239 12.3793C22.1458 12.9616 22.3068 13.608 22.3068 14.3182C22.3068 14.9432 22.1955 15.4593 21.973 15.8665C21.7552 16.2737 21.4664 16.5956 21.1065 16.8324C20.7514 17.0691 20.3655 17.2443 19.9489 17.358V17.5C20.3939 17.5284 20.8414 17.6847 21.2912 17.9688C21.741 18.2528 22.1174 18.66 22.4205 19.1903C22.7235 19.7206 22.875 20.3693 22.875 21.1364C22.875 21.8655 22.7093 22.5213 22.3778 23.1037C22.0464 23.6861 21.5232 24.1477 20.8082 24.4886C20.0933 24.8295 19.1629 25 18.017 25H12.7614ZM14.5227 23.4375H18.017C19.1676 23.4375 19.9844 23.215 20.4673 22.7699C20.955 22.3201 21.1989 21.7756 21.1989 21.1364C21.1989 20.6439 21.0734 20.1894 20.8224 19.7727C20.5715 19.3513 20.214 19.0152 19.75 18.7642C19.286 18.5085 18.7367 18.3807 18.1023 18.3807H14.5227V23.4375ZM14.5227 16.8466H17.7898C18.3201 16.8466 18.7983 16.7424 19.2244 16.5341C19.6553 16.3258 19.9962 16.0322 20.2472 15.6534C20.5028 15.2746 20.6307 14.8295 20.6307 14.3182C20.6307 13.679 20.4081 13.1368 19.9631 12.6918C19.518 12.242 18.8125 12.017 17.8466 12.017H14.5227V16.8466Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-pearl-400">20.00</p>
                </div>
                <div className="flex items-center  tranZ justify-center px-4">
                  <div className="text-xs flex items-center justify-center  w-4 h-4 bg-orange-500 rounded-full mx-2">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="18" cy="18" r="18" fill="#F97316" />
                      <path
                        d="M13.7614 25V10.4545H18.6761C19.8172 10.4545 20.75 10.6605 21.4744 11.0724C22.2036 11.4796 22.7434 12.0312 23.0938 12.7273C23.4441 13.4233 23.6193 14.1998 23.6193 15.0568C23.6193 15.9138 23.4441 16.6927 23.0938 17.3935C22.7481 18.0942 22.2131 18.6529 21.4886 19.0696C20.7642 19.4815 19.8362 19.6875 18.7045 19.6875H15.1818V18.125H18.6477C19.429 18.125 20.0563 17.9901 20.5298 17.7202C21.0033 17.4503 21.3466 17.0857 21.5597 16.6264C21.7775 16.1624 21.8864 15.6392 21.8864 15.0568C21.8864 14.4744 21.7775 13.9536 21.5597 13.4943C21.3466 13.035 21.0009 12.6752 20.5227 12.4148C20.0445 12.1496 19.41 12.017 18.6193 12.017H15.5227V25H13.7614Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-orange-400">183</p>
                </div>
                <Link to="/profile">
                  <img
                    src=""
                    alt="a"
                    className="w-8 h-8 rounded-full bg-pearl-50 "
                  />
                </Link>
              </div>
            </ul>
          </div>
          <Link
            to="/profile"
            className=" text-pearl-50 sm:flex lg:hidden justify-center items-center box-border p-4"
          >
            <div className="hidden sm:flex items-center justify-center px-4">
              <div className="text-xs flex items-center justify-center  w-4 h-4 bg-green-600 rounded-full mx-2 ">
                ฿
              </div>
              <p className="text-pearl-400">20.00</p>
            </div>
            <div className="hidden sm:flex items-center justify-center px-4">
              <div className="text-xs flex items-center justify-center  w-4 h-4 bg-orange-500 rounded-full mx-2">
                P
              </div>
              <p className="text-orange-400">183</p>
            </div>
            <img src="" alt="a" className="w-8 h-8 rounded-full bg-pearl-50 " />
          </Link>
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
            <Link
              to="/"
              className="flex w-full justify-center box-border p-4 text-pearl-50"
            >
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
            {/* <Link
              to="/login"
              className="flex w-full justify-center box-border p-4 text-pearl-50"
            >
              Login
            </Link> */}
            <Link
              to="/profile"
              className="flex w-full justify-center box-border p-4 text-pearl-50"
            >
              Profile
            </Link>
            <hr className="w-5/6  border-midnight-200" />
          </ul>
        </div>
      </div>
    </>
  );
}
