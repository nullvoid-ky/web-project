import { handleClientScriptLoad } from "next/script";
import "./ProfileSetting.css";
import { useState } from "react";
export default function ProfileSetting() {
  const [isPic, setIsPic] = useState(false);

  function handlePic() {
    setIsPic(!isPic);
  }

  return (
    <>
      <div className="flex flex-row w-full h-128 bg-white rounded-lg shadow-lg">
        <div className="h-12 lg:h-full w-full lg:w-2/5 flex flex-row-reverse  lg:flex-col lg:items-center bg-orange-50 rounded-lg">
          <div className="flex flex-row-reverse lg:flex-col items-center w-full ">
            <img
              onClick={handlePic}
              className="rounded-full lg:mb-4 max-w-8 lg:max-w-52 mx-4 lg:mx-0 cursor-pointer  lg:mt-8"
              src="https://picsum.photos/200/200"
              alt=""
            />
            <h1 className="text-sm lg:text-2xl font-bold mb-0 lg:mb-4 ">
              Thanatchaya Toom-ariya
            </h1>
            <hr className="hidden lg:block w-full mb-4" />
          </div>
          <ul className="hidden lg:flex lg:nav-list lg:flex-col lg:w-full py-2 lg:py-0 lg:mx-8 space-x-2 lg:space-x-0 lg:space-y-4">
            <li className="nav-item lg:px-8">Profile</li>
            <li className="nav-item lg:px-8">Transaction</li>
            <li className="nav-item lg:px-8 hover:text-red-500">Log Out</li>
          </ul>
        </div>
        <div className="content"></div>
      </div>
      <div
        onClick={handlePic}
        className={`fixed justify-center items-center  inset-0 z-[9999] bg-[#00000088] w-screen h-screen ${
          isPic ? "flex" : "hidden"
        }`}
      >
        <img
          className="rounded-full h-[200px] lg:h-[300px]"
          src="https://picsum.photos/200/200"
          alt=""
        />
      </div>
    </>
  );
}
