import HomeButtonOverlay from "../login/HomeButtonOverlay";
import RegisterForm from "../login/RegisterForm";
import Background from "../utils/Background";
export default function RegisterPage() {
  return (
    <>
          <Background />
      <div className="w-[100vw] h-full pt-4 ">
        <HomeButtonOverlay />
        <div className="flex items-center flex-col">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
