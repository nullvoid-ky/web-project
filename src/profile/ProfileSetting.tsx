import ProfileSection from "./ProfileSection";
import "./ProfileSetting.css";
import { useState } from "react";
import TransactionSection from "./TransactionSection";
import PointSection from "./PointSection";
import SettingSection from "./SettingSection";
export default function ProfileSetting() {
  const [isPic, setIsPic] = useState(false);
  const [page, setPage] = useState(0);

  function handlePic() {
    setIsPic(!isPic);
  }
  function handlePage(num:number) {
    setPage(num);
  }
    let Component;
    switch (page) {
    case 0:
      Component = ProfileSection;
      break;
    case 1:
      Component = PointSection;
      break;
    case 2:
      Component = TransactionSection;
      break;
    case 3:
      Component = SettingSection;
      break;
    default:
      Component = ProfileSection;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row h-160 xl:h-[1000px] 2xl:h-[1200px] bg-midnight-600  shadow-md shadow-midnight-900 bg-opacity-85">
        <div className="flex flex-row md:flex-col h-20 md:h-full md:w-60 lg:w-80 xl:w-144 2xl:w-200 bg-midnight-600 text-pearl-50 shadow-md shadow-midnight-900 bg-opacity-85">
          <div className="hidden md:flex flex-col h-48 items-center justify-center my-4">
            <img src="" alt="" className="h-32 w-32 lg:bg-yellow-500 bg-red-300 rounded-full" />
            <h2 className="text-sm md:text-base lg:text-xl xl:text-3xl font-bold my-2">Thanatchaya Toom-ariya</h2>
            {/* 25char limits */}
          </div>
          <nav
            className="text-sm md:text-base lg:text-lg xl:text-2xl  flex w-full h-full md:pl-4 md:pt-4 xl:pt-0 items-center md:items-start flex-row md:flex-col justify-around md:justify-start
          "
          >
            <div onClick={()=>handlePage(0)} className="flex nav-item justify-center items-center h-full md:h-12 w-1/4 md:w-full ">Profile</div>
            <div onClick={()=>handlePage(1)} className="flex nav-item justify-center items-center h-full md:h-12 w-1/4 md:w-full ">Point</div>
            <div onClick={()=>handlePage(2)} className="flex nav-item justify-center items-center h-full md:h-12 w-1/4 md:w-full ">Transaction</div>
            <div onClick={()=>handlePage(3)} className="flex nav-item justify-center items-center h-full md:h-12 w-1/4 md:w-full ">Other</div>
            <div  className="text-orange-400 flex nav-item justify-center items-center h-full md:h-12 w-1/4 md:w-full ">Log Out</div>
          </nav>
        </div>
        <div className=" text-pearl-50 bg-midnight-700 bg-opacity-60 w-full h-[calc(100%-80px)] md:w-[calc(100%-240px)] md:h-full">
          <Component />
        </div>
      </div>
    </>
  );
}

// <div className="flex flex-col xl:flex-row w-full h-128 bg-orange-100 rounded-lg shadow-lg">
//         <div className="py-2 xl:py-0 xl:h-full w-full xl:w-2/5 flex flex-row-reverse  xl:flex-col xl:items-center bg-orange-50 rounded-lg">
//           <div className="flex  flex-row-reverse xl:flex-col items-center w-full ">
//             <img
//               onClick={handlePic}
//               className="rounded-full xl:mb-4 max-w-8 xl:max-w-52 mx-4 xl:mx-0 cursor-pointer  xl:mt-8"
//               src="https://picsum.photos/200/200"
//               alt=""
//             />
//             <h1 className="text-sm xl:text-2xl font-bold mb-0 ">
//               Thanatchaya Toom-ariya
//             </h1>
//             <h1 className="text-sm xl:text-lg mb-0 xl:mb-4 mr-4 xl:mr-0">
//               ttoomari
//             </h1>
//             <hr className="hidden xl:block w-full mb-4" />
//           </div>
//           <ul className="hidden xl:flex xl:nav-list xl:flex-col xl:w-full py-2 xl:py-0 xl:mx-8 space-x-2 xl:space-x-0 xl:space-y-4">
//             <li className="nav-item xl:px-8">Profile</li>
//             <li className="nav-item xl:px-8">Transaction</li>
//             <li className="nav-item xl:px-8 hover:text-red-500">Log Out</li>
//           </ul>
//         </div>
//         <div className="content flex flex-col  w-full xl:w-3/5 h-full xl:h-full rounded-b-lg ">
//           <ProfileSection></ProfileSection>
//           <TransactionSection></TransactionSection>
//         </div>
//       </div>
//       <div
//         onClick={handlePic}
//         className={`fixed justify-center items-center  inset-0 z-[9999] bg-[#00000088] w-screen h-screen ${
//           isPic ? "flex" : "hidden"
//         }`}
//       >
//         <img
//           className="rounded-full h-[200px] xl:h-[300px]"
//           src="https://picsum.photos/200/200"
//           alt=""
//         />
//       </div>
