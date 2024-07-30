import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit() {
    try {
      await axios
        .post("http://localhost:5000/api/auth/login", {
          username: username,
          password: password,
          // username.
          // password
          // ( same same )
        })
        .then((res) => {
          console.log(res.data);
          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex flex-col  text-pearl-50   h-screen text-xs sm:text-sm justify-center rounded-3xl mb-2 sm:mb-12">
        <div className="flex items-center flex-col">
          <h1 className="mb-6 sm:mb-12 text-3xl">เข้าสู่ระบบ</h1>
          <input
            className="mb-1 sm:mb-2 rounded-sm w-96 text-xs max-w-64 sm:max-w-none sm:text-sm py-3 px-2 bg-midnight-900"
            type="text"
            name="username"
            placeholder="ชื่อบัญชี"
            id=""
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="mb-1 sm:mb-8 rounded-sm w-96 text-xs max-w-64 sm:max-w-none sm:text-sm py-3 px-2 bg-midnight-900"
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            id=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mb-2 sm:mb-4 hover:bg-orange-700 max-w-64 sm:max-w-none  bg-orange-500 rounded-sm w-96 text-sm px-1 py-[1px] sm:text-sm sm:py-1 sm:px-2"
            type="submit"
            onClick={handleSubmit}
          >
            ล็อคอิน
          </button>
        </div>

        <div className="mb-4 flex flex-row-reverse max-w-64 sm:max-w-none  items-center text-xs sm:text-sm">
          <a
            className="cursor-pointer  underline text-orange-500 hover:text-orange-700"
            type="button"
            onClick={handleClick}
          >
            ลืมรหัสผ่าน
          </a>
        </div>

        <div className="flex flex-row max-w-64 sm:max-w-none justify-center items-center text-xs sm:text-sm">
          <span className="mr-2 text-pearl-500">ไม่มีแอคเคาท์ ?</span>
          <a
            className="cursor-pointer underline text-orange-500 hover:text-orange-700"
            type="button"
            onClick={handleClick}
          >
            สมัครสมาชิก
          </a>
        </div>
      </div>
    </>
  );
}
