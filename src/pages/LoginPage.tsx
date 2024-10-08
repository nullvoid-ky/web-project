import LoginForm from "../login/LoginForm";
import HomeButtonOverlay from "../login/HomeButtonOverlay";
import Background from "../utils/Background";
export default function LoginPage() {
  return (
    <>
      <div className="">
        <div className="">
          <Background />
        </div>
        <HomeButtonOverlay />
        <div className="w-[100vw] h-[calc(100vh-48px)] flex justify-center items-center flex-col">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
