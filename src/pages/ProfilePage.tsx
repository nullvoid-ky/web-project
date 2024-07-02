import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import ProfileSetting from "../profile/ProfileSetting";
export default function ProfilePage() {
  return (
    <>
      <div className="">
        <Background />
        <Nav />
        <div className="flex flex-col justify-center pt-20 sm:pt-36 p-4 sm:p-20 ">
          <header>
            <h1 className="text-4xl font-bold text-slate-700 mb-8 sm:mb-16">
              Profile
            </h1>
          </header>
          <ProfileSetting />
        </div>
          <Footer></Footer>
      </div>
    </>
  );
}
