import RegisterForm from "../components/login/RegisterForm";
import HomeButtonOverlay from "../components/login/HomeButtonOverlay";
export default function RegisterPage() {
  return (
    <>
      <div className="w-[100vw] h-full pt-4 bg-red-50 ">
        <HomeButtonOverlay />
        <div className="flex items-center flex-col">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
