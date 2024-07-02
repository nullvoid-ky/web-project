import LoginForm from "../login/LoginForm";
import HomeButtonOverlay from "../login/HomeButtonOverlay";
export default function LoginPage() {
  return (
    <>
      <div className="bg-orange-50">
        <HomeButtonOverlay />
        <div className="w-[100vw] h-[calc(100dvh-48px)] flex justify-center items-center flex-col">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
