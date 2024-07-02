import RegisterForm from "../login/RegisterForm";
import HomeButtonOverlay from "../login/HomeButtonOverlay";
export default function RegisterPage() {
  return (
    <>
      <div className="w-[100vw] h-full pt-4 bg-orange-50 ">
        <HomeButtonOverlay />
        <div className="flex items-center flex-col">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
