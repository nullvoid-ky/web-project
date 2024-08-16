// import "./Home.css"
// import WTK from "../assets/Boardgames/Werewolf Ultimate/front.png"
// export default function Banner() {
//   return (
//     <>
//       <div className="flex flex-row w-full h-[calc(40vh-48px)] sm:h-96 sm:mb-32 shadow-xl shadow-[#FAFAFA22] sm:rounded-3xl">
//         <img src={WTK} alt="" className="w-full h-full"/>
//         <div className="flex w-full bg-midnight-300 blur-bottom sm:blur-right sm:rounded-3xl"></div>
//         <div className="absolute rounded-sm">
//           <div className=" flex flex-col sm:p-16 h-[calc(40vh-48px)] sm:h-96 w-[100vw] sm:w-full justify-center items-center sm:items-start">
//           <h5 className="flex text-xs sm:text-lg font-bold mb-1 text-orange-400">
//               Recommend
//             </h5>
//             <h1 className="flex text-2xl sm:text-4xl font-bold mb-4 text-pearl-200">
//               Im The Boss
//             </h1>
//             <button className="bigger flex max-w-64 bg-orange-500 border-neutral-700 hover:border-neutral-600 border-[1px] w-24 sm:w-32 text-center items-center justify-center p-2 sm:p-4 text-pearl-400 rounded-lg hover:bg-orange-600">
//              เล่นเลย
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import "./Home.css"
// import WTK from "../assets/Boardgames/Werewolf Ultimate/front.png"
// export default function Banner() {
//   return (
//     <>
//       <div className="flex flex-row w-full h-[calc(40vh-48px)] sm:h-96 sm:mb-32 shadow-xl shadow-[#FAFAFA22] sm:rounded-3xl">
//         <img src={WTK} alt="" className="w-full h-full"/>
//         <div className="flex w-full bg-midnight-300 blur-right sm:blur-bottom sm:blur-right sm:rounded-3xl"></div>
//         <div className="absolute rounded-sm">
//           <div className=" flex flex-col sm:p-16 h-[calc(40vh-48px)] sm:h-96 w-[100vw] sm:w-full justify-center items-center sm:items-start">
//           <h5 className="flex text-xs sm:text-lg font-bold mb-1 text-orange-400">
//               Recommend
//             </h5>
//             <h1 className="flex text-2xl sm:text-4xl font-bold mb-4 text-pearl-200">
//               Im The Boss
//             </h1>
//             <button className="bigger flex max-w-64 bg-orange-500 border-neutral-700 hover:border-neutral-600 border-[1px] w-24 sm:w-32 text-center items-center justify-center p-2 sm:p-4 text-pearl-400 rounded-lg hover:bg-orange-600">
//              เล่นเลย
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }










// import "./Home.css";
// import banner from "../assets/Boardgames/Dead By Daylight/banner.png";
// export default function Banner() {
//   return (
//     <>
//       <div className="flex flex-row w-full h-[calc(40vh-48px)] sm:h-96 sm:mb-32 sm:shadow-xl sm:shadow-[#FAFAFA22] sm:rounded-3xl">
//         <img
//           src={banner}
//           alt=""
//           className="flex w-[100%] object-cover object-top sm:rounded-3xl"
//         />
//         <div className="absolute rounded-sm box-border ">
//           <div className=" flex flex-col h-[calc(40vh-48px)] sm:h-96 w-[90vw] sm:w-full justify-center items-center sm:items-start">
//             <div className="flex absolute left-0 top-0 h-96 w-screen sm:w-[calc(99vw-160px)]  bg-midnight-900 bg-opacity-75 blur-bottom sm:blur-right  rounded-3xl"></div>
//             <div className="flex w-full h-full">
//             <h5 className="flex absolute text-xs sm:text-lg font-bold w-80 sm:w-100 top-[38%] ml-8  text-orange-400">
//               Recommend
//             </h5>
//             <h1 className="flex absolute text-lg top-[44%] sm:text-4xl font-bold w-80 sm:w-100 md:w-128 lg:w-200 ml-8 ">
//               <span className=" text-pearl-200  overflow-hidden text-ellipsis text-nowrap">
//               WTK War Of The Three Kingdoms
//               </span>
//             </h1>
//             <button className="bigger flex absolute ml-8   bg-orange-500 w-40 sm:w-40 h-10 sm:h-8 items-center justify-center top-[56%] border-neutral-700 hover:border-neutral-600 border-[1px]  text-pearl-400 rounded-lg hover:bg-orange-600">
//               เล่นเลย
//             </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




import "./Home.css";
import banner from "../assets/Boardgames/Dead By Daylight/banner.png";
export default function Banner() {
  return (
    <>
      <div className="flex flex-row w-full h-[calc(40vh-48px)] sm:h-96 sm:mb-32 sm:shadow-xl sm:shadow-[#FAFAFA22] sm:rounded-3xl">
        <img
          src={banner}
          alt=""
          className="flex w-[100%] object-cover object-top sm:rounded-3xl"
        />
        <div className="absolute rounded-sm box-border ">
          <div className=" flex flex-col h-[calc(40vh-48px)] sm:h-96 w-[90vw] sm:w-full justify-center items-center sm:items-start">
            <div className="hidden sm:flex absolute left-0 top-0 h-96 w-full sm:w-[calc(99vw-160px)]  bg-midnight-900 bg-opacity-75 blur-bottom sm:blur-right  rounded-3xl"></div>
            <div className="flex flex-col z-50 justify-center w-full h-full">
            <h5 className="flex  text-xs sm:text-lg sm:mb-[5px] font-bold w-80 sm:w-100 ml-8  text-orange-400">
              Recommend
            </h5>
            <h1 className="flex  text-lg sm:text-4xl sm:mb-[11px] h-8 sm:h-12 font-bold w-80 sm:w-100 md:w-128 lg:w-200 ml-8 ">
              <span className=" text-pearl-200 overflow-hidden text-ellipsis text-nowrap">
              Dead By Daylight
              </span>
            </h1>
            <button className="bigger flex  ml-8   bg-orange-500 w-40 sm:w-40 h-10 sm:h-8 items-center justify-center  border-neutral-700 hover:border-neutral-600 border-[1px]  text-pearl-400 rounded-lg hover:bg-orange-600">
              เล่นเลย
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

