import ProfileSection from "./ProfileSection";
import "./ProfileSetting.css";
import { useState } from "react";
import TransactionSection from "./TransactionSection";
export default function ProfileSetting() {
  const [isPic, setIsPic] = useState(false);

  function handlePic() {
    setIsPic(!isPic);
  }

  return (
    <>
      <div className="flex flex-col xl:flex-row w-full h-128 bg-orange-100 rounded-lg shadow-lg">
        <div className="h-12 xl:h-full w-full xl:w-2/5 flex flex-row-reverse  xl:flex-col xl:items-center bg-orange-50 rounded-lg">
          <div className="flex flex-row-reverse xl:flex-col items-center w-full ">
            <img
              onClick={handlePic}
              className="rounded-full xl:mb-4 max-w-8 xl:max-w-52 mx-4 xl:mx-0 cursor-pointer  xl:mt-8"
              src="https://picsum.photos/200/200"
              alt=""
            />
            <h1 className="text-sm xl:text-2xl font-bold mb-0 xl:mb-4 ">
              Thanatchaya Toom-ariya
            </h1>
            <hr className="hidden xl:block w-full mb-4" />
          </div>
          <ul className="hidden xl:flex xl:nav-list xl:flex-col xl:w-full py-2 xl:py-0 xl:mx-8 space-x-2 xl:space-x-0 xl:space-y-4">
            <li className="nav-item xl:px-8">Profile</li>
            <li className="nav-item xl:px-8">Transaction</li>
            <li className="nav-item xl:px-8 hover:text-red-500">Log Out</li>
          </ul>
        </div>
        <div className="content flex flex-col  w-full xl:w-3/5 h-full xl:h-full rounded-b-lg ">
          <ProfileSection></ProfileSection>
          <TransactionSection></TransactionSection>
        </div>
      </div>
      <div
        onClick={handlePic}
        className={`fixed justify-center items-center  inset-0 z-[9999] bg-[#00000088] w-screen h-screen ${
          isPic ? "flex" : "hidden"
        }`}
      >
        <img
          className="rounded-full h-[200px] xl:h-[300px]"
          src="https://picsum.photos/200/200"
          alt=""
        />
      </div>
    </>
  );
}
