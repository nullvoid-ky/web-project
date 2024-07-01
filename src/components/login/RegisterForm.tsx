import Form from "../../utils/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeButtonOverlay from "./HomeButtonOverlay";
// use State สำหรับเปลี่ยนค่าที่เกิดขึ้นทันทีในเว็บ

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [displayname, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [tel, setTel] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const navigate = useNavigate();
  async function handleSubmit() {
    try {
      if (password !== repassword) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
      }
      await axios
        .post("http://localhost:8080/api/auth/register", {
          displayname: displayname ? displayname : username,
          username: username,
          email: email,
          password: password,
          tel: tel,
          birthdate: birthdate,
        })
        .then((res) => {
          console.log(res.data);
          alert("สมัครสมาชิกสำเร็จ");
          navigate("/login");
        });
    } catch (error) {
      console.log(error);
      alert("ไม่สามารถสมัครสมาชิกได้");
    }
  }
  return (
    <>
      <div className="flex flex-col h-full w-200  rounded-xl">
      <HomeButtonOverlay/>
        <div className="h-40 bg-red-600 rounded-xl my-4"></div>

        <div className="bg-white rounded-xl mb-2">
          <div className=" rounded-t-lg h-2 w-full bg-red-500"></div>
          <div className="flex flex-col p-8 py-4">
            <header className="text-3xl">สมัครสมาชิก</header>
            <p className="mt-2 text-l text-slate-700">
              <p>
                เข้าร่วมมาเป็นหนึ่งเดียวกับพวกเรา สมัครสมาชิกฟรีไม่มีค่าใช้จ่าย
              </p>
              <p>เพื่อเข้าสู่ระบบใช้งานกับแพลตฟอร์มของพวกเรา</p>
              <p>และสามารถใช้งานได้อย่างไม่มีข้อจำกัด !</p>
            </p>
            <hr className=" my-2" />
            <p className="text-red-700 ">* ระบุว่าเป็นคําถามที่จําเป็น</p>
          </div>
        </div>

        <Form
          label="ชื่อบัญชีผู้ใช้"
          subtext="ชื่อบัญชีสำหรับการแสดงผลด้วย และไม่สามารถแก้ไขได้"
          type="text"
          placeholder="คำตอบของคุณ"
          required={true}
          inputClass="justify-center w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-red-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setUsername(e.target.value)}
        />

        <Form
          label="อีเมล"
          subtext=""
          type="email"
          placeholder="คำตอบของคุณ"
          required={true}
          inputClass="justify-center w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-red-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setEmail(e.target.value)}
        />

        <Form
          label="รหัสผ่าน"
          subtext=""
          type="password"
          placeholder="คำตอบของคุณ"
          required={true}
          inputClass="justify-center w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-red-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setPassword(e.target.value)}
        />

        <Form
          label="ยืนยันรหัสผ่าน"
          subtext=""
          type="password"
          placeholder="คำตอบของคุณ"
          required={true}
          inputClass="justify-center w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-red-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setRePassword(e.target.value)}
        />

        <Form
          label="ชื่อแสดงผล"
          subtext="ชื่อแสดงผลในนามทั่วไป สามารถแก้ไขได้ในภายหลังได้"
          type="text"
          placeholder="คำตอบของคุณ"
          required={false}
          inputClass="justify-center w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-red-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setDisplayName(e.target.value)}
        />

        <Form
          label="เบอร์มือถือ"
          subtext="อยากแอบขอเบอร์ ไม่ได้ใช้ทำไร อิอิ"
          type="tel"
          placeholder="คำตอบของคุณ"
          required={false}
          inputClass="justify-center w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-red-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setTel(e.target.value)}
        />

        <Form
          label="วันเกิด"
          //   subtext="ชื่อบัญชีสำหรับการแสดงผลด้วย ไม่สามารถแก้ไขได้แต่สามารถไปแก้ไขชื่อสำหรับการมองเห็นในภายหลังได้"
          type="date"
          placeholder="คำตอบของคุณ"
          required={false}
          inputClass="justify-center w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] text-stone04 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-red-700 ease-in-out duration-75 "
          labelClass="text-stone04 text-[18px] font-[700] mt-8"
          pClass="my-2 text-[14px] text-slate-500"
          func={(e) => setBirthDate(e.target.value)}
        />
        <button
          className="bg-red-700 text-white rounded-md p-2 w-[72px] mt-2"
          onClick={handleSubmit}
        >
          ส่ง
        </button>
        <footer className="flex flex-col h-full mb-8">
          <div className="text-slate-600 w-full h-4 text-[12px] my-4">
            ห้ามส่งรหัสผ่านใช้งานจริงใน Kanyok Form
          </div>
          <div className="flex justify-center text-slate-600 w-full h-4 text-[12px] my-2">
            เนื้อหานี้มิได้ถูกสร้างขึ้นหรือรับรองโดย Kanyok รายงานการละเมิด -
            ข้อกำหนดในการให้บริการ - นโยบายความเป็นส่วนตัว
          </div>
          <div className="flex justify-center text-slate-600 w-full h-4 text-[20px] mt-1 mb-4">
            Kanyok ฟอร์ม
          </div>
        </footer>
      </div>
    </>
  );
}
