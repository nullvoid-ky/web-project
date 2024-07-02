import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Banner from "../home/Banner";
import ScrollContent from "../home/ScrollContent";
export default function HomePage() {
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className=" min-h-screen flex flex-col justify-center pt-12 sm:pt-36  p-0 sm:p-20 ">
          <Banner />
          <div className="flex p-4 flex-col justify-center sm:-space-y-40">
            <ScrollContent />
            <ScrollContent />
            <ScrollContent />
            <ScrollContent />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
