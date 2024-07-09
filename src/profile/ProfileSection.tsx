import { useState } from "react";
import Form from "../utils/Form";
export default function ProfileSection() {
  const [isEdit, setIsEdit] = useState(false);
  function handleEdit() {
    setIsEdit(!isEdit);
  }
  ("");
  return (
    <div className="text-pearl-50">
      <div className="flex justify-end p-4 pb-1">
        <button
          onClick={handleEdit}
          className={`sticky px-4 py-1 rounded-xl ${
            isEdit
              ? "bg-pearl-50 text-orange-500"
              : "bg-orange-500 text-pearl-50"
          }`}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
      </div>
      <div className="flex flex-col p-16 pt-0 text-xl">
      <div className="mb-4">
          <Form
            label="ชื่อแสดงผล"
            subtext=""
            type="text"
            placeholder=">"
            required={false}
            inputClass={`w-4/5 xl:w-96 placeholder:absolute placeholder:left-0 pl-3  focus:outline-none box-border border-b-[1px] bg-transparent placeholder:text-pearl-700 text-[10px] sm:text-xs lg:text-xl  ${
              isEdit ? "flex" : "hidden"
            }`}
            labelClass="text-base sm:text-lg lg:text-3xl"
            pClass=""
            func={(e) => setUsername(e.target.value)}
          />
          <h1
            className={`border-b-[1px] border-transparent text-[10px] sm:text-xs lg:text-xl ${
              isEdit ? "hidden" : "flex"
            }`}
          >
            Thanatchaya Toom-ariya
          </h1>
        </div>
        <div className="mb-4">
          <Form
            maxLength={25}
            label="ชื่อแสดงผล"
            subtext=""
            type="text"
            placeholder=">"
            required={false}
            inputClass={`w-4/5 xl:w-96 placeholder:absolute placeholder:left-0 pl-3  focus:outline-none box-border border-b-[1px] bg-transparent placeholder:text-pearl-700 text-[10px] sm:text-xs lg:text-xl  ${
              isEdit ? "flex" : "hidden"
            }`}
            labelClass="text-base sm:text-lg lg:text-3xl"
            pClass=""
            func={(e) => setUsername(e.target.value)}
          />
          <h1
            className={`border-b-[1px] border-transparent text-[10px] sm:text-xs lg:text-xl ${
              isEdit ? "hidden" : "flex"
            }`}
          >
            Thanatchaya Toom-ariya
          </h1>
        </div>
        <div className="mb-4">
          <Form
            label="ชื่อแสดงผล"
            subtext=""
            type="text"
            placeholder=">"
            required={false}
            maxLength=""
            inputClass={`w-4/5 xl:w-96 placeholder:absolute placeholder:left-0 pl-3  focus:outline-none box-border border-b-[1px] bg-transparent placeholder:text-pearl-700 text-[10px] sm:text-xs lg:text-xl  ${
              isEdit ? "flex" : "hidden"
            }`}
            labelClass="text-base sm:text-lg lg:text-3xl"
            pClass=""
            func={(e) => setUsername(e.target.value)}
          />
          <h1
            className={`border-b-[1px] border-transparent text-[10px] sm:text-xs lg:text-xl ${
              isEdit ? "hidden" : "flex"
            }`}
          >
            Thanatchaya Toom-ariya
          </h1>
        </div>
      </div>
    </div>
  );
}

// inputClass=" bg-pearl-400 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
// labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
// pClass="my-2 text-midnight-50 text-[14px]"
