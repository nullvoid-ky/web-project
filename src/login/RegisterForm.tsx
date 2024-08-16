import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "../utils/Form";
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
      <div className="flex flex-col h-full w-4/5 lg:w-200  rounded-xl">
        <div className="h-20 lg:h-40 bg-orange-700 rounded-xl my-4"></div>
        <div className="bg-pearl-200  rounded-xl mb-2">
          <div className=" rounded-t-lg h-2 w-full bg-orange-700"></div>
          <div className="flex flex-col p-8 py-4">
            <header className="text-3xl text-midnight-500">สมัครสมาชิก</header>
            <p className="mt-2 text-l text-midnight-50">
              <p>
                เข้าร่วมมาเป็นหนึ่งเดียวกับพวกเรา สมัครสมาชิกฟรีไม่มีค่าใช้จ่าย
              </p>
              <p>เพื่อเข้าสู่ระบบใช้งานกับแพลตฟอร์มของพวกเรา</p>
              <p>และสามารถใช้งานได้อย่างไม่มีข้อจำกัด !</p>
            </p>
            <hr className="border-pearl-900 my-2" />
            <p className="text-orange-700 ">* ระบุว่าเป็นคําถามที่จําเป็น</p>
          </div>
        </div>

        <Form
          label="ชื่อบัญชีผู้ใช้"
          subtext="ชื่อบัญชีสำหรับการแสดงผลด้วย และไม่สามารถแก้ไขได้"
          type="text"
          placeholder="คำตอบของคุณ"
          required={true}
          contentClass="flex flex-col bg-pearl-200 rounded-xl px-8 pb-4 my-2"
          inputClass=" bg-pearl-200 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
          pClass="my-2 text-midnight-50 text-[14px]"
          func={(e) => setUsername(e.target.value)}
        />

        <Form
          label="อีเมล"
          subtext=""
          type="email"
          placeholder="คำตอบของคุณ"
          required={true}
          contentClass="flex flex-col bg-pearl-200 rounded-xl px-8 pb-4 my-2"
          inputClass=" bg-pearl-200 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
          pClass="my-2 text-midnight-50 text-[14px]"
          func={(e) => setEmail(e.target.value)}
        />

        <Form
          label="รหัสผ่าน"
          subtext=""
          type="password"
          placeholder="คำตอบของคุณ"
          required={true}
          contentClass="flex flex-col bg-pearl-200 rounded-xl px-8 pb-4 my-2"
          inputClass=" bg-pearl-200 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
          pClass="my-2 text-midnight-50 text-[14px]"
          func={(e) => setPassword(e.target.value)}
        />

        <Form
          label="ยืนยันรหัสผ่าน"
          subtext=""
          type="password"
          placeholder="คำตอบของคุณ"
          required={true}
          contentClass="flex flex-col bg-pearl-200 rounded-xl px-8 pb-4 my-2"
          inputClass=" bg-pearl-200 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
          pClass="my-2 text-midnight-50 text-[14px]"
          func={(e) => setRePassword(e.target.value)}
        />

        <Form
          label="ชื่อแสดงผล"
          subtext="ชื่อแสดงผลในนามทั่วไป สามารถแก้ไขได้ในภายหลังได้"
          type="text"
          placeholder="คำตอบของคุณ"
          required={false}
          contentClass="flex flex-col bg-pearl-200 rounded-xl px-8 pb-4 my-2"
          inputClass=" bg-pearl-200 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
          pClass="my-2 text-midnight-50 text-[14px]"
          func={(e) => setDisplayName(e.target.value)}
        />

        <Form
          label="เบอร์มือถือ"
          subtext="อยากแอบขอเบอร์ ไม่ได้ใช้ทำไร อิอิ"
          type="tel"
          placeholder="คำตอบของคุณ"
          required={false}
          contentClass="flex flex-col bg-pearl-200 rounded-xl px-8 pb-4 my-2"
          inputClass=" bg-pearl-200 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
          pClass="my-2 text-midnight-50 text-[14px]"
          func={(e) => setTel(e.target.value)}
        />

        <Form
          label="วันเกิด"
          subtext=""
          type="date"
          placeholder="คำตอบของคุณ"
          required={false}
          contentClass="flex flex-col bg-pearl-200 rounded-xl px-8 pb-4 my-2"
          inputClass=" bg-pearl-200 justify-center w-4/5 lg:w-2/5 h-[44px] mb-4 px-2 border-[0px]  border-b-[1px] border-pearl-900 text-pearl-900 text-[16px] focus:border-b-2 pb-[1px] focus:pb-0 outline-none focus:border-orange-700 ease-in-out duration-75 "
          labelClass="text-midnight-500 text-[18px] font-[700] mt-8"
          pClass="my-2 text-midnight-50 text-[14px]"
          func={(e) => setBirthDate(e.target.value)}
        />
        <div className="flex items-center space-x-4 ">
          <Link to="/login">
            <button className="bg-pearl-200 shadow-md text-orange-600 rounded-md p-2 w-[144px] lg:w-[196px] text-xs lg:text-base mt-2 active:bg-slate-200 active:text-orange-800">
              ต้องการเข้าสู่ระบบ ?
            </button>
          </Link>
          <button
            className="bg-orange-600 shadow-md text-pearl-200 rounded-md p-2 w-[100px] lg:w-[144px] text-xs lg:text-base mt-2 active:text-slate-200 active:bg-orange-800"
            onClick={handleSubmit}
          >
            สมัครสมาชิก
          </button>
        </div>
        <footer className="flex flex-col h-full mb-8">
          <div className="text-pearl-800 w-full h-4 text-[12px] my-4">
            ห้ามส่งรหัสผ่านใช้งานจริงใน Kanyok Form
          </div>
          <div className="flex justify-center text-pearl-800 w-full h-4 text-[10px] lg:text-[12px] my-2">
            เนื้อหานี้มิได้ถูกสร้างขึ้นหรือรับรองโดย Kanyok รายงานการละเมิด -
            ข้อกำหนดในการให้บริการ - นโยบายความเป็นส่วนตัว
          </div>
          <div className="flex justify-center text-pearl-400 w-full h-4 text-[12px] lg:text-[20px] mt-1 mb-1 lg:mb-4">
            Kanyok ฟอร์ม
          </div>
        </footer>
      </div>
    </>
  );
}
