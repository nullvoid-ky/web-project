import LoginForm from "../components/login/LoginForm";
import HomeButtonOverlay from "../components/login/HomeButtonOverlay";
export default function LoginPage() {
  return (
    <div className="w-[100vw] h-[100svh] bg-red-50 flex justify-center items-center flex-col">
      <LoginForm />
      <HomeButtonOverlay />
    </div>
  );
}
