import HomeButtonOverlay from "../login/HomeButtonOverlay";
import Background from "../utils/Background";
export default function AboutPage() {
  return (
    <>
      <Background />
      <HomeButtonOverlay />
      <h1 className="text-[288px] h-[calc(100vh-48px)] pb-12 text-black font-black flex justify-center items-center">
      About
      </h1>
    </>
  );
}
