import Register from "./Register";
import Login from "./Login";
export default function LoginForm() {
  return (
    <>
      <div className="flex h-128 w-200 shadow-xl bg-white rounded-xl">
        <Register />
        <Login />
      </div>
    </>
  );
}
