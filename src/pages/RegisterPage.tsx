import HomeButtonOverlay from "../login/HomeButtonOverlay";
import RegisterForm from "../login/RegisterForm";
import Background from "../utils/Background";
export default function RegisterPage() {
  return (
    <>
          <Background />
          <div className="inset-0 fixed z-[-1] bg-orange-500 bg-opacity-20 w-screen h-screen"></div>
      <div className="h-full pt-4 ">
        <HomeButtonOverlay />
        <div className="flex items-center flex-col">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
