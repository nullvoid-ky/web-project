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
        <div className="xl:h-screen flex flex-col justify-center pt-20 sm:pt-28 p-4 sm:p-20 ">
          <ProfileSetting />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
