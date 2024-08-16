import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Banner from "../home/Banner";
import ScrollContent from "../home/ScrollContent";
export default function AboutPage() {
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className=" min-h-screen  flex flex-col justify-center pt-12 sm:pt-36  p-0 sm:p-20 ">
          <header>
            <h1 className="text-4xl font-bold text-pearl-50  mb-8 sm:mb-16">
              About
            </h1>
          </header>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
