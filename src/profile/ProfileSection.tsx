import Form from "../utils/Form";
import "./ProfileSetting.css";
export default function ProfileSection() {
  return (
    <>
      <div className="flex flex-col p-16 mb-2 xl:mb-0 space-y-8 overflow-y-scroll">
        <h1 className="text-black text-3xl">Profile</h1>
        <Form
          label="Display Name"
          subtext=""
          type="text"
          placeholder="คำตอบของคุณ"
          required={true}
          inputClass="justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setUsername(e.target.value)
          }
        />
        <Form
          label="Display Name"
          subtext=""
          type="text"
          placeholder="คำตอบของคุณ"
          required={true}
          inputClass="justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setUsername(e.target.value)
          }
        />
        <Form
          label="Display Name"
          subtext=""
          type="text"
          placeholder="คำตอบของคุณ"
          required={true}
          inputClass="justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setUsername(e.target.value)
          }
        />
        <Form
          label="Display Name"
          subtext=""
          type="text"
          placeholder="คำตอบของคุณ"
          required={true}
          inputClass="justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setUsername(e.target.value)
          }
        />
      </div>
    </>
  );
}
