import ScrollContent from "../components/home/ScrollContent";
import Banner from "../components/home/Banner";
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
export default function HomePage() {
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="flex flex-col justify-center pt-20 sm:pt-36  p-0 sm:p-20 ">
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
