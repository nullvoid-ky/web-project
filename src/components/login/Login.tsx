export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full rounded-xl space-y-4  transition ease-in-out duration-200">
      <h1 className=" text-4xl mb-4">เข้าสู่ระบบ</h1>
      <input
        className="p-4 border-black border-[1px] rounded-lg w-72 h-8"
        type="text"
        name="username"
        placeholder="ชื่อบัญชี"
        id=""
      />
      <input
        className="p-4 border-black border-[1px] rounded-lg w-72 h-8"
        type="password"
        name="password"
        placeholder="รหัสผ่าน"
        id=""
      />
      <button
        className="flex px-6 py-2 text-white shadow-2xl rounded-lg border-white border-[1px] bg-red-500 hover:bg-red-400 ease-in-out duration-200"
        type="submit"
      >
        ล็อคอิน
      </button>
    </div>
  );
}
