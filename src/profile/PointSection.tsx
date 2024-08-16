import Form from "../utils/Form";
export default function PointSection() {
  return (
    <div className="h-[480px] xl:h-[500px] 2xl:h-[600px]">
      <div className="flex flex-col items-center">
        <div className="flex justify-end p-4 pb-1 w-full">
          <button
            className={`flex items-center text-lg sticky px-4 py-1 rounded-xl ${"bg-pearl-50 text-green-500"}`}
          >
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
            +
          </button>
        </div>
        <div className="grid grid-cols-4  p-4 gap-2 w-80 lg:w-128 text-xs lg:text-sm">
          <div className="flex flex-col w-full  h-20 bg-orange-400 justify-center items-center rounded-sm">
            <h2>400 P</h2>
            <p>100 บาท</p>
          </div>
          <div className="flex flex-col w-full  h-20 bg-orange-400 justify-center items-center rounded-sm">
            <h2>400 P</h2>
            <p>100 บาท</p>
          </div>
          <div className="flex flex-col w-full  h-20 bg-orange-400 justify-center items-center rounded-sm">
            <h2>400 P</h2>
            <p>100 บาท</p>
          </div>
          <div className="flex flex-col w-full  h-20 bg-orange-400 justify-center items-center rounded-sm">
            <h2>400 P</h2>
            <p>100 บาท</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-5 grid-rows-2 gap-2 p-4 w-80 lg:w-128">
            <div className="flex justify-center items-center">
              <div className="flex bg-orange-200 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex bg-midnight-400 w-12 lg:w-20 h-12 lg:h-20"></div>
            </div>
          </div>
        </div>
            <p>**เมื่อจองเกมครบสิบครั้ง รับเลย 1,000 แต้ม**</p>
            <p>*ทุกๆ 25 บาทจะได้ 20 แต้ม*</p>
      </div>
    </div>
  );
}
