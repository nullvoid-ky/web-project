export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full shadow-red-950 bg-red-400 rounded-xl space-y-10 transition ease-in-out duration-200">
      <h1 className=" text-4xl text-white">ยินดีต้อนรับ</h1>
      <p>
        <p className=" text-red-200 flex justify-center w-72 text-center">
          ผู้ใช้ใหม่กรุณาสมัครสมาชิก
        </p>
        <p className=" text-red-200 flex justify-center w-72 text-center">
          เพื่อเข้าสู่ระบบใช้งาน
        </p>
      </p>
      <button
        className="flex px-6 py-2 text-white shadow-2xl rounded-lg border-white border-[1px] hover:bg-red-500"
        type="button"
      >
        สมัครสมาชิก
      </button>
    </div>
  );
}
