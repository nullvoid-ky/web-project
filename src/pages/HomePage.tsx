import ScrollContent from "../components/home/ScrollContent";
import Banner from "../components/home/Banner";
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
export default function HomePage() {
  return (
    <div className="">
      <Nav />
      <div className="flex flex-col justify-center pt-12 sm:pt-32 p-0 sm:p-20">
        <Banner />
        <div className="flex p-4 flex-col justify-center ">
          <ScrollContent />
          <ScrollContent />
          <ScrollContent />
          <ScrollContent />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
