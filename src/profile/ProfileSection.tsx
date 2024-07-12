import { useState } from "react";
import EditObject from "./EditObject";
export default function ProfileSection() {
  const [isEdit, setIsEdit] = useState(false);
  function handleEdit() {
    setIsEdit(!isEdit);
  }
  return (
    <div className="text-pearl-50">
      <div className="flex justify-end p-4 pb-1">
        <button
          onClick={handleEdit}
          className={`sticky px-4 py-1 mr-2 rounded-xl text-orange-500 bg-pearl-50 ${
            isEdit ? "flex" : "hidden"
          }`}
        >
          Cancel
        </button>

        <button
          onClick={handleEdit}
          className={`sticky px-4 py-1 rounded-xl bg-orange-500 text-pearl-50 `}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
      </div>
      <div className="flex flex-col p-16 pt-0 text-xl overflow-y-scroll ">
      <EditObject
          topic="ชื่อแสดงผล"
          value="Thanatchaya Toom-ariya"
          isEdit={isEdit}
          type="text"
        />
         <EditObject
          topic="ชื่อแสดงผล"
          value="Thanatchaya Toom-ariya"
          isEdit={isEdit}
          type="text"
        />
         <EditObject
          topic="ชื่อแสดงผล"
          value="Thanatchaya Toom-ariya"
          isEdit={isEdit}
          type="text"
        />
         <EditObject
          topic="ชื่อแสดงผล"
          value="Thanatchaya Toom-ariya"
          isEdit={isEdit}
          type="text"
        />
         <EditObject
          topic="ชื่อแสดงผล"
          value="Thanatchaya Toom-ariya"
          isEdit={isEdit}
          type="text"
        />
        <EditObject
          topic="เบอร์โทร"
          value="0614019599"
          isEdit={isEdit}
          type="tel"
        />
        <EditObject
          topic="เบอร์โทร"
          value="0614019599"
          isEdit={isEdit}
          type="tel"
        />
        <EditObject
          topic="เบอร์โทร"
          value="0614019599"
          isEdit={isEdit}
          type="tel"
        />
        <EditObject
          topic="วันเกิด"
          value="15/10/2004"
          isEdit={isEdit}
          type="date"
        />
      </div>
    </div>
  );
}

// inputClass=" bg-pearl-400 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
// labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
// pClass="my-2 text-midnight-50 text-[14px]"
