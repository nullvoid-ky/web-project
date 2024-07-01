import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// use State สำหรับเปลี่ยนค่าที่เกิดขึ้นทันทีในเว็บ

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit() {
    try {
      await axios
        .post("http://localhost:8080/api/auth/login", {
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
    <div className="flex flex-col justify-center items-center h-full w-full rounded-xl space-y-4  transition ease-in-out duration-200">
      <h1 className=" text-4xl mb-4">เข้าสู่ระบบ</h1>
      {/* <>
      <button onClick={setCount((value) => value + 1)}> </button>
      </> */}
      <input
        className="p-4 border-black border-[1px] rounded-lg w-72 h-8"
        type="text"
        name="username"
        placeholder="ชื่อบัญชี"
        id=""
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="p-4 border-black border-[1px] rounded-lg w-72 h-8"
        type="password"
        name="password"
        placeholder="รหัสผ่าน"
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="flex px-6 py-2 text-white shadow-2xl rounded-lg border-white border-[1px] bg-red-500 hover:bg-red-400 ease-in-out duration-200"
        type="submit"
        onClick={handleSubmit}
      >
        ล็อคอิน
      </button>
    </div>
  );
}
